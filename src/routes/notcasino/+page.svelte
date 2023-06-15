<!--Menu-->
<head>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Patrick+Hand" />
    <title>My Website</title>
</head>

<body>

    <nav>
        <a class="navTitle" href="/notcasino"><span class="hus"></span>Home</a>
        <a href="/notcasino/slot" id="clickerLink">SlotMachine</a>
        <a href="/notcasino/blackjack" id="todoLink">BlackJack</a>
        <a href="/notcasino/coinflip">CoinFlip</a>
    </nav>

    <div class="container">
            <div class="Box" id="1">
                <a href="/notcasino/slot" ><h1 class="centerTitle">SlotMachine</h1></a>
                <p class='boxText'>Price: 5</p>
                
            </div>
            <div class="Box" id="2">
                <a href="/notcasino/blackjack" ><h1 class="centerTitle">BlackJack</h1></a>
                <p class='boxText'>Price: 20</p>
            </div>
            <div class="Box" id="3">
                <a href="/notcasino/coinflip" ><h1 class="centerTitle">CoinFlip</h1></a>
                <p class='boxText'>Price: 1</p>
            </div>
    </div>

</body>


<style>
 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Patrick Hand';
        font-weight: normal;
        letter-spacing: .08em;
        caret-color: transparent;
    }
    
    
    *:hover{
        cursor: default;
    }
    
    *::selection{
        user-select: none;
    }
    
    body{
    
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        background-color: black;
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
    .container{
        position: absolute;
        top: 30vh;
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        gap: 200px;
        animation: 1651.1561ms spawnBox forwards;
    }
    
    .Box{
        height: 500px;
        width: 340px;
        background: #bbbbbb;
        border-radius: 20px;
        position: relative;
        z-index: 2;
        padding: 3px;
        display: block;
    }
    
    .centerTitle{
        position: relative;
        top: 0px;
        left: 12%;
        width: 250px;
        text-align: center;
        vertical-align: middle;
        color: #000000;
        font-variant: small-caps;
        animation: .5s spawnText forwards;
        animation-delay: .6s;
        height: 0;
        z-index: -1;
        opacity: 0;
    }    
    .boxText{
    font-size: 23px;
    color: black;
    text-align: center;
    margin-top: 40%;
    
}
    
    @keyframes spawnBox{
        0%{
            opacity: 0;
            gap: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            gap: 120px;
        }
    }
    
    @keyframes spawnText{
        from{
            top: 0;
            opacity: 0;
        }
        to{
            top: 45px;
            opacity: 1;
        }
    }

    @keyframes spawnText{
    from{
        top: -100px;
        opacity: 0;
    }
    to{
        top: 30px;
        opacity: 1;
    }
}
    
    </style>