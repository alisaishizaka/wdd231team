async function loadUsers() {
    try {
        const response = await fetch("./data.json");

        if (!response.ok) {
            throw new Error("Could not load data.json");
        }

        const users = await response.json();

        localStorage.setItem("users", JSON.stringify(users));

        console.log("Users saved to localStorage");
    } catch (error) {
        console.error(error);
    }
}

loadUsers();

const users = JSON.parse(localStorage.getItem("users"));

console.log(users);

const form = document.querySelector("#signupForm");

form.addEventListener("submit", saveUser);

function saveUser(event) {
    event.preventDefault();

    const user = {
        id: document.querySelector("#userId").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        interest: document.querySelector("#interest").value
    };

    const users =
        JSON.parse(localStorage.getItem("#users")) || [];

    users.push(user);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    form.reset();

    console.log("User saved:", user);
}