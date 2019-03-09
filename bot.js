const Discord = require("discord.js");
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const prefix = '!';
const ownerid =  "160140367554019329"
const snekfetch = require("snekfetch");
const weather = require('weather-js');

client.on('guildMemberAdd', member => {
  
client.channels.get("552646752717766668").send({embed: {
    color: 0xff040b,
    author: {
      name: `New User | ${member.user.tag}`,
      icon_url: member.user.avatarURL
    },
    fields: [{
        name: "__**Username:**__",
        value: `${member.user}`,
        inline: true,
      },
      {
        name: "__**Account Created:**__",
        value: `${member.user.createdAt}`,
        inline: true,
      }
    ],
    footer: {
      text: "© ok hand #1903",
    }
  }
  });

  message.member.send("Welcome to Planet Mxrs! Please read the <#552639989259698182> and be sure to follow them. We are happy to have you, and hope you have a good time!")
  var joinrole = member.guild.roles.find('name', 'Member');
  
  member.addRole(joinrole)
});

client.on('message', function(message) {
  var args = message.content.split(" ");
  var cmd = args[0];

  args = args.splice(1);

       switch(cmd) {
           
case "!update":
message.delete();

if(!message.member.roles.some(r=>["The Bot Himself", ":ok_hand:", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
message.delete();

client.channels.get("552658004135116800").send({embed: {
  color: 0xff040b,
  author: {
    name: "Bot Update",
    icon_url: client.user.avatarURL
  },
  fields: [{
      name: "__**Version**__",
      value: "1.1",
      inline: true,
    },
    {
      name: "__**Release Date**__",
      value: "3/9/19",
      inline: true,
    },
    {
      name: "__**Recent Update:**__",
      value: "Added color commands for a more colorful environment. !colors to see the command list."
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/avatars/160140367554019329/11aeeb672d6350f17109df860ba849fc.png?size=2048",
    text: "© ok hand#1903"
  }
}
});
break;
         
case "!colors":
message.delete();

if(!message.member.roles.some(r=>["The Bot Himself", ":ok_hand:", "Officer", "Admin", "Head Raid leader", "Member"].includes(r.name)) )
message.delete();

message.channel.send({embed: {
  color: 0xff040b,
  author: {
    name: "Color Command List",
    icon_url: client.user.avatarURL
  },
  fields: [{
      name: "__**Colors**__",
      value: "!red\n!orange\n!yellow\n!green\n!blue\n!indigo\n!violet",
      inline: true,
    },
    {
      name: "__**Other Commands**__",
      value: "!colors\n!colorclear",
      inline: true,
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/avatars/160140367554019329/11aeeb672d6350f17109df860ba849fc.png?size=2048",
    text: "© ok hand#1903"
  }
}
});
break;

case"!colorclear":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

message.delete();
message.channel.send("The user " + message.author + " had all colors cleared.");
break;

case "!red":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

message.delete();
message.guild.member(message.author).addRole("552700784941465622");
message.channel.send("The user " + message.author + " was given the color ``Red``");
break;

case "!orange":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

message.delete();
message.guild.member(message.author).addRole("552700829103161346");
message.channel.send("The user " + message.author + " was given the color ``Orange``");
break;

case "!yellow":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

message.delete();
message.guild.member(message.author).addRole("552701129369059328");
message.channel.send("The user " + message.author + " was given the color ``Yellow``");
break;

case "!green":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

message.delete();
message.guild.member(message.author).addRole("552701183039373313");
message.channel.send("The user " + message.author + " was given the color ``Green``");
break;

case "!blue":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

message.delete();
message.guild.member(message.author).addRole("552701344566214666");
message.channel.send("The user " + message.author + " was given the color ``Blue``");
break;

case "!indigo":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

if(message.member.roles.some(r=>["Indigo"].includes(r.name)) )
return message.reply ("You already have the indigo color!")

message.delete();
message.guild.member(message.author).addRole("552701748565770250");
message.channel.send("The user " + message.author + " was given the color ``Indigo``");
break;

case "!violet":

message.guild.member(message.author).removeRole("552700784941465622");
message.guild.member(message.author).removeRole("552700829103161346");
message.guild.member(message.author).removeRole("552701129369059328");
message.guild.member(message.author).removeRole("552701344566214666");
message.guild.member(message.author).removeRole("552701748565770250");
message.guild.member(message.author).removeRole("552702220257198081");
message.guild.member(message.author).removeRole("552701183039373313");

message.delete();
message.guild.member(message.author).addRole("552702220257198081");
message.channel.send("The user " + message.author + " was given the color ``Violet``");
break;

case "!info":
message.delete();

message.channel.send({embed: {
  color: 0xff040b,
  author: {
    name: "Planet Mxrs Info",
    icon_url: client.user.avatarURL
  },
  fields: [{
      name: "__**Version**__",
      value: "1.1",
      inline: true,
    },
    {
      name: "__**Release Date**__",
      value: "3/9/19",
      inline: true,
    },
    {
      name: "__**Information**__",
      value: "Planet Mxrs was coded using JavaScript and the project started in early March of 2019."
    },
    {
      name: "__**Contributors**__",
      value: "N7ckgakis#2959, Vincent#0007, Hindsight#2020, ⌬ iHack#2712"
    },
    {
      name: "__**Planet Mxrs Invite**__",
      value: "Invite people to this discord : https://discord.gg/gPxagCM"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/avatars/160140367554019329/11aeeb672d6350f17109df860ba849fc.png?size=2048",
    text: "© ok hand#1903"
  }
}
});
break;

case "!weather":
message.delete();
weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { 
  if (err) message.channel.send(err);

  if (result === undefined || result.length === 0) {
      message.channel.send('**Please enter a valid location.**')
      return;
  }

  var current = result[0].current;
  var location = result[0].location;

  const embed = new Discord.RichEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0x00AE86) 
      .addField('Timezone',`UTC${location.timezone}`, true)
      .addField('Degree Type',location.degreetype, true)
      .addField('Temperature',`${current.temperature} Degrees`, true)
      .addField('Feels Like', `${current.feelslike} Degrees`, true)
      .addField('Winds',current.winddisplay, true)
      .addField('Humidity', `${current.humidity}%`, true)

      message.channel.send({embed})
})
break;
        
case "!apply":
return;
let appid = Math.floor(Math.random() * 10100)

client.channels.get("552647944034058260").send({embed: {
  color: 0xff040b,
  author: {
    name: `Application | ${message.author.tag} `,
    icon_url: message.author.avatarURL
  },
  fields: [{
      name: "User",
      value: `${message.author}`,
      inline: true,
    },
    {
      name: "Application ID",
      value: `${appid}`,
      inline: true,
    }
  ],
  timestamp: new Date(),
  footer: {
    text: `ID: ${message.author.id}`,
  }
}
});

message.author.send(`Hello ${message.author}, your form will be sent shortly.\nYour application ID is ${appid}. Send this to a staff member if you feel your application has not yet been checked over.`);
setTimeout(function(){ 
message.author.send({embed: {
  color: 0xff040b,
  author: {
    name: `Application Form | ${message.author.tag}`,
    icon_url: message.author.avatarURL,
  },
  fields: [{
    name: "Use the link below to apply.",
    value: "[Apply Here](https://docs.google.com/forms/d/e/1FAIpQLSeymZws8ttc6lxAy65KdfX2DW-vxhx1699_KD6YcB5B6CvKrg/viewform?usp=sf_link)"
  },
 ],
  thumbnail: {
    url: "https://cdn.discordapp.com/avatars/160140367554019329/86941cff5d6b12ac93b0941dea2056cb.png?size=2048"
  },
  timestamp: new Date(),
  }}
);
}), 3000
break;
           
case "!announce":
message.delete();

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return;

let announcement = args.slice(0).join(' ');

if(!announcement)
return;

if(announcement)
client.channels.get('552641454661435402').send("@everyone")
client.channels.get('552641454661435402').send({embed: {
  color: 0xff040b,
  title: announcement,
  author: {
    name: `Announcement | ${message.author.tag}`,
    icon_url: message.author.avatarURL
  },
  footer: {
    text: "Please contact the staff for any problems/questions/concerns you may have.",
}
}
})
break;

case "!find":
message.delete();
let users = client.users;
let searchTerm = args[0];

if(!searchTerm) 
return message.channel.send("Please provide a name to search for!")

let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()))
let foundppl = matches.map(users => users.tag)

if(!foundppl)
return message.channel.send("There is nobody that matches that username!")

message.channel.send(foundppl);
break;

case "!purge":

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return;

let messagenumber = args.slice(0).join(' ');

if(!messagenumber)
return message.reply("**Please include a number of messages to delete! (1-99)**\nExample: ``!purge 1``\n__**Make sure to add 1 more than the original amount.**__")

message.delete();
client.channels.get("552647944034058260").send({embed: {
    color: 0xff040b,
    author: {
      name: `Purge | ${message.author.tag} `,
      icon_url: message.author
    },
    fields: [{
        name: "Purge Amount",
        value: `${messagenumber}`,
        inline: true,
      },
      {
        name: "Moderator",
        value: `${message.author}`,
        inline: true,
      },
      {
        name: "Purge ID",
        value: `${purgeid}`,
        inline: true,
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `ID: ${message.author.id}`,
    }
  }
});
           
let messagecount = parseInt(messagenumber);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
break;

case "!userinfo":
message.delete();

let uiembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setDescription("This is " + message.author.username + "'s info!")
.setThumbnail(message.author.avatarURL)
.setColor("0xff040b")
.addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
.addField("User ID:", message.author.id)
.addField("Created At:", message.author.createdAt);

message.channel.sendEmbed(uiembed)
break;

case "!ping":
message.delete();
message.channel.send(`Pong! Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
break;

case "hello":
  message.channel.send("Hey there!");
break;

case "!avatar":
message.delete();
let avataruser = message.mentions.users.first();

if(avataruser)
return message.reply(avataruser.avatarURL);

if(!avataruser)
return message.reply(message.author.avatarURL);

break;

case "!roll":
message.delete();
  message.channel.send("**You rolled a **`" + Math.floor(Math.random() * 100) + "`");
break;

case "!coinflip":
message.delete();
var flip = Math.floor(Math.random() * 2 + 1);
if (flip === 1) {
  message.reply({embed: {
    color: 0xff040b,
    author: {
      name: `Coinflip | ${message.author.tag}`,
      icon_url: message.author.avatarURL,
    },
    thumbnail: {
      url: "http://www.clker.com/cliparts/7/d/e/0/139362185558690588heads-md.png"
    },
    title: `**${message.author.tag}, the coin landed** __**heads!**__`,
    },
    timestamp: new Date(),
    }
);
}
else {
  message.reply({embed: {
    color: 0xff040b,
    author: {
      name: `Coinflip | ${message.author.tag}`,
      icon_url: message.author.avatarURL,
    },
    thumbnail: {
      url: "http://www.clker.com/cliparts/4/a/2/6/1393621733287511319tails-md.png"
    },
    title: `**${message.author.tag}, the coin landed** __**tails!**__`,
    },
    timestamp: new Date(),
    }
);
}
break;

case "!kick":
let kickid = Math.floor(Math.random() * 10100)

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return message.reply("You don't have permissions to use this!")

    let member = message.mentions.members.first();

    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

      let kreason = args.slice(1).join(" ");
    if(!kreason)
      return message.reply("Please indicate a reason for the kick!");

      let kkreason = args.slice(1).join(' ');
      member.kick(kreason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      client.channels.get("552647944034058260").send({embed: {
        color: 0xff040b,
        author: {
          name: `Kick | ${member.user.tag} `,
          icon_url: member.user.avatarURL
        },
        fields: [{
            name: "User",
            value: `${member.user}`,
            inline: true,
          },
          {
            name: "Moderator",
            value: `${message.author}`,
            inline: true,
          },
          {
            name: "Reason",
            value: `${kreason}`,
            inline: true,
          },
          {
            name: "Kick ID",
            value: `${kickid}`,
            inline: true,
          }
        ],
        timestamp: new Date(),
        footer: {
          text: `ID: ${member.user.id}`,
        }
      }
    });
    message.channel.send(`***${member.user.tag} was kicked.***`);
break;

case "!ban":
let bmember = message.mentions.members.first();
let banid = Math.floor(Math.random() * 10100)

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return message.reply("You don't have permissions to use this!")
  
  if(!bmember)
    return message.reply("Please mention a valid member of this server");
  if(!bmember.bannable) 
    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  let breason = args.slice(1).join(' ');
  if(!breason)
    return message.reply("Please indicate a reason for the ban!");
  
  bmember.ban(breason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    client.channels.get("552647944034058260").send({embed: {
      color: 0xff040b,
      author: {
        name: `Ban | ${bmember.user.tag} `,
        icon_url: bmember.user.avatarURL
      },
      fields: [{
          name: "User",
          value: `${bmember.user}`,
          inline: true,
        },
        {
          name: "Moderator",
          value: `${message.author}`,
          inline: true,
        },
        {
          name: "Reason",
          value: `${breason}`,
          inline: true,
        },
        {
          name: "Ban ID",
          value: `${banid}`,
          inline: true,
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `ID: ${bmember.user.id}`,
      }
    }
  });
  message.channel.send(`***✅ ${bmember.user.tag} was banned!***`);
  message.mentions.users.first().send(`You were warned in Planet Mxrs, ${reason}.\nYour warning ID is ${warnid}. Please contact the staff to appeal your warning using this ID.`);
break;

case "!warn":
let members = message.mentions.members.first();
let warnid = Math.floor(Math.random() * 10100)

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return message.reply("You don't have permissions to use this!")
  
  if(!members)
    return message.reply("Please mention a valid member of this server!");

  let reason = args.slice(1).join(' ');
  if(!reason)
    return message.reply("Please indicate a reason for the warn!");
  
  message.channel.send(`***✅ ${members.user.tag} has been warned.***`);
  client.channels.get("552647944034058260").send({embed: {
    color: 0xff040b,
    author: {
      name: `Warn | ${members.user.tag} `,
      icon_url: members.user.avatarURL
    },
    fields: [{
        name: "User",
        value: `${members.user}`,
        inline: true,
      },
      {
        name: "Moderator",
        value: `${message.author}`,
        inline: true,
      },
      {
        name: "Reason",
        value: `${reason}`,
        inline: true,
      },
      {
        name: "Warning ID",
        value: `${warnid}`,
        inline: true,
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `ID: ${members.user.id}`,
    }
  }
});
  message.mentions.users.first().send(`You were warned in Planet Mxrs, ${reason}.\nYour warning ID is ${warnid}. Please contact the staff to appeal your warning using this ID.`);
break;

case "!mute":
let mmembers = message.mentions.members.first();
let muteid = Math.floor(Math.random() * 10100)

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return message.reply("You don't have permissions to use this!")
  
  if(!mmembers)
    return message.reply("Please mention a valid member of this server!");

  let mreason = args.slice(1).join(' ');
  if(!mreason)
    return message.reply("Please indicate a reason for the mute!");
  
  mmembers.addRole("552648099357655053")
  message.channel.send(`***✅ ${mmembers.user.tag} has been muted.***`);
  client.channels.get("552647944034058260").send({embed: {
    color: 0xff040b,
    author: {
      name: `Mute | ${mmembers.user.tag} `,
      icon_url: mmembers.user.avatarURL
    },
    fields: [{
        name: "User",
        value: `${mmembers.user}`,
        inline: true,
      },
      {
        name: "Moderator",
        value: `${message.author}`,
        inline: true,
      },
      {
        name: "Reason",
        value: `${mreason}`,
        inline: true,
      },
      {
        name: "Mute ID",
        value: `${muteid}`,
        inline: true,
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `ID: ${mmembers.user.id}`,
    }
  }
});
  message.mentions.users.first().send(`You were muted in Planet Mxrs, ${mreason}.\nYour mute ID is ${muteid}. Please contact the staff to appeal your mute using this ID.`);
break;

case "!warnmute":
let wmid = Math.floor(Math.random() * 10100)
let wmmembers = message.mentions.members.first();
let wmreason = args.slice(1).join(" ");

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return message.reply("You don't have permissions to use this!")

  if(!wmmembers)
    return message.reply("Please mention a valid member of this server!");
 
  if(!wmreason)
    return message.reply("Please include a reason for the warn/mute!")

wmmembers.addRole("552648099357655053");

message.channel.send(`***✅ ${wmmembers.user.tag} has been warned and muted.***`);
    
client.channels.get("552647944034058260").send({embed: {
  color: 0xff040b,
      author: {
        name: `Warn/Mute | ${wmmembers.user.tag} `,
        icon_url: wmmembers.user.avatarURL
      },
      fields: [{
          name: "User",
          value: `${wmmembers.user}`,
          inline: true,
        },
        {
          name: "Moderator",
          value: `${message.author}`,
          inline: true,
        },
        {
          name: "Reason",
          value: `${wmreason}`,
          inline: true,
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `ID: ${wmmembers.user.id}`,
      }
    }
  });

    message.mentions.users.first().send(`You were warned and muted in Planet Mxrs, ${wmreason}`);
break;

case "!unmute":
let mmmembers = message.mentions.members.first();

if(!message.member.roles.some(r=>["Discord Mods", "The Bot Himself", "Officer", "Admin", "Head Raid leader"].includes(r.name)) )
return message.reply("You don't have permissions to use this!")
  
  if(!mmmembers)
    return message.reply("Please mention a valid member of this server!");
  
  mmmembers.removeRole("552648099357655053");

  message.channel.send(`***✅ ${mmmembers.user.tag} has been unmuted.***`);
  client.channels.get("552647944034058260").send({embed: {
    color: 0xff040b,
    author: {
      name: `Unmute | ${mmmembers.user.tag} `,
      icon_url: mmmembers.user.avatarURL
    },
    fields: [{
        name: "User",
        value: `${mmmembers.user}`,
        inline: true,
      },
      {
        name: "Moderator",
        value: `${message.author}`,
        inline: true,
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `ID: ${mmmembers.user.id}`,
    }
  }
});
  message.mentions.users.first().send(`You were unmuted in Planet Mxrs`);
break;

       }
    
});

client.login(process.env.BOT_TOKEN)
