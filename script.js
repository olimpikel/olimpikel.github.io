// Charger l'ABI du contrat intelligent
const ABI =[
{
	"inputs": [
		{
			"internalType": "address",
			"name": "_tokenAddress",
			"type": "address"
		}
	],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"inputs": [
		{
			"internalType": "uint256",
			"name": "_amount",
			"type": "uint256"
		}
	],
	"name": "deposit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "depositedAmount",
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
	"name": "tokenAddress",
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
	"name": "withdraw",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}
]; // Remplacer [...] avec le contenu de votre ABI

// Créer une instance du contrat
const contractInstance = new ethers.Contract('0x2dCDEfF405D23dA681b26b8B30972B619053b4ab', ABI, ethereum);

// Fonction pour se connecter à MetaMask
async function connectMetaMask() {
	try {
		// Demande d'accès au compte MetaMask
		await ethereum.request({ method: 'eth_requestAccounts' });
		console.log('Connecté à MetaMask !'); // Message de confirmation dans la console
	} catch (error) {
		console.error(error); // Affichage de l'erreur dans la console en cas d'échec
	}
}

// Fonction pour déposer des fonds
async function deposer() {
	const montant = document.getElementById('montantDepot').value;
	await contractInstance.deposit(montant);
}

// Fonction pour retirer des fonds
async function retirer() {
	await contractInstance.withdraw();
}
