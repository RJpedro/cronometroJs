window.onload = function () {
    //Fazendo a criação das vars e mapeando os botões
    var segundos = 00; 
    var dez = 00; 
    var dezScript = document.getElementById("dez")
    var segundosScript = document.getElementById("segundos")
    var buttonStart = document.getElementById('btnStart');
    var buttonStop = document.getElementById('btnStop');
    var buttonReset = document.getElementById('btnReset');
    var Intervalo ;
  
    buttonStart.onclick = function() {
      //POR SEGURANÇA DAMOS OUTRO CLEAR INTERVAL AQUI PARA A VARIÁVEL INTERVALO SER LIMPA
      //E DPS DAMOS UM SETINTERVAL PARA INICIAR ELA E PASSAMOS A FUNÇÃO STARTTIMER + O VALOR DE ATRASO DE 10 MILISEGUNDOS
      clearInterval(Intervalo);
      Intervalo = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         //AQUI DAMOS UM CLEARINTERVAL PARA  A VARIÁVEL INTERVALO NOVAMENTE SER LIMPA, PORÉM COMO NÃO PASSAMOS OS 
         //VALORES DE SEGUNDOS E DEZ PARA O INDEX.PHP ELE APENAS IRÁ PAUSAR NO NUMERO EM QUE ESTAVA
         clearInterval(Intervalo);
    }
    
  
    buttonReset.onclick = function() {
        //LIMPANDO A VARIÁVEL INTERVALO, OU SEJA A VARIÁVEL INTERVALO QUE TEVE UM START COM O COMANDO "setInterval" VAI SER LIMPA
        //LOGO APÓS DARMOS ESSE COMANDO E SETARMOS TANTO A VARIÁVEL DEZ E A VARIÁVEL SEGUNDOS COMO 00 QUE FAZ A ANIMAÇÃOZINHA DE RESET
       clearInterval(Intervalo);
        dez = "00";
        segundos = "00";
      dezScript.innerHTML = dez;
      segundosScript.innerHTML = segundos;
    }
    
     
    
    function startTimer () {
      // ADICIONANDO +1 DE VALOR NA VARIÁVEL DEZ 
      dez++; 
      
      if(dez <= 9){
        // DEIXANDO O VALOR DE DEZSCRIPT NA TELA.INDEX COMO 0 PORQUE O DEZ AINDA É MENOR OU IGUAL QUE 9
        dezScript.innerHTML = "0" + dez;
      }
      
      if (dez > 9){
        // DICIONANDO VALOR NA VARIÁVEL DEZSCRIPT E ENVIANDO PARA A TELA INDEX.PHP CASO DEZ SEJA MAIOR QUE 9
        dezScript.innerHTML = dez;
        
      } 
      
      if (dez > 99) {
        // DANDO UMA MENSAGEM NO CONSOLE DIZENDO SEGUNDOS E ACRESCENTANDO OS SEGUNDOS COM O DECORRER DO TEMPO
        console.log("segundos");
        segundos++;
        // MANDANDO PARA A TELA PRINCIPAL A ATUALIZAÇÃO DOS SEGUNDOS
        segundosScript.innerHTML = "0" + segundos;
        dez = 0;
        // ENVIANDO PARA A TELA ESSE VALOR ATUALIZADO
        dezScript.innerHTML = "0" + 0;
      }
      
      if (segundos > 9){
        // SE O VALOR DE SEGUNDOSSCRIPT FOI MAIOR Q NOVE ENTÃO MANDA PARA A TELA MEU FIO
        segundosScript.innerHTML = segundos;
      }
    
    }
  }