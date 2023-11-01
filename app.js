const {handleMessage} = require("./controller/telegram.controller")

async function handler(req,method){
    const {body} = req

    if(body){
        const messageObj = body.message;
        await handleMessage(messageObj)
    }
    return
}

module.exports = {handler}