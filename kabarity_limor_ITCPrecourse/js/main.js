//replace with your user:
const GITHUB_URL = "https://api.github.com/users/LimKab";

const profileImage = document.getElementById("profile-image");
const profileName = document.getElementById("profile-name");

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // update the profileImage and profileName with the information retrieved.
    profileImage.src = data.avatar_url;
    profileName.innerText = data.name;

  });

function fade() {
  profileImage.classList.toggle("fade");
  profileName.classList.toggle("fade");
}

profileImage.addEventListener("click", fade);
profileName.addEventListener("click", fade);