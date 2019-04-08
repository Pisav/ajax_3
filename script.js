function ajax() {
	let str = question.value;
	console.log(str);//debug
	if (str == "") {
		document.getElementById("txtHint").innerHTML = "";
		return;
	}
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			txtHint.innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","getdata.php?q="+str,true);
	xmlhttp.send();
}


let question = document.getElementById('question');
question.addEventListener("keyup", klik);

function klik(){
	console.log('test');
	ajax(question);

}