<script>
    
    
import { onMount } from "svelte";


let cookies = 0;


function add(){
   cookies ++;
   localStorage.setItem('cookies', (cookies))
}

onMount(()=>{
    cookies = parseInt(localStorage.getItem('cookies')??"0");
    console.log(cookies)
})

</script> 

<div class = "top">
    <title>Cookie Clicker</title>
    <div>
        <img class="cookieClass" on:click={()=>add()}  on:keypress={()=>add()} src="PerfectCookie.png" alt="cookie">
    </div>
    <h1>{cookies}</h1>
</div>

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
    margin-left: 50vw;
}
.cookieClass:active{
    scale: 95%;
}


</style>