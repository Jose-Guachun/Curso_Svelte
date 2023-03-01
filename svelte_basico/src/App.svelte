<script>
    import About from "./components/About.svelte";
	import Skills from "./components/Skills.svelte";
	import Input from "./components/Input.svelte";
	import Photos from "./components/Photos.svelte";
	export let name;
	export let lastname;
	
</script>

<main>
	<h1>HOLA {name} {lastname}!</h1>
	<About/>
	<Skills/>
	<Input/>
	<Photos/>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	:global(body.dark-mode){
		background-color: rgb(51, 51, 51);
		color: rgb(245, 245, 245);
	}
	:global(h1.color-white){
		color: rgb(245, 245, 245);
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>