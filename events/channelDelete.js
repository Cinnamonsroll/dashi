const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "channelDelete",
    async execute(client, channel){
        const logs = await client.channels.cache.get("955948174894325782")

        const Embed = new MessageEmbed()
        .setTitle("👋 Channel Deleted")
        .setDescription(`Name: **#${channel.name}**`)
        .setColor("#9BDBF5")
        .setTimestamp()

        logs.send({
            embeds: [Embed]
        })
        .catch((err) => {
            console.log(err)
            return
        })
    }
}