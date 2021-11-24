
console.log("Script loaded!")
var form1 = document.getElementById("form-1"); 
var content = document.getElementById("answer")

form1.addEventListener("submit", function(event){
	event.preventDefault();
	//Mostrar por consola
		var name = form1.elements["input_name"].value
		var lastname = form1.elements["input_lastname"].value;
		var phone = form1.elements["input_phone"].value;
		var address = form1.elements["input_address"].value;
		var birthday= form1.elements["input_birthday"].value;
		var height = form1.elements["input_height"].value;
		var mail = form1.elements["input_mail"].value;
		var verify_mail = form1.elements["input_verify_mail"].value;
		var password = form1.elements["input_password"].value;
		var verify_password = form1.elements["input_verify_password"].value;
		var bio = form1.elements["input_bio"].value;
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
    content.innerHTML += "<p>" + data2.input_name + "</p>"; 
    content.innerHTML += "<h5> Apellidos: </h5>";
    content.innerHTML += "<p>"  + data2.input_lastname + "</p>"; 
    content.innerHTML += "<h5> Teléfono: </h5>";
    content.innerHTML += "<p>"  + data2.input_phone + "</p>"; 
    content.innerHTML += "<h5> Dirección: </h5>";
    content.innerHTML += "<p>"  + data2.input_address + "</p>"; 
    content.innerHTML += "<h5> Fecha Nacimiento: </h5>";
    content.innerHTML += "<p>"  + data2.input_birthday + "</p>"; 
    content.innerHTML += "<h5> Estatura: </h5>";
    content.innerHTML += "<p>"  + data2.input_height + "</p>"; 
    content.innerHTML += "<h5> Bio: </h5>";
    content.innerHTML += "<p>"  + data2.input_bio + "</p>"; 
    content.innerHTML += "<h5> Email: </h5>";
    content.innerHTML += "<p>"  + data2.input_mail + "</p>"; 
}

