
<svelte:head>
  <link rel="stylesheet"/>

  <style>
    @media (prefers-color-scheme: dark){

    }
  </style>
</svelte:head>

<main class="container"  data-theme="dark">
  <slot />
</main>

<script>
    import "@picocss/pico/css/pico.min.css";
    import { text } from "svelte/internal";
</script>