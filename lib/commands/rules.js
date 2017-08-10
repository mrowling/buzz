'use strict';
class RulesCommand {
    constructor() {
        this.buzzword = 'rules'; 
    }
    action(message){
        message.reply('All community members are expected to abide by the follow:\n' +
        '1. Treat others with respect. Banter is fun, bullying is not. Make sure all parties are on the same page when it comes to communicating. This includes both text and voice chats.\n' +
        '2. Do not spam any channel with nonsense.\n' +
        '3. No advertising. If you have an event, or something you would like to promote, please talk to a member of leadership to get permission.\n' +
        '4. Leave all hate, racism, derogatory terms, and offensive comments out of our community.');
    }
}

module.exports = new RulesCommand();