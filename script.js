const btn =  document.querySelector('button')

setInterval(function(){
    const data = new Date();
    btn.innerHTML = data.toLocaleString();
},1000)