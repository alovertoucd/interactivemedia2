(function(){
    'use strict';
    console.log('reading JS');

    const body =document.querySelector('body');
    const intro = document.querySelector('#intro');
    const main = document.querySelector('#main');
    const wheel = document.querySelector('#hat-wheel');
    const me = document.querySelector('#me-pic');
    let imgCount=0;
    let idleCount=0;

    const h2 = document.querySelector('#mem-h2');
    const p = document.querySelector('#mem-p');
    const mem = document.querySelector('#mem-text');
    const pic = document.querySelector('#mem-pic');
    const txt = document.querySelector('#main-text');
    
    const lArrow = document.querySelector('#l-arow');
    const rArrow = document.querySelector('#r-arow');
    const pink = document.querySelector('#pink');

    const lGraphic = document.querySelector('#graphics');
    const rGraphic = document.querySelector('#graphics2');


    body.addEventListener("click", function(){
        intro.style.opacity = 0;
        lArrow.style.zIndex = 1;
        rArrow.style.zIndex = 1;
    });

    lArrow.addEventListener("click", function(){
        if (imgCount == 0){
            lArrow.className = 'noMore';
            setTimeout(function(){
                lArrow.classList.remove('noMore');
            }, 1000)
        }else if (imgCount==1) {
            wheel.style.left = '491px';
            wheel.style.top = '273px';
            imgCount--;
            lArrow.style.filter = 'grayscale(100%)';
            p.innerHTML = 'The last time I had long hair was during the COVID lockdown. My long hair reminds me of a version of myself, isolated from the world; able to  bask in the alone time yet long for companionship and the hardships of a whole world suffering together.';
            h2.innerHTML ='Long Hair';

            pic.src = `images/covid.jpg`;
            body.style.backgroundColor = '#E2DCFF';
            lGraphic.src = `images/mask.png`;
            rGraphic.src = `images/earth.png`;

            txt.className = 'fade-in-out';
            setTimeout(function(){
                txt.classList.remove('fade-in-out');
            }, 1000)
        }else if (imgCount ==2){
            imgCount--;
            wheel.style.left = '-213px';
            wheel.style.top = '227px';

            p.innerHTML = 'This hat I got for Christmas from one of my oldest friends. The hat for me reminds me of long friendship with her, as a warm reminder of her presence in my life even of we cannot see each other as much anymore.';
            h2.innerHTML ='Pink Fuzzy';

            pic.src = `images/syd.jpg`;
            body.style.backgroundColor = '#ffcdfe';
            lGraphic.src = `images/heart.png`;
            rGraphic.src = `images/heart.png`;

            txt.className = 'fade-in-out';
            setTimeout(function(){
                txt.classList.remove('fade-in-out');
            }, 1000)
        }else if (imgCount==3){
            wheel.style.left = '-884px';
            imgCount--;
            rArrow.style.filter = 'grayscale(0%)';
            p.innerHTML = 'I first got this hat last year, gifted to me by one of the graduating Mellos. For me, this cap represents when I first started to feel comfortable within the UCDMB, as someone who belonged with my section. Memories of a sense of belonging, inclusivity, and friendship.';
            h2.innerHTML ='Newsboy Cap';

            pic.src = `images/newsies.jpg`;
            body.style.backgroundColor = '#ffe9cd';
            lGraphic.src = `images/news.png`;
            rGraphic.src = `images/news.png`;

            txt.className = 'fade-in-out';
            setTimeout(function(){
                txt.classList.remove('fade-in-out');
            }, 1000)
        }
    });

        rArrow.addEventListener("click", function(){
        if (imgCount == 0){
            wheel.style.left = '-213px';
            wheel.style.top = '227px';
            imgCount++;
            lArrow.style.filter = 'grayscale(0%)';
            p.innerHTML = 'This hat I got for Christmas from one of my oldest friends. The hat for me reminds me of long friendship with her, as a warm reminder of her presence in my life even of we cannot see each other as much anymore.';
            h2.innerHTML ='Pink Fuzzy';

            pic.src = `images/syd.jpg`;
            body.style.backgroundColor = '#ffcdfe';
            lGraphic.src = `images/heart.png`;
            rGraphic.src = `images/heart.png`;

            txt.className = 'fade-in-out';
            setTimeout(function(){
                txt.classList.remove('fade-in-out');
            }, 1000)
        }else if (imgCount==1) {
            wheel.style.left = '-884px';
            imgCount++;
            p.innerHTML = 'I first got this hat last year, gifted to me by one of the graduating Mellos. For me, this cap represents when I first started to feel comfortable within the UCDMB, as someone who belonged with my section. Memories of a sense of belonging, inclusivity, and friendship.';
            h2.innerHTML ='Newsboy Cap';

            pic.src = `images/newsies.jpg`;
            body.style.backgroundColor = '#ffe9cd';
            lGraphic.src = `images/news.png`;
            rGraphic.src = `images/news.png`;

            txt.className = 'fade-in-out';
            setTimeout(function(){
                txt.classList.remove('fade-in-out');
            }, 1000)
        }else if (imgCount==2) {
            wheel.style.left = '-1570px';
            imgCount++;
            rArrow.style.filter = 'grayscale(100%)';

            p.innerHTML = 'This originally belonged to my mom. She has owned it has long as I remember and I always liked it and would steal it to wear. This hat contains memories of nostalgia and familial love and childhood, a version of myself who was so innocent';
            h2.innerHTML ='Disney Cap';

            pic.src = `images/disney.jpg`;
            body.style.backgroundColor = '#cdf5ff';
            lGraphic.src = `images/dis.png`;
            rGraphic.src = `images/heart.png`;

            txt.className = 'fade-in-out';
            setTimeout(function(){
                txt.classList.remove('fade-in-out');
            }, 1000)
        }else{
            rArrow.className = 'noMore';
            setTimeout(function(){
                rArrow.classList.remove('noMore');
            }, 1000)
        }
    });

    function idle(){
            setTimeout(function(){
                if(idleCount == 0){
                    me.src = 'images/idle2.png';
                    me.style.left = '400px';
                    me.style.bottom = '-50px';
                    idleCount++;
                } else if (idleCount == 1){
                    me.src = 'images/idle1.png';
                    me.style.left = '350px';
                    me.style.bottom = '-40px';
                    idleCount--;
                }
                idle();
                
            }, 2500);
        };
    idle();
})();