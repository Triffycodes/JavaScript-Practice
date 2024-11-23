// Call in JS

function setUserName(username){

    this.username = username;
    console.log("called");

}

function user(username,email,password){
    // call function is used to call this perticular instances in setUserName function
    setUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const users = new user("Adarsh","ashankar@google.com",123)
console.log(users)