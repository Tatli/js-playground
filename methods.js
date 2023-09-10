// # Methods

/*

Object properties with they type function are called methods.
This allows grouping together functionality with a particular object.

Methods can be accessed like other properties by either dot- or bracket notation.

*/

// Example

/*
const user = {
  id: 0,
  name: 'Tatli',
  logout: function logout() {
    // The references are calculated when JS is run (on runtime)
    // based on what the function is "bound" to
    logoutUserId(this.id);
  },
};

// const logoutUser = user.logout;
// logoutUser();

user.logout(); // Calling the user.logout method with dot notation
user['logout'](); // Calling the user.logout method with the bracket notation

*/
