(function(){
    'use strict';
    console.log('reading js');

    const bluediv = document.querySelector('#blue');
    const blue = bluediv.getBoundingClientRect();
    const bluex = blue.left;
    const bluey = blue.top;

    const greendiv = document.querySelector('#green');
    const green = greendiv.getBoundingClientRect();
    const greenx = green.left;
    const greeny = green.top;

    const reddiv = document.querySelector('#red');
    const red = reddiv.getBoundingClientRect();
    const redx = red.left;
    const redy = red.top;

    document.addEventListener('mousemove', function mouse(event){
        const mousex = event.clientX;
        const mousey = event.clientY;
        
        if (mousex >= bluex && mousex < bluex+300 && mousey >= bluey && mousey < bluey+400){
            let x = bluex + 250;
            bluediv.style.left = `${x}px`;
            bluediv.style.zIndex = 1;
            bluediv.style.filter = 'contrast(200%)';
        } else if (mousex >= greenx && mousex < greenx+400 && mousey >= greeny && mousey < greeny+300){
            let gx = greenx - 59;
            let gy = greeny + 150;
            greendiv.style.left = `${gx}px`;
            greendiv.style.top = `${gy}px`;
            greendiv.style.zIndex = 1;
            greendiv.style.filter = 'grayscale(100%)';

        }else if (mousex >= redx && mousex < redx+400 && mousey >= redy && mousey < redy+300){
            let rx = redx - 180;
            let ry = redy - 100;
            reddiv.style.left = `${rx}px`;
            reddiv.style.top = `${ry}px`;
            reddiv.style.zIndex = 1;
            reddiv.style.filter = 'blur(10px)';
        }
    });
    
})();