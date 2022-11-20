// no longer has DOM node 'main#main'
main.remove();

// has a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement("h1");

// the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.setAttribute('id', 'victory');

// the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" 
// (with your name in place of YOUR-NAME) inside it
newHeader.textContent = 'Ogada is the champion';
