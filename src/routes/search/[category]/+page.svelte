<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
      <article>
        <h3>{item.first_name} {item.last_name}</h3>
        <h6>{item.gender}</h6>
        <h4>Email : {item.email} &nbsp &nbsp Country : {JSON.stringify(item.address.country)}</h4>
        <img src="{item.avatar}" alt="{item.first_name}'s avatar">
      </article>
    {/each}
  </div>
</main>

<style>
  img{
    border-radius: 100%;
    background-color: white;
  }
  h6{
    margin-top: -20px;
    font-size: 18px;
  }
</style>