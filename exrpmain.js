const abi = [
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
		"name": "basededonneeutilisateur",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balanceEXRP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralEXRP",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddressEXRP",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "montantEXRPenwei",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "calculerCollateral",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "collateralMoyenEXRP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralMinEXRP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralMaxEXRP",
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
				"name": "EXRPmontantenwei",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralpourcentage",
				"type": "uint256"
			}
		],
		"name": "calculerCollateralrequis",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "collateralrequisEXRP",
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
		"name": "getAverageCollateralization",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
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
				"name": "balanceEXRP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralEXRP",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddressEXRP",
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
				"name": "EXRPmontantenwei",
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
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "pourcentagecollateralisationutilisateur",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userAddressesEXRP",
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
				"name": "balanceEXRP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collateralEXRP",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddressEXRP",
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
];

const abi2 = [{
  "constant": false,
  "inputs": [
    {
      "name": "_spender",
      "type": "address"
    },
    {
      "name": "_value",
      "type": "uint256"
    }
  ],
  "name": "approve",
  "outputs": [
    {
      "name": "",
      "type": "bool"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}]


const contractAddress = "0x9DCda0A1FE4899A58c2692871F48917D3A9Dcfe9";
const contractAddresswdsgb = "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED";


let web3;

async function connect() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            const balance = await web3.eth.getBalance(accounts[0]);
            document.getElementById("balance").innerHTML = "Balance: " + balance / 1e18 + " SGB";
        
            window.fxrpContract = new web3.eth.Contract(abi, contractAddress);
            
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error("MetaMask not detected.");
    }
}

async function mint() {
    const EXRPmontantenwei = document.getElementById("EXRPmontantenwei").value;
    const collateralpourcentage = document.getElementById("collateralpourcentage").value;
    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();

    await contract.methods.mint(EXRPmontantenwei, collateralpourcentage).send({ from: accounts[0] });
}

async function displayUserData() {
    const addressToCheck = document.getElementById("addressToCheck").value;

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();

    // Appel à la méthode getUserData de votre contrat
    const userData = await contract.methods.getUserData(addressToCheck).call({ from: accounts[0] });

    const balanceEXRP = userData.balanceEXRP;
    const collateralEXRP = userData.collateralEXRP;
    const userAddressEXRP = userData.userAddressEXRP;

    document.getElementById("userData").innerHTML = 
        `EXRP Balance: ${web3.utils.fromWei(balanceEXRP, 'ether')}<br>` +
        `WSGB Collateral: ${web3.utils.fromWei(collateralEXRP, 'ether')}<br>` +
        `User Address: ${userAddressEXRP}`;
}

async function getPrix() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result1 = await contract.methods.recupprix().call({ from: accounts[0] });

        // Multiply by 10*13 to convert to Wei
   const xrpprixInWei = BigInt(result1.xrpPrix + '0000000000000');
const wsgbprixInWei = BigInt(result1.wSGBPrix + '0000000000000');

        // Convert to ETH
        const xrpprixInEth = web3.utils.fromWei(xrpprixInWei.toString(), 'ether');
        const wsgbprixInEth = web3.utils.fromWei(wsgbprixInWei.toString(), 'ether');

        // Use the values
        document.getElementById("result1").innerHTML = `XRP Price : ${xrpprixInEth}, WSBG Price : ${wsgbprixInEth}`;

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
async function burn() {
    const montantEXRPenwei = document.getElementById("montantEXRPenwei").value;    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts();

    await contract.methods.burn(montantEXRPenwei).send({ from: accounts[0] });
}
async function addCollateral() {
    const additionalCollateral = document.getElementById("additionalCollateral").value;    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts();

    await contract.methods.addCollateral(additionalCollateral).send({ from: accounts[0] });
}
async function exitCollateral() {
    const collateralToWithdraw = document.getElementById("collateralToWithdraw").value;    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts();

    await contract.methods.exitCollateral(collateralToWithdraw).send({ from: accounts[0] });
}
async function pourcentagecollateralisationutilisateur() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
	    const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.pourcentagecollateralisationutilisateur(accounts[0]).call();
        document.getElementById("result").innerHTML = result;
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
	async function getUndercollateralizedUsers() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
	    const accounts = await web3.eth.getAccounts();
      const result2 = await contract.methods.getUndercollateralizedUsers().call({ from: accounts[0] });
        document.getElementById("result2").innerHTML = result2;
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

async function getAverageCollateralization() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result3 = await contract.methods.getAverageCollateralization().call({ from: accounts[0] });
	    	           const totalCollateralEXRP = web3.utils.fromWei(result3[0].toString(), 'ether');
        const totalEXRP = web3.utils.fromWei(result3[1].toString(), 'ether');
        document.getElementById("totalCollateralEXRP").innerHTML = totalCollateralEXRP ;
        document.getElementById("totalEXRP").innerHTML = totalEXRP;
        document.getElementById("collateralizationPercentage").innerHTML = result3[2];

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

async function calculerCollateral() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result4 = await contract.methods.calculerCollateral().call({ from: accounts[0] });
	    
	    
	           const collateralMoyenEXRP = web3.utils.fromWei(result4[0].toString(), 'ether');
        const collateralMinEXRP = web3.utils.fromWei(result4[1].toString(), 'ether');
	    const collateralMaxEXRP = web3.utils.fromWei(result4[2].toString(), 'ether');
        document.getElementById("collateralMoyenEXRP").innerHTML = collateralMoyenEXRP;
        document.getElementById("collateralMinEXRP").innerHTML = collateralMinEXRP;
        document.getElementById("collateralMaxEXRP").innerHTML = collateralMaxEXRP;
	    
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
async function approve() {
    const montantaapprouve = document.getElementById("montantaapprouve").value;    

    const web3 = new Web3(window.ethereum);
    const contract2 = new web3.eth.Contract(abi2, contractAddresswsgb);
    const accounts = await web3.eth.getAccounts();
    
    contract2.methods.approve(contractAddress, montantaapprouve).send({ from: accounts[0] })
        .on('transactionHash', function(hash){
            console.log('transactionHash', hash);
        })
        .on('receipt', function(receipt){
            console.log('receipt', receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log('confirmation', confirmationNumber);
        })
        .on('error', console.error);
}


