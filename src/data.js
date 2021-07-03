const fs = require('fs');
const path = require('path');

const accountData = fs.writeFileSync(accountsJSONPath, accountsJSON, 'utf8');
const accounts = JSON.parse(accountData);

const userPath = path.join(__dirname, 'json', 'users.json');
const userData = fs.readFileSync(userPath, 'utf8');
const users= JSON.parse(userData);

const writeJSON = () => {
    let accountsJSONPath = path.join(__dirname, 'json', 'accounts.json');
    let accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(accountsJSONPath, accountsJSON, 'utf8');
}

module.exports = {accounts, users, writeJSON};
