const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "channelCreate",
    async execute(client, channel){
        const logs = await client.channels.cache.get("955948174894325782")

        const Embed = new MessageEmbed()
        .setTitle("🆕 Channel Created")
        .setDescription(`Channel Name: **#${channel.name}**\nID: **${channel.id}**\nType: **${channel.type}**\nNSFW: **${channel.nsfw}**`)
        .setColor("#9BDBF5")
        .setTimestamp()

        await logs.send({
            embeds: [Embed]
        })
        .catch((err) => {
            return console.log(err)
        })
    }
}