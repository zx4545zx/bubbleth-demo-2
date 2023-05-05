<script>
	import woodenSign from '$lib/assets/wooden_sign.png';

	export let label = '';
</script>

<div class="relative">
	<img src={woodenSign} alt="woodenSign" class="w-9/12 h-auto mx-auto max-w-sm pe-2" />
	<div class="absolute inset-0 flex items-center justify-center">
		<h1
			class="text-center text-xl font-black sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
			style="padding-bottom: 20px; font-weight: bolder; font-family: 'Satisfy', cursive;"
		>
			{label}
		</h1>
	</div>
</div>

<style>
	h1 {
		text-shadow: 1px 1px #ad8e70;
		color: #3c2317;
	}
</style>
