const {ethers} = require('ethers')
const { Seaport } = require('@opensea/seaport-js')
const { ItemType } = require('@opensea/seaport-js/lib/constants')
var axios = require('axios')

const rpc_url = 'https://eth-goerli.gateway.pokt.network/v1/lb/8f80ebf4ce3c7a00e31c3ea7'
const admin_private_key =
    '36661a03e0073f71a28785b014513d9fccb3b5cac2d8d09a3bb2b8688197eba4'
const admin_public_key = '0xc8B925e4B8970893Ff0df5CaD2f55DA40CB1BC3F'
const signer = new ethers.Wallet(admin_private_key)
const nft_contract_address = '0x6e0118c38B794c81A70995cf088f0978683565C3'

async function useConnectWeb3Admin() {
    const ethersWeb3Provider = ethers.providers.getDefaultProvider(rpc_url)

    const wallet = new ethers.Wallet(admin_private_key, ethersWeb3Provider)
    const seaport = new Seaport(wallet)

    const { executeAllActions } = await seaport.createOrder(
        {
            endTime: parseInt((Date.now() + 60000 * 60) / 1000 + ''),
            offer: [
                {
                    itemType: ItemType.ERC721,
                    token: nft_contract_address,
                    identifier: '2',
                },
            ],
            consideration: [
                {
                    amount: ethers.utils
                        .parseEther(`${0.001 * 0.975}`)
                        .toString(),
                    recipient: admin_public_key,
                },
                {
                    amount: ethers.utils
                        .parseEther(`${0.001 * 0.025}`)
                        .toString(),
                    recipient: '0x0000a26b00c1F0DF003000390027140000fAa719',
                },
            ],
            conduitKey:
                '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
        },
        admin_public_key
    )
    const order = await executeAllActions()
    console.log(JSON.stringify(order))
    var config = {
        method: 'post',
        url:
            'https://testnets-api.opensea.io/v2/orders/goerli/seaport/listings',
        headers: {
            'Content-Type': 'application/json',
        },
        data: order,
    }
    try {
        await axios(config)
        console.log(
            `https://testnets.opensea.io/es/assets/goerli/${nft_contract_address}/0`
        )
    } catch (err) {
        console.log(err)
    } 

    return { ethersWeb3Provider }
}

useConnectWeb3Admin()
