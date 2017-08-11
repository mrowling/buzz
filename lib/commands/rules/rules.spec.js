const chai = require('chai');
const should = chai.should();

const rulesCommand = require('./rules.js');

describe('Rules Commands', () => {
    describe('Find Verbs', () => {
        it('Should Detect the Verb "list"', () => {
            const content = 'Hey Buzz, list the rules'.split(" ");
            const verb = rulesCommand.findVerb(content);
            verb.should.equal('list');
        });
        it('Should Detect the Verb "List"', () => {
            const content = 'Hey Buzz, List the rules'.split(" ");
            const verb = rulesCommand.findVerb(content);
            verb.should.equal('list');
        });
        it('Should Detect the Verb "update"', () => {
            const content = 'Hey Buzz, update Rules 1 to say'.split(" ");
            const verb = rulesCommand.findVerb(content);
            verb.should.equal('update');
        });
        it('Should Detect the Verb "Update"', () => {
            const content = 'Hey Buzz, update Rules 1 to say'.split(" ");
            const verb = rulesCommand.findVerb(content);
            verb.should.equal('update');
        });
    });
})