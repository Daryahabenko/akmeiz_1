  document.getElementById('btn').onclick = function() {

      let maxPrice = document.getElementById('maxPrice').value;
      let minPrice = document.getElementById('minPrice').value;

      let books = document.querySelectorAll('.book');
      books.forEach((book) => {
          let price = parseInt(book.getAttribute('data-book'));
          if ((minPrice === '' || price >= minPrice) && (maxPrice === '' || price <= maxPrice)) {
              book.style.display='block';
          } else {
              book.style.display = 'none';
          }
      });
  };



//функция для первой кнопки 
let modal = document.getElementById("myModal1");

let btn = document.getElementById("button1");

let span1 = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span1.onclick = function() {
  console.log(1245)
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 




//для второй кнопки
let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("button2");
let span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 

//для третьей кнопки
let modal3 = document.getElementById("myModal3");
let btn3 = document.getElementById("button3");
let span3 = document.getElementsByClassName("close")[2];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
} 


//для четвертой кнопки
let modal4 = document.getElementById("myModal4");
let btn4 = document.getElementById("button4");
let span4 = document.getElementsByClassName("close")[3];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal4.style.display = "none";
  }
} 


//для пятой кнопки
let modal5 = document.getElementById("myModal5");
let btn5 = document.getElementById("button5");
let span5 = document.getElementsByClassName("close")[4];

btn5.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal5.style.display = "none";
  }
} 


//для шестой кнопки
let modal6 = document.getElementById("myModal6");
let btn6 = document.getElementById("button6");
let span6 = document.getElementsByClassName("close")[5];

btn6.onclick = function() {
  modal6.style.display = "block";
}

span6.onclick = function() {
  modal6.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal6.style.display = "none";
  }
} 

const btnApply = document.getElementById('btn-apply');//кнопка  для сортировки по обложке 

btnApply.onclick = () => {
    let softCoverInput = document.getElementById('softCoverInput') 
    let hardCoverInput = document.getElementById('hardCoverInput') 
   
    booksElements = document.querySelectorAll('.book')

    booksElements.forEach(book => {
      if (softCoverInput.checked) {
        if (book.getAttribute('data-cover-value') == 1)  {
          book.style.display = 'none';
        }
      } else {
        if (book.getAttribute('data-cover-value') == 1)  {
          book.style.display = 'block';
        }
      }
      if (hardCoverInput.checked) {
        if (book.getAttribute('data-cover-value') == 0)  {
          book.style.display = 'none';
        }
      } else {
        if (book.getAttribute('data-cover-value') == 0)  {
          book.style.display = 'block';
        }
      }
      if (softCoverInput.checked && hardCoverInput.checked) {
        book.style.display = 'block';
      }

    });
}





