const form = document.querySelector("#sign-up-form");
const input = document.querySelectorAll("input")

const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email")
    const password = formData.get("password")
    const confirmPassword = formData.get("password-confirm");

    if(!emailregex.test(email)){
        alert("wrong email format");

        return;
    }

    if(!password || password.length < 8 || password.length > 36){
         alert("Password must be at least 8 characters long.");
       
        return;

       
          
    }

    if(password !== confirmPassword){
        alert("wrong password");

        return;
    }

    localStorage.setItem("login",  JSON.stringify({
        email, 
        password,
    }));

    location.href = "/login.html"

})