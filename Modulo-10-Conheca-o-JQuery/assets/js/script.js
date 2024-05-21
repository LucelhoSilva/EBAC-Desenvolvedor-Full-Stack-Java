$(document).ready(function () {
  $("#adicionarTarefa").click(function () {
    var tarefa = $("#tarefaInput").val();
    if (tarefa !== '') {
      var novaTarefa = $("<li></li>").text(tarefa);
      novaTarefa.append("<button class='remover'>Remover</button>");
      novaTarefa.append("<button class='concluir'>Concluir</button>");
      $("#listaTarefas").append(novaTarefa);

      novaTarefa.find(".remover").click(function () {
        $(this).parent().remove();
      });

      novaTarefa.find(".concluir").click(function () {
        $(this).parent().css('text-decoration', 'line-through red 3px');
      });

      $("#tarefaInput").val("");
    }
  });
});
