'use strict';
// Include dependencies
const dotenv = require('dotenv').config();
const config = require('./config');
const Discord = require('discord.js');

const Bot = require('./lib/bot.js');
const rules = require('./lib/commands/rules.js');

const client = new Discord.Client();

const bot = new Bot(client, config.DISCORD_TOKEN);
bot.registerCommand(rules);
bot.connect();