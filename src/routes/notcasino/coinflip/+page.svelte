<script>
    import { onMount } from 'svelte';
  
    let streak = 0;
    let money = 0
    let isFlipping = false;
    let result = '';
    let selectedOption = null;
  
    function startFlipping() {
        money -= 1
      if (isFlipping || !selectedOption) return;
  
      isFlipping = true;
      result = '';
  
      setTimeout(() => {
        const isHeads = Math.random() < 0.5;
  
        if ((isHeads && selectedOption === 'Heads') || (!isHeads && selectedOption === 'Tails')) {
          streak += 1;
          money += 10*(streak/4)
          result = 'Correct!';
        } else {
          result = 'Incorrect!';
          streak = 0
        }
  
        isFlipping = false;
      }, 800);
    }
  
    function selectOption(option) {
  
      selectedOption = option;
    }

  </script>
    <nav>
        <a class="navTitle" href="/notcasino"><span class="hus"></span>Home</a>
        <a href="/notcasino/slot" id="clickerLink">SlotMachine</a>
        <a href="/notcasino/blackjack" id="todoLink">BlackJack</a>
        <a href="/notcasino/coinflip">CoinFlip</a>
    </nav>
  
    <main>

    <h1>Coin Flip Game</h1>
    <p>Streak: {streak}</p>
    <p>Money: {money}</p>
    <button on:click={startFlipping} disabled={isFlipping || !selectedOption}>Flip Coin</button>
    {#if !isFlipping}
      <p>Choose:</p>
      <button on:click={() => selectOption('Heads')} disabled={isFlipping} class:selected={selectedOption === 'Heads'}>Heads</button>
      <button on:click={() => selectOption('Tails')} disabled={isFlipping} class:selected={selectedOption === 'Tails'}>Tails</button>
    {:else if isFlipping}
      <p>Flipping...</p>
    {/if}
    <p>{result} + {10*streak/4}</p>
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 2rem;
    }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  
    button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }

    button.selected{
        background-color: #007;
    }
  
    p {
      margin-top: 1rem;
      font-size: 1.2rem;
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
  