//Array Destructuring
// const alphabets = ["A", "B", "C", "D", "E", "F"];
// const numbers = ["1", "2", "3", "4", "5", "6"];
// const a = alphabets[0];
// const b = alphabets[1];

// function sumAndMultiply(a, b) {
//   return [a + b, a * b];
// }
// console.log(sumAndMultiply(2, 4));

//Object Destructuring

// const personOne = {
//   name: "Muideen",
//   age: 24,
//   address: {
//     city: "Osogbo",
//     state: "Osun State",
//   },
// };

// const personTwo = {
//   name: "Afeez",
//   age: 20,
//   favoriteFood: "Watermelon",
//   address: {
//     city: "UK",
//     state: "Miami",
//   },
// };

// const { name, age } = personTwo;
// console.log(name);
// console.log(age);

//MODULE

// Basic structure

// (function() {
//  // Declare private vars and functions

//    return {
//      // Declare public var and functions
//    }
//  })();

// // STANDARD MODULE PATTERN
// const UiCtrl = (function() {
//   let text = 'Hello World'
//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;

//   return {
//     callChangeText: function() {
//       changeText();
//        console.log(text);
//     }
//   }
// })();
// UiCtrl.callChangeText()

const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };
  this.change = function (state) {
    currentState = state;
  };
};

// Home State
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
     <div class="jumbotron">
     <h1 class="display-3">Hello, world!</h1>
     <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
     <hr class="my-4">
     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
     <p class="lead">
       <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
     </p>
   </div>
   `;
};
// About State
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
    <p>This is the about page</p>
`;
};

// Contact State
const contactState = function (page) {
  document.querySelector("#heading").textContent = "Contact Us";
  document.querySelector("#content").innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
};
// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();
// UI Vars
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

// Home
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});
// About
about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});
