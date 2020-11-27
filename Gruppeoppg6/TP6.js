
function playAudio() {
    var audio = new Audio('2020-11-26-15-22-18.mp3');
    audio.volume = 0.1;
    audio.play();
}

function randomNumberGenerator() {
    randomNumber = Math.floor(Math.random() * 100);
}

function attack() {
    if (gameFinished === true) return;
    if (attackState === false) return;
    if (attackState === true) {
        randomNumberGenerator();
        if (randomNumber > 0 && randomNumber <= 75) {
            bossHealth -= Damage;
            console.log('attack');
            combatLog = 'Player hits for 5 dmg.</br>';
        } else if (randomNumber > 75 && randomNumber <= 100) {
            if (bossHealth === 5) {
                bossHealth = 0
            } else {
                bossHealth -= (Damage * 2);
                combatLog = 'Player hits for 10 dmg (It was super effective...)!!1!</br>'
            }
            console.log('crit');
        }
        attackState = false;

        drawGame();
        bossAttack();
    }
}

function bossAttack() {
    randomNumberGenerator();
    setTimeout(() => {
        if (randomNumber > 0 && randomNumber <= 75) {
            playerHealth -= Damage * 2;
            console.log('boss atk');
            combatLog += 'Boss slaps for 10 dmg!';
        } else if (randomNumber > 75 && randomNumber <= 100) {
            combatLog += 'Boss misses tentacleslap!';
            console.log('boss miss');

        }
        console.log('boss')
        attackState = true;
        drawGame();
        healthStatePlayer();
        healthStateBoss();
    }, 1000)
}

function healthStatePlayer() {
    if (playerHealth > 75) {
        healthStateIndex = 0;
    } else if (playerHealth > 50) {
        healthStateIndex = 1;
    } else if (playerHealth > 25) {
        healthStateIndex = 2;
    } else if (playerHealth > 0 && playerHealth < 25) {
        healthStateIndex = 3;
    } else if (playerHealth == 0) {  
        setTimeout(function(){ checkDeathPlayer(); }, 100);
        setTimeout(function(){ win('boss'); }, 1500);
    }
}
function healthStateBoss() {
        if (bossHealth === 0) {
            setTimeout(function(){ checkDeathBoss(); }, 100);
            setTimeout(function(){ win('player'); }, 1500);
        }
        
    }


function checkDeathPlayer() {
        karakter.classList.add('death');
        gameFinished = true;
}
function checkDeathBoss () {
        boss.classList.add('death');
        gameFinished = true;
}



