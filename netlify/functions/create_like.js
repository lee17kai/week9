// Goal: Provide a function to "like" a post in Firebase
// Requirement: "Likes" are user-specific – a user can "like" a post, but only once.
// Currently, the "number of likes" on a post isn't user-specific, nor does it prevent an
// unlimited number of likes. How would we expand/refactor our domain model to support this?

// allows us to use firebase
let firebase = require(`./firebase`)

exports.handler = async function(event) {

  // write the recipe and the implementation

  //record post Id, user Id 
  let postId = event.queryStringParameter.postId
  let userName = event.queryStringParameters.userName

  //establish connection to firebase in memory
  let db = firebase.firestore()

  //read the collection and 
  let likeQuery = await db.collection(`likes`).where(`postId`, `==`, postId).where(`userId`, `==`, userId).get()
  let likes = likeQuery.docs
  // make sure new user Id is not stored before
  if(likes.length == 0){

    //need own collection for likes. firebase will add this. 
    await db.collection(`likes`).add({
      postId: postId,
      userId: userId
    })

    //add 1 to number of likes
    await db.collection(`posts`).doc(postId).update({ //this only updates the specific record
      numberOfLikes: firebase.firestore.FieldValue.increment(1)
    })
  }


  return {
    statusCode: 200
  }
}