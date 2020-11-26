//model
var playerHealth = 100;
var bossHealth = 150;


function calculateDamage (whichCharacter) {
var playerDamage = 10;
   var randomNumber = Math.floor(Math.random() * 100);
   if (whichCharacter == 'player') {
        if (randomNumber > 0 && randomNumber <= 25) {
            bossHealth -= playerDamage;
        } else if (randomNumber > 25 && <= 50) {
            bossHealth -= (playerDamage * 2);
        } else if (randomNumber > 50 && randomNumber <= 75) {
            bossHealth -= playerDamage
        }
   }
}