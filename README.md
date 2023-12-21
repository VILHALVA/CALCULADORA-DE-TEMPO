# CALCULADORA DE TEMPO
🆎CONVERTE SEGUNDOS EM MINUTOS, HORAS, DIAS, SEMANAS, MESES E ANOS. 

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA)
[![GitHub Repo stars](https://img.shields.io/badge/MEUS-CURSOS-03A9F4?logo=github)](https://github.com/VILHALVA?tab=repositories&q=CURSO&type=public&language=&sort=) <br>

<img src="https://pt.seaicons.com/wp-content/uploads/2015/11/clock-icon.png" align="center" width="280"> <br>

## DESCRIÇÃO:
Esse é um aplicativo web simples chamado "Conversor de Tempo". Ele consiste em uma página HTML com um formulário onde o usuário pode inserir um valor de tempo em segundos. Quando o botão "Converter Tempo" é clicado, a função JavaScript `converterTempo()` é acionada. Esta função realiza cálculos para converter o tempo inserido em segundos para minutos, horas, dias, semanas, meses e anos, usando algumas aproximações.

Aqui está uma descrição do que o código faz:

1. **HTML:**
   - A página HTML contém um formulário simples com um campo de entrada para o tempo em segundos e um botão para acionar a conversão.
   - O resultado da conversão será exibido no elemento de rodapé (`<footer>`).

2. **JavaScript (`CODIGO.js`):**
   - A função `converterTempo()` é chamada quando o botão é clicado.
   - Dentro da função, o tempo em segundos é capturado do formulário.
   - São realizados cálculos para converter esse tempo em minutos, horas, dias, semanas, meses e anos.
   - Os resultados são exibidos no elemento de rodapé (`<footer>`) da página.

3. **Aproximações utilizadas:**
   - O código usa aproximações para converter tempo em meses e anos, assumindo que um mês tem 30 dias e um ano tem 365 dias.

Em resumo, o aplicativo permite que o usuário insira um valor de tempo em segundos e, ao clicar no botão, obtenha a equivalência desse tempo em diferentes unidades, como minutos, horas, dias, semanas, meses e anos, com base em algumas simplificações.