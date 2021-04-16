console.log('Beep... beep... 🤖');

const Discord = require('discord.js');
const timezone = require('moment-timezone');
const client = new Discord.Client();
const prefix = '<>';

client.on('ready', () => {
console.log('yes sir?');
client.user.setActivity(`${prefix}help`, { type: "LISTENING" });
});

//bot auto reply
 client.on('message',message => {
  
    if (message.content === "hallo"){
    message.channel.send("Hai <@" + message.author + "> apa kabar?")
  }
    if (message.content === "Rafi"){
    message.channel.send('Kenapa?')
  }
      if (message.content === "rafi"){
    message.channel.send('Kenapa?')
  }
    if (message.content === "<@264551773539139584>"){
    message.channel.send('Kenapa weh?')
  }
    if (message.content === "mabar"){
    message.channel.send('Hayuk')
  }
    if (message.content === "arank"){
    message.channel.send('ahA semangat push rank')
  }
    if (message.content === "cok"){
    message.channel.send('cak cok cak cok teruss....')
  }
    if (message.content === "main rak"){
    message.channel.send('main apa tu?')
  }
    if (message.content === "rank?"){
    message.channel.send('rank apa?')
  }
    if (message.content === "rank"){
    message.channel.send('rank apa?')
  }
    if (message.content === "pik"){
    message.channel.send('ha?')
  }
      if (message.content === "haha"){
    message.channel.send('hihi')
  }
      if (message.content === "ping"){
    message.channel.send('pong')
  }
      if (message.content === "woi"){
    message.channel.send('???')
  }
    if (message.content === "su"){
    message.channel.send('ngetik yang bener woi')
  }
    if (message.content === "pls meme"){
    message.channel.send('meme terusss ')
  }
    if (message.channel.id == '798089631610175488' && message.content === "kamu kemana aja"){
    message.channel.send('dari hatimu')
  }
  });

//bot avatar, embed rules
client.on('message', message => {
    // If the message is "cek avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.displayAvatarURL());
    }

    //rules

    //if (message.content === 'rules'){
    //const rules = new Discord.MessageEmbed()
    //.setTitle('SERVER RULES')
    //.setFooter('Rabu 17 Februari 2021')
    //.setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06461642-a45f-4a8c-b8e6-9672d52220c5/d93abt0-d4a0956c-0dde-4400-894a-7e673077e6e1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDY0NjE2NDItYTQ1Zi00YThjLWI4ZTYtOTY3MmQ1MjIyMGM1XC9kOTNhYnQwLWQ0YTA5NTZjLTBkZGUtNDQwMC04OTRhLTdlNjczMDc3ZTZlMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.saTvk9kJkLaPgvcjpwaa2CS797bxYXwVkZ6otwRTlIs')
    //.addField('Discord Terms of Service & Community Guidelines' , 'Terms os Service https://discord.com/terms\nCommunity Guidelines https://discord.com/guidelines\n\n▬▬▬▬▬▬▬▬▬▬▬▬')
    //.setColor(0x03fcf0)
   // .setDescription('▬▬▬▬▬▬▬▬▬▬▬▬\n\nSebelum mulai mengobrol di channel manapun di Server ini,\nKalian harus mengetahui aturan umum untuk menghindari segala jenis hukuman,\nSiapapun yang melanggar aturan yang ada akan menerima konsekuensinya. \nPeraturan dapat berubah kapan saja.\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n- Dilarang rusuh saat voice\n- Boleh toxic dengan sewajarnya jangan berlebihan\n- Respect ke semua orang\n- Dilarang mengirimkan konten berbau pornografi dan berlaku rasis.\n- Dilarang melakukan trolling ke stranger yang dapat memicu permasalahan.\n- Gunakan text channel dan voice channel dengan sesuai.\n\n▬▬▬▬▬▬▬▬▬▬▬▬');
    
   // message.channel.send(rules);}

    if(!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
    if(command === 'ping'){
      message.channel.send('pong');
    } else if(command === 'help'){
      message.channel.send("check your dm!");
      const bantuan = new Discord.MessageEmbed()
      .setTitle('SERVER RULES')
      .setFooter('Rabu 17 Februari 2021')
      .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06461642-a45f-4a8c-b8e6-9672d52220c5/d93abt0-d4a0956c-0dde-4400-894a-7e673077e6e1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDY0NjE2NDItYTQ1Zi00YThjLWI4ZTYtOTY3MmQ1MjIyMGM1XC9kOTNhYnQwLWQ0YTA5NTZjLTBkZGUtNDQwMC04OTRhLTdlNjczMDc3ZTZlMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.saTvk9kJkLaPgvcjpwaa2CS797bxYXwVkZ6otwRTlIs')
      .addField('Discord Terms of Service & Community Guidelines' , 'Terms os Service https://discord.com/terms\nCommunity Guidelines https://discord.com/guidelines\n\n▬▬▬▬▬▬▬▬▬▬▬▬')
      .setColor(0x03fcf0)
      .setDescription('▬▬▬▬▬▬▬▬▬▬▬▬\n\nSebelum mulai mengobrol di channel manapun di Server ini,\nKalian harus mengetahui aturan umum untuk menghindari segala jenis hukuman,\nSiapapun yang melanggar aturan yang ada akan menerima konsekuensinya. \nPeraturan dapat berubah kapan saja.\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n- Dilarang rusuh saat voice\n- Boleh toxic dengan sewajarnya jangan berlebihan\n- Respect ke semua orang\n- Dilarang mengirimkan konten berbau pornografi dan berlaku rasis.\n- Dilarang melakukan trolling ke stranger yang dapat memicu permasalahan.\n- Gunakan text channel dan voice channel dengan sesuai.\n\n▬▬▬▬▬▬▬▬▬▬▬▬');
      message.channel.send(bantuan);
    }
});

//music
//bot waktu 


client.login("")