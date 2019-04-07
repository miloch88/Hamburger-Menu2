// document.querySelector('.burger').addEventListener('click', function(){
//     this.classList.toggle('active');
//     document.querySelector('nav').classList.toggle('active');
// })

$('.burger').on('click', function(){
    $('.burger, nav').toggleClass('active');
})