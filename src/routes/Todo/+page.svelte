
<div class='Top'>
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
    import { element } from "svelte/internal";


    let todoList = []
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
    inputText = '';

}

function remove(element){
    todoList= todoList.filter((e)=>e.id!=element.id)

}

function toggle(element){
    element.done = !element.done;
    todoList = todoList;
  };

</script>

<style>

.Top{
    padding-bottom: 15px;
    margin-bottom: 10px;
}

h1{
    text-align: center;
    margin-bottom: 7%;
    margin-top: 3%;
    font-size: 500;
}

input[type='text']{
    height:40px;
    width:450px;
    align-items: center;
    display: block;
    margin-bottom: 10px;
    border-radius: 20px;
    text-align: center;
    font-size: 125%;
    position: relative;
    left: 50%;
    top: 5%;
    transform: translate(-50%,-50%);
    
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
    min-width: 200px;
    border-radius: 10px;
    cursor: pointer;
}

.listElements:hover{
    box-shadow: 0 0 5px grey;
    transform: scale(1.008);
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
    transform: scale(1.4);
}

.done{
    opacity: 0.5;
}

</style>