const abi = [
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "depositEXRP",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "depositWSGB",
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
				"name": "montantEXRPenwei",
				"type": "uint256"
			}
		],
		"name": "swap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "montantWSGBenwei",
				"type": "uint256"
			}
		],
		"name": "swap1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
		"name": "EXRP",
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
		"inputs": [],
		"name": "getEXRPBalance",
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
		"name": "getWSGBBalance",
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
		"name": "ratioprix1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ratioprixwsgbxrp",
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
			},
			{
				"internalType": "uint256",
				"name": "ethPrix",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "btcPrix",
				"type": "uint256"
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
		"name": "WSGB",
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
]

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

const contractAddress = "0x817FC672e2ccF9E83dFADE217B907f4f9568Ac89";
const contractAddressexrp = "0x9DCda0A1FE4899A58c2692871F48917D3A9Dcfe9";
const contractAddresswsgb = "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED";

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

async function getPrix() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.recupprix().call({ from: accounts[0] });

        // Multiply by 10*13 to convert to Wei
 const xrpprixInWei = BigInt(result.xrpPrix + '0000000000000');
const wsgbprixInWei = BigInt(result.wSGBPrix + '0000000000000');
const ethprixInWei = BigInt(result.ethPrix + '0000000000000');
const btcprixInWei = BigInt(result.btcPrix + '0000000000000');

        // Convert to ETH
        const xrpprixInEth = web3.utils.fromWei(xrpprixInWei.toString(), 'ether');
        const wsgbprixInEth = web3.utils.fromWei(wsgbprixInWei.toString(), 'ether');
	const ethprixInEth = web3.utils.fromWei(ethprixInWei.toString(), 'ether');
        const btcprixInEth = web3.utils.fromWei(btcprixInWei.toString(), 'ether');

        // Use the values
        document.getElementById("result").innerHTML = `XRP Price USD : ${xrpprixInEth}, WSBG Price USD : ${wsgbprixInEth}, ETH Price USD : ${ethprixInEth}, BTC Price USD : ${btcprixInEth}`;

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
function convertEtherToWei() {
    var ether = document.getElementById("ether").value;

    // Vérifier si la valeur est numérique
    if (isNaN(ether)) {
        alert("Veuillez entrer une valeur numérique");
        document.getElementById("ether").value = '';
        document.getElementById("wei").value = '';
    } else {
        var parts = ether.split('.');
        var whole = parts[0];
        var decimal = parts[1] || '';

        if (decimal.length > 18) {
            alert("Veuillez entrer une valeur avec 18 décimales maximum");
            document.getElementById("ether").value = '';
            document.getElementById("wei").value = '';
        } else {
            // Ajouter les zéros nécessaires
            var zerosToAdd = 18 - decimal.length;
            var wei = BigInt(whole + decimal + '0'.repeat(zerosToAdd));
            document.getElementById("wei").value = wei.toString(); // Convertir le BigInt en chaîne avant de l'afficher
        }
    }
}


async function swap() {
    const montantEXRPenwei = document.getElementById("montantEXRPenwei").value;    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts();

    await contract.methods.swap(montantEXRPenwei).send({ from: accounts[0] });
}
async function approve() {
    const montantaapprouve = document.getElementById("montantEXRPenwei").value;    

    const web3 = new Web3(window.ethereum);
    const contract2 = new web3.eth.Contract(abi2, contractAddressexrp);
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
async function swap1() {
    const montantWSGBenwei = document.getElementById("montantWSGBenwei").value;    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts();

    await contract.methods.swap1(montantWSGBenwei).send({ from: accounts[0] });
}
async function approve1() {
    const montantaapprouve = document.getElementById("montantWSGBenwei").value;    

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
async function getWSGBBalance() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result1 = await contract.methods.getWSGBBalance().call({ from: accounts[0] });

        const wsgbsolde = web3.utils.fromWei(result1.toString(), 'ether');

        // Use the values
        document.getElementById("result1").innerHTML = `Solde WSGB de la pool : ${wsgbsolde}`;

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
async function getEXRPBalance() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result2 = await contract.methods.getEXRPBalance().call({ from: accounts[0] });

        const EXRPsolde = web3.utils.fromWei(result2.toString(), 'ether');

        // Use the values
        document.getElementById("result2").innerHTML = `Solde EXRP de la pool : ${EXRPsolde}`;

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
async function ratioprix() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result3 = await contract.methods.ratioprix().call({ from: accounts[0] });

        // Multiply by 10*13 to convert to Wei
 const ratioprixxrpwsgbenwei = BigInt(result3.xrpPrix + '0000000000000');

        // Convert to ETH
        const ratioprixxrpwsgbeneth = web3.utils.fromWei(ratioprixxrpwsgbenwei.toString(), 'ether');

        // Use the values
        document.getElementById("result3").innerHTML = `1 EXRP donne ${ratioprixxrpwsgbeneth} WSGB`;

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
async function ratioprix1() {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const result4 = await contract.methods.ratioprix1().call({ from: accounts[0] });

        // Multiply by 10*13 to convert to Wei
 const ratioprixwsgbxrpenwei = BigInt(result4.xrpPrix + '0000000000000');

        // Convert to ETH
        const ratioprixwsgbxrpeneth = web3.utils.fromWei(ratioprixwsgbxrpenwei.toString(), 'ether');

        // Use the values
        document.getElementById("result3").innerHTML = `1 WSGB donne ${ratioprixwsgbxrpeneth} EXRP`;

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
