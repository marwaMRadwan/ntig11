require('dotenv').config()
const app = require('./src/app')
const PORT = process.env.PORT||3000

app.get('*', (req,res)=> res.send('error loading url'))

app.listen(PORT, ()=> console.log(`app on http://localhost:${PORT}`))