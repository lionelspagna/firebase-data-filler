const { driver } = require('./chrome.js');
const chrome = driver;
const prompt = require('prompt-sync')({sigint: true});

const main = async() => {
    try {
        await chrome.get("https://firebase.google.com");
    } catch(err) {  }
    let action = 'explore';
    while(action != 'quit') {
        action = prompt("\n'read' to read data.xlsx\n'fill' to put data on firebase, data taken from file\n");
    }
}

main();
