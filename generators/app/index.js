const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	constructor(args, options) {
		super(args, options);
	}

	// first stage
	async prompting() {
		this.log('Generator starting... 🤖');
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
