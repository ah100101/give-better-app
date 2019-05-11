const createPost = (params) => {
  return new Promise((resolve, reject) => {
    console.log('valid, creating...')
    console.log(params)
    if (!params) reject(new Error('Invalid params provided'))
    if (!params.app) reject(new Error('Invalid firebase app provided'))
    if (!params.userId) reject(new Error('Invalid user ID provided'))
    if (!params.post) reject(new Error('Invalid post provided'))
    // TODO: hook up to firebase
    console.log('resolving')
    resolve(params.post)
  })
}

const isPostValid = post => {
  return new Promise((resolve, reject) => {
    console.log('checking if post is valid')
    if (!post) reject(new Error('Post undefined'))
    // TODO: check if post parameters are valid
    resolve(post)
  })
}

module.exports = {
  createPost,
  isPostValid
}
