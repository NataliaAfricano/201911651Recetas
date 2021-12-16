
console.log("Script loaded!")

var form1 = document.getElementById("form-1"); 
var content = document.getElementById("answer")

form1.addEventListener("submit", function(event){
	event.preventDefault();
	
	var nameLocal = document.getElementById("input_name").value;
	var lastnameLocal = document.getElementById("input_lastname").value;
	var phoneLocal = document.getElementById("input_phone").value;
	var addressLocal = document.getElementById("input_address").value;

	var marcador = {
		nameL : nameLocal,
		lastnameL : lastnameLocal,
		phoneL : phoneLocal,
		addressL : addressLocal
	}

	if (localStorage.getItem('marcadores') === null) {
		var marcadores = [];

		//agregar al arreglo
		marcadores.push(marcador);
		//guardar en el localstorage
		localStorage.setItem('marcadores',JSON.stringify(marcadores));
	}else{
		var marcadores = JSON.parse(localStorage.getItem('marcadores'));
		//agregar al arreglo
		marcadores.push(marcador);
		//guardar en el localstorage
		localStorage.setItem('marcadores',JSON.stringify(marcadores));
	}

	//resetear campos
	document.getElementById("form-1").reseat();
}); 

/*

form1.addEventListener("submit", function(event){
	event.preventDefault();
	//Mostrar por consola
		var name = form1.elements["input_name"].value
		var lastname = form1.elements["input_lastname"].value;
		var phone = form1.elements["input_phone"].value;
		var address = form1.elements["input_address"].value;
		//var birthday= form1.elements["input_birthday"].value;
		//var height = form1.elements["input_height"].value;
		//var mail = form1.elements["input_mail"].value;
		//var verify_mail = form1.elements["input_verify_mail"].value;
		//var password = form1.elements["input_password"].value;
		//var verify_password = form1.elements["input_verify_password"].value;
		//var bio = form1.elements["input_bio"].value;
		//var name = document.getElementById("input_name").value;
		const data = Object.fromEntries(new FormData(event.target).entries());
	
	console.log(event)
	console.log("submit");
	console.log(data) 
	getData();

}); 


//Mostrar y mandar todo el formulario

//function getAllData() {
    //const data1 = Object.fromEntries(new FormData(event.target).entries());
    
    //var outputs = document.getElementById("answer");
	    
	//outputs.innerHTML = "<p>"+ "<b> Nombre: </b>"  + data1.input_name + "<br>" 
	//					+ "<b> Apellidos: </b>"  + data1.input_lastname + "<br>" 
	//					+ "<b>Telefono: </b>"  + data1.input_phone + "<br>" 
	//					+ "<b> Direccion: </b>"  + data1.input_address + "<br>" 
	//					+ "<b> Fecha Nacimiento: </b>"  + data1.input_birthday + "<br>" 
	//					+ "<b> Estatura: </b>"  + data1.input_height + "<br>" 
	//					+ "<b> Bio: </b>"  + data1.input_bio + "<br>" 
	//					+ "<b> Email: </b>"  + data1.input_mail + "<br>" 
	//					 "</p>";
//}

//Mostrar y mandar las partes del formulario

function getData() {
    const data2 = Object.fromEntries(new FormData(event.target).entries());
    content.innerHTML = "<h5> Nombre: </h5>";
    content.innerHTML += "<p>"  + data2.input_name + "</p>"; 
    content.innerHTML += "<h5> Apellidos: </h5>";
    content.innerHTML += "<p>"  + data2.input_lastname + "</p>"; 
    content.innerHTML += "<h5> Teléfono: </h5>";
    content.innerHTML += "<p>"  + data2.input_phone + "</p>"; 
    content.innerHTML += "<h5> Dirección: </h5>";
    content.innerHTML += "<p>"  + data2.input_address + "</p>"; 
}

*/

function capture() {
	function Formulario(name,lastname,phone,address){
	   	this.name=name;
	   	this.lastname=lastname;
	   	this.phone=phone;
	   	this.address=address;
	}

	var nameCapture = document.getElementById("input_name").value;
	var lastnameCapture = document.getElementById("input_lastname").value;
	var phoneCapture = document.getElementById("input_phone").value;
	var addressCapture = document.getElementById("input_address").value;

	newForm = new Formulario(nameCapture,lastnameCapture,phoneCapture,addressCapture);
	console.log(newForm);	
	add();
}

var baseDatos=[];

function add(){
	baseDatos.push(newForm);
	console.log(baseDatos);
	document.getElementById("table").innerHTML += "<tbody>" +
												  "<td>" + newForm.name + "</td>" +
												  "<td>" + newForm.lastname  + "</td>" +
												  "<td>" + newForm.phone  + "</td>" +
												  "<td>" + newForm.address  + "</td>" +
												  "</tbody>";
};


var recipes1 = document.getElementById("section1"); 
var recipes2 = document.getElementById("section2"); 
var recipes3 = document.getElementById("section3"); 
var recipes4 = document.getElementById("section4"); 
var recipes5 = document.getElementById("section5"); 
var recipes6 = document.getElementById("section6"); 

recipes1.addEventListener("click", function(event){
	event.preventDefault();
	content.innerHTML = "<h5> Instrucciones </h5>";
	content.innerHTML += "<p>"  + "1"  + "</p>"; 
    content.innerHTML += document.getElementById("instruction1").value; 
    

}); 
 
recipes2.addEventListener("click", function(event){
	event.preventDefault();
	content.innerHTML = "<h5> Instrucciones </h5>";
    content.innerHTML += "<p>"  + "2"  + "</p>"; 
    content.innerHTML += document.getElementById("instruction2").value; 

}); 

recipes3.addEventListener("click", function(event){
	event.preventDefault();
	content.innerHTML = "<h5> Instrucciones </h5>";
    content.innerHTML += "<p>"  + "3"  + "</p>";
    content.innerHTML += document.getElementById("instruction3").value;  

}); 

recipes4.addEventListener("click", function(event){
	event.preventDefault();
	content.innerHTML = "<h5> Instrucciones </h5>";
    content.innerHTML += "<p>"  + "4"  + "</p>";
    content.innerHTML += document.getElementById("instruction4").value;  

}); 

recipes5.addEventListener("click", function(event){
	event.preventDefault();
	content.innerHTML = "<h5> Instrucciones </h5>";
    content.innerHTML += "<p>"  + "5"  + "</p>";
    content.innerHTML += document.getElementById("instruction5").value;  

}); 

recipes6.addEventListener("click", function(event){
	event.preventDefault();
	content.innerHTML = "<h5> Instrucciones </h5>";
    content.innerHTML += "<p>"  + "6"  + "</p>"; 
    content.innerHTML += document.getElementById("instruction6").value; 

}); 