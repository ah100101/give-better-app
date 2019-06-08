const createPost = (params) => {
  return new Promise((resolve, reject) => {
    if (!params) reject(new Error('Invalid params provided'))
    if (!params.app) reject(new Error('Invalid firebase app provided'))
    if (!params.userId) reject(new Error('Invalid user ID provided'))
    if (!params.post) reject(new Error('Invalid post provided'))
    
     const db = params.app.firestore()
     db.collection('users').doc(params.userId).collection('gifts').add(params.post)

    resolve(params.post)
  })
}

const isPostValid = post => {
  // TODO: check other parameters
  return !!post
}

module.exports = {
  createPost,
  isPostValid
}
