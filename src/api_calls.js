import axios from "axios";

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

export { signUp }
