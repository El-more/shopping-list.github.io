var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector ("ul");


function inputLength(){
	return input.value.length;
}

function createListElement(){
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	ul.appendChild(div);
	div.append(li,delButton);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.innerHTML="Delete";
	delButton.addEventListener("click", function () {
    	div.remove();  
    });
    li.addEventListener("click", function () {
    	li.classList.toggle("done");
    });
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(event){
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterEnter);