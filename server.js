const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')

const app = express()

app.use(express.static(path.join(__dirname, './build')))
app.use(history())
app.use(express.static(path.join(__dirname, './build')))
app.get('/', function (req, res) {
  res.render(path.join(__dirname + './build/index.html'))
})

app.use('/js/react.js', express.static(require.resolve('react/umd/react.production.min')))
app.use('/js/react-dom.js', express.static(require.resolve('react-dom/umd/react-dom.production.min')))

app.listen(8000, () => {
  console.log()
  console.log(`   ...server has started at http://localhost:8000`)
  console.log()
})
