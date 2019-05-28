import axios from "axios";

function baseRequest() {
  return {
    url: "/graphql",
    method: "post"
  };
}

function baseRequestWithAuth() {
  return {
    ...baseRequest(),
    headers: {
      Authorization: localStorage.getItem("Authorization")
    }
  };
}

function signIn(email, password) {
  const data = {
    query: `mutation{
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
              }`
  };
  return axios({ ...baseRequest(), data });
}

function signUp(username, email, password) {
  const data = {
    query: `mutation{
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
          }`
  };
  return axios({ ...baseRequest(), data });
}

function createTweet(tweet) {
  const data = {
    query: `mutation{
              createTweet(content:"${tweet}"){
                id,
                content,
                postedBy{
                  id
                  username
                }
              }
            }`
  };
  return axios({ ...baseRequestWithAuth(), data });
}

function getUserTweets() {
  const data = {
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
  };
  return axios({ ...baseRequestWithAuth(), data });
}

function getCurrentUser() {
  const data = {
    query: `{getCurrentUser{
              id
              username
              bio
              email
          }}`
  };
  return axios({ ...baseRequestWithAuth(), data });
}

function updateBio(bio) {
  const data = {
    query: `mutation{
              updateBio(bio:"${bio}"){
                user{
                  bio
                }
              }
            }`
  };
  return axios({ ...baseRequestWithAuth(), data });
}

export {
  createTweet,
  getCurrentUser,
  getUserTweets,
  signUp,
  signIn,
  updateBio
};
