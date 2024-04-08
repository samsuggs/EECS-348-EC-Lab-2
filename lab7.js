function change_color() {
	var border_R = document.getElementById("border_R").value;
	var border_G = document.getElementById("border_G").value;
	var border_B = document.getElementById("border_B").value;
	var border_width = document.getElementById("width").value;
	var bg_R = document.getElementById("background_R").value;
	var bg_G = document.getElementById("background_G").value;
	var bg_B = document.getElementById("background_B").value;
	
	var tag = document.getElementById("modified");
	tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
	tag.style.borderWidth = border_width;
	tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}

function validate(){
	var p1 = document.getElementById("p1").value;
	var p2 = document.getElementById("p2").value;
	if(p1.length < 8) {
		alert("The length of the first password is less than 8 letters!")
	} else if(p2.length < 8) {
		alert("The length of the second password is less than 8 letters!")	
	} else if(p1 != p2) {
		alert("Two passwords don't match!")
	} else {
		alert("Everything is good!")
	}
}
