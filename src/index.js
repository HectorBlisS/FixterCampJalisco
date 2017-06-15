document.getElementById('saludo').innerHTML = "Kiubo?";

$('#loader').fadeOut();


function pachurrado(){
	iziToast.success({
		title:"BlisS",
		message: "Me pachurraste!"
	});
}

function getBooks(){
	$.get('https://erik.fixter.org/products/', function(respuesta){
		// console.log(respuesta[1].name);
		for(var i=0;i<respuesta.length;i++){
			$('#lista').append('<li>'+respuesta[i].name+ '</li>');
		}
	});
}






