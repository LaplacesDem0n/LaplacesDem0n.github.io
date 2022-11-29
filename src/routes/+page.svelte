<script>
import { onMount } from "svelte";
import IconButton from '@smui/icon-button';

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function writeText(el, text, written, index, delay){
    setTimeout(()=>{
        let interval = setInterval(() => {
            written += text[index];
            index += 1;
            el.innerText = written;
            if(written == text){
                clearInterval(interval);
                return;
            }
        }, 1200/text.Length);
    }, delay);
}

onMount(()=>{
    let abtTextEl = document.getElementById('aboutText');
    let infTextEl = document.getElementById('favouriteReads');
    writeText(abtTextEl, abtTextEl.innerText, '', 0, 1000);
    writeText(infTextEl, infTextEl.innerText, '', 0, 800);
    abtTextEl.innerText = '';
    infTextEl.innerText = '';

    let sections = [
        document.getElementById('clicker'),
        document.getElementById('todo'),
    ]
    let sectionLinks = [
        document.getElementById('clickerLink'),
        document.getElementById('todoLink'),
    ]

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;

        setTimeout(() => {
            if (scrolled == window.pageYOffset) {
                if ( scrolled % window.innerHeight >= window.innerHeight / 2) {
                    window.scrollBy({
                        left: 0,
                        top: window.innerHeight - (scrolled % window.innerHeight),
                        behavior: 'smooth'
                    })
                } else {

                    window.scrollBy({
                        left: 0,
                        top: -(scrolled%window.innerHeight),
                        behavior: 'smooth'
                    })
                }
            }
        }, 100);

        for(let i = 0; i < sections.length; i++){
            if (isInViewport(sections[i])){
                sectionLinks[i].style.background = '#e0e0e0';
                sectionLinks[i].style.color = '#1E2022';
            }
            else{
                sectionLinks[i].style.background = 'none';
                sectionLinks[i].style.color = '#e0e0e0';
            }
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    if (
        (window.performance.navigation && window.performance.navigation.type === 1) ||
        window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
    ){
        window.location.href = '/';
    }
    

});

</script>

<head>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Patrick+Hand" />
    <title>My Projects</title>
</head>

<body>

    <nav>
        <a class="navTitle" href="#home">Home</a>
        <a href="#clicker" id="clickerLink">Cookie Clicker</a>
        <a href="#todo" id="todoLink">ToDo List</a>
        <!--<IconButton class="material-icons" on:click={() => func} touch
            >build</IconButton>-->
    </nav>

    <div id="home">
        <div class="container">
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
                <p id="favouriteReads">
                    1. <a 
                    class='descriptionLink' 
                    href=https://wot.fandom.com/wiki/A_beginning 
                    target='_blank'
                    rel='noreferrer'>
                    Wheel of Time</a>, my favourite series. The world building and character development are out of this world.  
                    <br><br>
                    2. Mistborn, The power system fits together perfectly and it is the best I have ever seen. 
                    <br><br>
                    3. Throne of Glass, 
                </p>
            </div>
        </div>
        <a class="projectsText" href="#clicker">• Projects •</a>
    </div>

    <section id="clicker">
        <div id="cookieSidebar" class="sidebar">
            <h1>Clicker of Cookies</h1>
            <p class="sectionDescription">
                It's a work in progress. <br/>
                <!--Click <a class="linkText" href="/clicker">here</a> to play it.-->
            </p>
        </div>
        <a class="projectsText upper" href="#home">• Home •</a>
        <a class="projectsText" href="#todo">• Todo list •</a>
    </section>

    <section id="todo">
        <div id="todoSidebar" class="sidebar">
            <h1>Todo list</h1>
            <p class="sectionDescription">
                I have put the most effort <br>
                into my ToDo list, <br>
                you can click <a class="linkText" href="/Todo">here</a> to try it.
            </p>
        </div>
        <img class="screenshot" alt="Screenshot of the ToDo list" src="/screenie2.png"/>
        <a class="projectsText upper" href="#clicker">• Clicker •</a>
        <a class="projectsText" href="#other">• Other Projects •</a>
    </section>

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
    height: 200vh;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    background: white;
}

:global(body){
    padding: 0;
    margin: 0;
    min-width: 1360px;
}

nav{
    position: fixed;
    top: 0;
    padding: 7px 15px 8px 15px;
    z-index: 10;
    background: #1E2022;
    color: #e0e0e0;
    width: 100%;
    border-bottom: 3px solid #e0e0e0;
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
    color: #e0e0e0;
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
    border: 2px solid #e0e0e0;
    border-radius: 5px;
}

section{
    position: relative;
    height: 100vh;
}

#home{
    background: #d0d0d0;
    height: 100vh;
}

.container{
    position: relative;
    top: 45%;
    left:10%;
    margin-right: 270px;
    animation: 2s spawnBox forwards;
}

.descriptionBox{
    height: 400px;
    width: 400px;
    background: #8e9395;
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
    left: 25%;
}

.descriptionBox:last-of-type{
    left: 75%;
}

.descriptionBox p{
    text-align: center;
    color: #1E2022;
    position: relative;
    top: 20px;
    font-size: 18px;
}

.centerTitle{
    position: relative;
    top: 0px;
    width: 250px;
    text-align: center;
    vertical-align: middle;
    color: #1E2022;
    font-variant: small-caps;
    animation: .5s spawnText forwards;
    animation-delay: .6s;
    height: 0;
    z-index: -1;
    opacity: 0;
}

.projectsText{
    position: absolute;
    bottom: -45px;
    left: 50%;
    width: 600px;
    height: 90px;
    text-align: center;
    transform: translateX(-50%);
    font-size: 23px;
    color: black;
    text-decoration: none;
    letter-spacing: 4px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    padding: 5px;
    opacity: .9;
    transition: .25s all;
}

.projectsText.upper{
    top: 15px;
    height: 90px;
    padding-top: 45px;
    border-radius: 0;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
}

.projectsText:hover{
    scale: 1.05;
}

.descriptionLink{
    font-variant: normal;
    text-decoration: none;
    color: #404e4f;
}

section:nth-of-type(1){
    background: #dcd7c9;
}
section:nth-of-type(2){
    background: #c9d6df;
}
section:last-of-type{
    background: #333b46;
}

.linkText{
    color: white;
    font-variant: normal;
    text-decoration: none;
    border-bottom: 2px solid white;
}

.sidebar{
    height: 100vh;
    background: slategray;
    width: 25%;
    color: #e0e0e0;
}

.sidebar h1{
    position: relative;
    top: 90px;
    left: 22px;
    font-variant: small-caps;
}

.sectionDescription{
    position: relative;
    top: 120px;
    left: 25px;
    font-size: 15px;
}

.screenshot{
    height: 300px;
    width: 540px;
    z-index: 2;
    position: absolute;
    left: 55%;
    top: 22.5%;
    transform: rotate(6deg);
    border-radius: 5px;
}

#cookieSidebar{
    background: #404e4f;
    border-right: 4px solid #a27b5c;
}

#todoSidebar{
    background: #52616B;
    border-right: 4px solid #1E2022;
    color: #1E2022;
}

#todoSidebar .linkText{
    color: #1E2022;
    border-color: #1E2022;
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