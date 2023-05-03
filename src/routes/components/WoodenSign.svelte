<script>
	import woodenSign from '$lib/assets/wooden_sign.png';

	export let label = '';
</script>

<!-- <div class="flex items-center justify-center relative">
	<img class="w-full h-full object-cover" src={woodenSign} alt="" />
	<p class="text-center mt-4 absolute">{label}</p>
</div> -->

<div class="relative">
	<img src={woodenSign} alt="woodenSign" class="w-9/12 h-auto mx-auto max-w-sm pe-2"/>
	<div class="absolute inset-0 flex items-center justify-center">
		<h1
			class="text-center text-xl font-black sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
			style="padding-bottom: 20px; font-family: cursive;"
		>
			{label}
		</h1>
	</div>
</div>
