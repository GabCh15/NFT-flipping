const Web3 = require('web3')
const opensea = require('opensea-js')
const HDWalletProvider = require("@truffle/hdwallet-provider");

//mnemonic es la clave privada del address que va comprar
const provider = new HDWalletProvider({
    mnemonic: "script canvas pilot intact account next indoor blue song basket supreme tray",
    providerOrUrl: "https://eth-goerli.gateway.pokt.network/v1/lb/8f80ebf4ce3c7a00e31c3ea7",
    addressIndex: 0
});

const seaport = new opensea.OpenSeaPort(provider, {
    networkName: opensea.Network.Goerli
})

const call = async () => {
    // esta cuenta es la que va comprar 
    const accountAddress = "0x2a1D8eFCA516EDd3ab28A62D7eC31c9e8673C6b3";

    const order = await seaport.api.getOrder({
        side: "ask",
        assetContractAddress: "0x6e0118c38B794c81A70995cf088f0978683565C3",
        tokenId: "2",
    })
    const offer = await seaport.fulfillOrder({ order, accountAddress })
    console.log(offer)
}

call()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });