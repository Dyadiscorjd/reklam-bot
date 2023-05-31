const { Client } = require('discord.js');
require('@discordjs/voice');
const client = new Client({ partials: ["CHANNEL", "MESSAGES", "GUILD_MEMBERS", "DIRECT_MESSAGES"], intents: 32767 });
const db = require('pro.db');
const ms = require('ms');
const { partner, link, idvc }  = require('./config.json');
client.on('ready',async () => {  await console.log(client.user.tag);})
client.on('ready', async () => {
 
 client.user.setActivity(`Reklam  لینکی سێرڤەرەکەت بنێرە`, { type:'WATCHING' })
});


////

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.get('/', (req, res) => {
  res.send('Best Managed Bot By Kartal!')
})

///
////////

client.on("messageCreate", (message) => {
    if (message.content === "Reklam") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
    if (message.content === "رێکلام هەیە") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
    if (message.content === "ريكلام") {
        message.reply(`رێکلام لە شەخسی بۆم بنێرە`);
    }
  if (message.content === "رێکلام") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "reklam haya") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
}
  if (message.content === "Reklam haya") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "Reklam?") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
  if (message.content === "REKLAM") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
  }
  if (message.content === "reklam?") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "Reklam ?") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
}
if (message.content === "reklam") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
}
if (message.content === "ریکلام هەیە") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "Reklam agornawa") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
if (message.content === "reklam agornawa") {
        message.reply(`رێکلام لە تایبەت بۆم بنێرە`);
    }
	if (message.content === "Ad") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "ads") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "partner") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "Partner") {
        message.reply(`Send Link in Dm`)
}
if (message.content === "اعلان") {
        message.reply(`ارسل بل خاص`)
}

});
////
//////////////
client.on("messageCreate", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`** بۆ من ڕێکڵام**`);
  }
});

////
//////////////

client.on('messageCreate',async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'DM') {
      
    let share = await client.channels.cache.get(partner);
    let args = await message.content.split(' ');
    let cool = await db.get(`cool_${message.author.id}`);

    if(!share) return;
    if (cool > Date.now()) {
        return await message.author.send({content : 'ببورە دەتوانیت دووبارە ڕیکلامەکەت بنێریتەوە دوای 24 کاتژمێر '}).catch(async (err) => {
            await message.channel.send({content : `${message.author} ببورە دەتوانیت دووبارە ڕیکلامەکەت بنێریتەوە دوای کاتژمێر 24 کاتژمێر `})
        }).catch(err => undefined);
    }
    let time = await Date.now() + ms('24h');
    try {
    await client.fetchInvite(args[0]).then(async (invite) => {
        await db.set(`cool_${message.author.id}`,time);
        await share.send({content: `${invite}\n **📨 بڵاوکراوەتەوە لەلایەن** ${message.author}`});
        await message.channel.send({content : `
> 📪 **بڵاوکراوەتەوە لە ${share}**
> 📮 **ئەم لینکە پۆست بکە لە سێرڤەرەکەت بۆ** ${link}`}).catch(async (err) => {
            await message.channel.send({content : `> **${message.author} سێرڤەرەکەت بڵاوکراوەتەوە لە  ${share}**`});
        })
    }).catch(async (err) => {
        await message.channel.send({content: '> **:x: |  دووبارە هەوڵی لینکەکە نادروستە!**'});
    })
   } catch (err) {
       return;
    }}
})
///





client.on("ready", async() => {
 try{
const { joinVoiceChannel } = require('@discordjs/voice'); 

client.channels.fetch(`${idvc}`).then((channel) => { 
  console.log(`${client.user.tag} Connected To Voice`) 
const VoiceConnection = joinVoiceChannel({ channelId: channel.id, 
guildId: channel.guild.id, 
adapterCreator: channel.guild.voiceAdapterCreator,
selfDeaf: true,
selfMute: true
  }); 
     });
  } catch (err) {
console.log(err)
}
});


////

client.login(process.env.token)
