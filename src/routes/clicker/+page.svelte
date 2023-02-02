

<div class = "top">
    <title>Cookie Clicker</title>
    <div>
        <img class="cookieClass" on:click={()=>add()}  on:keypress={()=>add()} src="PerfectCookie.png" alt="cookie">
    </div>
    <h1>{cookies}</h1>
</div>

<script>
var cookies = 0
let click_multiplier = 1


let value = parseInt(localStorage.getItem('cookies'))
if (value !== null){
    cookies = value;
    }

function add(){
    cookies += 1;
    localStorage.setItem('cookies', cookies)
}


</script>    

<style>

.top{
    height: 100vh;
    width: 100vW;
}

.cookieClass{
    cursor: pointer;
    height: 200px;
    width: 200px;
    border: none;
    margin-left: 40vw;
    margin-top: 20vh;

}
h1{
    display: block;
    margin-left: 45vw;
}
.cookieClass:active{
    scale: 95%;
}


</style>