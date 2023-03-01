import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Jose',
		lastname: "Guachun"
	}
});

export default app;