function Atualizar(){
    var msg = document.getElementById('textHora');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();      
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    if(hora<10 && minutos<10 && segundos<10){
        textoHora.innerHTML = `Agora são 0${hora}:0${minutos}:0${segundos}`
    }
    else if(hora<10 && minutos<10){
        textoHora.innerHTML = `Agora são 0${hora}:0${minutos}:${segundos}`
    }
    else if(hora<10 && segundos<10){
        textoHora.innerHTML = `Agora são 0${hora}:${minutos}:0${segundos}`
    }
    else if(hora<10){
        textoHora.innerHTML = `Agora são 0${hora}:${minutos}:${segundos}`
    }
    else if(minutos<10 && segundos<10){
        textoHora.innerHTML = `Agora são ${hora}:0${minutos}:0${segundos}`
    }
    else if(minutos<10){
        textoHora.innerHTML = `Agora são ${hora}:0${minutos}:${segundos}`
    }
    else if(segundos<10){
        textoHora.innerHTML = `Agora são ${hora}:${minutos}:0${segundos}`
    }
    else{
        textoHora.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    }    
    if(hora>=6 && hora<=12){
        img.src = './assets/Manha.jpeg'
        document.body.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(31, 143, 143, 0.01) 1%, rgb(0, 255, 255) 100%);';         
    }
    else if (hora>12 && hora <=18){
        img.src = './assets/Tarde.jpeg'        
        document.body.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(31, 143, 143, 0.01) 1%, rgb(141, 85, 0) 100%);';
    }
    else{
        img.src = './assets/Noite.jpeg'
        document.body.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 1%, rgb(1, 7, 34) 100%);'
    }
    setTimeout('Atualizar()',500);
}