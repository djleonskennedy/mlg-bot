import dotEnv from 'dotenv';
import {Client} from 'discord.js';
import config from './config.js';

dotEnv.config()

const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', (e) => {
  console.log(`${client.user.username} ${client.user.tag} has logged in`);
})

client.on('message', (m) => {
  if(!m.author.bot) {
      onMessageFromUser(m)
  }
})

function onMessageFromUser(m) {
  if(m.content.startsWith(config.PREFIX)) {
    const [CMD_NAME, ...args] = m.content
      .trim()
      .substring(config.PREFIX.length)
      .split(/\s+/);
      m.channel.send(`Hey ${m.author.username} Your parameters interpreted as ${CMD_NAME} ${args}`)
  }
}
