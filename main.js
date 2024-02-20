//theme: health, money and love.

const randomNumber = () => {
    return Math.floor(Math.random() * 3);
}

const luckToday = () => {

    const luck = ['health' , 'money', 'love']

    return luck[randomNumber()]

} 

const healthMessage = () => {
    const num = Math.floor(Math.random() * 4 + 1);
    switch (num){
        case 1:
            return 'la fortuna te acompañara en cada paso hacia una salud radiante y duradera.'
            break;
    case 2:
        return 'la suerte te sonríe con cada decisión saludable que tomes, guiándote hacia un bienestar pleno.'
        break;
    case 3:
        return 'la buena fortuna te abrace en tu camino hacia una vida llena de vitalidad y equilibrio físico y mental.'
        break;
    default: 
        return 'no hay nada escrito aun sobre la salud hoy'            
    }
}

const moneyMessage = () => {
    const num = Math.floor(Math.random() * 4 + 1);
    switch (num){
        case 1:
            return 'la fortuna te sonríe y tus esfuerzos financieros se vean recompensados con abundancia y prosperidad.'
            break;
    case 2:
        return 'la suerte esta de tu lado en cada inversión y cada paso hacia la estabilidad económica que deseas'
        break;
    case 3:
        return 'la buena fortuna te acompaña en tu camino hacia la riqueza y la seguridad financiera, permitiéndote alcanzar tus metas con éxito.'
        break;
    default: 
        return 'no hay nada escrito aun sobre dinero hoy'            
    }
}

const loveMessage = () => {
    const num = Math.floor(Math.random() * 4 + 1);
    switch (num){
        case 1:
            return 'la suerte te guía hacia un amor sincero y duradero que llena tu vida de felicidad y plenitud'
            break;
    case 2:
        return 'la fortuna te bendice con un amor que te hara crecer, te inspirara y te hara sentir completo en cada momento'
        break;
    case 3:
        return 'la buena fortuna te acompaña en el camino del amor, iluminando tu sendero y trayendo a tu vida el romance y la conexión que anhelas'
        break;
    default: 
        return 'no hay nada escrito aun sobre amor hoy'            
    }
}



//console.log(randomNumber());
//console.log(luckToday());

console.log(healthMessage())
