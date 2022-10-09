const listings = require("../listings_r.json");
const images = require("../listings_testnet_2.json");
const fs = require("fs");

(async ()=>{
    for (const iterator of listings) {
        const json_data = JSON.stringify(iterator);
        fs.writeFile(`${iterator.token_id}`, json_data, 'utf-8', () => {
            console.log("COMPLETED");
        })
    }
})();