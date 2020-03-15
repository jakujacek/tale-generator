<script>
    import Card from '../parts/Card.svelte';
    import { cardsStore } from '../../stores/stores.js';
    import { taleParser } from '../../utils/utils.js';
    import { taleFunctions } from '../../tale-abstracts/tale-functions';
    import { fly } from 'svelte/transition';

    let storyline = [];
    let story = [];

    function runTaleParser() {
      story = taleParser(storyline, taleFunctions);
    }
</script>

<button on:click={runTaleParser}>Generuj karty</button>

{#if !!story}
<div class="cards-section">
 {#each story as storyPart, i (Date.now() + i)}
  <div in:fly="{{y: 60 + i * 10, delay: 300, duration: 400 + i * 200}}"
       out:fly={{y: 10, duration: 300}}>
    <Card cardData={storyPart} />
  </div>
 {/each}
</div>
{/if}

<style>
  .cards-section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>