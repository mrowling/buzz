'use strict';

class Bot {
    constructor(client, token) {
        this.client = client;
        this.token = token;
        this.commands = [];
    }
    connect() {
        this.client.login(this.token);
        this.client.on('ready', this.onReady);
        this.client.on('message', (msg) => this.onMessage(msg));
        this.client.on('warn', (msg) => this.onWarn(msg));
    }
    onReady() {
        console.log('Success!\n');
    }

    onMessage(message) {
        if (message.isMentioned(this.client.user) || message.channel.type === 'dm') {    
            for (let cmd in this.commands) {
                if (message.content.includes(cmd.buzzword)) {
                    cmd.action(message);
                };
            }
        }
    }
    onWarn(info) {
        console.warn(info);
    }
    registerCommand(command) {
        if( !command.action ) {
            throw new Error('Action is Required')
        } else if (typeof command.action !== 'function') {
            throw new  TypeError('Action is expected to be a function')
        }
        if ( !command.buzzword ) {
            throw new Error('Buzzword is Required');
        } else if (typeof command.buzzword !== 'string') {
            throw new TypeError('Action is expected to be a string');
        }
        if ( this.commands[command.buzzword] ) {
            throw new Error('This Buzzword already exists');
        }
        this.commands[command.buzzword] = command;
    }

    deRegisterCommand(buzzword) {
        if (this.commands[buzzword]) {
            delete this.commands[buzzword];
        }
    }
}

module.exports = Bot;