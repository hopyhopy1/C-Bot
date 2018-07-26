var discord = require('discord.js');
const { Client } = require('./pg');
var Dclient = new discord.Client();
var token = process.env.BOT_TOKEN
var prefix = process.env.PREFIX
Dclient.login(token)

Dclient.on("ready", () => {
  Dclient.user.setGame(`Making HL3`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
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

Dclient.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Online', message)){
    	message.reply('Affirmative');
    }
	
	if (isCommand('Points', message)){
		var operator = args[1]
		var name = args[2]
		if(operator == 'add' || operator == 'remove' || operator == 'set'){
		if(name) {
		


			const client = new Client({
			  connectionString: process.env.DATABASE_URL,
 			 ssl: true,
			});

			client.connect();

			client.query("INSERT INTO points; VALUES ('george', '@george', 'guest', 0);"), (err, res) => {
			  if (err) throw err;
			  for (let row of res.rows) {
			    console.log(JSON.stringify(row));
			  }
			  client.end();
			};
		
		}
		} else {
		message.reply('try: -Points <add, remove, set> <Player name or Discord tag>')
		}
	}
});
