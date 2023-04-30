<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	import Card from './components/Card.svelte';
	import Content from './components/Content.svelte';

	import { slideImages } from '$lib/data/homeSlide';
	import { landingImages } from '$lib/data/homeLanding';

	let options = {
		width: '100%',
		height: '100%',
		// gap: '1rem',
		type: 'loop',
		autoplay: true,
		perPage: 1,
		pagination: false,
		speed: 1000
	};
</script>

<svelte:head>
	<title>Home Page - Bubble in tho Forrest</title>
	<meta name="description" content="Bubble in tho Forrest" />
</svelte:head>

<div class="pb-8 mx-auto">
	<div class="h-full">
		<div class="w-full sm:rounded-lg sm:overflow-hidden">
			<Splide aria-label="Slide" {options}>
				{#each slideImages as img, i}
				<SplideSlide>
					<div class="w-full">
						<img src={img} alt={`food-${i + 1}`} class="object-cover w-full h-full mx-auto min-h-[200px]" />
					</div>
				</SplideSlide>
				{/each}
			</Splide>
		</div>

		<div class="pb-16 m-4">
			<!-- // text -->
			<div class="p-4 text-center rounded-full">
				<h1 class="pb-2 text-3xl">ยินดีต้อนรับ สู่</h1>
				<h2 class="text-4xl">
					<span class=" text-secondary">Bubble</span> in the
					<span class=" text-primary">forrest</span>
				</h2>
				<h4 class="text-lg">คาเฟ่ และร้านอาหาร สไตล์มัลดีฟส์สุดเก๋ ที่มีเรือนไม้ลอยน้ำ</h4>
			</div>

			<!-- // location -->
			<div class="text-center">
				<a href="/about" class="mx-auto text-sm rounded-full btn btn-sm btn-outline btn-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-geo-alt-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
						/>
					</svg> Location</a
				>
			</div>
		</div>
		
		<div id="checkpoint" class="py-8 bg-white">
		</div>
		
		<div id="food" class="py-8">
		</div>
		
		<div id="review" class="py-8 bg-white">
		</div>
		
		<div id="event" class="py-8">
		</div>

	</div>
</div>

<style>
</style>
