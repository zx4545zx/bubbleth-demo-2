<script>
// @ts-nocheck

	import line from '$lib/assets/icon/social/line.png';
	import facebook from '$lib/assets/icon/social/facebook.png';
	import messenger from '$lib/assets/icon/social/messenger.png';
	import instagram from '$lib/assets/icon/social/instagram.png';
	import tiktok from '$lib/assets/icon/social/tiktok.png';

	import Card from '../components/Card.svelte';
	import WoodenSign from '../components/WoodenSign.svelte';
	import SlideFrame from '../components/SlideFrame.svelte';
	import { slideText } from '$lib/data/aboutDes';
	import { lang } from "$lib/stores/language"

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
	<title>About - Bubble in the Forest</title>
	<meta name="description" content="About - Bubble in the Forest" />
</svelte:head>

<div class="py-4 mx-4 mt-6 text-center">
	<SlideFrame images={data.slideImages} />
	<WoodenSign label="About Us" />

  <div id="zone"></div>
	
  <p class="set-word">
		{slideText.des[$lang]}
	</p>

	<h6 class="pt-5 font-bold">{slideText.title[$lang]}</h6>

	<p class="set-word">
		{slideText.titleDes[$lang]}
	</p>
</div>

<WoodenSign label="Zone" />

<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
	{#each data.zoneImages as z}
		<Card url={z.url} title={z.title[$lang]} des={z.des[$lang]} />
	{/each}
</div>

<div class="py-4 mx-4 text-center rounded-xl">
	<p>{slideText.locationA[$lang]}</p>
	<p>{slideText.locationB[$lang]}</p>
	<p class="mt-4">{slideText.time[$lang]}</p>
	<p>{slideText.telText[$lang]}
		<a href="tel:0657276888" class="underline text-secondary">{slideText.tel[$lang]}</a>
	</p>
</div>

<div class="w-full p-4">
	<label for="my-modal" class="w-full btn btn-outline btn-secondary">
		{slideText.button[$lang]}
	</label>
</div>

<div class="w-full p-4 mx-auto aspect-video">
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		allowfullscreen={true}
		frameborder="0"
		loading="lazy"
		src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA4wmyApff13KBNeltgC6hk91jGZXt9F0g&amp;q=13.789075047362823%2C+100.30573833966164&amp;zoom=15"
		width="100%"
		height="100%"
		style="
		border-radius: 20px;
    border: 4px solid white;
		"
	/>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<label for="my-modal" class="cursor-pointer modal modal-bottom sm:modal-middle">
	<label class="relative modal-box" for="">
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://line.me/ti/p/@bubbleintheforest"
			target="_blank"><img src={line} alt="line" class="w-8" />&nbsp; LINE</a
		>
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://m.facebook.com/Bubbleintheforest"
			target="_blank"><img src={facebook} alt="facebook" class="w-8" />&nbsp; FACEBOOK</a
		>
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://m.me/Bubbleintheforest"
			target="_blank"><img src={messenger} alt="messenger" class="w-8" />&nbsp; MESSENGER</a
		>
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://m.instagram.com/bubbleintheforest"
			target="_blank"><img src={instagram} alt="instagram" class="w-8" />&nbsp; INSTAGRAM</a
		>
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://www.tiktok.com/@bubbleintheforest"
			target="_blank"><img src={tiktok} alt="tiktok" class="w-8" />&nbsp; TIK TOK</a
		>
	</label>
</label>

<style>
	.set-word {
		word-break: break-word;
    text-align: justify;
		text-align-last: center;
	}
</style>