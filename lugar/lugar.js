const axios = require('axios');

const getDireccion = async(direccion) => {

    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '491a1c7222msh93b399168104966p1e0b56jsnf6aeae001b55' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados - ${ direccion } -`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        dir,
        lat,
        lon
    }
}
module.exports = {
    getDireccion
}