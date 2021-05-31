const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log(`準備完了`)
})

client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!');
  }
})

client.login('ODQzNzUyMzQxMDM5MDg3NjU3.YKIbmg.4o2rwODSoTjEpBG0lbC6ip4wGuE');
