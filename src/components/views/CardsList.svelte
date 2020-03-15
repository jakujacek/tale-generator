<script>
    import Card from '../parts/Card.svelte';
    import { cardsStore } from '../../stores/stores.js';

    function generateCards() {
        
    }
</script>

<div>
{#each $cardsStore as card}
<Card cardData={card}></Card>
{/each}
</div>

<style>
    div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
</style>