
let library = []


let addBook = document.getElementById('addBook');
let formDiv = document.getElementById('formDiv');
let form = document.getElementById('form');
let dimBg = document.getElementById('dimBg')
let libraryDiv = document.getElementById('library')

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

ConstructBook.prototype.changeReadStatus = function () {
    if (this.readStatus==='read') {
        this.readStatus='unread';
    } else if (this.readStatus==='unread') {
        this.readStatus='read';
}
};



form.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = document.getElementById('readStatus').checked;
    readStatus = (readStatus===true) ?  'read' : 'unread';

    var newObj = new ConstructBook (name, author, pages, readStatus);
    library.push(newObj)
    displayObj ();
    clearForm();
    formDiv.style.display = 'none';
    dimBg.style.display = 'none';

    console.log(library)
})



function displayObj() {
    libraryDiv.innerHTML = '';
  
    library.forEach((book, index) => {
      var newObj = document.createElement('div');
      newObj.className = 'newObjs';
      newObj.setAttribute('data-id', index);
      //green/red colour change attempted here, idk if it shd tho
      if (book.readStatus === 'read') {
        newObj.style.backgroundColor = 'green';
      } else {
        newObj.style.backgroundColor = 'red';
      }
  
      for (var key in book) {
        if (book.hasOwnProperty(key)) {
          let newDetail = document.createElement('div');
          newDetail.setAttribute('data-id', key); // Corrected line
          newDetail.className = 'details';
          newDetail.textContent = book[key];
          newObj.appendChild(newDetail);
        }
      }
      libraryDiv.appendChild(newObj);
      let readBtn = document.createElement('button');
      readBtn.className = 'readBtn'; // Make sure the class name is a string
      readBtn.textContent = 'Change Read Status';
      readBtn.addEventListener('click', (e) => {
        var book = e.target.parentNode;
        var bookId = parseInt(book.dataset.id);
        library[bookId].changeReadStatus();
        if (library[bookId].readStatus === 'read') {
          newObj.style.backgroundColor = 'green';
        } else if (library[bookId].readStatus === 'unread') {
          newObj.style.backgroundColor = 'red';
        }
        displayObj ()
        console.log(library)
      });
      newObj.appendChild(readBtn);
  
      let deleteBtn = document.createElement('button');
      deleteBtn.className = 'deleteBtn'; // Make sure the class name is a string
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', (e) => {
        var book = e.target.parentNode;
        var bookId = parseInt(book.dataset.id);
        book.remove();
        library.splice(bookId, 1);
        displayObj();
        console.log(library)
      });
      newObj.appendChild(deleteBtn);
    });
  }