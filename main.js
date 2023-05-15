const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "additionalCollateral",
				"type": "uint256"
			}
		],
		"name": "addCollateral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approveToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "fxrpAmount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_rewardOwner",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_rewardEpoch",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_wrap",
				"type": "bool"
			}
		],
		"name": "claim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rewardAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_bips",
				"type": "uint256"
			}
		],
		"name": "deleguer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "collateralToWithdraw",
				"type": "uint256"
			}
		],
		"name": "exitCollateral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "liquidatePositioninterieur",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "liquidationexterrnetotal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "fxrpmontantenwei",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralpourcentage",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "recoverERC20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newLimit",
				"type": "uint256"
			}
		],
		"name": "setMintLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_EL",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "calculerCollateral",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "collateralMoyen",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralMax",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "EL",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ftsoregistryproxy",
		"outputs": [
			{
				"internalType": "contract IFTSORegistryProxy",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FtsoRewardManager",
		"outputs": [
			{
				"internalType": "contract IFtsoRewardManager",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getCollateralizationPercentage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentUserData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "fxrpBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateral",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUndercollateralizedUsers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adressearegarder",
				"type": "address"
			}
		],
		"name": "getUserData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "fxrpBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateral",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ratioprix",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ratioprixxrpwsgb",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ratioprixutilisateur",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ratioutil",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "recupprix",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "xrpPrix",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "wSGBPrix",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "fxrpBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateral",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "VPToken",
		"outputs": [
			{
				"internalType": "contract IVPToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wSGB",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Remplacez [...] par votre ABI
const contractAddress = "0x0B742279F379aBfBb8892f1954565b9Ec04503b9"; // Remplacez 0x... par l'adresse de votre contrat

let web3;

async function connect() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            const balance = await web3.eth.getBalance(accounts[0]);
            document.getElementById("balance").innerHTML = "Balance: " + balance / 1e18 + " SGB";
            // Initialiser les contrats ici
            window.userData = new web3.eth.Contract(abi, contractAddress);
            window.yourContract = new web3.eth.Contract(abi, contractAddress);
            window.wSGB = new web3.eth.Contract(abi, contractAddress);
            window.ftsoregistryproxy = new web3.eth.Contract(abi, contractAddress);
            window.fxrpContract = new web3.eth.Contract(abi, contractAddress);
            // Remplacez 'abi' et 'contractAddress' par les bonnes valeurs pour chaque contrat.
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error("MetaMask not detected.");
    }
}
// Le reste du code reste le même

// Assurez-vous d'avoir instancié web3 et le contrat ftsoregistryproxy correctement
// Par exemple :
// const web3 = new Web3(window.ethereum);
// const ftsoregistryproxy = new web3.eth.Contract(abi, contractAddress);

async function recupprix() {
    try {
        const xrpPrix = await ftsoregistryproxy.methods.getCurrentPrice(XRP_PRICE_INDEX).call();
        const wSGBPrix = await ftsoregistryproxy.methods.getCurrentPrice(WSGB_PRICE_INDEX).call();
        return { xrpPrix, wSGBPrix };
    } catch (error) {
        console.error(error);
    }
}

async function ratioprix() {
    try {
        const { xrpPrix, wSGBPrix } = await recupprix();
        const ratioprixxrpwsgb = xrpPrix * 10**5 / wSGBPrix;
        return ratioprixxrpwsgb;
    } catch (error) {
        console.error(error);
    }
}
async function calculerCollateral() {
    try {
        const ratioprixxrpwsgb = await ratioprix();
        const collateralMoyen = ratioprixxrpwsgb * 3 * (10 ** 13);
        const collateralMin = ratioprixxrpwsgb * 2 * (10 ** 13);
        const collateralMax = ratioprixxrpwsgb * 4 * (10 ** 13);
        return { collateralMoyen, collateralMin, collateralMax };
    } catch (error) {
        console.error(error);
    }
}

async function mint(fxrpmontantenwei, collateralpourcentage) {
    try {
        const userAddress = web3.eth.accounts[0];  // get current user address
        const ratioprixxrpwsgb = await ratioprix();
        const { xrpPrix, wSGBPrix } = await recupprix();

        if (xrpPrix <= 0 || wSGBPrix <= 0) throw new Error("les prix sont erronne");

        const calculcollateralrequis = fxrpmontantenwei * ratioprixxrpwsgb * collateralpourcentage;
        const collateralrequis = calculcollateralrequis / (10 ** 7);

        if (collateralpourcentage < 200) throw new Error("le collateral est insuffisant");
        if (collateralpourcentage > 400) throw new Error("le collateral est trop important");

        // Supposons que userData soit un contrat avec une méthode fxrpBalance
        const userBalance = await userData.methods.fxrpBalance(userAddress).call();
        const mintLimit = 10000;  // Supposons que la limite soit 10000, à remplacer par la valeur correcte

        if (userBalance + fxrpmontantenwei > mintLimit) throw new Error("Mint limit depasse");

        // Supposons que wSGB et yourContract soient les instances de contrat correctes
        await wSGB.methods.safeTransferFrom(userAddress, yourContract.options.address, collateralrequis).send({ from: userAddress });
        await yourContract.methods.mint(userAddress, fxrpmontantenwei).send({ from: userAddress });

        // Met à jour les données utilisateur
        const newBalance = userBalance + fxrpmontantenwei;
        const newCollateral = collateralrequis;  // Supposons que le nouvel utilisateur ait le collateral requis

        // Supposons que setUser soit une méthode du contrat userData
        await userData.methods.setUser(userAddress, newBalance, newCollateral).send({ from: userAddress });
    } catch (error) {
        console.error(error);
    }
}
async function burn(fxrpAmount) {
    try {
        const userAddress = web3.eth.accounts[0];  // get current user address

        // Supposons que userData soit un contrat avec une méthode fxrpBalance et une méthode collateral
        const userFxrpBalance = await userData.methods.fxrpBalance(userAddress).call();
        const userCollateral = await userData.methods.collateral(userAddress).call();

        if (userFxrpBalance < fxrpAmount) throw new Error("Solde F-XRP insuffisant");

        const collateralAmount1 = fxrpAmount * userCollateral * 10**5 / userFxrpBalance;
        const collateralAmount = collateralAmount1 / 10**5;

        if (collateralAmount > userCollateral) throw new Error("l'utilisateur n'a pas assez de collateral");

        // Supposons que wSGB et yourContract soient les instances de contrat correctes
        await wSGB.methods.safeTransfer(userAddress, collateralAmount).send({ from: userAddress });

        const newFxrpBalance = userFxrpBalance - fxrpAmount;
        const newCollateral = userCollateral - collateralAmount;

        // Supposons que setUser soit une méthode du contrat userData
        if (newFxrpBalance === 0) {
            // Supposons que removeUser soit une méthode du contrat userData
            await userData.methods.removeUser(userAddress).send({ from: userAddress });
        } else {
            await userData.methods.setUser(userAddress, newFxrpBalance, newCollateral).send({ from: userAddress });
        }

        // Brûler les F-XRP
        await yourContract.methods.burn(userAddress, fxrpAmount).send({ from: userAddress });
    } catch (error) {
        console.error(error);
    }
}
async function liquidationexterrnetotal(userAddress) {
    try {
        const contractAddress = web3.eth.accounts[0];  // get current contract address

        // Supposons que userData soit un contrat avec une méthode fxrpBalance et une méthode collateral
        const collateralAmount = await userData.methods.collateral(userAddress).call();
        const fxrpAmount = await userData.methods.fxrpBalance(userAddress).call();

        const collateralizationPercentage = await getCollateralizationPercentage(userAddress);

        if (collateralizationPercentage >= 150) throw new Error("Liquidation impossible : le taux de collateralisation est superieur a 140%");
        if (collateralizationPercentage <= 120) throw new Error("Liquidation impossible : le taux de collateralisation est inferieur a 113% la liquidation n'est plus rentable");

        // Supposons que fxrpContract soit le contrat qui gère les tokens fxrp
        const userFxrpBalance = await fxrpContract.methods.balanceOf(contractAddress).call();

        if (userFxrpBalance < fxrpAmount) throw new Error("Liquidation impossible : vous n'avez pas assez de fxrp dans votre portefeuille");

        const closerCollateraldistrib = collateralAmount * 95 / 100;
        const contractCollateraldistrib = collateralAmount * 5 / 100;

        // Supposons que wSGB soit l'instance de contrat correcte
        await wSGB.methods.safeTransfer(contractAddress, closerCollateraldistrib).send({ from: contractAddress });
        await wSGB.methods.safeTransfer(contractAddress, contractCollateraldistrib).send({ from: contractAddress });

        // Brûler les F-XRP
        await fxrpContract.methods.burn(contractAddress, fxrpAmount).send({ from: contractAddress });

        // Supposons que setUser soit une méthode du contrat userData
        await userData.methods.setUser(userAddress, 0, 0).send({ from: contractAddress });

        const newUserFxrpBalance = await userData.methods.fxrpBalance(userAddress).call();

        if (newUserFxrpBalance === 0) {
            // Supposons que removeUser soit une méthode du contrat userData
            await userData.methods.removeUser(userAddress).send({ from: contractAddress });
        }
    } catch (error) {
        console.error(error);
    }
}
async function getCurrentUserData() {
    try {
        const contractAddress = web3.eth.accounts[0];  // get current contract address

        // Assuming userData is a contract with fxrpBalance, collateral and userAddress methods
        const fxrpBalance = await userData.methods.fxrpBalance(contractAddress).call();
        const collateral = await userData.methods.collateral(contractAddress).call();
        const userAddress = await userData.methods.userAddress(contractAddress).call();

        return { fxrpBalance, collateral, userAddress };
    } catch (error) {
        console.error(error);
    }
}

async function getUserData(addressToCheck) {
    try {
        const fxrpBalance = await userData.methods.fxrpBalance(addressToCheck).call();
        const collateral = await userData.methods.collateral(addressToCheck).call();
        const userAddress = await userData.methods.userAddress(addressToCheck).call();

        return { fxrpBalance, collateral, userAddress };
    } catch (error) {
        console.error(error);
    }
}

async function addCollateral(additionalCollateral) {
    try {
        const contractAddress = web3.eth.accounts[0];  // get current contract address

        if (additionalCollateral <= 0) throw new Error("Tentative de rajouter aucun collateral");

        const currentRatio = await ratioprix();
        const user = await getCurrentUserData();

        const newCollateral = user.collateral + additionalCollateral;
        const currentPriceRatio = user.fxrpBalance * currentRatio;
        const collateralizationPercentageuser = newCollateral * Math.pow(10, 7) / currentPriceRatio;

        if (collateralizationPercentageuser > 400) throw new Error("Le nouveau collateral depasse le seuil de collateralisation maximum");

        // Assuming wSGB is a contract with safeTransferFrom method
        await wSGB.methods.safeTransferFrom(user.userAddress, contractAddress, additionalCollateral).send({ from: contractAddress });

        // Assuming setCollateral is a method in userData contract
        await userData.methods.setCollateral(user.userAddress, newCollateral).send({ from: contractAddress });

    } catch (error) {
        console.error(error);
    }
}

async function exitCollateral(collateralToWithdraw) {
    try {
        const contractAddress = web3.eth.accounts[0];  // get current contract address

        const user = await getCurrentUserData();

        if (collateralToWithdraw > user.collateral) throw new Error("Tentative de retrait dun montant superieur au collateral disponible");

        const currentRatio = await ratioprix();

        const newCollateral = user.collateral - collateralToWithdraw;
        const currentPriceRatio = user.fxrpBalance * currentRatio;
        const collateralizationPercentageuser = newCollateral * Math.pow(10, 7) / currentPriceRatio;

        if (collateralizationPercentageuser < 200) throw new Error("Le nouveau collateral ne depasse le seuil de collateralisation minimum");

        // Assuming wSGB is a contract with safeTransfer method
        await wSGB.methods.safeTransfer(user.userAddress, collateralToWithdraw).send({ from: contractAddress });

        // Assuming setCollateral is a method in userData contract
        await userData.methods.setCollateral(user.userAddress, newCollateral).send({ from: contractAddress });

    } catch (error) {
        console.error(error);
    }
}
async function unpause() {
    try {
        const contractAddress = web3.eth.accounts[0];  // get current contract address

        // Assuming _unpause is a method in the contract
        await contract.methods._unpause().send({ from: contractAddress });

    } catch (error) {
        console.error(error);
    }
}

async function getUndercollateralizedUsers() {
    try {
        const undercollateralizedUsers = [];
        
        const userAddresses = await contract.methods.getUserAddresses().call();  // Assuming getUserAddresses is a method in the contract

        for (let i = 0; i < userAddresses.length; i++) {
            const userAddress = userAddresses[i];
            const user = await getUserData(userAddress);
            const fxrpBalance = user.fxrpBalance;

            if (fxrpBalance > 0) {
                const collateralizationPercentage = await contract.methods.getCollateralizationPercentage(userAddress).call();  // Assuming getCollateralizationPercentage is a method in the contract

                if (collateralizationPercentage < 150) {
                    undercollateralizedUsers.push(userAddress);
                }
            }
        }

        return undercollateralizedUsers;
    } catch (error) {
        console.error(error);
    }
}

async function displayUserData(addressToCheck) {
    try {
        const userData = await getUserData(addressToCheck);
        document.getElementById("userDataDisplay").innerHTML = 
            `FXRP Balance: ${userData.fxrpBalance}<br>` +
            `Collateral: ${userData.collateral}<br>` +
            `User Address: ${userData.userAddress}`;
    } catch (error) {
        console.error(error);
    }
}
