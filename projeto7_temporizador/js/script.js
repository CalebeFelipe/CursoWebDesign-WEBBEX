(function(){
    //RELÓGIO
    let $inputRelogio = document.querySelector('#relogio');
    let data, horas, minutos, segundos;

    function formataNumero(t){
        return t < 10 ? `0${t}` : t
    }

    function formatarHorario(){
        data = new Date();
        horas = formataNumero(data.getHours());
        minutos = formataNumero(data.getMinutes());
        segundos = formataNumero(data.getSeconds());

        return `${horas}:${minutos}:${segundos++}`
    }

    function mostraRelogio(){
        $inputRelogio.value = formatarHorario()
    }

    setInterval(mostraRelogio
        , 1000)


    //Cronômetro
    let $inputCronometro = document.querySelector('#cronometro')
    let $btnIniciar = document.querySelector('#iniciar') 
    let $btnPausar = document.querySelector('#pausar') 
    let $btnParar = document.querySelector('#parar') 

    $btnIniciar.addEventListener('click', iniciar)
    $btnPausar.addEventListener('click', pausar)
    $btnParar.addEventListener('click', parar)
    
    let intervalo = null;
    let segundo, centesimo, minuto;

    let timestampClickIniciar = 0;
    let timestampClickPausar = 0;
    let timestampTempoDecorrido = 0;
    let rodando = false;



    function iniciar(){
        if(rodando) return
        parar()
        timestampClickIniciar = Date.now()
        iniciarCronometro()
        rodando = true
    }

    function iniciarCronometro(tempoDecorrido = 0){
        
        intervalo = setInterval(function(){
            let timestampAgora = Date.now();
            let diferenca = timestampAgora - timestampClickIniciar;

            $inputCronometro.value = formataTimestamp(diferenca + tempoDecorrido);
        }, 100)
    }

    function formataTimestamp(ms){
        const umMinuto = 60 * 1000



        if(ms < 1000){
            return ms
        } else if(ms < umMinuto){
            segundo = parseInt(ms/1000)
            centesimo = ms - (segundo*1000)

            return `${segundo}:${centesimo}`
        } else {
            minuto = parseInt(ms / umMinuto)

            //função recursiva
            return `${minuto}:${formataTimestamp( ms - minuto * umMinuto)}`
        }
    }

    function pausar(){
        if(!$inputCronometro.value) return
        if(rodando){
            clearInterval(intervalo)
            timestampClickPausar = Date.now()
            timestampTempoDecorrido += (timestampClickPausar - timestampClickIniciar)
            
        } else {
            timestampClickIniciar = Date.now()
            iniciarCronometro(timestampTempoDecorrido)
            $btnPausar.textContent = 'Pausar'
        }

        rodando = !rodando
    }

    function parar(){
        $inputCronometro.value = ''
        timestampClickIniciar = 0
        timestampClickPausar = 0
        timestampTempoDecorrido = 0
        rodando = false
        clearInterval(intervalo)
    }

})()