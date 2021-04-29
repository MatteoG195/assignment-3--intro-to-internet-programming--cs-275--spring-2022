
document.getElementById(`clickable`).addEventListener(`click`, clickDiv);
document.getElementById(`clickable1`).addEventListener(`click`, clickDivB);	
document.getElementById(`clickable2`).addEventListener(`click`, clickDivC);
document.getElementById(`clickable3`).addEventListener(`click`, clickDivD);	

var click1 = document.getElementById(`clickable`);
var click2 = document.getElementById(`clickable1`);
var click3 = document.getElementById(`clickable2`);
var click4 = document.getElementById(`clickable3`);

var click1stat = false; 
var click2stat = false; 
var click3stat = false; 
var click4stat = false;


function clickDiv() {
    var elementToRotate = document.getElementById(`clickable`); 
    elementToRotate.classList.toggle(`rotated90`);

    if(click1stat == true){
        click1stat = false; 
    }else{
        click1stat = true; 
    }
 
    if(click2stat == true){	
        click2.classList.toggle(`rotated90`);
        click2stat = false;  
    }else if(click3stat == true){	
        click3.classList.toggle(`rotated90`);
        click3stat = false;  
    }else if(click4stat == true){
        click4.classList.toggle(`rotated90`); 
        click4stat = false;  
    }
	
}

function clickDivB() {	
    var elementToRotate = document.getElementById(`clickable1`); 
    elementToRotate.classList.toggle(`rotated90`);

		
    if(click2stat == true){
        click2stat = false; 
    }else{
        click2stat = true; 
    }
	
    if(click1stat == true){	
        click1.classList.toggle(`rotated90`);
        click1stat = false;  
    }else if(click3stat == true){	
        click3.classList.toggle(`rotated90`);
        click3stat = false;  
    }else if(click4stat == true){
        click4.classList.toggle(`rotated90`); 
        click4stat = false;  
    }
		
		
}


function clickDivC() {	
    var elementToRotate = document.getElementById(`clickable2`); 
    elementToRotate.classList.toggle(`rotated90`);

    if(click3stat == true){
        click3stat = false; 
    }else{
        click3stat = true; 
    }

	
    if(click1stat == true){	
        click1.classList.toggle(`rotated90`);
        click1stat = false;  
    }else if(click2stat == true){	
        click2.classList.toggle(`rotated90`);
        click2stat = false;  
    }else if(click4stat == true){
        click4.classList.toggle(`rotated90`); 
        click4stat = false;  
    } 
}


function clickDivD() {	
    var elementToRotate = document.getElementById(`clickable3`); 
    elementToRotate.classList.toggle(`rotated90`);

	
    if(click4stat == true){
        click4stat = false; 
    }else{
        click4stat = true; 
    }

	
    if(click1stat == true){	
        click1.classList.toggle(`rotated90`);
        click1stat = false;  
    }else if(click2stat == true){	
        click2.classList.toggle(`rotated90`);
        click2stat = false;  
    }else if(click3stat == true){
        click3.classList.toggle(`rotated90`); 
        click3stat = false;  
    }
}

