//==================================== form handler =====================================================//

//==================================== form handler =====================================================//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIQi1FxB0AiTRXsnwjJF0DBriNNc8l5r8",
  authDomain: "studify-m.firebaseapp.com",
  databaseURL: "https://studify-m-default-rtdb.firebaseio.com",
  projectId: "studify-m",
  storageBucket: "studify-m.appspot.com",
  messagingSenderId: "42857344288",
  appId: "1:42857344288:web:fd963585581164d8fcfb45",
  measurementId: "G-YWF13Y56XC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  database.ref("contacts").push({
    name,
    email,
    message
  })
  .then(() => {
    form.reset();
    alert("Thank you for your message!");
  })
  .catch((error) => {
    alert("Oops! Something went wrong. Please try again later.");
    console.error(error);
  });
});
