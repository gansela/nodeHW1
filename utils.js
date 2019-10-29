const fs = require("fs")

function appendToFile(path, data) {
    fs.appendFile(path, data + "\n", 'utf8', (err) => {
        if (err) console.error("FAILED");
        console.log('SUCCESS');
    });
}

module.exports = { appendToFile }