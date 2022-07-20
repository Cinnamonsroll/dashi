const { EmbedBuilder } = require("discord.js")

module.exports = {
	name: "roleDelete",
	async execute(client, role) {
		const logs = await client.channels.cache.get("955948174894325782")

		const Embed = new EmbedBuilder()
			.setTitle("👋 Role Deleted")
			.setDescription(
				`Role Name: **${role.name}**`
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
