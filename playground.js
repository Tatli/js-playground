// simple object
let object = {
  key: 'value',
};

console.log(object.key); // value

let user = {
  name: '',
  email: '',
  password: '',
  joinDate: '',
};

console.log(user.joinDate);

const userName = 'Ninja';
const userEmail = 'example.mail@gmail.com';
const userPass = 'password123';
const userJoinDate = new Date.toJSON();

function registerUser(userN, userP, userE, userJoin) {
  user.userName = userN;
  user.password = userP;
  user.email = userE;
  user.joinDate = userJoin;
}

registerUser(userName, userPass, userEmail, userJoinDate);

console.log(user.joinDate);
