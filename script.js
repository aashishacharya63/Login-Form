function cap(){
	var alpha =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                 ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
	var a=alpha[math.floor(math.random()*71)];
	var b=alpha[math.floor(math.random()*71)];
	var c=alpha[math.floor(math.random()*71)];
	var d=alpha[math.floor(math.random()*71)];
	var e=alpha[math.floor(math.random()*71)];
	var f=alpha[math.floor(math.random()*71)];

	var final =a+b+c+d+e+f;

	document.getElementById('capt').value=final;

}
function validcap()
{
	var stg1 = document.getElementById('capt').value;
	var stg2= document.getElementById('textinput').value;
	if (stg1==stg2){
		alert ("form is validated sucessfully")
		return true;
	}else{
		alert("please enter a valid captcha.")
		return false;
	}
}

