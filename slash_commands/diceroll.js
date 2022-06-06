const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports.data = new SlashCommandBuilder()
.setName("diceroll")
.setDescription("Roll a dice")
.addIntegerOption(option => option
    .setName("dice")
    .setRequired(false)
    .setDescription("The number of dice to roll; skip to roll one"))

module.exports.run = (client, interaction, options) => {
    let dice = options.getInteger("dice") || 1

    const roll1 = Math.floor(Math.random() * 5) + 1
    const roll2 = Math.floor(Math.random() * 5) + 1
    const roll3 = Math.floor(Math.random() * 5) + 1
    const roll4 = Math.floor(Math.random() * 5) + 1
    const roll5 = Math.floor(Math.random() * 5) + 1

    if(dice == 1){
        interaction.editReply({
            content: `Landed on... **${roll1}**`
        })
    }

    else if(dice == 2){
        interaction.editReply({
            content: `Die 1 landed on **${roll1}**... die 2 landed on **${roll2}**`
        })
    }

    else if(dice == 3){
        interaction.editReply({
            content: `Die 1 is **${roll1}**, die 2 is **${roll2}**, die 3 is **${roll3}**`
        })
    }

    else if(dice == 4){
        interaction.editReply({
            content: `Die 1 is **${roll1}**, die 2 is **${roll2}**, die 3 is **${roll3}**, die 4 is **${roll4}**`
        })
    }

    else if(dice == 5){
        interaction.editReply({
            content: `Die 1 is **${roll1}**, die 2 is **${roll2}**, die 3 is **${roll3}**, die 4 is **${roll4}**, die 5 is **${roll5}**`
        })
    }
}