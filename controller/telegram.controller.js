const getAxiosInstance = require('./axios.controller')

const  axiosInstance = getAxiosInstance()

async function sendMessage(chat_id,messageText){
    try {
        return await axiosInstance.post("sendMessage",{
            chat_id: chat_id,
            text : messageText,
        })
    } catch (error) {
       console.log(error.message)
    }
    
}


async function handleMessage(messageObj){
    const messageText = messageObj.text || " "

    console.log(`text ${messageText}`)
    
    if(messageText.charAt(0) ==  "/")
    {
        const command = messageText.substr(1)

        switch(command){
           case "start":
            return await sendMessage(messageObj.chat.id,"Hi!, I'm a smaple bot. I cannot do much but i'll have however i can :)")
           case "whatyoudo":
             return await sendMessage(messageObj.chat.id,"Hey there! I'm your friendly Node.js bot! 🤖 I might be simple for now, but I'm here to help and eager to learn. Whether you need a quick chat, some fun facts, or tech assistance, I'm your go-to bot! Let's make your day a little brighter! 😊")
            case "whocreatedyou":
              return await sendMessage(messageObj.chat.id,"I owe my existence to the brilliant mind of Rahul Sharma! 🌟 With over 5 years of development experience, he crafted me to be your helpful companion. If you're curious to learn more about the genius behind my code, check out Rahul's LinkedIn profile: [Rahul Sharma's LinkedIn Profile](https://www.linkedin.com/in/rahul-sharma-8a8733113/) 🚀")
   
            default:
              return await sendMessage(messageObj.chat.id,"Hi!, I don't understand what are you saying :(")  

        }

    } else{
        return await sendMessage(messageObj.chat.id,"Hi!, I'm a smaple bot. I don't understand what are you saying :(")
    }

}

module.exports = {handleMessage}