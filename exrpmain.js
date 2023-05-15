const abi = require('./exrpabi.json');
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
        
            window.fxrpContract = new web3.eth.Contract(abi, contractAddress);
            
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error("MetaMask not detected.");
    }
}


async function mint() {
    const fxrpmontantenwei = document.getElementById("fxrpmontantenwei").value;
    const collateralpourcentage = document.getElementById("collateralpourcentage").value;
    

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);;
    const accounts = await web3.eth.getAccounts()

    await contract.methods.mint(fxrpmontantenwei, collateralpourcentage).send({ from: accounts[0] });
}

async function displayUserData() {
    const addressToCheck = document.getElementById("addressToCheck").value;

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();

    // Appel à la méthode getUserData de votre contrat
    const userData = await contract.methods.getUserData(addressToCheck).call({ from: accounts[0] });

    const fxrpBalance = userData.fxrpBalance;
    const collateral = userData.collateral;
    const userAddress = userData.userAddress;

    document.getElementById("userData").innerHTML = 
        `FXRP Balance: ${web3.utils.fromWei(fxrpBalance, 'ether')}<br>` +
        `Collateral: ${web3.utils.fromWei(collateral, 'ether')}<br>` +
        `User Address: ${userAddress}`;
}



