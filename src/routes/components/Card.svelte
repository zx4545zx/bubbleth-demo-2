<script>
	import frame from '$lib/assets/pic-frame.png';

	export let url = '';
	export let title = '';
	export let des = '';
</script>

	<div class="relative w-full mt-8 sm:mt-24">
		<div class="absolute w-full -mt-8 frame-img sm:-mt-12 lg:-mt-16 xl:-my-24">
			<img src={frame} alt="frame-img" class="w-full m-auto" />
		</div>
		<img
			src={url}
			alt="card-img"
			class="img-slide mx-auto w-5/6
    sm:h-80 sm:ml-16 sm:w-[85%]
    md:ml-20 md:h-96
    lg:ml-28 lg:h-[33rem]
    xl:h-[40rem] xl:ml-36
    2xl:h-[48rem]"
		/>
	</div>

	<div class="container px-12 pt-8 pb-16 text-center img-bg">
		{#if title != '' && des != ''}
			<p class="p-4">{title}</p>
			<span>{des} &nbsp;</span>
		{/if}
	</div>

<style>
	* {
		font-family: 'Pattaya', sans-serif;
	}
	.img-slide {
		object-fit: cover;
	}
	.img-bg {
		background-image: url('../../lib/assets/bubble-text.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
	@media (max-width: 640px) {
		.img-slide {
			margin-left: calc(100vw * 0.11);
			height: calc(100vw * 0.5);
			object-fit: cover;
		}
	}
	@media (max-width: 425px) {
		.frame-img {
			margin-top: -1.25rem;
		}
	}
</style>
