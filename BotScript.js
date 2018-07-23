const { Client } = require('pg')
const client = new Client()
var roblox = require('roblox-js');
var discord = require('discord.js');
var Dclient = new discord.Client();
var token = "NDcwNzQ0MDE1MzIzNzkxMzgw.Djaxsw.H2oJHEn07GZDT0-WCDRCAonpBxc"
var prefix = "-"
var answers = ['Yes','No','Maybe','I sure hope not!','I dont think so', 'just shut up', 'Why? do you think so.', 'NOOOOOOOOOO!', 'YAAAAAAAAAAASSSSSSS', 'YEP, TOTALY FOOKIN KFC'];
Dclient.login(token)

Dclient.on("ready", () => {
  Dclient.user.setActivity(`BEING CODED BY CATLOVER3319`);
});

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

Dclient.on('message', (message) => {
	
	
	if (message.author.bot) return; // Dont answer yourself.
	var args = message.content.split(/[ ]+/)
	
	
    
    if(isCommand('Ping', message)){
    	message.reply('Pong');
    };
	
	if(isCommand('Help', message)){
	message.reply('prefix: -');
	message.reply('please keep in mind that this bot is wip');
	};
	
	if(isCommand('addpoints', message)){
		message.reply('Im sorry but '+args[1]+" is too powerful to be affected by your peasant ways")
	}
	
	if(isCommand('wtf', message)){
		message.reply('loominarty confirmed')
	}
	
	if(isCommand('spam', message)){
		message.reply(args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1]+args[1])
	}
	 if(isCommand('8ball', message)){
		 if(args[1]){
			 i=Math.floor((Math.random() * 10) + 1)
			 message.reply(answers[i])
		 }
	 }
	 
	 
});