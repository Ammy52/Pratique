const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let phrase = "Je m'appelle";
  
  for (let key in details) {
    phrase += " " + details[key];
  }
  
  console.log(phrase);
  