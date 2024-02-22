//theme: health, money and love.

const randomNumber = () => {
    const num = Math.floor(Math.random() * 4) + 1;
    return num
}

const luckToday = () => {
    let num = Math.floor(Math.random() * 3);
    const luck = ['health' , 'money', 'love']

    return luck[num]

} 

const healthMessage = () => {
    let message = ' '
    switch (randomNumber()){
        case 1:
            message = 'la fortuna te acompañara en cada paso hacia una salud radiante y duradera.'
            break;
        case 2:
            message = 'la suerte te sonríe con cada decisión saludable que tomes, guiándote hacia un bienestar pleno.'
            break;
        case 3:
            message = 'la buena fortuna te abrace en tu camino hacia una vida llena de vitalidad y equilibrio físico y mental.'
            break;
        default: 
            message = 'no hay nada escrito aun sobre la salud hoy'            
    }
    return message
}

const moneyMessage = () => {
    let message = ' '
    switch (randomNumber()){
        case 1:
            message = 'la fortuna te sonríe y tus esfuerzos financieros se vean recompensados con abundancia y prosperidad.'
            break;
        case 2:
            message = 'la suerte esta de tu lado en cada inversión y cada paso hacia la estabilidad económica que deseas'
            break;
        case 3:
            message = 'la buena fortuna te acompaña en tu camino hacia la riqueza y la seguridad financiera, permitiéndote alcanzar tus metas con éxito.'
            break;
        default: 
            message = 'no hay nada escrito aun sobre dinero hoy'            
    }
    return message
}

const loveMessage = () => {
    let message = ' '
    switch (randomNumber()){
        case 1:
            message = 'la suerte te guía hacia un amor sincero y duradero que llena tu vida de felicidad y plenitud'
            break;
        case 2:
            message = 'la fortuna te bendice con un amor que te hara crecer, te inspirara y te hara sentir completo en cada momento'
            break;
        case 3:
            message = 'la buena fortuna te acompaña en el camino del amor, iluminando tu sendero y trayendo a tu vida el romance y la conexión que anhelas'
            break;
        default: 
            message = 'no hay nada escrito aun sobre amor hoy'            
    }
    return message
}

const message = () => {
    const todayLuck = luckToday();
    switch (todayLuck) {
        case 'health':
            return `Tu suerte de hoy es el: ${todayLuck}, y te dice: ${healthMessage()}`;
        case 'money':
            return `Tu suerte de hoy es el: ${todayLuck}, y te dice: ${moneyMessage()}`;
        case 'love':
            return `Tu suerte de hoy es el: ${todayLuck}, y te dice: ${loveMessage()}`;
        default:
            return 'Hoy no se ha definido ningún mensaje de suerte';
    }
}

console.log(message())


