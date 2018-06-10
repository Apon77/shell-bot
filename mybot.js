const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const embed = new Discord.RichEmbed()
  .setAuthor("tee", "https://cdn.discordapp.com/attachments/455029827695804418/455038447074279434/tee_server.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x81b2f6)
  .setDescription("The rules of tee's server.")
  .setFooter("tee's Server", "https://cdn.discordapp.com/attachments/455029827695804418/455038447074279434/tee_server.png")
  .setThumbnail("https://png.icons8.com/color/260/rules.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addField("Rule 1",
    "Try to avoid memes and swearing.")
  .addField("Rule 2",
    "Don't ask to be leveled up. Your score will increase automatically.")
    .addField("Rule 3",
    "Don't advertise your server even if you are partnered. tee will display your server in <#455029827695804418>")
    .addField("Rule 4",
    "Have fun!!")
   
client.on("ready", () => {
  client.user.setActivity(`on ${client.guilds.size} servers`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});
client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("welcome").send(`"${member.user.username}" has joined this server`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  }
  else
  if (message.content.startsWith(config.prefix + "kick")) {
    let member = message.mentions.members.first();
    member.kick();
  }
  else
  if (message.content.startsWith(config.prefix + "ban")) {
    let member = message.mentions.members.first();
    member.ban();
  }
  else
  if (message.content.startsWith(config.prefix + "rules")){
    message.channel.send({embed});
  }
});


client.login(config.token);