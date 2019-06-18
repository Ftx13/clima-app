const { argv } = require('./config/yargs');
const { getDireccion } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let ubi = await getDireccion(direccion);
        let dato = await getClima(ubi.lat, ubi.lon);
        return `El clima de ${ubi.dir}, es de ${dato}`;
    } catch (e) {
        return `vaya y salte de un puente`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));;