import axios from "axios";

async function signIn(email, password) {
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
    })
}
async function signUp(username, email, password) {
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
    })
}

async function createTweet(tweet) {
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
    })
}

async function getUserTweets() {
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
    })
}

export { createTweet, getUserTweets, signUp, signIn }
