const students = [
    { userid: "Deep123", password: "Deep123" },
    { userid: "student002", password: "mypassword" },
    { userid: "student003", password: "college2025" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userid = document.getElementById('userid').value.trim();
    const password = document.getElementById('password').value;

    const user = students.find(u => u.userid === userid && u.password === password);

    if (user) {
        // Successful login, redirect to home page
        window.location.href = "home.html";
    } else {
        document.getElementById('errorMsg').textContent = "Invalid User ID or Password!";
    }
});
