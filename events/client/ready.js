const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is online now!`)
    console.log(`Created by iZeroDeaths!`)
    setInterval(() => bot.user.setActivity(`Created by iZeroDeaths!`, { type: "WATCHING"}),5000)
};
