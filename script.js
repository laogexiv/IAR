var text = document.querySelector('.typingtext');
var messages = ["Hello", "Hi", "Hey"];
var index = 0;

function changeText() {
    typingtext.innerHTML = messages[index];
    index = (index + 1) % messages.length;
    setTimeout(changeText, 1000);
}

changeText();
