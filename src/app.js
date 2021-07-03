const fs = require('fs');
const path = require('path');

const express = require('express');
const { render } = require('ejs');
const app = new express();

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

//src/json/accounts.json
const accountPath = path.join(__dirname, 'json', 'accounts.json')
const accountData = fs.readFileSync(accountPath, 'utf8');
const accounts = JSON.parse(accountData);

app.use(express.static(path.join(__dirname, '/public')));
//post
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> res.render('index', { title: 'Account Summary', accounts: accounts  }));
//src/json/users.json
const userPath = path.join(__dirname, 'json', 'users.json')
const userData = fs.readFileSync(userPath, 'utf8');
const users= JSON.parse(userData);

app.get('/savings', (req, res) => res.render('account', { account: accounts.savings }));
app.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));
app.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));
app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));

app.get('/transfer', (req, res) => res.render('transfer'));
app.post('/transfer', (req, res) =>{
    accounts[req.body.from].balance -= req.body.amount;
    accounts[req.body.to].balance += parseInt(req.body.amount);
    let accountsJSON = JSON.stringify(accounts);
    accountsJSONPath = path.join(__dirname, 'json', 'accounts.json');
    fs.writeFileSync(accountsJSONPath, accountsJSON, 'utf8');
    res.render('transfer', {message: "Transfer Completed"});
})

app.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));
app.post('/payment', (req, res) =>{
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount);
    let accountsJSON = JSON.stringify(accounts);
    accountsJSONPath = path.join(__dirname, 'json', 'accounts.json');
    fs.writeFileSync(accountsJSONPath, accountsJSON, 'utf8');
    res.render('payment', {message: "Payment Successful", account: accounts.credit});
})

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!') });