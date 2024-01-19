function converterTempo() {
    // Captura o tempo em segundos do formulário
    var tempoSegundos = document.getElementById("tempo_segundos").value;

    // Calcula o equivalente em minutos, horas, dias, semanas, meses e anos
    var tempoMinutos = tempoSegundos / 60;
    var tempoHoras = tempoMinutos / 60;
    var tempoDias = tempoHoras / 24;
    var tempoSemanas = tempoDias / 7;
    var tempoMeses = tempoDias / 30; // Aproximação de meses com 30 dias
    var tempoAnos = tempoDias / 365; // Aproximação de anos com 365 dias

    // Exibe o resultado
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML =
        "O tempo em minutos é: " + tempoMinutos.toFixed(2) + " minutos<br>" +
        "O tempo em horas é: " + tempoHoras.toFixed(2) + " horas<br>" +
        "O tempo em dias é: " + tempoDias.toFixed(2) + " dias<br>" +
        "O tempo em semanas é: " + tempoSemanas.toFixed(2) + " semanas<br>" +
        "O tempo em meses é: " + tempoMeses.toFixed(2) + " meses<br>" +
        "O tempo em anos é: " + tempoAnos.toFixed(2) + " anos";
}
