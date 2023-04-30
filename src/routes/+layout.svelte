<script>
	import { fade } from 'svelte/transition'
	import BottomNav from './components/BottomNav.svelte';
	import Navbar from './components/Navbar.svelte';
	import WaveBottom from './components/WaveBottom.svelte';
	import './styles.css';
	import '@splidejs/svelte-splide/css';
	import Footer from './components/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<main>
		<Navbar />
		<div transition:fade class="mx-auto sm:container sm:w-3/4" >
			<slot />
		</div>
		<Footer />
		<WaveBottom />
	</main>

	<BottomNav />
</div>
