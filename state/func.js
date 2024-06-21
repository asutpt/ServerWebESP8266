const {parse} = require('date-fns');


const parseDate = (date) => {
    return parse(date.toString(), 'dd.MM.yyyy HH:mm:ss', new Date());
}

const dateNow = () => {
    return new Date().toISOString().
    replace(/T/, ' ').
    replace(/\..+/, '')
}


module.exports = {
    parseDate,
    dateNow,
}