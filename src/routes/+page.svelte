<script>
import { onMount } from "svelte"; 
</script>

<head>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Patrick+Hand" />
    <title>My Website</title>
</head>

<body>

    <nav>
        <a class="navTitle" href="#home">Home</a>
        <a href="#clicker" id="clickerLink">Cookie Clicker</a>
        <a href="#todo" id="todoLink">Todo List</a>
    </nav>

    <div class="container y-scroll y-mandatory">
        <section id="home">
            <div class="wrapper">
                <div class="descriptionBox">
                    <h1 class="centerTitle">• About Me</h1>
                    <p id="aboutText">
                        I am an all around person who is interested in a lot of different things. I have for example tried my hand with magic,
                        different sports, and some games. When I take interest in something I am captivated by it but only for a short time.
                        The only interest that have stayed with me so far are football, programming and videogames, and most of all reading.
                    </p>
                </div>
                <div class="descriptionBox">
                    <h1 class="centerTitle">• Best Books</h1>
                    <p id="booksText">
                        1. <a
                        class='linkText'
                        rel="noreferrer"
                        href='https://wot.fandom.com/wiki/A_beginning'
                        target="_blank">
                        Wheel of Time</a>, my favourite series. The world building and character development are out of this world.
                        <br><br>
                        2. <a
                        class='linkText'
                        rel="noreferrer"
                        href='https://lordofthemysteries.fandom.com/wiki/Klein_Moretti'
                        target="_blank">
                        Lord of the Mysteries</a>, Lord of the mysteries might be as good as, if not better, than Wheel of Time. However, 
                        the story is not yet completed and towards the end when Klein gets stronger i felt that the battles became more abstract and thus not something i could imagine like the earlier fights.
                        It did redeem itself toqards the very end, and have no flaws. All in all the peak of fiction.
                         <br><br>
                        3. <a
                        class='linkText'
                        rel="noreferrer"
                        href='https://mistborn.fandom.com/wiki/Mistborn_Wiki'
                        target="_blank">
                        Mistborn</a>, The power system fits together perfectly and it is one of the best I have ever seen.
                    </p> 
                        
                </div>
            </div>
            <a class="projectsText" href="#clicker">• Projects •</a>
        </section>
        <section id="clicker">
            <div id="cookieSidebar" class="sidebar">
                <h1 class='sidebarTitle'>Clicker of Cookies</h1>
                <p class="sectionDescription">
                    It's a work in progress. <br/>
                    Click <a class="linkText" href="/clicker">here</a> to play it.
                </p>
            </div>
            <a class="projectsText upper" href="#home">• Home •</a>
            <a class="projectsText" href="#todo">• Todo list •</a>
        </section>
        <section id="todo">
            <div class='parent'>
            <div class='main'>
                <h1>Todo List</h1>
                <p class='sectionDescription'>
                    My Todo list has a lot of features, every change you do will automatically be saved and ready for the next time you enter.
                    Every task has a box you can check when you are done and a delete button.
                    You can try it out <a class="linkText" href="/todo">here</a>.
                </p>
            </div>
            </div>
            <a class="projectsText upper" href="#clicker">• Clicker •</a>
        </section>
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

    height: 300vh;
    width: 100vw;
    margin: 0;
    padding: 0;
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

h1::selection, 
p::selection, 
a::selection,
br::selection{
    background: #708090;
    color: #e0e0e0;
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

a:hover{
    cursor: pointer;
}

.navTitle{
    padding: 0px 10px 2px 10px;
    margin-top: 2px;
    font-size: 22px;
    margin-left: 15px;
    border: 2px solid black;
    border-radius: 5px;
}

.y-mandatory {
  scroll-snap-type: y mandatory;
}

section{
    display: block;
    position: relative;
    scroll-margin: 10px;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    height: 100vh;
    width: 100vw;
    

}

#home{
    background: #ffffff;
    height: 100vh;
}

.wrapper{
    position: relative;
    top: 45%;
    left:10%;
    animation: 2s spawnBox forwards;
}

.descriptionBox{
    height: 450px;
    width: 400px;
    background: #bbbbbb;
    border-radius: 20px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-top: 80px;
    transform: translate(-50%, -50%);
    z-index: 2;
    padding: 3px;
}

.descriptionBox:first-of-type{
    left: 20%;
    padding-left: 20px;
    padding-right: 20px;
}

.descriptionBox:last-of-type{
    left: 60%;
    padding-left: 20px;
    padding-right: 20px;
}

.descriptionBox p{
    text-align: center;
    color: #000000;
    position: relative;
    top: 20px;
    font-size: 18px; 
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

.projectsText{
    position: absolute;
    bottom: -5%;
    left: 50%;
    width: 600px;
    height: 90px;
    text-align: center;
    transform: translateX(-50%);
    font-size: 23px;
    color: black;
    text-decoration: none;
    letter-spacing: 3px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    opacity: .6;
    transition: .25s all;
}

.projectsText.upper{
    top: 10%;
    height: 90px;
    border-radius: 0;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
}

.projectsText:hover{
    scale: 1.02;
    opacity: 1;
}

.linkText{
    color: black;
    font-variant: normal;
    text-decoration: none;
    border-bottom: 2px solid black;
}

#todo{
    background-image: url("/Todo_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
#clicker{
    background-color: white;
    background-size: cover;

}
.main{
    display: inline-block;
    height: 100vh;
    width: 25vw;
    color: #e0e0e0;
}

.parent{
    height: 100vh;
    width:100vw;
    text-align: center;
    background: rgba(0,0,0,0.4);
}

.main h1{
    position: relative;
    top: 15%;
    right: 100%;
    font-variant: small-caps;
    font-size: 35px;
}

.sectionDescription{
    position: relative;
    top: 62%;
    left: 35%;
    font-size: 17px;
}


@keyframes spawnBox{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}


@keyframes spawnText{
    from{
        top: 0;
        opacity: 0;
    }
    to{
        top: -100px;
        opacity: 1;
    }
}

</style>