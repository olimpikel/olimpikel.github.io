// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// chargement des bibliotheques
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// chargement des interfaces, fonction a utiliser et variable a rentrer
interface IFTSORegistryProxy {
    function getCurrentPrice(uint256 _assetIndex) external view returns (uint256); } // recuperation des prix via les index

interface IVPToken {
    function delegate(address _to, uint256 _bips) external; 
} //deleguer a et combien en pourcentage a 2 decimal

interface IFtsoRewardManager {
    function claim( address _rewardOwner, address payable _recipient, uint256 _rewardEpoch, bool _wrap ) external  returns (uint256 _rewardAmount);
 }
// fonction pour claim les rewards

// creation du contrat
contract F_XRP is ERC20, Pausable {
    using SafeERC20 for IERC20; // integration de la librairie safeerc20
    using SafeMath for uint256; // integration de la librairie safemath

// initialisation de la base de donnée
    struct UserData {
        uint256 balanceEXRP; // total de fxrp minter
        uint256 collateralEXRP; // total de collateral d'un utilisateur en wsgb
        address userAddressEXRP; // adresse du minteur
    }
    mapping(address => UserData) public userData; // mapping pour les adresses
    mapping(address => bool) registeredAddresses; // verification pour ne pas duppliquer l'adresse dans la base de donnee

    address[] public userAddressesEXRP;

// variables detat
    IERC20 public wSGB;
    IFTSORegistryProxy public ftsoregistryproxy;
    IVPToken public VPToken;
    IFtsoRewardManager public FtsoRewardManager;
    IERC20 public EL;

    uint256 private constant XRP_PRICE_INDEX = 0; // index xrp
    uint256 private constant WSGB_PRICE_INDEX = 11; // inbdex sgb
    uint256 private mintLimit = 10000000000000000000; // Définit la limite à 1000 tokens par défaut

    address public owner;

    address private constant _wSGB = 0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED;
    address private constant _ftsoregistryproxy = 0xEf4c203470553C654B3870f37ce4DE1fA862Dee0;
    address private constant _VPTokenAddress = 0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED;
    address private constant _FtsoRewardManagerAddress = 0x13F7866568dC476cC3522d17C23C35FEDc1431C5;

// non du token et integration des adresses de smart contract
    constructor(IERC20 _EL) ERC20("E-XRP", "E-XRP") Pausable() {
        wSGB = IERC20(_wSGB);
        ftsoregistryproxy = IFTSORegistryProxy(_ftsoregistryproxy);
        VPToken = IVPToken(_VPTokenAddress);
        FtsoRewardManager = IFtsoRewardManager(_FtsoRewardManagerAddress);
        owner = msg.sender;
        EL = _EL;
    }

//implementation de la norme seulement le createur du contrat
    modifier onlyOwner() {
        require(msg.sender == owner, "seulement le createur du contrat");
        _; }

// implemantation de possession de token
modifier DetenteurEL() {
    require(EL.balanceOf(msg.sender) >= 1*10 ** 18 || msg.sender == owner, "Vous devez posseder au moins 1 token pour utiliser cette fonction");
    _;
}
// function pour deleguer
    function deleguer(address _to, uint256 _bips) public onlyOwner {
        VPToken.delegate(_to, _bips);
    }


// function pour les claim les rewards
function claim(
    address _rewardOwner,
    address payable _recipient,
    uint256 _rewardEpoch,
    bool _wrap
)
    external onlyOwner
    returns (uint256 _rewardAmount)
{
    _rewardAmount = FtsoRewardManager.claim(_rewardOwner, _recipient, _rewardEpoch, _wrap);
    return _rewardAmount;
}

    // Fonction pour récupérer les prix des actifs de FTSORegistryProxy
    function recupprix() external view returns (uint256 xrpPrix, uint256 wSGBPrix) {
        xrpPrix = ftsoregistryproxy.getCurrentPrice(XRP_PRICE_INDEX); // Récupération du prix de XRP auprès de FTSORegistryProxy
        wSGBPrix = ftsoregistryproxy.getCurrentPrice(WSGB_PRICE_INDEX); // Récupération du prix de wSGB auprès de FTSORegistryProxy
    }

// fonction qui me calcule le ration xrp/wsgb
function ratioprix() external view returns (uint256 ratioprixxrpwsgb) {
  (uint256 xrpPrix, uint256 wSGBPrix) = this.recupprix(); // recuperation des prix via la fonction recupprix
 ratioprixxrpwsgb = xrpPrix.mul(10**5).div(wSGBPrix); // donne ratio avec 5 decimal
}

function calculerCollateralrequis(uint256 EXRPmontantenwei, uint256 collateralpourcentage) external view returns (uint256 collateralrequisEXRP) {
    (uint256 ratioprixxrpwsgb) = this.ratioprix();

   uint256 collateralrequisEXRP1 = EXRPmontantenwei.mul(collateralpourcentage).div(100);
   collateralrequisEXRP = collateralrequisEXRP1.mul(ratioprixxrpwsgb).div(10**5);

}

// Fonction pour calculer le collateral pour 1 F-XRP grace au ratio moyen, maxi et mini de collateralisation
function calculerCollateral() external view returns (uint256 collateralMoyenEXRP, uint256 collateralMinEXRP, uint256 collateralMaxEXRP) {
    (uint256 ratioprixxrpwsgb) = this.ratioprix(); // recuperer du ratioprix grace a la fonction qui fait appelle a recupprix
    // (xrpPrixWei / wSGBPrixWei) * COLLATERALIZATION_RATIO puis on le remet en unite wei avec 18 decimales
    collateralMoyenEXRP = ratioprixxrpwsgb.mul(3).mul((10 ** 13));
    collateralMinEXRP = ratioprixxrpwsgb.mul(2).mul((10 ** 13));
    collateralMaxEXRP = ratioprixxrpwsgb.mul(4).mul((10 ** 13));
}

function mint(uint256 EXRPmontantenwei, uint256 collateralpourcentage) external DetenteurEL whenNotPaused {
     
    UserData storage user = userData[msg.sender];
    (uint256 ratioprixxrpwsgb) = this.ratioprix(); // recupere le ratio prix actuel
    (uint256 xrpPrix, uint256 wSGBPrix) = this.recupprix(); // recupere les prix aupre de ftsoregistryproxy

    require(xrpPrix > 0 && wSGBPrix > 0, "les prix sont erronne"); // verifie qu'on a bien les recuperer par ftsoregistryproxy

    uint256 calculcollateralrequis = EXRPmontantenwei.mul(ratioprixxrpwsgb).mul(collateralpourcentage);
    uint256 collateralrequis = calculcollateralrequis.div(10**7); // formule mathematique

    require(collateralpourcentage >= 200, "collateral < 200% "); // verifie que l'utilisateur respecte le collateral mini
    require(collateralpourcentage <= 400, "collateral > 400% "); // verifie que l'utilisateur respecte le collateral maxi
    require(userData[msg.sender].balanceEXRP.add(EXRPmontantenwei) <= mintLimit, "limite de mint depasse"); // mise en place d'une limite maximum de token minter

    // recupere le collateral et renvoie les fxrp minter
    wSGB.safeTransferFrom(msg.sender, address(this), collateralrequis);
    _mint(msg.sender, EXRPmontantenwei);

    // Verifie si l'adresse n'est pas déjà enregistrée
    if (!registeredAddresses[msg.sender]) {
        userAddressesEXRP.push(msg.sender); // Ajouter l'adresse à userAddresses
        registeredAddresses[msg.sender] = true; // Marquer l'adresse comme enregistrée
    }

    // Met à jour les donnees utilisateur
    user.userAddressEXRP = msg.sender;
    user.balanceEXRP = user.balanceEXRP.add(EXRPmontantenwei);
    user.collateralEXRP = user.collateralEXRP.add(collateralrequis);
}

// trouve le pourcentage actuel du loan de l'utilisateur
function pourcentagecollateralisationutilisateur(address userAddress) external view returns (uint256) {
UserData storage user = userData[userAddress];

    if (user.balanceEXRP == 0) {
        return 0; //verifie que l'utilisateur a mint
    }
     (uint256 ratioprixxrpwsgb) = this.ratioprix(); // recuperer du ratioprix grace a la fonction qui fait appelle a recupprix
uint256 ratioprixEXRPutil = user.balanceEXRP.mul(ratioprixxrpwsgb);
uint256 collateralizationPercentage = user.collateralEXRP.mul(10**7).div(ratioprixEXRPutil); // rajoute 10**7 pour eviter la division tronquée et avoir un pour centage
    return collateralizationPercentage; // collateralisation en pourcentage d'un utilisateur
}

// fonction qui calcule le ratio utilisateur par rapport aux prix a linstant t
function ratioprixutilisateur() external view returns (uint256 ratioutil) {
    UserData storage user = userData[msg.sender];

    uint256 collateralEXRP = user.collateralEXRP;
    uint256 balanceEXRP = user.balanceEXRP;
    ratioutil = collateralEXRP.mul(10**5).div(balanceEXRP);

    return ratioutil ;
}

// fonction pour burn des fxrp minter
function burn(uint256 montantEXRPenwei) external DetenteurEL {
    UserData storage user = userData[msg.sender];
    require(user.balanceEXRP >= montantEXRPenwei , "Solde F-XRP insuffisant");
    
    // Calculer la valeur en collatéral correspondant au montant de fxrp brûlé
    uint256 collateralAmount1 = montantEXRPenwei.mul(user.collateralEXRP.mul(10**5).div(user.balanceEXRP));
    uint256 collateralAmount = collateralAmount1.div(10**5);


    require(collateralAmount <= user.collateralEXRP, "pas assez de collateral");

    // Transférer le collatéral à l'utilisateur
    wSGB.safeTransfer(msg.sender, collateralAmount);

    user.balanceEXRP = user.balanceEXRP.sub(montantEXRPenwei);
    user.collateralEXRP = user.collateralEXRP.sub(collateralAmount);

    // Vérifier si le solde de fxrp de l'utilisateur est égal à 0
    if (user.balanceEXRP == 0) {
        // Supprimer les données de l'adresse
        delete userData[msg.sender];
    }

    // Brûler les F-XRP
    _burn(msg.sender, montantEXRPenwei);
}

// fonction pour recuperer les tokens bloquer sur le smart contract
function recoverERC20(address tokenAddress, uint256 tokenAmount) public onlyOwner {
    IERC20(tokenAddress).transfer(owner, tokenAmount);
}

// fonction pour que les utilisateurs externe puisse liquider les positions
function liquidationexterrnetotal(address user) external DetenteurEL whenNotPaused {

// charge les valeurs de la base de donnée
    uint256 EXRPcollateralAmount = userData[user].collateralEXRP;
    uint256 EXRPAmount = userData[user].balanceEXRP;

    (uint256 collateralizationPercentage) = this.pourcentagecollateralisationutilisateur(user);

    // Vérifier si la liquidation est possible
    require(collateralizationPercentage < 140, "collateralisation > 140%");
    require(collateralizationPercentage > 105, "collateralisation < 105%");

    // Vérifier si l'utilisateur dispose d'assez de fxrp dans son portefeuille
    uint256 userEXRPbalance = IERC20(address(this)).balanceOf(msg.sender);
    require(userEXRPbalance >= EXRPAmount, "pas assez de fxrp");


    // Transférer les collateraux aux parties concernées
    wSGB.safeTransfer(msg.sender, EXRPcollateralAmount);

    // Brûler les f-xrp utilisés pour clôturer la position
    _burn(msg.sender, EXRPAmount);

        // Mettre à jour les soldes de collateral de l'utilisateur et du contract
   userData[user].collateralEXRP = 0;
    userData[user].balanceEXRP = 0;
// Vérifier si le solde de fxrp de l'utilisateur est égal à 0
if (userData[user].balanceEXRP == 0) {
    // Supprimer les données de l'adresse
    delete userData[user];}
}

function liquidatePositioninterieur(address user) external onlyOwner {
 // charge les valeurs de la base de donnée
    uint256 EXRPcollateralAmount = userData[user].collateralEXRP;
    uint256 EXRPAmount = userData[user].balanceEXRP;

    (uint256 collateralizationPercentage) = this.pourcentagecollateralisationutilisateur(user);

    // Vérifier si la liquidation est possible
    require(collateralizationPercentage < 120, "collateralisation > 120%");

    // Vérifier si l'utilisateur dispose d'assez de fxrp dans son portefeuille
    uint256 userEXRPBalance = IERC20(address(this)).balanceOf(msg.sender);
    require(userEXRPBalance >= EXRPAmount, "pas assez de fxrp");

    // Transférer les collateraux aux parties concernées
    wSGB.safeTransfer(msg.sender, EXRPcollateralAmount);
 
    // Brûler les f-xrp utilisés pour clôturer la position
    _burn(msg.sender, EXRPAmount);

        // Mettre à jour les soldes de collateral de l'utilisateur et du contract
   userData[user].collateralEXRP = 0;
    userData[user].balanceEXRP = 0;
// Vérifier si le solde de fxrp de l'utilisateur est égal à 0
if (userData[user].balanceEXRP == 0) {
    // Supprimer les données de l'adresse
    delete userData[user];}
}

// Fonction pour renvoyer toutes les données de l'utilisateur actuel
function basededonneeutilisateur() external view returns (uint256 balanceEXRP, uint256 collateralEXRP, address userAddressEXRP) {
    UserData storage user = userData[msg.sender];
    return (user.balanceEXRP, user.collateralEXRP, user.userAddressEXRP);
}

// Fonction pour renvoyer toutes les données pour une adresse utilisateur spécifique
function getUserData(address adressearegarder) external DetenteurEL view returns (uint256 balanceEXRP, uint256 collateralEXRP, address userAddressEXRP) {
    UserData storage user = userData[adressearegarder];
    return (user.balanceEXRP, user.collateralEXRP, user.userAddressEXRP);
}

// fonction pour ajouter du collateral sans depasser 400%
function addCollateral(uint256 additionalCollateral) external DetenteurEL whenNotPaused {
    UserData storage user = userData[msg.sender];

    require(additionalCollateral >0, "Tentative de rajouter aucun collateral");

uint256 ratioprixxrpwsgb = this.ratioprix();

    uint256 newCollateral = user.collateralEXRP.add(additionalCollateral);
uint256 ratioprixfxrputil = user.balanceEXRP.mul(ratioprixxrpwsgb);
uint256 collateralizationPercentageuser = newCollateral.mul(10**7).div(ratioprixfxrputil); 

    require(collateralizationPercentageuser <= 400, "Le nouveau collateral fait depasser la limite de 400%");

    // Transférer le collatéral de l'utilisateur au contrat
    wSGB.safeTransferFrom(user.userAddressEXRP, address(this), additionalCollateral);

    // Mettre à jour le collatéral de l'utilisateur

user.collateralEXRP = user.collateralEXRP.add(additionalCollateral);

}
// fonction pour retirer du collateral sans depasser 200%
function exitCollateral(uint256 collateralToWithdraw) external DetenteurEL whenNotPaused {
    UserData storage user = userData[msg.sender];

uint256 ratioprixxrpwsgb = this.ratioprix();

    uint256 newCollateral = user.collateralEXRP.sub(collateralToWithdraw);
uint256 ratioprixfxrputil = user.balanceEXRP.mul(ratioprixxrpwsgb);
uint256 collateralizationPercentageuser = newCollateral.mul(10**7).div(ratioprixfxrputil); 

    require(collateralizationPercentageuser >= 200, "200% est le minimum de collateralisation retirer moin");

    // Transférer le collatéral du contrat à l'utilisateur
wSGB.safeTransfer(user.userAddressEXRP, collateralToWithdraw);

    // Mettre à jour le collatéral de l'utilisateur
    user.collateralEXRP = user.collateralEXRP.sub(collateralToWithdraw);
}

function setMintLimit(uint256 newLimit) external onlyOwner {
    mintLimit = newLimit;
}

// Fonction pour mettre le contrat en pause
    function pause() external onlyOwner {
        _pause();
    }

    // Fonction pour reprendre le contrat après une pause
    function unpause() external onlyOwner {
        _unpause();
    }

function getUndercollateralizedUsers() public view returns (address[] memory) {
    address[] memory undercollateralizedUsers = new address[](userAddressesEXRP.length);
    uint256 count = 0;

    for (uint i = 0; i < userAddressesEXRP.length; i++) {
        address userAddressEXRP = userAddressesEXRP[i];
        UserData storage user = userData[userAddressEXRP];
        uint256 balanceEXRP = user.balanceEXRP;
        
        if (balanceEXRP > 0) {
            uint256 collateralizationPercentage = this.pourcentagecollateralisationutilisateur(userAddressEXRP);

            if (collateralizationPercentage < 140) {
                undercollateralizedUsers[count] = userAddressEXRP;
                count++;
            }
        }
    }

    // Copier le tableau avec la taille correcte
    address[] memory result = new address[](count);
    for (uint i = 0; i < count; i++) {
        result[i] = undercollateralizedUsers[i];
    }

    return result;
}
function getAverageCollateralization() public view returns (uint256, uint256, uint256) {
    uint256 totalCollateralEXRP = 0;
    uint256 totalEXRP = 0;

    for (uint i = 0; i < userAddressesEXRP.length; i++) {
        address userAddressEXRP = userAddressesEXRP[i];
        UserData storage user = userData[userAddressEXRP];

        uint256 collateralEXRP = user.collateralEXRP;
        uint256 balanceEXRP = user.balanceEXRP;

        totalCollateralEXRP += collateralEXRP;
        totalEXRP += balanceEXRP;
    }

    if (totalEXRP == 0) {
        return (totalCollateralEXRP, totalEXRP, 0);
    }

    uint256 ratioprixxrpwsgb = this.ratioprix(); // recuperer du ratioprix grace a la fonction qui fait appelle a recupprix
    uint256 ratioprixfxrputil = totalEXRP.mul(ratioprixxrpwsgb);
    uint256 collateralizationPercentage = totalCollateralEXRP.mul(10**7).div(ratioprixfxrputil); // rajoute 10**7 pour eviter la division tronquée et avoir un pour centage
    return (totalCollateralEXRP, totalEXRP, collateralizationPercentage); // collateralisation en pourcentage d'un utilisateur
}
}
