<script>
  import { onMount } from 'svelte';

  const cards = [
    { suit: '♠', rank: 'A', value: 11 },
    { suit: '♠', rank: '2', value: 2 },
    { suit: '♠', rank: '3', value: 3 },
    { suit: '♠', rank: '4', value: 4 },
    { suit: '♠', rank: '5', value: 5 },
    { suit: '♠', rank: '6', value: 6 },
    { suit: '♠', rank: '7', value: 7 },
    { suit: '♠', rank: '8', value: 8 },
    { suit: '♠', rank: '9', value: 9 },
    { suit: '♠', rank: '10', value: 10 },
    { suit: '♠', rank: 'J', value: 10 },
    { suit: '♠', rank: 'Q', value: 10 },
    { suit: '♠', rank: 'K', value: 10 },
    { suit: '♥', rank: 'A', value: 11 },
    { suit: '♥', rank: '2', value: 2 },
    { suit: '♥', rank: '3', value: 3 },
    { suit: '♥', rank: '4', value: 4 },
    { suit: '♥', rank: '5', value: 5 },
    { suit: '♥', rank: '6', value: 6 },
    { suit: '♥', rank: '7', value: 7 },
    { suit: '♥', rank: '8', value: 8 },
    { suit: '♥', rank: '9', value: 9 },
    { suit: '♥', rank: '10', value: 10 },
    { suit: '♥', rank: 'J', value: 10 },
    { suit: '♥', rank: 'Q', value: 10 },
    { suit: '♥', rank: 'K', value: 10 },
    { suit: '♦', rank: 'A', value: 11 },
    { suit: '♦', rank: '2', value: 2 },
    { suit: '♦', rank: '3', value: 3 },
    { suit: '♦', rank: '4', value: 4 },
    { suit: '♦', rank: '5', value: 5 },
    { suit: '♦', rank: '6', value: 6 },
    { suit: '♦', rank: '7', value: 7 },
    { suit: '♦', rank: '8', value: 8 },
    { suit: '♦', rank: '9', value: 9 },
    { suit: '♦', rank: '10', value: 10 },
    { suit: '♦', rank: 'J', value: 10 },
    { suit: '♦', rank: 'Q', value: 10 },
    { suit: '♦', rank: 'K', value: 10 },
    { suit: '♣', rank: 'A', value: 11 },
    { suit: '♣', rank: '2', value: 2 },
    { suit: '♣', rank: '3', value: 3 },
    { suit: '♣', rank: '4', value: 4 },
    { suit: '♣', rank: '5', value: 5 },
    { suit: '♣', rank: '6', value: 6 },
    { suit: '♣', rank: '7', value: 7 },
    { suit: '♣', rank: '8', value: 8 },
    { suit: '♣', rank: '9', value: 9 },
    { suit: '♣', rank: '10', value: 10 },
    { suit: '♣', rank: 'J', value: 10 },
    { suit: '♣', rank: 'Q', value: 10 },
    { suit: '♣', rank: 'K', value: 10 }
  ];
  let playerCards = [];
  let dealerCards = [];
  let playerScore = 0;
  let dealerScore = 0;
  let message = '';
  let gameEnded = false
  let money = 0

  function startGame() {
    playerCards = [getRandomCard(), getRandomCard()];
    dealerCards = [getRandomCard(), getRandomCard()];
    playerScore = calculateScore(playerCards);
    dealerScore = calculateScore(dealerCards);
    message = '';
    gameEnded = false;
    money -= 20
  }

  function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }

  function calculateScore(hand) {
    let score = 0;
    let numAces = 0;
    for (let card of hand) {
      score += card.value;
      if (card.rank === 'A') {
        numAces++;
      }
    }
    while (score > 21 && numAces > 0) {
      score -= 10;
      numAces--;
    }
    return score;
  }

  function hit() {
    if(gameEnded) return;

    playerCards.push(getRandomCard());
    playerCards = playerCards
    playerScore = calculateScore(playerCards);

    if (playerScore > 21) {
      message = 'You bust! Dealer wins.';
      gameEnded = true
    }

  }

  function stand() {
    while (dealerScore < 17) {
      dealerCards.push(getRandomCard());
      dealerScore = calculateScore(dealerCards);
    }

    if (dealerScore > 21 || dealerScore < playerScore) {
      message = 'You win!';
      money += 30
    } else if (dealerScore > playerScore) {
      message = 'Dealer wins.';
    } else {
      message = 'It\'s a tie!';
    }
    gameEnded = true;
  }

  function playAgain() {
    startGame();
  }

  onMount(startGame);
</script>

<nav>
  <a class="navTitle" href="/notcasino"><span class="hus"></span>Home</a>
  <a href="/notcasino/slot" id="clickerLink">SlotMachine</a>
  <a href="/notcasino/blackjack" id="todoLink">BlackJack</a>
  <a href="/notcasino/coinflip">CoinFlip</a>
</nav>

<main>

<p>Money: {money}</p>

<div>
  <h2>Player:</h2>
  <p>Score: {playerScore}</p>
  <p>Cards: {#each playerCards as card}
    <span>{card.rank + card.suit}</span>
    {/each}
  </p>
  <button on:click={hit}>Hit</button>
  <button on:click={stand}>Stand</button>
</div>

<div>
  <h2>Dealer:</h2>
  <p>Score: {dealerScore}</p>
  <p>Cards: {#each dealerCards as card}
    {#if card === dealerCards[0]}
      <span>Hidden Card, </span>
    {:else}
      <span>{card.rank + card.suit}</span>
    {/if}
  {/each}</p>
</div>
 <p>{message}</p>

{#if gameEnded}
  <button on:click={playAgain}>Play Again</button>
{/if}
</main>

<style>
  main{
    position: relative;
    margin-top: 80px;
    align-items: center;
    text-align: center;
  }
  nav {
    position: fixed;
    top: 0;
    padding: 7px 15px 8px 15px;
    z-index: 10;
    background-color: #53606d;
    color: #e0e0e0;
    width: 100vw;
    border-bottom: 3px solid black;
  }

  nav .navTitle,
  a {
    display: inline-block;
    font-variant: small-caps;
  }

  nav a {
    color: #000000;
    text-decoration: none;
    font-size: 18px;
    margin-left: 45px;
    padding: 0 10px 0 10px;
    border-radius: 5px;
    user-select: none;
  }

  .navTitle {
    padding: 0px 10px 2px 10px;
    margin-top: 2px;
    font-size: 22px;
    margin-left: 15px;
    border: 2px solid black;
    border-radius: 5px;
  }

  .hus {
    display: inline-block;
    background: url(/hus.svg);
    height: 18px;
    aspect-ratio: 1;
    margin-right: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    transform: translateY(1px);
  }

  a:hover {
    cursor: pointer;
  }
</style>
