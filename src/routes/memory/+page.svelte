<script>
    let cards = [];
    let imgList = ["/notrick.gif", "/Rollin.jpg", "/jhon.jpg", "/Otto.jpg", "/WalterWhite.png", "/DavieJhon.jpg", "/Limie.jpg", "/merran.jpg"]
    for (let index = 0; index < 8; index++) {
      cards.push({
        id: index,
        img: imgList[index],
        flipped: false,  
        completed: false,
      },{
        id: index+0.5,
        img: imgList[index],
        flipped: false,  
        completed: false,
      });
    }
    cards = cards.sort((a, b) => 0.5 - Math.random());
    let flipcount = 0;
    let flippedcard1;
    let flippedcard2;
    function flip(card) {
      if (!card.flipped && flipcount < 2) {
        card.flipped = true;

        if(flipcount == 0){
          flippedcard1 = card.img;
        }
        else if(flipcount == 1){
          flippedcard2 = card.img;
        }
        flipcount += 1;
        if (flipcount == 2 && flippedcard1 == flippedcard2) {
          setTimeout(() => {
            cards.forEach((card) => {
              card.completed = card.flipped;
            });
            flipcount = 0;
            flippedcard1 = '+';
            flippedcard2 = '';
            cards = cards;
          }, 2000);
        }
        else if (flipcount == 2) {
          setTimeout(() => {
            cards.forEach((card) => {
              card.flipped = card.completed;
            });
            flipcount = 0;
            flippedcard1 = '';
            flippedcard2 = '';
            cards = cards;
          }, 2000);
        }
        cards = cards; 
      }
    }
  </script>
  
  <main>
    <title>Memory</title>
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="front.webp" alt="" />
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
    }
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(4, 100px);
    }
    .card {
      border: 1px solid black;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .card .back {
      transform: rotateY(0deg);
    }
    .card .front {
      transform: rotateY(180deg);
    }
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
  </style>