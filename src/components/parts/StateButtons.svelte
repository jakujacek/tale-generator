<script>
    import { state } from '../../stores/stores.js';

    const stateBtns = ['Widok logowania', 'Widok kart', 'Widok generowania kart'];
</script>

<section>
    {#each stateBtns as btn, i}
    <button on:click={e => state.set(i)}
            class={$state === i ? 'active' : ''}>
            { btn }
    </button>
    {/each}
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }

    section > button {
        background-color: white;
        border: 1px solid lightgray;
        margin: 0 10px;
        width: 260px;
    }

    .active {
        background-color: green;
        color: white;
        border-color: green;
    }
</style>