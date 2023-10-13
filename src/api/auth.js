import axios from '@/api/axios';

const register = ({...credentials}) => {
  console.log(credentials);
  return axios.post('/users', {user: {...credentials}});
};

export default register;

// https://conduit.productionready.io/api/users

// Response
// {
//     "user": {
//         "email": "dsfsdfsdf@asdasd.as",
//         "username": "Sdjhdiwnds",
//         "bio": null,
//         "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZHNmc2Rmc2RmQGFzZGFzZC5hcyIsInVzZXJuYW1lIjoiU2RqaGRpd25kcyJ9LCJpYXQiOjE2OTcwMjM0MTMsImV4cCI6MTcwMjIwNzQxM30.okC44M9u9jRgCG33xcF-59OcVkukeNq3GkbwY3Q-bn4"
//     }
// }

// Payload

// user: {
//     username: "Sdjhdiwnds",
//     email: "dsfsdfsdf@asdasd.as",
//     password: "123123123"
// }
