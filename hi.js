module.exports.config = {
    name: "baka",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "mod lại bởi hậu",
    description: "baka'",
    commandCategory: "general",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hi.jpg")) request("https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/fr/cp0/e15/q65/203019152_882628139004806_501871105322621946_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=58c789&efg=eyJpIjoiYiJ9&_nc_ohc=4PCn44P_1QkAX-ZEI0s&_nc_ht=scontent-hkg4-1.xx&oh=8036088e28953fe3a8446a7a6ce0f06a&oe=60FAD281").pipe(fs.createWriteStream(dirMaterial + "hi.jpg"));
}
module.exports.handleEvent = async ({ event, api, Currencies, Users, args, utils, global, client }) => {
    const fs = require("fs");
    let dt = await api.getUserInfo(event.senderID);
    let name = dt[event.senderID].name;
    var msg = {
        body: `Baka ${name}!`,
        attachment: fs.createReadStream(__dirname + `/noprefix/hi.jpg`)
    }
    if (event.body.toLowerCase() == "baka") {
        return api.sendMessage(msg, event.threadID, event.messageID);
    }
};
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
}
