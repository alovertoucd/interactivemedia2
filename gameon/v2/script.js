(function(){
    'use strict';
    console.log('reading js');

    
    const startpg = document.querySelector('#intro');
    const gamepg = document.querySelector('#game');
    const start = document.querySelector('#start');
    const diceArena = document.querySelector('#dice-display');
    const actions = document.querySelector('#action-display');

    const gameData = {
        dice: ['die1.jpg', 'die2.jpg', 'die3.jpg', 
            'die4.jpg', 'die5.jpg', 'die6.jpg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 36
    };

    start.addEventListener('click', function(){
        gamepg.style.zIndex = 1;
        startpg.style.zIndex = 0;
        gameData.index = Math.round(Math.random());

        setUpTurn();
    });

    function setUpTurn(){
        actions.innerHTML = `<p>${gameData.players[gameData.index]}</p> <button class="buttons" id="roll">Roll</button>`;
        /* if statement for player yellow indicator */
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    };

    function throwDice(){
        actions.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        diceArena.innerHTML = `<img src = "images/${gameData.dice[gameData.roll1-1]}"> <img src = "images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            /* console.log('snake eyes!'); */
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            /* showCurrentScore(); */
            setTimeout(setUpTurn, 2000);
        }

        else if (gameData.roll1 === 1 || gameData.roll2 ===1){
            /* console.log('one of the two dice rolled a 1'); */
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
        }

        else {
            /* console.log('neither die was a 1, game continues...'); */
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actions.innerHTML = '<button class="buttons" id="rollagain">Roll</button> <p>or</p> <button class="buttons" id="pass">Pass</button>';

            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
                
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            /* checkWinningCondition(); */
        }
    };
})();