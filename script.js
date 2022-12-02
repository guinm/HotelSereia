function SocialToggle() {
	var ST = document.getElementById("SideMenu");
	ST.classList.toggle("open");
}

function SocialFocus(FocusedSocial) {
	var ST = document.getElementById("SideMenu");
	if (FocusedSocial == document.activeElement) {
		ST.classList.add("open");
	} else {
		ST.classList.remove("open");
	}
}