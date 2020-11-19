// model
var selectedLampIndex;
var startTime;
var finishTime;
var spentMilliseconds;
var spentSeconds;


// view
updateView();
function updateView() {
    var spentTime = spentMilliseconds == false ? '' : spentMilliseconds;
    var spentTime2 = spentSeconds == false ? '' : spentSeconds;
    document.getElementById('app').innerHTML = `
    <div id="1" class="lamp"></div>
    <div id="2" class="lamp"></div>
    <div id="3" class="lamp"></div>
    <div id="4" class="lamp"></div>
    <div id="5" class="lamp"></div>
    <div id="6" class="lamp firstInRow"></div>
    <div id="7" class="lamp"></div>
    <div id="8" class="lamp"></div>
    <div id="9" class="lamp"></div>
    <div id="10" class="lamp"></div>
    <div id="11" class="lamp firstInRow"></div>
    <div id="12" class="lamp"></div>
    <div id="13" class="lamp"></div>
    <div id="14" class="lamp"></div>
    <div id="15" class="lamp"></div>
    <div id="16" class="lamp firstInRow"></div>
    <div id="17" class="lamp"></div>
    <div id="18" class="lamp"></div>
    <div id="19" class="lamp"></div>
    <div id="20" class="lamp"></div>
    <div id="21" class="lamp firstInRow"></div>
    <div id="22" class="lamp"></div>
    <div id="23" class="lamp"></div>
    <div id="24" class="lamp"></div>
    <div id="25" class="lamp"></div>
    <div>${spentTime || ''}</div>
    <div>${spentTime2 || ''}</div>
    `;

}
// controller
randomLight();
startTime();
function randomLight () {
selectedLampIndex = Math.floor(Math.random() * 25);
document.getElementById(selectedLampIndex).innerHTML += `
<div class="lightOn" onclick="finishTime(); timeCalc()"></div>
`

}
function startTime(){
startingTime = new Date().getTime();
}
function finishTime(){
finishingTime = new Date().getTime();
}
function timeCalc() {
spentMilliseconds = Math.floor(finishingTime - startingTime);
spentSeconds = spentMilliseconds / 1000;
updateView();
}