const metascraper = require('metascraper')([
  require('metascraper-amazon')(),
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-title')(),
  require('metascraper-url')()
])

const got = require('got')

const scrape = (url) => {
  return new Promise((resolve, reject) => {
    getPage(url)
      .then(getMetadata)
      .then(result => {
        resolve(result)
      })
      .catch(error => reject(error))
  })
}

const getPage = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error('invalid url'))
    }
    got(url)
      .then((result) => {
        resolve({
          url: result.url,
          html: result.body
        })
      })
      .catch(error => {
        reject(error)
      })
  })
}

const getMetadata = (page) => {
  return new Promise((resolve, reject) => {
    if (!page) {
      reject(new Error('invalid page'))
    }
    metascraper(page)
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = {
  scrape
}
