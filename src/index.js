import './style.css';

const header = () => {
    const container = document.createElement('div');
    container.innerText = "HELLO WEBPACK"

    return container
}


document.body.appendChild(header())


console.log('hello')