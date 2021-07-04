const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
//src/json/accounts.json
const accountsJSONPath = path.join(__dirname, 'json', 'accounts.json')
const accountData = fs.readFileSync(accountsJSONPath, 'utf8');
=======
const accountData = fs.writeFileSync(accountsJSONPath, accountsJSON, 'utf8');
>>>>>>> a1682d92b6e27a24fbd83939db59bd1410220cf9
const accounts = JSON.parse(accountData);

//src/json/users.json
const userPath = path.join(__dirname, 'json', 'users.json');
const userData = fs.readFileSync(userPath, 'utf8');
const users= JSON.parse(userData);

const writeJSON = () => {
    let accountsJSONPath = path.join(__dirname, 'json', 'accounts.json');
    let accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(accountsJSONPath, accountsJSON, 'utf8');
}

module.exports = {accounts, users, writeJSON};
