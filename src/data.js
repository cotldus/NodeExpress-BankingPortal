const fs = require('fs');
const path = require('path');

//src/json/accounts.json
const accountsJSONPath = path.join(__dirname, 'json', 'accounts.json')
const accountData = fs.readFileSync(accountsJSONPath, 'utf8');
const accounts = JSON.parse(accountData);

//src/json/users.json
const userPath = path.join(__dirname, 'json', 'users.json');
const userData = fs.readFileSync(userPath, 'utf8');
const users= JSON.parse(userData);

const writeJSON = () => {
    let accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(accountsJSONPath, accountsJSON, 'utf8');
}

module.exports = {accounts, users, writeJSON};