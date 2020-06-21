const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//الاوامر//
client.on("message", message => {
if(message.content.startsWith("هاي"))
message.channel.send("هايات")
})



client.login("NjY3ODUwOTE4OTU1NDUwNDA3.Xu8hKw.GbUNnO3TxTsLx-ybB11YvK_rJ9U");
