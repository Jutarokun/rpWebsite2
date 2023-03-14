
  let counter = 0;
  let i = true;
  let a = 10;
  let displayDate = 'looooool';
  function myLoop() {
    setTimeout(function() {
      counter += 1;
      console.log(counter);
      document.getElementById('lol').innerHTML = counter + ' ' + 'Sekunden';
      i++;
      if (i = true) {
        myLoop();
      } else {
          console.log('hi');
      }
    }, 1000)
  }

  button.addEventListener('click', () => {
      counter = 0;
  });

  myLoop();