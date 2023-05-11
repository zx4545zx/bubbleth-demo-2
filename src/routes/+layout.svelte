<script>
	import Navbar from './components/Navbar.svelte';
	import NavbarNew from './components/NavbarNew.svelte';
	import Footer from './components/Footer.svelte';
	import WaveBottom from './components/WaveBottom.svelte';
	import BottomNav from './components/BottomNav.svelte';

	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	import './styles.css';
	import '@splidejs/svelte-splide/css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app sm:bg-white">
	<main>
		<!-- <Navbar /> -->
		<NavbarNew />
		{#key $page.url.pathname}
			<div
				class="mx-auto -mt-10 pb-8 min-h-screen"
				in:fly={{ y: 400, duration: 500 }}
			>
				<slot />
			</div>
		{/key}
		<Footer />
		<WaveBottom />
	</main>

	<BottomNav />
</div>
