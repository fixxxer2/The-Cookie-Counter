
//set count

if(localStorage.getItem("x") == null) {
	localStorage.setItem("x", 0)
}

//update count
function update() {
	document.getElementById("x").innerHTML = localStorage.getItem("x");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("x", (Number(localStorage.getItem("x")) + 1));
	update();
}

//reset count
function reset() {
	if (confirm("Change the Week?")) {
    	localStorage.setItem("x",0);
		update();
	}
}