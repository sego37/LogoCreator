const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/logo');

inquirer.prompt ([
    {
        type: 'input',
        name: 'text',
        message: 'enter 3 characters?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'enter text color?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'select shape?',
        choices: ['circle','square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'enter shape color?',
    }
]).then(answers => {
    console.log(answers);
    const logo = new Logo(answers.text, answers.textColor, answers.shape, answers.shapeColor);

    const logoSVG = logo.render();

    console.log(logoSVG)

    fs.writeFile('./examples/logo.svg', logoSVG, err => {
        if (err) throw err;
        console.log('file created');
    });
});


