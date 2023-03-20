<div>
    <title>Todo App</title>
    <h1>Todo App</h1>
    <form on:submit|preventDefault={appendToList}>
    <input id="inputText" type="text" placeholder="Enter a thing Todo" bind:value={inputText}/>
    </form>
</div>

{#each todoList as element}
<div class='listElements' class:done ={element.done} >
    <input type='checkbox' bind:checked={element.done}><span>{element.inputText}</span>
    <button on:click={() => remove(element)}>&times;</button>
</div>
{/each}


<script>

    
    let todoList = [];
    let value = JSON.parse(localStorage.getItem('list'));
    if (value !== null){
        todoList = value;
    }

    let inputText = '';

    function appendToList() {
        todoList = [
            ...todoList,
            {
        id: Math.random(),
        inputText,
        done: false
      } 
    ];

    localStorage.setItem('list', JSON.stringify(todoList));

    inputText = '';
    

}

function remove(element){
    todoList= todoList.filter((e)=>e.id!=element.id)
    localStorage.setItem('list', JSON.stringify(todoList));

}

onbeforeunload = function(){
    localStorage.setItem('list', JSON.stringify(todoList));
}
</script>

<style>

h1{
    text-align: center;
    margin-bottom: 5%;
    margin-top: 3%;
    font-size: 36px;
}


input[type='text']{
    height:30px;
    width:50%;
    max-width: 450px;
    align-items: center;
    display: block;
    margin:auto;
    margin-bottom: 1%;
    border: solid 3px black;
    border-radius: 20px;
    text-align: center;
    font-size: 125%;
    
    
}

input[type='text']:focus{
    border-color: #534c4a;
    box-shadow: 0 0 10px #534c4a;
    outline: 0;
}

input[type='checkbox']{
    display: block;
    float: left;
    margin-left: 10px;
}

input[type='checkbox']:hover{
    box-shadow: 0 0 5px grey;
}


.listElements{
    display: block;
    text-align: center;
    align-items: center;
    margin: auto;
    margin-bottom: 5px;
    border: solid;
    height: 20px;
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    max-width: 95%;
    min-width: 130px;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s all; /* Partiall Credit: Nemo Eriksson */
    animation: .7s spawn;
}

@keyframes spawn{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

.listElements:hover{
    box-shadow: 0 0 5px grey;
    scale: 1.008;
}

button{
    float: right;
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    margin-right: 5px;
    color: #dc4f21;
    font-size: 18px;
    cursor: pointer;
}

button:hover{
    scale: 1.4;
}

.done span, .done input{
    opacity: 0.4;
}

</style>