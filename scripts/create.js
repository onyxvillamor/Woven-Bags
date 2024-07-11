
document.getElementById("signUpBtn").addEventListener ( "click", () => {
    let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (user !== "" && email !== "" && pass !== "") {
        window.alert("ACCOUNT CREATED! username: " + user + " email: " + email);
        window.location.href = "user.html";
    } else {
        window.alert("Please fill the required fields.");
    }
});