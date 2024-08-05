const {parse} = require('date-fns');


const parseDate = (date) => {
    if(date === -1 || date === '-1') {
        date =  date = new Date('1970-01-01');
    }
    return parse(date.toString(), 'dd.MM.yyyy HH:mm:ss', new Date());
}

const dateNow = () => {
    return new Date().toISOString().
    replace(/T/, ' ').
    replace(/\..+/, '')

}

const logMessage = (content, messageWS) => {
    return console.log(dateNow() + ':  ' + content + ' (' + messageWS.Table + '; plant=' + messageWS.Plant + '; ' + messageWS.Message[0].Field + '=' + messageWS.Message[0].Value + ')');
}


module.exports = {
    parseDate,
    dateNow,
    logMessage,
}