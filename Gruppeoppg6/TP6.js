



function attack() {
    if (playerHealth === 0) {
        karakter.classList.add('death');
        return;
    };
    if (bossHealth == 0) {
        boss.classList.add('death');
        return;
    };
    if (attackState === false) return;
    var Damage = 5;
    var randomNumber = Math.floor(Math.random() * 100);
    if (attackState === true) {
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
    }

    setTimeout(() => {
        if (randomNumber > 0 && randomNumber <= 75) {
            playerHealth -= Damage * 2;
            console.log('boss atk');
            combatLog += 'Boss slaps for 10 dmg!';
        } else if (randomNumber > 75 && randomNumber <= 100) {
            combatLog += 'Boss misses tentacleslap!';
            console.log('boss miss');

        }
        attackState = true;
        drawGame();
        return;
    }, 1000)

    healthState();
    drawGame();


}

function healthState() {
    if (playerHealth > 75) {
        healthStateIndex = 0;
    } else if (playerHealth > 50) {
        healthStateIndex = 1;
    } else if (playerHealth > 25) {
        healthStateIndex = 2;
    } else if (playerHealth > 0 && playerHealth < 25) {
        healthStateIndex = 3;
    } else if (playerHealth == 0) {
        
        victoryScreen('boss');
    }
    drawGame();
}

function victoryScreen (winner) {
    if (winner == 'boss') {
        
    }
}
