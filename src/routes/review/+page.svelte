<script>
	// import { landingImages } from '$lib/data/reviewLanding';
	import wongnai from '$lib/assets/icon/social/wongnai.png';
	import WoodenSign from '../components/WoodenSign.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
	<title>Review - Bubble in the Forest</title>
	<meta name="description" content="Review - Bubble in the Forest" />
</svelte:head>

<div class=" mt-6">
	<WoodenSign label='Reviews' />
</div>

<div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 px-4">
	{#each data.landingImages as img}
		<div class="w-full overflow-hidden lg:overflow-scroll lg:max-h-screen shadow-xl rounded-3xl bg-none">
			<img src={img} alt="food" class="object-cover w-full" />
		</div>
	{/each}
</div>

<div class="container mx-auto my-8 text-center">
	<a
		href="https://www.wongnai.com/restaurants/741513gT-bubble-in-the-forest-cafe"
		class="btn btn-outline btn-info"
		>ดูเพิ่มเติม ได้ที่ &nbsp;<img src={wongnai} alt="wongnai" class="w-8 rounded-xl" /></a
	>
</div>
