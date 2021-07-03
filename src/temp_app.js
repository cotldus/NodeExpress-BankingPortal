const fs = require('fs');
const path = require('path');

const express = require('express');
const app = new express();

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

//src/json/accounts.json
const accountPath = path.join(__dirname, 'json', 'accounts.json')
const accountData = fs.readFileSync(accountPath, 'utf8');
const accounts = JSON.parse(accountData);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res)=> res.render('index', { AccountSummary: 'accounts: accounts' }));
//src/json/users.json
const userPath = path.join(__dirname, 'json', 'users.json')
const userData = fs.readFileSync(userPath, 'utf8');
const users= JSON.parse(userData);

app.get('/savings', (req, res) => res.render('account', { account: accounts.savings }));

app.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));

app.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));

app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));

app.listen(3000);