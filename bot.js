var discord = require('discord.js');
const { Client } = require('pg');
var Dclient = new discord.Client();
var token = process.env.BOT_TOKEN
var prefix = process.env.PREFIX
Dclient.login(token)

Dclient.on("ready", () => {
  Dclient.user.setActivity(`Prefix: `+process.env.PREFIX);
  console.log(`Ready to serve on ${Dclient.guilds.size} servers, for ${Dclient.users.size} users.`);
});

Dclient.on('guildMemberAdd', member => {
  let guild = member.guild;
  let user = member.user
  console.log(`${user.tag} joined ${guild}`)
});

Dclient.on('guildMemberRemove', member => {
  let guild = member.guild;
  let user = member.user
  console.log(`${user.tag} left ${guild}`)
});

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

function InNum(string){
	return !isNaN(string)
}

Dclient.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Online', message)){
    	message.reply('Affirmative');
    }
	
	if (isCommand('Points', message)){
		var operator = args[1]
		var name = args[2]
		var amount = args[3]
		if(operator == 'add' || operator == 'remove' || operator == 'set'){
		if(name) {
		if(IsNum(amount)){
			
		
		const client = new Client({
			connectionString: process.env.DATABASE_URL,
			ssl: true,
			});

			client.connect();

			client.query('INSERT INTO points VALUES ('+name+', '+amount+') ON DUPLICATE KEY UPDATE'), (err, res) => {
			if (err) throw err;
			for (let row of res.rows) {
				console.log(JSON.stringify(row));
			}
			client.end();
			});
		
		
		} else{
		message.reply('try: -Points <set> <Roblox name> <amount>')
		}
		} else{
		message.reply('try: -Points <set> <Roblox name> <amount>')
		}
		} else {
		message.reply('try: -Points <set> <Roblox name> <amount>')
		}
	}
});