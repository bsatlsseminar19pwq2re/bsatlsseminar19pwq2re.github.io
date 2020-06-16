(function() {
  window.addEventListener('load', (event) => {
    console.log(document.getElementsByTagName("body")[0]);
    document.getElementsByTagName("body")[0].style.backgroundColor='red';
    document.getElementsByTagName("body")[0].innerHTML='pwned';
  });
})();
