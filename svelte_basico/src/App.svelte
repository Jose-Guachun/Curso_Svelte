<script>
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
	export let name;
	export let lastname;
	let foto ="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

	const data={
		name:"Jose Luis",
		lastName:"Guachun Saldaña",
		age:26,
	}
</script>

<main>
	<h1>Hello {name} {lastname}!</h1>
	<About/>
	<Text anotherText="Hola!"/>
	<Person {...data}/>
	<img src="{foto}" alt="Svelte">
</main>

<style>

 	:global(body){
		background-color: rgb(2, 92, 104);
		color: rgb(0, 0, 0);
	}
 	:global(:root){
		--theme-color:rgb(248, 248, 248);
 	}
	p {
		color: var(--theme-color);
		font-size: 14px;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	main img{
		width: 30%;
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