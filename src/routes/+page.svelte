<script>
	import SlideFrame from './components/SlideFrame.svelte';
	import Card from './components/Card.svelte';
	import Content from './components/Content.svelte';

	import { slideImages } from '$lib/data/homeSlide';
	import { landingImages } from '$lib/data/homeLanding';

	// import checkpoint from '$lib/assets/checkpoint/1.jpg';
</script>

<svelte:head>
	<title>Home Page - Bubble in tho Forrest</title>
	<meta name="description" content="Bubble in tho Forrest" />
</svelte:head>

<!-- svelte-ignore missing-declaration -->
<div class="mx-auto h-full">
	<div class="h-full">
		<SlideFrame images={slideImages} />

		<div class="pb-8 m-4">
			<!-- // text -->
			<div class="add-bg p-4 text-center rounded-full">
				<h1 class="pb-2 text-3xl">ยินดีต้อนรับ สู่</h1>
				<h2 class="text-4xl">
					<span class=" text-secondary">Bubble</span> in the
					<span class=" text-primary">forest</span>
				</h2>
				<h4 class="text-lg">คาเฟ่ และร้านอาหาร สไตล์มัลดีฟส์สุดเก๋ ที่มีเรือนไม้ลอยน้ำ</h4>
			</div>
		</div>

		<Content>
			{#each landingImages as img}
				<a href={img?.href}>
					<Card url={img.url} title={img.title} des={img.des} />
				</a>
			{/each}
		</Content>

		<!-- // location -->
		<div class="text-center p-4">
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
</div>

<style>
	.add-bg {
		background-image: url('../lib/assets/bubble-text.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
