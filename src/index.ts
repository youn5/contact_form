import * as express from 'express';
import * as bodyParser from 'body-parser';
import { MessageSendSave } from './save';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.set('views', './src/views/');

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.render('home', { title: 'Home', message: 'home page' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

interface ErrorMessage {
    surname?: string;
    firstname?: string;
    email?: string;
    message?: string;
}

app.post('/submit-contact', async (req, res) => {
  const {
    User_Surname,
    User_Firstname,
    User_Email,
    User_Message,
  } = req.body;

  const nameRegex = /^[a-zA-Z]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const errorMessages: ErrorMessage = {};

  if (!nameRegex.test(User_Surname)) {
    errorMessages.surname = 'Error: nom invalide';
  }

  if (!nameRegex.test(User_Firstname)) {
    errorMessages.firstname = 'Error: prenom invalide';
  }

  if (!emailRegex.test(User_Email)) {
    errorMessages.email = 'Invalid email';
  }

  if (User_Message.length < 10) {
    errorMessages.message = 'Error: message doit avoir plus de 10 caractères';
  }

  if (Object.keys(errorMessages).length > 0) {
    res.render('contact', {
      title: 'Contact',
      errorMessages,
      userSurname: User_Surname,
      userFirstname: User_Firstname,
      userEmail: User_Email,
      userMessage: User_Message,
    });
  } else {
    await MessageSendSave.saveDatabase(User_Surname, User_Firstname, User_Email, User_Message);
    res.render('contact', {
      title: 'Contact',
      successMessage: 'Message is saved successfully',
    });
  }
});

 