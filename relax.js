function intro() {
  	document.getElementById("header").innerHTML = "Hello, new friend!";
  	document.getElementById("paragraphOne").innerHTML = "Let me introduce You to our spa. The whole process contains three steps: stretching, palming and finally, exercises with stereographs. Have You got any questions? ";
	document.getElementById("buttonOne").innerHTML = "Ehmm.. what are those?";
	document.getElementById("buttonOne").addEventListener("click", explenation);
	document.getElementById("buttonTwo").innerHTML = "No, let's start!";
	var con = document.getElementById("buttonTwo");
	con.setAttribute("href", "stepOne.html");
};

function explenation() {
	alert("Ohh come on! Just give it a try!");
};


