window.addEventListener('mouseover', function(evt){
    if(evt.target.classList.contains('parrafos')){
        evt.target.style.color='brown';
        evt.target.style.border='solid blue';
    }
});

window.addEventListener('mouseout', function(evt){
    if(evt.target.classList.contains('parrafos')){
        evt.target.style.color='orange';
    }
});