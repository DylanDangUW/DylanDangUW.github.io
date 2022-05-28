let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});
function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});
(() => {
    const h1El = document.querySelector('h1');
    const letters = h1El.textContent.split('');
    h1El.innerHTML = letters.map((l, i) => `<p style="--i: ${i}; --j: ${letters.length -1 - i}">${l == ' ' ? '&nbsp;': l}</p>`).join('');
    
    h1El.addEventListener('mouseenter', () => {
      h1El.classList.add('flip-in');
      h1El.classList.remove('flip-out');
    });
    
    h1El.addEventListener('mouseleave', () => {
      h1El.classList.remove('flip-in');
      h1El.classList.add('flip-out');
    });
  })()