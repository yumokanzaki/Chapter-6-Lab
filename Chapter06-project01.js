function isBlank(input){
    if(input.type=="checkbox"){
	if(input.checked)
	    return false;
	return true;
    }
    if (input.value==""){
	return true;
    }
    return false;
}

function makeRed(div){
   	div.style.backgroundColor="#AA0000";
	div.parentNode.style.backgroundColor="#AA0000";
	div.parentNode.style.color="#FFFFFF";		
}
function makeClean(div){
	div.parentNode.style.backgroundColor="#AA0000";
	div.parentNode.style.color="#FFFFFF";		
}

window.onload = function(){
    var Form = document.getElementById("mainForm");
    var MustHave = document.querySelectorAll(".required");
    for (var i=0; i < MustHave.length; i++){
	MustHave[i].onfocus = function(){
	    this.style.backgroundColor = "#EEEE00";
	}
    }
    Form.onsubmit = function(e){
	var MustHave = document.querySelectorAll(".required");
	for (var i=0; i < MustHave.length; i++){
	    if( isBlank(MustHave[i]) ){
		e.preventDefault();
		makeRed(MustHave[i]);
	    }
	    else{
		makeClean(MustHave[i]);
	    }
	}
    }
}