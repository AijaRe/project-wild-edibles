function addSubscriber() {
  let name = prompt("What is your name?");
  let email = prompt("What is your e-mail?");
  if (name.length > 0 && email.length > 5) {
    alert(`${name}, welcome to the wild side! 🌱 We´ll be in touch!`);
  } else {
    alert(`Please enter valid data. You are welcome to join us any time!💚`);
  }
}
let subscribeButton = document.querySelector(".subscribe-button");
subscribeButton.addEventListener("click", addSubscriber);
