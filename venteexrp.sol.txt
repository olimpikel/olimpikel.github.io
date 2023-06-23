// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface IFTSORegistryProxy {
    function getCurrentPrice(uint256 _assetIndex) external view returns (uint256); 
} 

interface IVPToken {
    function delegate(address _to, uint256 _bips) external; } //deleguer a et combien en pourcentage a 2 decimal

interface IFtsoRewardManager {
    function claim( address _rewardOwner, address payable _recipient, uint256 _rewardEpoch, bool _wrap ) external  returns (uint256 _rewardAmount); }
// fonction pour claim les rewards

contract SimpleSwap {
    using SafeMath for uint256; // integration de la librairie safemath

    IERC20 public WSGB;
    IERC20 public EXRP;
        IERC20 public EL;
    address public owner;
    address constant _WSGB = 0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED;
    address constant _EXRP = 0x9DCda0A1FE4899A58c2692871F48917D3A9Dcfe9;
    address private constant _ftsoregistryproxy = 0xEf4c203470553C654B3870f37ce4DE1fA862Dee0;
    address  constant _EL = 0xB7a5b7D73136BC7E54aD5D629af45Ce90201dD37;
        address private constant _VPTokenAddress = 0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED;
    address private constant _FtsoRewardManagerAddress = 0x13F7866568dC476cC3522d17C23C35FEDc1431C5;

    uint256 constant XRP_PRICE_INDEX = 0; // index xrp
    uint256 constant WSGB_PRICE_INDEX = 11; // index sgb
        uint256 constant ETH_PRICE_INDEX = 9; // index xrp
    uint256 constant BTC_PRICE_INDEX = 8; // index sgb

    IFTSORegistryProxy public ftsoregistryproxy;
        IVPToken public VPToken;
    IFtsoRewardManager public FtsoRewardManager;

    constructor() {
        WSGB = IERC20(_WSGB);
        EXRP = IERC20(_EXRP);
        ftsoregistryproxy = IFTSORegistryProxy(_ftsoregistryproxy);
                VPToken = IVPToken(_VPTokenAddress);
        FtsoRewardManager = IFtsoRewardManager(_FtsoRewardManagerAddress);
        owner = msg.sender;  
                EL = IERC20(_EL);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "seulement le createur du contrat");
        _;
    }

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
    function recupprix() external view returns (uint256 xrpPrix, uint256 wSGBPrix, uint256 ethPrix, uint256 btcPrix ) {
        xrpPrix = ftsoregistryproxy.getCurrentPrice(XRP_PRICE_INDEX); // Récupération du prix de XRP auprès de FTSORegistryProxy
        wSGBPrix = ftsoregistryproxy.getCurrentPrice(WSGB_PRICE_INDEX); // Récupération du prix de wSGB auprès de FTSORegistryProxy
                ethPrix = ftsoregistryproxy.getCurrentPrice(ETH_PRICE_INDEX); // Récupération du prix de XRP auprès de FTSORegistryProxy
        btcPrix = ftsoregistryproxy.getCurrentPrice(BTC_PRICE_INDEX); // Récupération du prix de wSGB auprès de FTSORegistryProxy

    }

// fonction qui me calcule le ration xrp/wsgb
function ratioprix() external view returns (uint256 ratioprixxrpwsgb) {
  (uint256 xrpPrix, uint256 wSGBPrix, uint256 ethPrix, uint256 btcPrix ) = this.recupprix(); // recuperation des prix via la fonction recupprix
 ratioprixxrpwsgb = xrpPrix.mul(10**5).div(wSGBPrix); // donne ratio avec 5 decimal
}


// fonction qui me calcule le ration wsgb/xrp
function ratioprix1() external view returns (uint256 ratioprixwsgbxrp) {
  (uint256 xrpPrix, uint256 wSGBPrix, uint256 ethPrix, uint256 btcPrix ) = this.recupprix(); // recuperation des prix via la fonction recupprix
 ratioprixwsgbxrp = wSGBPrix.mul(10**5).div(xrpPrix); // donne ratio avec 5 decimal
}

    function swap(uint256 montantEXRPenwei) public DetenteurEL {
         (uint256 ratioprixxrpwsgb) = this.ratioprix(); // recupere le ratio prix actuel
    (uint256 xrpPrix, uint256 wSGBPrix, uint256 ethPrix, uint256 btcPrix ) = this.recupprix(); // recupere les prix aupre de ftsoregistryproxy

    require(xrpPrix > 0 && wSGBPrix > 0, "les prix sont erronne"); // verifie qu'on a bien les recuperer par ftsoregistryproxy
        // Transfer the tokens from the sender to this contract

uint256 calculmontantWSGBenwei = montantEXRPenwei.mul(ratioprixxrpwsgb);
    uint256 montantWSGBenwei = calculmontantWSGBenwei.div(10**5); // formule mathematique

        require(EXRP.transferFrom(msg.sender, address(this), montantEXRPenwei), "Transfer EXRP failed");

        // Check the balance of this contract
        uint256 balanceWSGB = WSGB.balanceOf(address(this));
        require(balanceWSGB >= montantWSGBenwei, "Insufficient pool balance");

        // Transfer the tokens from this contract to the sender
        require(WSGB.transfer(msg.sender, montantWSGBenwei), "Transfer WSGB failed");
    }
    // fonction pour recuperer les tokens bloquer sur le smart contract
function recoverERC20(address tokenAddress, uint256 tokenAmount) public onlyOwner {
    IERC20(tokenAddress).transfer(owner, tokenAmount);
}
function depositWSGB(uint256 amount) public onlyOwner {
    require(WSGB.transferFrom(msg.sender, address(this), amount), "Transfer WSGB failed");
}
function depositEXRP(uint256 amount) public onlyOwner {
    require(EXRP.transferFrom(msg.sender, address(this), amount), "Transfer EXRP failed");
}


function swap1(uint256 montantWSGBenwei) public DetenteurEL {
         (uint256 ratioprixwsgbxrp) = this.ratioprix1(); // recupere le ratio prix actuel
    (uint256 xrpPrix, uint256 wSGBPrix, uint256 ethPrix, uint256 btcPrix ) = this.recupprix(); // recupere les prix aupre de ftsoregistryproxy

    require(xrpPrix > 0 && wSGBPrix > 0, "les prix sont erronne"); // verifie qu'on a bien les recuperer par ftsoregistryproxy
        // Transfer the tokens from the sender to this contract

uint256 calculmontantEXRPenwei = montantWSGBenwei.mul(ratioprixwsgbxrp);
uint256 calculmontantEXRPenwei1 = calculmontantEXRPenwei.mul(999).div(1000);
    uint256 montantEXRPenwei = calculmontantEXRPenwei1.div(10**5); // formule mathematique

        require(WSGB.transferFrom(msg.sender, address(this), montantWSGBenwei), "Transfer EXRP failed");

        // Check the balance of this contract
        uint256 balanceEXRP = EXRP.balanceOf(address(this));
        require(balanceEXRP >= montantEXRPenwei, "Insufficient pool balance");

        // Transfer the tokens from this contract to the sender
        require(EXRP.transfer(msg.sender, montantEXRPenwei), "Transfer WSGB failed");
    }
    // Récupère le solde de WSGB dans le pool (ce contrat)
function getWSGBBalance() public view returns (uint256) {
    return WSGB.balanceOf(address(this));
}

// Récupère le solde de EXRP dans le pool (ce contrat)
function getEXRPBalance() public view returns (uint256) {
    return EXRP.balanceOf(address(this));
}

}

