import * as express from 'express';
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './src/views/')

app.get('/', (req, res) => {
  res.render('home', {title: 'Home', message: 'home page'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})