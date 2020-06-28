class InviteList {
  constructor() {
    this.invites = [];
  }

  invite(name, age, document){
    this.invites.push({name: name, age:age, document:document});
  };
}

var newList = new InviteList();

document.getElementById("invite").onclick = () => {
  newList.invite(document.getElementById("#name").value, 28, 123456789);
  console.log(document.getElementById("#name").value + "Invited");
}

const invite = {place: "Uberlândia", date:"01/01/2020"};
const {place, date} = invite;
// Literal Template
console.log(place)

/*REST e SPREAD
Need to install yarn rest/spread

const invite = {place: "Uberlândia", date:"01/01/2020"};
const {place, ...rest} = invite;
You should retrieve name and a object with others informations.

const newInvite = {...invite, place: "Uberaba"};

// String Literals
console.log(`The city is ${place}.`)
*/

/* WEBPACK
yarn webpack -D
Create a file called webpack.config.js

Inside file
module.exports = {
  entry: "./main.js" //main class
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: {
      test: /\./js$/,
      exclude: /node.modules/,
      use: {
        loader: "babel-loader"
      }
    }
  }
}

yarn babel-loader -D

now you shoulf change package.json
scripts:{
  webpack --mode=development -w instead of babel ./main.js -o bundle.js -w
}

*/