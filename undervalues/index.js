const { getListings, getListingsFromOpenSea, getIt, repair, repairUnder, getImages } = require("./functions/getListings");

(async ()=>{

    //Primero obtener los listings que se pusieron en venta con getListingsFromOpenSea
    // Retorna un .json que contiene los listings
    await getListingsFromOpenSea();

    // CON getIt sacan los undervalues pasandole el .json de los listings de la funcion anterior
    // Retorna un .json con los undervalue pasarlos al buy
    await getIt();

})();