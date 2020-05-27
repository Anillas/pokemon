<div class="modal fade" id="modalADC" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Insira os dados do pedido</h5>
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body modalADC">
        <form id="form-modalADC" class="formADC needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-8">
      <label for="nomeCliente">Nome do cliente</label>
      <input type="text" class="form-control" id="nomeCliente" placeholder="Nome do cliente" required>
      <div class="invalid-feedback">
        Por favor, insira o nome do cliente.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-8">
      <label for="selecao">Roupa</label>
      <select class="custom-select" id="selecao" required>
        <option selected disabled value="">Escolha</option>
        <option>Camiseta</option>
        <option>Calça</option>
        <option>Short</option>
        <option>Casaco</option>
      </select>
      <div class="invalid-feedback">
        Por favor, selecione uma peça de roupa.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-8">
      <label for="descricao">Trabalho a fazer</label>
    <textarea type="text" class="form-control" id="descricao" placeholder="Descreva o que precisa ser feito" rows="4" cols="30"></textarea>
    </div>
  </div>
  <button type="button" class="btn editar" data-dismiss="modal">Cancelar</button>
  <button type="submit" class="btn adicionar">Adicionar</button>
</form>
      </div>
      <!--div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div-->
    </div>
  </div>
</div>