//scripts .js
document.addEventListener('DOMContentLoaded',function(){
    const body=document.querySelector('body');

    //change background color

    document.getElementById('changeColor').addEventListener('click', function(){
        body.style.backgroundColor=getRandomColor();

    });

    //DIsp message on form submission
    document.getElementById('contactForm').addEventListener('click',function(){
        event.preventDefault();
        alert('Thanks we will get back to you soon');
        this.reset();
    });
});

function getRandomColor(){
    const letters='0123456789ABCDEF'
    let color='#';
    for(let i=0;i<6;i++){
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
