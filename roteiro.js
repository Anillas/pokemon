function change_dark() {
	var include = document.getElementById("theme");
	include.href = "cascata_dark_mode.css";
}
function change_light() {
	//var include = document.getElementById("theme");
	//include.href = "cascata_light_mode.css";
	alert("Essa opção estará disponível em breve...");
}
function odel(){
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
function cdel(){
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