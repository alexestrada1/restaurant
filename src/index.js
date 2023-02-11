function component() {
    const element = document.createElement('div');
  
    // test
  element.textContent = ('Cody');
  element.classList.add('hello');
  return element;
  }
  
  document.querySelector('.content').appendChild(component());
