
let library = []


let addBook = document.getElementById('addBook');
let formDiv = document.getElementById('formDiv');
let form = document.getElementById('form');
let dimBg = document.getElementById('dimBg')

addBook.addEventListener('click', () => {
    formDiv.style.display = 'flex';
    dimBg.style.display = 'flex';
})

dimBg.addEventListener('click', () => {
    formDiv.style.display = 'none';
    dimBg.style.display = 'none';
    clearForm();
})

function clearForm () {
    let inputs =  form.getElementsByTagName('input')
    for (i = 0; i < inputs.length; i++)
    if (inputs[i].type == 'text') {
        inputs[i].value = ''
    } else if (inputs[i].type == 'tel') {
        inputs[i].value = ''
    } else {
        inputs[i].checked = false;
    }
}

function ConstructBook (name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = document.getElementById('readStatus').value;

    var newObj = new ConstructBook (name, author, pages, readStatus);

    library.push(newObj)
    console.log(library)
})