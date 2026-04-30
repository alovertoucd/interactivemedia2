(function(){
    'use strict';
    console.log('reading js');

    const grabpg1 = document.querySelector('#form1');
    const grabsec1 = document.querySelector('#sec-1');

    const grabpg2 = document.querySelector('#form2');
    const grabsec2 = document.querySelector('#sec-2');

    const grabsec3 = document.querySelector('#sec-3');

    const madlib = document.querySelector('#news');
    const bye = document.querySelector('#closing');
    const oops = document.querySelector('.error');
    const oops2 = document.querySelector('#error2');
    const restart = document.querySelector('#next');

    grabpg1.addEventListener('submit', function(event){
        event.preventDefault();

        const getNewName = document.querySelector('#newName').value;
        const getnme = document.querySelector('#nme').value;
        const getAcro = document.querySelector('#acro').value.toUpperCase();
        const getDate = document.querySelector('#date').value;
        const getAdj1 = document.querySelector('#adj1').value;
        const getAdj2 = document.querySelector('#adj2').value;
        const getObj1 = document.querySelector('#obj1').value;
        const getObj2 = document.querySelector('#obj2').value;

        let errorcode;

        if (getNewName == ''){
            errorcode = 'Please provide a first and last name';
            document.querySelector('#newName').focus();
        } else if (getnme == ''){
            errorcode = 'Please provide a first name';
            document.querySelector('#nme').focus();
        } else if (getAcro == ''){
            errorcode = 'Please provide an acronym';
            document.querySelector('#acro').focus();
        } else if (getDate == ''){
            errorcode = 'Please provide a date';
            document.querySelector('#date').focus();
        } else if (getAdj1 == ''){
            errorcode = 'Please provide an adjective';
            document.querySelector('#adj1').focus();
        } else if (getAdj2 == ''){
            errorcode = 'Please provide a second adjective';
            document.querySelector('#adj2').focus();
        } else if (getObj1 == ''){
            errorcode = 'Please provide an object or creature';
            document.querySelector('#obj1').focus();
        } else if (getObj2 == ''){
            errorcode = 'Please provide a second object or creature';
            document.querySelector('#obj2').focus();
        } else {
           grabsec1.style.zIndex = 0;
            grabsec2.style.zIndex = 1; 
            errorcode = '';
        }

        oops.innerHTML = errorcode;

        grabpg2.addEventListener('submit', function(event){
            event.preventDefault();

            const getplace = document.querySelector('#place').value;
            const getplace2 = document.querySelector('#place2').value;
            const getPastVerb = document.querySelector('#pastVerb').value;
            const getEmo = document.querySelector('#emo').value;
            const getnum = document.querySelector('#num').value;
            const getbod = document.querySelector('#bod').value;
            const getVerbing = document.querySelector('#verbing').value;
            const gettim = document.querySelector('#tim').value;

            if (getplace == ''){
            errorcode = 'Please provide a place';
            document.querySelector('#place').focus();
            } else if (getplace2 == ''){
                errorcode = 'Please provide a second place';
                document.querySelector('#place2').focus();
            } else if (getPastVerb == ''){
                errorcode = 'Please provide a past verb';
                document.querySelector('#pastVerb').focus();
            } else if (getEmo == ''){
                errorcode = 'Please provide an emotion';
                document.querySelector('#emo').focus();
            } else if (getnum == ''){
                errorcode = 'Please provide a number';
                document.querySelector('#num').focus();
            } else if (getbod == ''){
                errorcode = 'Please provide a body part';
                document.querySelector('#bod').focus();
            } else if (getVerbing == ''){
                errorcode = 'Please provide a verb ending in -ing';
                document.querySelector('#verbing').focus();
            } else if (gettim == ''){
                errorcode = 'Please provide a length of time';
                document.querySelector('#tim').focus();
            } else {
                grabsec2.style.zIndex = 0;
                grabsec3.style.zIndex = 1;
                grabsec3.style.opacity = 100;
                errorcode = '';
            }

            oops2.innerHTML = errorcode;

            const theWords = `I’m ${getNewName} coming to you live on ${getAcro} News. On ${getDate}, a ${getAdj1} ${getObj1} was spotted at the ${getplace}. Onlookers ${getPastVerb}, looking very ${getEmo}. One witness, going by the alias ${getnme} the ${getAdj2} had this to say, “I was on my way to the ${getplace2} when I saw the ${getObj1}. It tore up the street, I barely made it out alive with all ${getnum} of my ${getbod}(s)!! Completely ruined my day that’s for sure. I didn’t even go ${getVerbing} with my buds. It’s a conspiracy I tell you, this is the work of the ${getObj2}-Man!!” The authorities are continuing to investigate the matter and we expect to have an update ${gettim} from now. Please stay tuned.`;

            const closer = `I’m ${getNewName} and good night.`;

            madlib.innerHTML = theWords;
            bye.innerHTML = closer;

            restart.addEventListener('click', function(event){
                event.preventDefault();

                grabsec1.style.zIndex= 1;
                grabsec3.style.zIndex = 0;
                grabsec3.style.opacity = 0;

                document.querySelector('#place').value = '';
                document.querySelector('#place2').value = '';
                document.querySelector('#pastVerb').value = '';
                document.querySelector('#emo').value = '';
                document.querySelector('#num').value = '';
                document.querySelector('#bod').value = '';
                document.querySelector('#verbing').value = '';
                document.querySelector('#tim').value = '';
                document.querySelector('#newName').value = '';
                document.querySelector('#nme').value = '';
                document.querySelector('#acro').value = '';
                document.querySelector('#date').value = '';
                document.querySelector('#adj1').value = '';
                document.querySelector('#adj2').value = '';
                document.querySelector('#obj1').value = '';
                document.querySelector('#obj2').value = '';
            });
        });
    });
})();