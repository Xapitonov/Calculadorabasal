$(document).on('click',function(){
	$('.collapse').collapse('hide');
	})
	

function pegarValores()
{
	  var peso =  document.getElementById("peso").value; 
      var altura =  document.getElementById("altura").value;
	  var idade =  document.getElementById("idade").value; 
	  var sexo =  document.getElementById("inputState").value; 
   	 
	 processarValores(peso,altura,idade, sexo);
}

function PrevenirRefresh()
{
	var form = document.getElementById("formulario");
	function handleForm(event) { event.preventDefault(); } 
	form.addEventListener('submit', handleForm);

}

function processarValores( peso, altura,  idade, sexo)
{
	PrevenirRefresh();
	peso2 = parseInt(peso)
	altura2 = parseInt(altura)
	idade2 = parseInt(idade)

if(!isNaN(idade) && !isNaN(altura))
	{
	switch(sexo)
		{
		case 'Masculino':

			var final = 66+(13.7 * peso2)+(5.0 * altura2)-(6.8 * idade2) 
			final = Math.round(final)
     		document.getElementById("res").innerHTML = "Seu gasto calórico é de: " + final; 

		break;
		
		case 'Feminino':
		
			var final = 665+(9.6 * peso)+(1.8 * altura)-(4.7 * idade)
			final = Math.round(final)
			document.getElementById("res").innerHTML = "Seu gasto calórico é de: " + final + " kcal"; 

		break;
				
		default:
		
		break;
		}
	}
} 
