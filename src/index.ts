import * as express from 'express';
//import * as pg from 'pg';
import * as bodyParser from 'body-parser';
import { MessageSendSave } from './save';

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug')

app.set('views', './src/views/')

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.render('home', { title: 'Home', message: 'home page' });
})

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact ', });
})
 
app.post('/submit-contact', (req, res) => {
  console.log(req.body);
  let error = false;
  const {
    User_Surname,
    User_Firstname,
    User_Email,
    User_Message,
  } = req.body;

  // Utilisez des expressions régulières pour valider les entrées
  const nameRegex = /^[a-zA-Z]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!nameRegex.test(User_Surname)) {
    res.send("Error: Invalid input");
    error = true;
  }  
  if (!nameRegex.test(User_Firstname)) {
    res.send("Error: Invalid input");
    error = true;
  }
  if (!emailRegex.test(User_Email)) {
    res.send("Error: Invalid input");
    error = true;
  }
  if (User_Message.length < 10) {
    error = true;
  }

  if (!error) {
    let send = MessageSendSave.saveDatabase(User_Surname, User_Firstname, User_Email, User_Message);
    console.log(send);
    res.send("Message is saved successfully");
  } else {
    res.send("Error: Invalid input");
  }
});

// app.post('/submit-contact', (req, res) => {
//   console.log(req.body)
//   let error = false;
//   const {
//     User_Surname,
//     User_Firstname,
//     User_Email,
//     User_Message,
//   } = req.body;
  
//     let send = MessageSendSave.saveDatabase(User_Surname, User_Firstname, User_Email, User_Message);
//   console.log(send);
//   if (error) {
//     res.send("Error")
//   } else {
//     res.send("Message is saved successfully")
//   }
// })


