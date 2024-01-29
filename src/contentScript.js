console.log('------------------HIT')
alert("ko lort")


if(typeof init === 'undefined'){
    const init = function(){
        let elDescription = document.getElementById('description')
        elDescription.style.backgroundColor = "red"
    }
    init();
  }