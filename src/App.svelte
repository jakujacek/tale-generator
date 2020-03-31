<script>
	import AddRemoveUser from './components/views/AddRemoveUser.svelte';
	import GenerateCards from './components/views/GenerateCards.svelte';
	import CardsList from './components/views/CardsList.svelte';
  import StateButtons from './components/parts/StateButtons.svelte';
  import Nav from './components/parts/Nav.svelte'
  import { state } from './stores/stores.js';
	import { fade } from 'svelte/transition';
  import { afterUpdate } from 'svelte';

  let isLoader = false;

</script>

<Nav />

<main>
	<StateButtons />

	<div class="view-container">
		{#if $state === 0}
		<section in:fade="{{duration: 400}}">
			<AddRemoveUser />
		</section>
		{:else if $state === 1}
		<section in:fade="{{duration: 400}}">
			<CardsList />
		</section>
		{:else if $state === 2}
		<section in:fade="{{duration: 400}}">
			<GenerateCards />
		</section>
		{/if}

		{#if isLoader}
			<div class="loader"></div>
		{/if}
	</div>

</main>

<style>
	:global(body) {
		max-width: 100vw;
		max-height: 100vh;
		overflow-x: hidden;
	}

	main {
		position: relative;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.view-container {
		position: relative;
	}

	.loader {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		z-index: 100;
		background-color: black;
		opacity: 0.8;	
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>