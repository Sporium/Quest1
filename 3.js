// 3) Работа с DOM.
function addBtnFunction() {
  // create button
  let newItem = document.createElement('BUTTON');
  //with text
  newItem.innerHTML = 'Do Something';
  //put between 2 others
  let list = document.querySelector(
    'body > main > section > div > p:nth-child(3)'
  );
  list.insertBefore(newItem, list.childNodes[3]);
  // add class
  let dosmtngBtn = document.querySelector(
    'body > main > section > div > p:nth-child(3) > button:nth-child(2)'
  );
  dosmtngBtn.className = 'btn link my-2';
  // make on hiver effect
  // if hover make bg green
  dosmtngBtn.onmouseover = function () {
    dosmtngBtn.style.background = 'green';
  };
  //if mouse get away from it remove bg
  dosmtngBtn.onmouseout = function () {
    dosmtngBtn.style.background = '';
  };

  //find text
  let scrollTo = Array.from(document.querySelectorAll('.card-text')).find(
    (el) => el.textContent === 'Quest Academy'
  );
  scrollTo = scrollTo.parentNode.parentNode;

  // scrolling to ellement
  dosmtngBtn.addEventListener('click', scroll);
  // 2px solid red just because i like this type of borders -_-
  function scroll() {
    scrollTo.style.border = '2px solid red';

    scrollTo.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}
