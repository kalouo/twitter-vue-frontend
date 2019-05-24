import axios from "axios";

function signIn(email, password) {
  return axios({
    url: "/graphql",
    method: "post",
    data: {
      query: `
                mutation{
                    signInUser(
                        email:{
                        email: "${email}"
                        password:"${password}"
                        }
                    ){
                    user{
                        id
                    }
                    token 
                    }
                }              
            `
    }
  });
}
function signUp(username, email, password) {
  return axios({
    url: "/graphql",
    method: "post",
    data: {
      query: `
                mutation{
                    createUser(
                    username: "${username}",
                    authProvider:{
                        email:{
                        email: "${email}"
                        password: "${password}"
                        }
                    }
                    ){
                        id
                        email
                        username
                    }
                }
            `
    }
  });
}

function createTweet(tweet) {
  return axios({
    url: "/graphql",
    method: "post",
    data: {
      query: `
            mutation{
                createTweet(content:"${tweet}"){
                  id,
                  content,
                  postedBy{
                    id
                    username
                  }
                }
              }
            `
    }
  });
}

function getUserTweets() {
  return axios({
    url: "graphql",
    method: "post",
    data: {
      query: `
            {currentUserTweets{
                id
                content
                postedBy{
                  id
                  username
                }
                createdAt
                  }
              }    
            `
    }
  });
}

function getCurrentUser() {
  return axios({
    url: "graphql",
    method: "post",
    data: {
      query: `
                {getCurrentUser{
                    id
                    username
                    bio
                    email
                }}
            `
    }
  });
}

function updateBio(bio) {
  return axios({
    url: "/graphql",
    method: "post",
    data: {
      query: `
        mutation{
            modifyBio(bio:"${bio}"){
                user{
                    bio
                }
            }
        }            
        `
    }
  });
}

export {
  createTweet,
  getCurrentUser,
  getUserTweets,
  signUp,
  signIn,
  updateBio
};
