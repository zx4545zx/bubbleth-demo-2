<script>
// @ts-nocheck

	import SlideFrame from './components/SlideFrame.svelte';
	import Card from './components/Card.svelte';
	import Content from './components/Content.svelte';
	import { slideText } from '$lib/data/homeDes';
	import { lang } from "$lib/stores/language";
  
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Home Page - Bubble in tho Forest</title>
	<meta name="description" content="Bubble in tho Forest" />
</svelte:head>

<div class="mx-auto h-full">
	<div class="h-full">
		<SlideFrame images={data.slideImages} />

		<div class="pb-8">
			<div class="add-bg text-start rounded-full">
				<h1 class="pb-2 text-3xl text-center">{slideText.welcome[$lang]}</h1>
				<h2 class="text-4xl mb-4">
					<div class="text-center text-6xl">
						<span style="font-family: 'Lora'; text-shadow: 4px 2px lightblue;" class="text-blue-600"
							>BUBBLE</span
						>
					</div>
					<div class="w-max mx-auto">
						<p style="font-family: 'Lora';" class=" text-amber-800">in the</p>
						<p class="text-center ml-20 text-green-800" style="font-family: 'Lora';">
							<span style="font-family: 'Great Vibes'; font-size: 90px;">F</span>orest
						</p>
					</div>
				</h2>
				<h4 class="text-lg text-center px-8">
					{slideText.des[$lang]}
				</h4>
			</div>
		</div>

		<Content>
			<div class="grid pb-16 gap-16 px-4 sm:px-0">
				{#each data.landingImages as img,i}
					<div class="block lg:hidden">
						<a href={img?.href}>
							<Card url={img.url} title={img.title[$lang]} des={img.des[$lang]} />
						</a>
					</div>

					<div class="hidden lg:block">

						<div class="flex max-h-96 bg-base-100 shadow-xl rounded-3xl">
							{#if (i%2 === 0)}
							<figure class="flex justify-start items-center"><img src={img.url} alt="img" class="rounded-3xl h-full w-full object-cover"/></figure>
							{/if}
							<div class="card-body justify-center items-start">
								<h2 class="card-title text-[2.5rem] leading-[3rem]">{img.title[$lang]}</h2>
								<div>{img.des[$lang]}</div>
							</div>
							{#if (i%2 !== 0)}
							<figure class="flex justify-end items-center"><img src={img.url} alt="img" class="rounded-3xl h-full w-full object-cover"/></figure>
							{/if}
						</div>

					</div>
				{/each}
			</div>
		</Content>

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
