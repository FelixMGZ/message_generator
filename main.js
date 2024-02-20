//theme: health, money and love.

const randomNumber = () => {
    return Math.floor(Math.random() * 3);
}

const luckToday = () => {

    const luck = ['health' , 'money', 'love']

    return luck[randomNumber()]

}

console.log(randomNumber());
console.log(luckToday());

