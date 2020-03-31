<script>
    import Card from '../parts/Card.svelte';
    import { cardsStore } from '../../stores/stores.js';
    import { taleParser } from '../../utils/utils.js';
    import { taleFunctions } from '../../tale-abstracts/tale-functions';
    import { fly } from 'svelte/transition';
    import { _ } from 'svelte-i18n'

    let storyline = [];
    let story = [];

    function runTaleParser() {
      story = taleParser(storyline, taleFunctions);
    }
</script>

<button on:click={runTaleParser}>{$_('common.btn.generateCards')}</button>

{#if !!story}
<div class="cards-section">
 {#each story as storyPart, i (Date.now() + i)}
  <div in:fly="{{y: 60 + i * 10, duration: 400 + i * 200}}">
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