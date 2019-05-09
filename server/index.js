const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')

const scrapeFunctions = require('./functions/scraper.js')
const firebaseFunctions = require('./functions/firebase.js')

const app = express()

app.use(bodyParser.json())

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const admin = firebaseFunctions.initializeApp('../admin/bettergive-23113-firebase-adminsdk-05scp-3c363a3d83.json')

app.post('/api/gift', (req, res) => {
  if (!req.body.url) {
    res.status(500).json({ error: 'Invalid Url' })
  }

  scrapeFunctions.scrapeUrl(req.body.url)
    .then(result => res.json(result))
    .catch(error => {
      res.status(500, error)
    })
})

app.post('/api/post', (req, res) => {
  console.log('gift posted')
  res.json({ success: true })
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
