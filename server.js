const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var url = __dirname+'/home.html';
  console.log('file == '+url);
  fs.createReadStream(url).pipe(res);

})
app.get('/login',(req, res) =>{
  var url = __dirname+'/login.html';
  console.log('file == '+url);
  fs.createReadStream(url).pipe(res);
})

app.listen(port, () => {
  console.log(` http://localhost:${port}`)
})