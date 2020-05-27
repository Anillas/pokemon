let tema;
tema = localStorage.getItem('tema');
if (tema === 'escuro'){
	var estilo = document.getElementById("tema");
    estilo.href = "cascata_modo_escuro.css";
    $("#mudarTema").prop("checked", true);
}else{
	var estilo = document.getElementById("tema");
    estilo.href = "cascata_modo_claro.css";
}
$('#mudarTema').click(function() {
	if ($(this).is(':checked')) {
		var estilo = document.getElementById("tema");
		estilo.href = "cascata_modo_escuro.css";
		localStorage.setItem('tema', 'escuro');
		tema = localStorage.getItem('tema');
	}else if ($(this).is(':not(:checked)')) {
		var estilo = document.getElementById("tema");
		estilo.href = "cascata_modo_claro.css";
		localStorage.setItem('tema', 'claro');
		tema = localStorage.getItem('tema');
	}
});
function deletarPedidos(){
	var bdel = document.getElementById("bdel");
	var config = document.getElementById("config")
	config.style = "display: none;";
	bdel.style = "display: block;";
	var view = document.getElementsByClassName("view");
	var select = document.getElementsByClassName("select");
	var i;
	for (i = 0; i < view.length; i++) {
		view[i].style = "display: none;";
		select[i].style = "display: block;";
	}
}
function cancelarDeletarPedidos(){
	var bdel = document.getElementById("bdel");
	var config = document.getElementById("config")
	config.style = "display: block;";
	bdel.style = "display: none;";
	var view = document.getElementsByClassName("view");
	var select = document.getElementsByClassName("select");
	var i;
	for (i = 0; i < select.length; i++) {
		view[i].style = "display: block;";
		select[i].style = "display: none;";
	}
	var check = document.getElementsByClassName("check");
	for (i = 0; i < check.length; i++){
		check[i].checked = false;
	}
}
function paginaPedido() {
	document.getElementById("nomePagina").innerHTML = "Sistema - Pedidos";
}
function paginaFinanceiro() {
	document.getElementById("nomePagina").innerHTML = "Sistema - Finanças";
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
$('#modalADC').on('hidden.bs.modal', function (e) {
	$("#form-modalADC").removeClass("was-validated");
	$("#nomeCliente").val("");
	$('#selecao').prop('selectedIndex',0);
	$("#descricao").val("");
})