//  import modules
import express from 'express'
//  create express app 
const app = express()
//  configure the app (app.set)
app.set('view engine', 'ejs')
//  mount middleware (app.use)

//  mount routes 

app.get('/', function(req, res) {
  res.redirect('/students')
})

app.get('/students', function(req, res) {
  res.render('students')
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

