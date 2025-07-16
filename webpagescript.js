let fullname = prompt("hello there! What is your fullname?");
if (fullname === "raaid mustafa") {
    let a = prompt("Welcome Raaid Mustafa! How was your day?").toLowerCase();
    if (a === "good") {
        prompt("That's great to hear! But first I request you to enter the password in order to verify your identity.");
    } else if (a === "bad") {
        prompt("I'm sorry to hear that. How can I help make it better?");
        prompt("Ofcourse, I can help you with that. But before I do that, it is necessary for you to enter the password in order to verify your identity.");
    }
} else {
    alert("You are not Raaid Mustafa, therefore you will not be allowed to enter this page.");
    alert("Have a good day!");
}
  