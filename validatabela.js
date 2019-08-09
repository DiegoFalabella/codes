
var filtro = document.getElementById('txt_consulta');
var tabela = document.getElementById('tabela');


myFunction = function() {


  var nomeFiltro = filtro.value;
  

  if (nomeFiltro == "") { alert("Favor informar o código do projeto") } else
 for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.indexOf(nomeFiltro) >= 0;
        //alert("texto:" + conteudoCelula);
        //alert (corresponde);
        tabela.rows[i].style.display = corresponde ? '' : 'none';
 
    }

}

filtro.onkeypress = function() { 

    var nomeFiltro = filtro.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
 
    }
 
};