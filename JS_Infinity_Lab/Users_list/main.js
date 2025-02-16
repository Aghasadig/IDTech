let searchInput = document.querySelector(".search-line");
let userProfiles = document.querySelectorAll(".user-profile-box");
let sectionUsers = document.querySelector(".section-users");

searchInput.addEventListener("input", () => {
    let searchValue = searchInput.value.toLowerCase();
    let hasMatch = false;

    userProfiles.forEach(profile => {
        let userName = profile.querySelector(".user-info p:nth-child(1)").innerText.toLowerCase();
        let userLocation = profile.querySelector(".user-info p:nth-child(2)").innerText.toLowerCase();
        let tags = Array.from(profile.querySelectorAll(".user-info span"))
                        .map(tag => tag.innerText.toLowerCase());
        
        if (userName.includes(searchValue) || userLocation.includes(searchValue) || tags.some(tag => tag.includes(searchValue))) {
            profile.style.display = "block";
            hasMatch = true;
        } else {
            profile.style.display = "none";
        }
    });

    if (!hasMatch) {
        if (!document.querySelector(".no-content")) {
            let noContentMessage = document.createElement("p");
            noContentMessage.classList.add("no-content");
            noContentMessage.innerText = "No content";
            sectionUsers.appendChild(noContentMessage);
        }
    } else {
        let noContentMessage = document.querySelector(".no-content");
        if (noContentMessage) noContentMessage.remove();
    }
});