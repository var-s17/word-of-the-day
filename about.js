document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = sessionStorage.getItem("loggedIn");

    if (!isLoggedIn) {
        alert("Please log in first!");
        window.location.href = "index.html"; // Redirect to Home
    } else {
        console.log("About Page Loaded Successfully");
    }
});
