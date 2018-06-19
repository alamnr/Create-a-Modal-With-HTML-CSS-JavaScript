
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click',()=>{
    modal.style.display='block';
});

closeBtn.addEventListener('click',()=>{
    modal.style.display='none';
});

window.addEventListener('click',(e)=>{
    if(e.target === modal){
        modal.style.display='none';
    }
});