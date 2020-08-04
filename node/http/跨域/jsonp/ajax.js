function request(){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  })
  xhr.open('GET', 'http://localhost:3000/get');
  xhr.send();
}