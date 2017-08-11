'use strict';
const randomElement = (items) => items[Math.floor(Math.random()*items.length)];

class RulesCommand {
    constructor() {
        this.buzzword = 'rules';         
        this.initRules();
        this.initGreetings();
    }
    action(message){
        const isAdmin = message.member.hasPermission('ADMINISTRATOR');
        const content = message.content.split(" ");

        const verb = this.findVerb(content) || 'list';

        let reply;

        switch (verb) {
            case 'list':
                reply = randomElement(this.greetings) + '\n';
                reply += this.rules.join('\n');                            
                break;
            case 'add':
                reply = 'sure, I\'ll add that';
                break;
            default:
                reply = this.rules.join('\n');            
                break;
        }

        message.reply(reply);        
        
    }
    findVerb(content) {
        return content.find((word) => {
            const w = word.toLowerCase();
            return w === 'list' || w === 'add' || w === 'update' || w === 'delete';
        }).toLowerCase();
    }
    initRules() {
        this.rules = [];        
        this.rules.push('All community members are expected to abide by the follow:');
        this.rules.push('1. Treat others with respect. Banter is fun, bullying is not. Make sure all parties are on the same page when it comes to communicating. This includes both text and voice chats.');
        this.rules.push('2. Do not spam any channel with nonsense.');
        this.rules.push('3. No advertising. If you have an event, or something you would like to promote, please talk to a member of leadership to get permission.');
        this.rules.push('4. Leave all hate, racism, derogatory terms, and offensive comments out of our community.');
    }
    initGreetings() {
        this.greetings = [];
        this.greetings.push('Hey, follow the rules below!');
        this.greetings.push('Follow these, or don\'t, what do I care, I\'m a computer');
    }
}

module.exports = new RulesCommand();