import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'José',
		lastname: 'Guachun'

	}
});

export default app;