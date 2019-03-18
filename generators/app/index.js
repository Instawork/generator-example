const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  // first stage
  async prompting() {
    this.log('Generator starting... 🤖');

    this.answers = await this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What shall we create today?',
        choices: ['screen', 'redux-module'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Input the name for this module',
        validate: input => Boolean(input.length),
      },
    ]);
  }

  // second stage
  writing() {
    this.log('Writing files... 📝');
  }

  // last stage
  end() {
    this.log('Bye... 👋');
  }
};
