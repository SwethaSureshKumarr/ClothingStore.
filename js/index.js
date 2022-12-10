function displayUserProfile() {
    var profile = document.getElementById("profileDetails");
    if (profile.style.display === "none") {
        profile.style.display = "block";
    } else {
        profile.style.display = "none";
    }
}