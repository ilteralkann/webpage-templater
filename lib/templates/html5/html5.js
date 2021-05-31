#!/usr/bin/env node

// Module dependencies
const chalk = require('chalk');
const fs = require('fs');
const templateHtml5 = require('./template');

function folderExist() {
    if (fs.existsSync('./pages')) {
        return true;
    } else {
        return false;
    }
}

function create() {

    if (folderExist() == true) {
        fs.writeFile('./pages/html5.html', templateHtml5, function (err) {
            if (err) throw err;
            console.log(chalk.green('Template was created! ') + './pages/html5.html')
          });
    } else {
        fs.mkdir('./pages', function(err) {
            if (err) throw err;
            fs.writeFile('./pages/html5.html', templateHtml5, function (err) {
                if (err) throw err;
                console.log(chalk.green('Template was created! ') + './pages/html5.html')
              });
        })
    }
}


create();