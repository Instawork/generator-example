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

    const { type, name } = this.answers;
    if (type === 'screen') {
      this.fs.copyTpl(
        this.templatePath('component.js'),
        this.destinationPath(`components/${name}.js`),
        {
          name,
        },
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('module.js'),
        this.destinationPath(`modules/${name.toLowerCase()}.js`),
        {
          name,
        },
      );
    }
  }

  // last stage
  end() {
    this.log('Bye... 👋');
  }
};
