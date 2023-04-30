<script>
	import { landingImages } from '$lib/data/reviewLanding';
	import wongnai from '$lib/assets/icon/social/wongnai.png';
</script>

<svelte:head>
	<title>Review - Bubble in the Forrest</title>
	<meta name="description" content="Review - Bubble in the Forrest" />
</svelte:head>

<div class="mx-auto mb-4 text-center">
	<h1 class="text-3xl font-bold">Reviews</h1>
</div>

<div class="flex flex-col gap-4 px-4">
	{#each landingImages as img}
		<div class="w-full overflow-hidden shadow-xl rounded-3xl bg-none">
			<img src={img} alt="food" class="object-cover w-full" />
		</div>
	{/each}
</div>

<div class="container mx-auto my-8 text-center">
	<a
		href="https://www.wongnai.com/restaurants/741513gT-bubble-in-the-forest-cafe"
		class="shadow-2xl btn btn-outline btn-info"
		>ดูเพิ่มเติม ได้ที่ &nbsp;<img src={wongnai} alt="wongnai" class="w-8 rounded-xl" /></a
	>
</div>
