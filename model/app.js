const titre =  document.querySelector('h1')
console.log(titre);

titre.style.color = 'yellow';
titre.style.alignContent = 'center';
titre.style.borderradius = '5px'
titre.style.cursor = 'pointer'

titre.addEventListener('mouseover', function(){
    titre.style.color ='red';
    titre.style.cursor ='pointer';
});

titre.addEventListener('mouseleave',function name(params) {
    titre.style.color = 'yellow';
    titre.style.cursor ='pointer';
    
})