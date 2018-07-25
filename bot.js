const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDcwNzQ0MDE1MzIzNzkxMzgw.DjpdPw.pao9d2f5AKmWUeuGv8Ksxxp_A5k);
