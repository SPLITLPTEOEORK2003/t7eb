const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '502101825806139412') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '497101650037702669').send('**Welcome To Black Pink  :839b5b349bd15614b3ffc589da484578: **: ,');
},3000);
});

client.login(process.env.TOKEN);
