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

const contractAddress = "0xCdfFB0B4B8d7a7c440cA5BE6E7c6B0d40cfc927D";

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
async function swap() {
    const montantEXRPenwei = document.getElementById("montantEXRPenwei").value;    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts();

    await contract.methods.swap(montantEXRPenwei).send({ from: accounts[0] });
}
async function swap1() {
    const montantWSGBenwei = document.getElementById("montantWSGBenwei").value;    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts();

    await contract.methods.swap1(montantWSGBenwei).send({ from: accounts[0] });
}
