module.exports = {
    callback: (message, args) => {
        if(message.author.id == "527285622809952256" || message.author.id == "826841451945787412"){
            if(message.channel.id == "945527434655187006"){
                switch (message.content) {
                    case "!spamvcash":
                        message.channel.send("<@762133129209053244>")
                        interval = setInterval (function () {
                        message.channel.send("<@762133129209053244>")
                        .catch(console.error)
                    }, 2000) // send every 2 seconds; don't recommend going below 2 seconds for stability
                    break
                }
            }
            else {
                message.reply(`you can only use that command in ${message.guild.channels.cache.get("945527434655187006").toString()}! (these messages will autodelete)`)
                .then(msg => {
                    setTimeout(() => message.delete(), 6000)
                    setTimeout(() => msg.delete(), 6000)
                  })
                  .catch()
            }
        }

        else {
            message.reply("only mezmer420 and choc can use that command! (these messages will autodelete)")
            .then(msg => {
                setTimeout(() => message.delete(), 6000)
                setTimeout(() => msg.delete(), 6000)
            })
            .catch()
        }
    }
}