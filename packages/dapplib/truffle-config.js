require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember snake good knee outer shallow'; 
let testAccounts = [
"0xc307d4cb621cb336ad6fc40350de9851ba500dfc00082738fca0da86d21fe396",
"0x97b98f229b32a82d5f1dedd99d4dd729fb6e119960de8a3049e20fbbe1452a67",
"0x9ab3f42b8492d81ba5c4ec908aa7f7f591233a50afc1a0a6c2ab2a5627918d14",
"0x7f3a4a8d00020d187484bbdea6f13d08800d978b489bc4faae131b965b7f5c24",
"0xd498330f4384f726e23a1113cf275bf71e5ee34953d1617e74aab5098a167446",
"0x55d7dafdecfadff56f3dc7d75ef0aad6737923bb6c38b156f3827807ba755c73",
"0xb8b249472c695d1cc0f42e82dbe800a17fa6a493c73459dc98ee906e78da7df3",
"0x0aa35b0e148715a8f499ff2de88c356b2e5129fc501ad87eca7353e499629dff",
"0xa4a9b37f684a2e490209bc07e169d550ecd762e4c38de639b0e675c0bc3c86fb",
"0x5d6f362c2d264cd534febd81bad6a0e3991a5b49baef7561bacd533ffda6647a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

