let score = 0;
let clickPower = 1;
let energyPerSecond = 0;

let clickPowerLevel = 1;
let autoClickerLevel = 0;
let stellarLevel = 0;

let clickPowerCost = 15;
let autoClickerCost = 100;
let stellarCost = 1100;

const scoreDisplay = document.getElementById("score");
const epsDisplay = document.getElementById("eps-display");
const clickBtn = document.getElementById("clickBtn");

const buyClickPowerBtn = document.getElementById("buyClickPower");
const buyAutoClickerBtn = document.getElementById("buyAutoClicker");
const buyStellarBtn = document.getElementById("buyStellar");

const clickPowerCostDisplay = document.getElementById("clickPowerCost");
const autoClickerCostDisplay = document.getElementById("autoClickerCost");
const stellarCostDisplay = document.getElementById("stellarCost");

const clickPowerLvlDisplay = document.getElementById("clickPowerLevel");
const autoClickerLvlDisplay = document.getElementById("autoClickerLevel");
const stellarLvlDisplay = document.getElementById("stellarLevel");

function updateUI() {
    scoreDisplay.innerText = Math.floor(score);
    epsDisplay.innerText = `Per Second: ${energyPerSecond}`;
    
    clickPowerCostDisplay.innerText = `Cost: ${clickPowerCost} Energy`;
    autoClickerCostDisplay.innerText = `Cost: ${autoClickerCost} Energy`;
    stellarCostDisplay.innerText = `Cost: ${stellarCost} Energy`;
    
    clickPowerLvlDisplay.innerText = `Lvl ${clickPowerLevel}`;
    autoClickerLvlDisplay.innerText = `Lvl ${autoClickerLevel}`;
    stellarLvlDisplay.innerText = `Lvl ${stellarLevel}`;

    buyClickPowerBtn.disabled = score < clickPowerCost;
    buyAutoClickerBtn.disabled = score < autoClickerCost;
    buyStellarBtn.disabled = score < stellarCost;
}

clickBtn.addEventListener("click", () => {
    score += clickPower;
    updateUI();
});

buyClickPowerBtn.addEventListener("click", () => {
    if (score >= clickPowerCost) {
        score -= clickPowerCost;
        clickPower += 1;
        clickPowerLevel += 1;
        clickPowerCost = Math.round(clickPowerCost * 1.5);
        updateUI();
    }
});

buyAutoClickerBtn.addEventListener("click", () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        energyPerSecond += 1;
        autoClickerLevel += 1;
        autoClickerCost = Math.round(autoClickerCost * 1.15);
        updateUI();
    }
});

buyStellarBtn.addEventListener("click", () => {
    if (score >= stellarCost) {
        score -= stellarCost;
        energyPerSecond += 8;
        stellarLevel += 1;
        stellarCost = Math.round(stellarCost * 1.15);
        updateUI();
    }
});

setInterval(() => {
    if (energyPerSecond > 0) {
        score += energyPerSecond / 10;
        updateUI();
    } else {
        updateUI();
    }
}, 100);

updateUI();
