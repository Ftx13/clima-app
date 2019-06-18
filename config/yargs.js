const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la cuidad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}