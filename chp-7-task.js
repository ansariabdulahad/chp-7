// select elements
let main = document.querySelector('.main');

// create elements
let button = document.createElement('button');
let h1 = document.createElement('h1');
let div = document.createElement('div');
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');
let button4 = document.createElement('button');

button.innerText = "Click me to know about me !";

// onclick handler
button.onclick = () => {
    button.innerText = "My name is Abdul Ahad Ansari !";
    setTimeout(() => {
        button.innerText = "Click me to know about me !";
    }, 5000);
}
main.append(button);

h1.innerText = "CLICK ON BELOW BUTTONS STEP BY STEP !";
h1.classList.add('title');
main.append(h1);
main.append(div);

div.append(button1);
button1.classList.add('btn');
button1.onclick = () => {
    button1.innerText = "I"

    setTimeout(() => {
        button1.innerText = "";
    }, 5000);
}

div.append(button2);
button2.classList.add('btn');
button2.onclick = () => {
    button2.innerText = "AM"

    setTimeout(() => {
        button2.innerText = "";
    }, 5000);
}

div.append(button3);
button3.classList.add('btn');
button3.onclick = () => {
    button3.innerText = "LEARNING"

    setTimeout(() => {
        button3.innerText = "";
    }, 5000);
}

div.append(button4);
button4.classList.add('btn');
button4.onclick = () => {
    button4.innerText = "JAVASCRIPT"

    setTimeout(() => {
        button4.innerText = "";
    }, 5000);
}