(function(){
    'use strict';
    console.log('reading js');
    
    const startpg = document.querySelector('#intro');
    const gamepg = document.querySelector('#game');
    const start = document.querySelector('#start');

    const damage = document.querySelector('#damage');
    const diceArena = document.querySelector('#dice-display');
    const actions = document.querySelector('#action-display');
    const win = document.querySelector('#overlay');

    const play1Select = document.querySelector('#player1zone');
    const play2Select = document.querySelector('#player2zone');

    const play2HP = document.querySelector('#player2-hpnum');
    const play1HP = document.querySelector('#player1-hpnum');

    const play1Bar = document.querySelector('#player1-hpbarinner');
    const play2Bar = document.querySelector('#player2-hpbarinner');

    const bgMusic = new Audio ('sounds/battle.mp3');
    const diceRoll = new Audio ('sounds/diceroll.mp3');
    const slash = new Audio ('sounds/slash.mp3');

    const HPBar = [play1Bar, play2Bar];
    const HPScore = [play1HP, play2HP];

    const gameData = {
        dice: ['die1.jpg', 'die2.jpg', 'die3.jpg', 
            'die4.jpg', 'die5.jpg', 'die6.jpg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameTotal: 0,
        gameEnd: 0
    };

    start.addEventListener('click', function(){
        bgMusic.play();
        const monHP = document.querySelector('#num').value;
        gameData.gameTotal = monHP;
        gameData.score = [monHP, monHP];
        if (monHP == ''){
            gameData.gameTotal = 36;
            gameData.score = [36, 36];
        }
        gamepg.style.zIndex = 1;
        startpg.style.zIndex = 0;
        gameData.index = Math.round(Math.random());
        play1HP.innerHTML = `${gameData.gameTotal}/${gameData.gameTotal}`;
        play2HP.innerHTML = `${gameData.gameTotal}/${gameData.gameTotal}`;

        const playerName = document.querySelector('#player1').value;
        const playerName2 = document.querySelector('#player2').value;
        document.querySelector('#player1Name').placeholder = `${playerName}`;
        document.querySelector('#player2Name').placeholder = `${playerName2}`;

        gameData.players[0] = playerName;
        gameData.players[1] = playerName2;

        if (playerName == ''){
            document.querySelector('#player1Name').placeholder = 'Player 1';
            gameData.players[0] = 'Player 1';
        }
        if (playerName2 == ''){
            document.querySelector('#player2Name').placeholder = 'Player 2';
            gameData.players[1] = 'Player 2';
        }

        setUpTurn();
    });

    window.addEventListener('click', function(){
        const inputPlay1 = document.querySelector('#player1Name').value;
        const inputPlay2 = document.querySelector('#player2Name').value;
        if (inputPlay1 != ''){
            gameData.players[0] = inputPlay1;
        }
        if (inputPlay2 != ''){
            gameData.players[1] = inputPlay2;
        }
    });

    function setUpTurn(){
        actions.innerHTML = `<p>${gameData.players[gameData.index]}</p> <button class="buttons" id="roll">Roll</button>`;
        diceArena.innerHTML = '';
        damage.innerHTML = '';
        damage.style.padding = 0;
        if (gameData.index == 0){
            play1Select.style.animation = 'playerSelect 2s ease infinite alternate';
            play2Select.style.animation = 'playerLeave 1s ease';
        } else if (gameData.index == 1){
            play2Select.style.animation = 'playerSelect 2s ease infinite alternate';
            play1Select.style.animation = 'playerLeave 1s ease';
        }

        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    };

    function throwDice(){
        diceRoll.play();
        actions.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        diceArena.innerHTML = `<img src = "images/${gameData.dice[gameData.roll1-1]}"> <img src = "images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            /* console.log('snake eyes!'); */
            const heal = gameData.gameTotal -gameData.rollSum;
            damage.innerHTML = `<h3>+${heal}</h3> <p>heal</p>`;
            damage.style.padding = '20px';
            damage.style.backgroundColor = 'rgb(205, 240, 205)';
            actions.innerHTML = `<p>Oh no! ${gameData.players[gameData.index]}'s monster does a full heal!</p>`;
            gameData.score[gameData.index] = gameData.gameTotal;
            HPBar[gameData.index].style.width = '100%';
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            /* showCurrentScore(); */
            play1HP.innerHTML = `${gameData.score[0]}/${gameData.gameTotal}`;
            play2HP.innerHTML = `${gameData.score[1]}/${gameData.gameTotal}`;
            setTimeout(setUpTurn, 2500);
        }

        else if (gameData.roll1 === 1 || gameData.roll2 ===1){
            /* console.log('one of the two dice rolled a 1'); */
            actions.innerHTML = `<p>${gameData.players[gameData.index]} rolled a 1, you lose your turn.</p>`;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2500);
        }

        else {
            /* console.log('neither die was a 1, game continues...'); */
            damage.innerHTML = `<h3>${gameData.rollSum}</h3> <p>damage</p>`;
            damage.style.padding = '20px';
            gameData.score[gameData.index] = gameData.score[gameData.index] - gameData.rollSum;

            setTimeout(function(){
                slash.play();

                const newWidth = (100*gameData.score[gameData.index])/gameData.gameTotal;
                HPBar[gameData.index].style.width = `${newWidth}%`;

                play1HP.innerHTML = `${gameData.score[0]}/${gameData.gameTotal}`;
                play2HP.innerHTML = `${gameData.score[1]}/${gameData.gameTotal}`;

                checkWinningCondition();
            }, 800);

            actions.innerHTML = '<button class="buttons" id="rollagain">Roll</button> <p>or</p> <button class="buttons" id="pass">Pass</button>';


            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

        }
    };

    function checkWinningCondition(){
        if(gameData.score[gameData.index] <= gameData.gameEnd){
            /* score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`; */
            
            HPBar[gameData.index].style.width = '0%';
            HPScore[gameData.index].innerHTML = `0/${gameData.gameTotal}`;
            win.style.zIndex = 2;
            win.style.opacity = '100%';
            win.innerHTML += `<h3>${gameData.players[gameData.index]} Wins!!</h3> <p>You've survived the monster!<br>${gameData.players[gameData.index ? (gameData.index = 0) : (gameData.index = 1)]} was lost to the darkness.</p> <button type="button" id="playAgain" class="buttons">Play Again?</button>`
            const playAgain = document.querySelector('#playAgain');

            playAgain.addEventListener('click', function(){
                location.reload();
            });

            /* actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Start a New Game?'; */
        }
    };
})();