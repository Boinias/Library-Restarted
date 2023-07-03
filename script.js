


let addBook = document.getElementById('addBook');
let form = document.getElementById('formDiv');
let dimBg = document.getElementById('dimBg')
addBook.addEventListener('click', () => {
    form.style.display = 'flex';
    dimBg.style.display = 'flex';
})

dimBg.addEventListener('click', () => {
    form.style.display = 'none';
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