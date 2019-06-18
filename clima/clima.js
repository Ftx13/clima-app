const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=a8fd1180126170a6b156eafdc4a90302&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}