document.getElementById('saludo').innerHTML = "Kiubo?";

$('#loader').fadeOut();


function Success(){
	iziToast.success({
		title:"Oswaldinho",
		message: "Tiene hambre"
	});
}
function getBooks(){
	$.get('https://erik.fixter.org/products/', function(respuesta){
		for(i=0;i<respuesta.length;i++){
			$('#lista').append('<li>' + respuesta[i].name + '</li>')
		}
	});
}

//Iniciamos con firebase

function logIn(){

	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  console.log('usuario:',user)
	  $('#name').text(user.displayName)
	  $('#img').attr('src', user.photoURL)
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
}