<!-- SlotMachine.svelte -->
<script>
    const symbols = ['🍒', '🍊', '🍇', '🍋', '🍉', '🍓'];
    const spin = () => [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]];
    let isSpinning = false;
    let results = ['🍒', '🍒', '🍒'];
    let score = 0;
    const handleSpinClick = () => {
      if (isSpinning) return;
      isSpinning = true;
      results = ['', '', ''];
      score -=5;
      score = score;
      const intervalId = setInterval(() => {
        results = spin();
      }, 90);
      setTimeout(() => {
        clearInterval(intervalId);
        isSpinning = false;

        if (results[0] === results[1] && results[1] === results[2]) {
          score += 100;
        } else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
          score += 10;
        }
      }, 3000);
    };
  </script>

<head>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Patrick+Hand" />
  <title>SlotMachine</title>
</head>

  <nav>
    <a class="navTitle" href="/notcasino"><span class="hus"></span>Home</a>
    <a href="/notcasino/slot" id="clickerLink">SlotMachine</a>
    <a href="/notcasino/blackjack" id="todoLink">BlackJack</a>
    <a href="/notcasino/coinflip">CoinFlip</a>
</nav>

<section class="container">
  <button on:click={handleSpinClick} disabled={isSpinning}>Spin</button>
  <div>
    {#each results as result, i}
      <div class="slot">{result}</div>
    {/each}
  </div>
  <div class="score">{score}</div>
</section>

<style>

    .container{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  
    .slot {
      display: inline-block;
      font-size: 4rem;
      width: 93px;
      height: 93px;
      text-align: center;
      align-items: center;
      border: 2px solid black;
      margin-right: 1rem;
      vertical-align: middle;
    }
  
    .score {
      font-size: 2rem;
      margin-top: 1rem;
    }
    nav{
        position: fixed;
        top: 0;
        padding: 7px 15px 8px 15px;
        z-index: 10;
        background-color: #53606d;
        color: #e0e0e0;
        width: 100vw;
        border-bottom: 3px solid black;
    }
    
    nav .navTitle, a{
        display: inline-block;
        font-variant: small-caps;
    }
    
    nav a{
        color: #000000;
        text-decoration: none;
        font-size: 18px;
        margin-left: 45px;
        padding: 0 10px 0 10px;
        border-radius: 5px;
        user-select: none;
    }

    .navTitle{
        padding: 0px 10px 2px 10px;
        margin-top: 2px;
        font-size: 22px;
        margin-left: 15px;
        border: 2px solid black;
        border-radius: 5px;
    }

    .hus{
        display: inline-block;
        background: url(/hus.svg);
        height: 18px;
        aspect-ratio: 1;
        margin-right: 5px;
        background-size: cover;
        background-repeat: no-repeat;
        transform: translateY(1px);
    }
    
    a:hover{
        cursor: pointer;
    }

 </style>