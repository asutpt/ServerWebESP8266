const mysql = require("./db");

module.exports  = async (app) => {
    try{
        await mysql.authenticate().then();
        await mysql.sync().then();
        app.listen(process.env.PORT);
    }
    catch(e){
        return e;
    }
    return `MYSQL подключена, MYSQL синхронизированна, сервер запущен, порт: ${process.env.PORT}`;
}