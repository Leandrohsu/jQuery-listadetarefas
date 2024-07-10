$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário

        var taskText = $('#task-input').val(); // Obtém o valor do campo de entrada
        if (taskText) {
            $('#task-list').append('<li>' + taskText + '</li>'); // Adiciona uma nova tarefa à lista
            $('#task-input').val(''); // Limpa o campo de entrada
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Adiciona ou remove a classe 'completed'
    });
});
