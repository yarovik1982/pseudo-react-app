const PrintText = () => {
   const textPre = document.querySelector('.intro__content-sourse')
   if(textPre){
      const text = textPre.textContent.split(';').map(item => item = item + `\n`)
    textPre.style.display = 'none'
    
     let line = 0;
      let count = 0;
      let result = '';
      function typeLine() {
        let interval = setTimeout(
          () => {
            result += text[line][count]
            document.querySelector('.intro__content-dist').innerHTML =result +'|';
          count++;
          if (count >= text[line].length) {
            count = 0;
            line++;
            if (line == text.length) {
              clearTimeout(interval);
               document.querySelector('pre').innerHTML = result;
               // document.querySelector('code').innerHTML = result;
              return true;
            }
          }
          typeLine();
        }, getRandomInt(getRandomInt(250*2.5)))
      }
      typeLine();
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
   }else{
      return
   }
}
export default PrintText