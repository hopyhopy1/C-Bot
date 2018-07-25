var discord = require('discord.js');
var client = new discord.Client();
var token = process.env.BOT_TOKEN
var prefix = process.env.PREFIX
const { Pool, DBClient } = require('pg')
client.login(token)

client.on("ready", () => {
  client.user.setGame(`Making HL3`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let user = member.user
  console.log(`${user.tag} joined ${guild}`)
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  let user = member.user
  console.log(`${user.tag} left ${guild}`)
});

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Online', message)){
    	message.reply('Affirmative');
    }
	
	if (isCommand('Points', message)){
		var operator = args[1]
		var name = args[2]
		if(operator == 'add' or operator == 'remove' or operator == 'set'){
		if(name) {
		
			DBclient.query('SELECT NOW() as now', (err, res) => {
 			 if (err) {
 			   console.log(err.stack)
 			 } else {
			    console.log(res.rows[0])
			  }
			})

			// promise
			DBclient.query('SELECT NOW() as now')
			 .then(res => console.log(res.rows[0]))
			  .catch(e => console.error(e.stack))
		
		}
		} else {
		message.reply('try: -Points <add, remove, set> <Player name or Discord tag>')
		}
	}
});
