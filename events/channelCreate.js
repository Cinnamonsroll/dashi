const { EmbedBuilder, ChannelType } = require("discord.js")

module.exports = {
	name: "channelCreate",
	async execute(client, channel) {
		const logs = await client.channels.cache.get("955948174894325782")

		const Embed = new EmbedBuilder()
			.setTitle("🆕 Channel Created")
			.setDescription(
				`Channel Name: **#${channel.name}**\nID: **${channel.id}**\nType: **${channel.type}**\nNSFW: **${channel.nsfw}**`
			)
			.setColor("#9BDBF5")
			.setTimestamp()

		logs.send({
			embeds: [Embed],
		}).catch((err) => {
			console.log(err)
		})
	},
}
