require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const app = express();

app.get('/', (req, res) => {
    res.send('4o4 Bot is alive!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Web server started');
});

client.once('clientReady', () => {
    console.log(`✅ ${client.user.tag} is online!`);
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', error => {
    console.error('Uncaught exception:', error);
});


client.on('error', error => {
    console.error('Discord client error:', error);
});

client.on('shardDisconnect', (event, id) => {
    console.log(`Shard ${id} disconnected`, event);
});

client.on('shardReconnecting', id => {
    console.log(`Shard ${id} reconnecting...`);
});

client.on('shardResume', id => {
    console.log(`Shard ${id} resumed`);
});


client.login(process.env.DISCORD_TOKEN);