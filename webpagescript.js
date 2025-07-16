let fullname = prompt("Hello there! What is your fullname?");
if (fullname && fullname.toLowerCase() === "raaid mustafa") {
    let a = prompt("Welcome Raaid Mustafa! How was your day?");
    if (a === "good") {
        prompt("That's great to hear! First you are required to enter the password in order to verify your identity.");
    } else if (a === "bad") {
        prompt("I'm sorry to hear that. How can I help make it better?");
        prompt("Of course, I can help you with that. Before I do that, it is necessary for you to enter the password in order to verify your identity.");
    }
} else {
    alert("You are not Raaid Mustafa, therefore you will not be allowed to enter this page.");
    alert("PARRE HO!");
}
