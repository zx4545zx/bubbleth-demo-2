<script>
	import woodenSign from '$lib/assets/wooden_sign.png';

	export let label = '';
</script>

<!-- <div class="flex items-center justify-center relative">
	<img class="w-full h-full object-cover" src={woodenSign} alt="" />
	<p class="text-center mt-4 absolute">{label}</p>
</div> -->

<div class="relative">
	<img src={woodenSign} alt="Your Image" class="w-full h-auto object-contain pe-3" />
	<div class="absolute inset-0 flex items-center justify-center">
		<p
			class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-5"
			style="font-size: 8vw; font-family: cursive;"
		>
			Zone
		</p>
	</div>
</div>
