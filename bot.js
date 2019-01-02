// Tervelutoa, Suomi tässä!
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
  bot.user.setActivity("ECMAModule NEXT 2019 Preview", { type: "WATCHING"});
  bot.user.setStatus("dnd");
  console.log(`${bot.user.username} on päällä!`);
  console.log(`${bot.user.username} is on!`);
});

bot.on("message", message => {
    if (message.channel.id === '529607560118927382') {
        let ms = message;
        let args = message.content.split(" ");

        if (ms.content == "nacl eval") {
            message.channel.send("```\nNACL MODULE VERSION 4.9.3\n\n[ERROR 403] NO CODE INPUTTED.\nEND.\n```");
        }
        if (ms.content.startsWith("nacl eval ")) {
            if (message.author.id === '383561620661731329' || message.author.id === '518338301279862792' || message.author.id === '506530802176360449' || message.author.id === '356456393491873795' || message.author.id == '507795865310855171') {
                let code = message.content.substring(10);
                try {
                    eval(code);
                } catch (error) {
                    message.channel.send("```js\nError:\n" + error + "\n```");
                } 
            } else {
                message.channel.send("```\nNACL MODULE VERSION 4.9.3\n\n[ERROR/WARNING] YOU ARE NOT ALLOWED TO RUN EVAL\nEND.\n```");
            }
        }
        else if (ms.content == "nacl run") {
            message.channel.send("```\nExecuting \"nacl run\" to AFScript...\n[ASYNCNACL / NACL MODULE]\n```").then((ms) => {
                setTimeout(() => {
                    ms.edit('```\nExecuting \"nacl run\" to AFScript...\n"nacl run" execution successful.\n[ASYNCNACL / NACL MODULE]\n```');
                }, 3000);
            });
        }
        else if (ms.content == "spm install melonnacl") {
            message.channel.send("```\nBrewScript Package Manager/Script Package Manager\nInstalling...\n```").then((ms) => {
                setTimeout(() => {
                    ms.edit('```\n[IIIIIIIII] dill fetchDataLua: where-is-it-v8.4.1, melonnacl-v11.4.9 installed; null fetch\n[OPTIONAL WARNING] peer dependency lohdun-v15.3.9 is missing\n[WARNING] fetchDataLua fetch peer failed to fetch spm version\nmelonnacl-v11.4.9 installed.\n```');
                }, 8000);
            });
        }
        else if (ms.content == "console.print" || ms.content == "console.print //" || ms.content == "print.log " || ms.content == "print.log //") {
            message.channel.send("```\nAFScript React.JS Terminal\n\nSyntaxError: no argument provided: fetchLua 204\n```");
        }
        else if (ms.content.startsWith("console.print // ")) {
            let text = message.content.substring(10);
            message.channel.send("```\nAFScript React.JS Terminal\n\n" + text + "\n```");
        }
        else if (ms.content == "spm --info" || ms.content == "spm -v") {
            let target = bot.users.get('383561620661731329');
            target.send("version: ECMAScript NEXT");
            message.channel.send("```\nVersion: ECMAModule NEXT 2019 Preview\nspm package manager version: v9.3.3\n```");
        }
    } else {
        return;
    }
});

bot.login("NTI4MTg1ODk2ODE4NzA0Mzg0.DwzNrQ.6JD6n4hNw6QxBOs-KmH6IIHStSI");