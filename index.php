<?php require_once 'init.php' ?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" type="image/png" href="icon.png">
	<link rel="stylesheet" type="text/css" href="fmwk/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="fmwk/fontawesome/css/all.min.css">
	<link id="tema" rel="stylesheet" type="text/css" href="cascata_modo_claro.css">
	<title>Sistema</title>
</head>
<body>
	<?php require SISTEMA_INCLUDE.DS.'menu.php' ?>
	<div class="container">
		<div class="tab-content" id="pills-tabContent">
			<?php require INCLUDE_MODAL.DS.'modalPendentes.php' ?>
			<?php require INCLUDE_MODAL.DS.'modalAndamento.php' ?>
			<?php require INCLUDE_MODAL.DS.'modalAdicionar.php' ?>
			<div class="pedidos tab-pane fade show active" id="pills-pedidos" role="tabpanel" aria-labelledby="pills-pedidos-tab">
				<?php require SISTEMA_INCLUDE.DS.'modificarPedidos.php' ?>
				<div class="row">
					<?php require INCLUDE_PAGE.DS.'pedidos_Pendentes.php' ?>
					<?php require INCLUDE_PAGE.DS.'pedidos_EmAndamento.php' ?>
					<?php require INCLUDE_PAGE.DS.'pedidos_Finalizados.php' ?>
				</div>
			</div>
			<div class="financeiro tab-pane fade" id="pills-financeiro" role="tabpanel" aria-labelledby="pills-financeiro-tab">
				<?php require INCLUDE_PAGE.DS.'financeiro_Saldo.php' ?>
				<?php require INCLUDE_PAGE.DS.'financeiro_Variacao.php' ?>
			</div>
		</div>
	</div>
	<script src="fmwk/bootstrap/js/jquery-3.4.1.slim.min.js"></script>
	<script src="fmwk/bootstrap/js/bootstrap.min.js"></script>
	<script src="roteiro.js"></script>
	<?php require SISTEMA_INCLUDE.DS.'footer.php'?>
</body>
</html>