<script>
	import line from '$lib/assets/icon/social/line.png';
	import facebook from '$lib/assets/icon/social/facebook.png';
	import messenger from '$lib/assets/icon/social/messenger.png';
	import instagram from '$lib/assets/icon/social/instagram.png';
	import tiktok from '$lib/assets/icon/social/tiktok.png';
</script>

<svelte:head>
	<title>About - Bubble in the Forrest</title>
	<meta name="description" content="About - Bubble in the Forrest" />
</svelte:head>

<div class="mx-auto mb-4 text-center">
	<h1 class="text-3xl font-bold">Contact Us</h1>
</div>

<div class="py-4 mx-4 text-center rounded-xl">
	<p>170 ซ.เจริญท่า ต.บางเตย</p>
	<p>อ.สามพราน นครปฐม 73170</p>
	<p class="mt-4">เปิด-ปิด : 10:00 น. - 22:00 น.</p>
	<p>ติดต่อ : <a href="tel:+66657276888" class="underline text-secondary">065-727-6888</a></p>
</div>

<div class="w-full p-4">
	<label for="my-modal" class="w-full btn btn-outline btn-secondary"
		>ติดตามข่าวสาร หรือจองล่วงหน้า ได้ที่</label
	>
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
		<a class="flex justify-start mb-2 btn btn-outline btn-secondary" href="http://line.me/ti/p/@bubbleintheforest"
			 target="_blank" ><img src={line} alt="line" class="w-8" />&nbsp; LINE</a
		>
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://m.facebook.com/Bubbleintheforest"
			 target="_blank" ><img src={facebook} alt="facebook" class="w-8" />&nbsp; FACEBOOK</a
		>
		<a class="flex justify-start mb-2 btn btn-outline btn-secondary" href="http://m.me/Bubbleintheforest"
			 target="_blank" ><img src={messenger} alt="messenger" class="w-8" />&nbsp; MESSENGER</a
		>
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://m.instagram.com/bubbleintheforest"
			 target="_blank" ><img src={instagram} alt="instagram" class="w-8" />&nbsp; INSTAGRAM</a
		>
		<a
			class="flex justify-start mb-2 btn btn-outline btn-secondary"
			href="http://www.tiktok.com/@bubbleintheforest"
			 target="_blank" ><img src={tiktok} alt="tiktok" class="w-8" />&nbsp; TIK TOK</a
		>
	</label>
</label>
