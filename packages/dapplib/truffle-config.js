require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad guess argue bottom tree'; 
let testAccounts = [
"0x7ee30fca11fa406ef6515871a2ca9bc013538974ae87c48327357f2f4791fff8",
"0x21e37dd50af9d935474f5bd851cb98d50eee1706db7b3101bf35bb6d9855f95e",
"0x3682fef999c6c8f88973b887cb77b5f507b8407255a0f9f9b189d24aefb80f6d",
"0x4bfcba3d6938f40031f02b2d61ea0d0bfe3bf7e4f8933abb834aa54427b7dd17",
"0x8e8d0e7c88504cd6edf55c22c9a62aabe1f7243991a22a53ce620b8b6099d167",
"0x9355968d32bc04abd38f308d7ff9c5c4c918da3fd7ad67e8bf8218d7f0ce5085",
"0x17b4c6861cb16124a9dbd00fc25e4892a177e4fd1a77968915f0c10645dbbf53",
"0x8b31c46486bea7b8c3323ed1d76c9b784b3f2396481cd2feeb7206c54d27c329",
"0xdc191176c64195e20398019ce4c2de836f0465668bcdaa5650daa24f013baa2c",
"0xe82dae2490c2cc77496209de1bcc5672935e99ab62d262de15cb75b0cb6455fc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


