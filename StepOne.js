

function soundSignal() {
	setTimeout("BeepBeep, 5000")
};



function BeepBeep() {
	var beep = new Audio("beep-08b.wav"); 
	beep.play();

};

var pictures = [ 
	"stereogramOne.jpg",
	"stereogramTwo.jpg",
	"stereogramThree.jpg", 
	"stereogramFour.jpg",
	"stereogramFive.jpg",
	"stereogramSix.jpg", 
	"stereogramSeven.jpg",
	"stereogramEight.jpg",
	"stereogramNine.jpg", 
	"stereogramTen.jpg",
	"stereogramElevenjpg",
	"stereogramTwelve.jpg", 
	"stereogramThirteen.jpg",
	"stereogramFourteen.jpg",
	"stereogramFifteen.jpg", 
	"stereogramSixteenjpg",
	"stereogramSeventeen.jpg", 
	"stereogramEighteen.jpg",
	"stereogramNineteen.jpg",
	"stereogramTwenty.jpg",  
	];


	
 
 
 

function New() {

	var num =  Math.round(Math.random()*pictures.length + 1);
	document.getElementById("stereogram").innerHTML='<img id="pic" src="'+ pictures[num] + '"/>';
	document.getElementById("last").innerHTML = "Hover over the image to make it shake - some people find it easier this way. Also, click the button before You start- it'll give You a beep after the minimum time, but enjoy the picture as long as You want to. If You're the owner of those pictures, please contact me.";


	
};



