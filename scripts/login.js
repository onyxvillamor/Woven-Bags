document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn").addEventListener("click", () => {
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        if (user !== "" && pass !== "") {
            window.alert("Welcome! " + user);
            window.location.href = "index.html";
        } else {
            window.alert("Please fill the required fields.");
        }
    });
});