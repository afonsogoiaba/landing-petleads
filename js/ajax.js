let campanha = 4;

function formulario_1(){
  let nome_cliente = document.querySelector('#nome_1').value;
  let telefone_cliente = document.querySelector('#telefone_1').value;
  let unidade_cliente = 1;
  var interesse = 'Cliente veio da campanha do complexo primavera, tem interesse em fazer um orçamento sobre os planos.';

  swal({
    title: "Agora falta pouco!",
    text: "Estamos enviando seus dados, aguarde um pouco para que possamos processar essas informações",
    icon: "info",
    button:  false,
    className: 'verde',
  });

  $.ajax({
    url: 'https://crm-vendas.herokuapp.com/api/indicar/campanha',
    crossDomain: true,
    type: 'POST',
    dataType: 'json',
  
    data: {
      nome_cliente: nome_cliente,
      telefone_cliente: telefone_cliente,
      unidade_cliente: unidade_cliente,
      id_campanha: campanha,
      descricao_observacao: interesse
    },
  
    success: function() {
      $('#nome_1').val("");
      $('#telefone_1').val("");

      swal({
        title: "Recebemos o seu contato!",
        text: "Em breve você terá todas as suas dúvidas respondidas.",
        icon: "success",
        button: 'beleza!',
        className: 'verde',
      });
    },
    
    error: function(){
      swal({
        title: "Whops! Houve um erro no cadastro",
        text: "Parece que você deixou de preencher algum campo do formulário :( Por favor, revise antes de enviar novamente",
        icon: "error",
        button: 'beleza!',
        dangerMode: true
      });
    },
  });  
};


$('#formulario_1').on('click', ()=>{

  formulario_1();
});