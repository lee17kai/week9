// Goal: Provide a function to create a new post in Firebase

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/create_post?userName=Brian&imageUrl=https://images.unsplash.com/...
exports.handler = async function(event) {
  //take a look at the event. you'll see what's inside query string parameters
  console.log(event) 

  // get the two querystring parameters and store in memory
  let userName = event.queryStringParameters.userName
  let imageUrl = event.queryStringParameters.imageUrl

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // create a new post. see the documentation on firebase on "writing data"
  await db.collection(`posts`).add({
    userName: userName,
    numberOfLikes: 0,
    imageUrl: imageUrl,

    // time stamp instructions on kiei documentation on firebase
    created: firebase.firestore.FieldValue.serverTimeStamp()
  })

  return {
    statusCode: 200
  }
}

