require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`✅ ${client.user.tag} is online!`);
});

client.login(process.env.DISCORD_TOKEN);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('4o4 Bot is alive!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Web server started');
});