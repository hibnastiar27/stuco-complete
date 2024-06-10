AOS.init();

const toggle = document.getElementById("toggle");
const dropdown = document.getElementById("dropdown");
console.log(dropdown);

toggle.addEventListener("click", function () {
	if (toggle.classList.contains("fa-bars")) {
		toggle.classList.remove("fa-bars");
		toggle.classList.add("fa-xmark");
		dropdown.classList.toggle("hidden");
	} else {
		toggle.classList.remove("fa-xmark");
		toggle.classList.add("fa-bars");
		dropdown.classList.toggle("hidden");
	}
});


const btnDropdown = document.getElementById("btn-dropdown");
const profileDropdown = document.getElementById("profile-dropdown");

btnDropdown.addEventListener("click", function () {
	profileDropdown.classList.toggle("hidden");
});
