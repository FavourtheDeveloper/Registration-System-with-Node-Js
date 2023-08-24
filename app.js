const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: false }))

app.set('view-engine', 'ejs');

const user = [];

app.get('/', (req, res) =>{
    res.render('register.ejs');
    
})

app.get('/done', (req, res) => {
    res.render('done.ejs')
})

app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    user.push({
        "name": name,
        "email": email,
        "password": password
    })
    console.log(user);
   

    res.redirect('done');
})




app.listen(3000);