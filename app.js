import { getWallets } from 'https://unpkg.com/@massalabs/wallet-provider/dist/index.js';

const connectBtn = document.getElementById('connect-wallet');
const walletInfo = document.getElementById('wallet-info');

connectBtn.addEventListener('click', async () => {
  try {
    const wallets = await getWallets({ url: 'http://127.0.0.1:33035' });

    if (!wallets || wallets.length === 0) {
      walletInfo.textContent = 'Aucun portefeuille trouvé.';
      return;
    }

    const wallet = wallets[0];
    const accounts = await wallet.accounts();

    if (accounts.length > 0) {
      walletInfo.textContent = `Adresse : ${accounts[0].address}`;
    } else {
      walletInfo.textContent = 'Aucun compte dans le portefeuille.';
    }
  } catch (error) {
    console.error('Erreur lors de la connexion au portefeuille :', error);
    walletInfo.textContent =
      'Impossible de se connecter. Assurez-vous que Massa Wallet est ouvert.';
  }
});
