const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

app.use(bodyParser.json())

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.post('/api/gift', function (req, res) {
  return res.json({ message: req.body.message })
  // res.status(401).json({ error: 'Bad credentials' })
})

async function start () {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
