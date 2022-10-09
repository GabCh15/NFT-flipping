const fs = require("fs");
const FormData = require("form-data");
const rfs = require("recursive-fs");
const basePathConverter = require("base-path-converter");
const axios = require('axios');
const pinataSDK = require('@pinata/sdk')
const pinata = pinataSDK("d02b178be76cb2ede7c0", "cb08caedaf33dcad9601b7be51c72a7016a77fbf603def2c02228df18d00570c");

const pinDirectoryToPinata = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const src = "./directory";
    var status = 0;
    try {
        const { dirs, files } = await rfs.read(src);
        let data = new FormData();
        //console.log(files[0]);
        for (const file of files) {
            let saves = []
            let rawData = fs.readFileSync(file);
            let data_from_json = JSON.parse(rawData);
            let dataToSave = {
                token_id: data_from_json.token_id,
                name: data_from_json.name,
                image: data_from_json.image
            }
            saves.push(dataToSave);
            console.log(saves[0]);
            let dataa = JSON.stringify({
                "panataMetadata": {
                    name: dataToSave.name,
                },
                "pinataContent": saves[0],
            })
            console.log("Dataaa...", dataa);
            let link = await pinata.pinJSONToIPFS(saves[0]);
            console.log(link);

            waitTime(3000);
            /*
            data.append(`file`, fs.createReadStream(file), {
                filepath: basePathConverter(src, file),
            });*/
            //console.log("DATA >> ", data);
        }
        //console.log(data);


        //console.log(JSON.parse(response.body));
    } catch (error) {
        console.log(error);
    }
};

function waitTime(millis) {
    let start = Date.now(), currentDate = null;
    do { currentDate = Date.now(); } while (currentDate - start < millis);
}

module.exports = { pinDirectoryToPinata }