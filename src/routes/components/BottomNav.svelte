<script>
	import { page } from '$app/stores';

	import about from '$lib/assets/icon/about.png';
	import event from '$lib/assets/icon/event.png';
	import food from '$lib/assets/icon/food.png';
	import review from '$lib/assets/icon/review.png';
	import home from '$lib/assets/icon/zone.png';

	let pages = [
		{
			name: 'Home',
			url: '/',
			img: home
		},
		{
			name: 'Food',
			url: '/food',
			img: food
		},
		{
			name: 'Review',
			url: '/review',
			img: review
		},
		{
			name: 'Event',
			url: '/event',
			img: event
		},
		{
			name: 'About Us',
			url: '/about',
			img: about
		}
	];
</script>

<div class="add-img btm-nav h-16 sm:hidden text-gray-600">
	{#each pages as p}
		<a
			href={p.url}
			class={$page.url.pathname === p.url ? 'active text-amber-800 bg-transparent border-t-4' : ''}
		>
			<img
				src={p.img}
				alt="bottom-nav"
				class={$page.url.pathname === p.url
					? 'w-14 aspect-square add-filter'
					: 'w-14 aspect-square'}
			/>
			<div class="-mt-4 text-sm">{p.name}</div>
		</a>
	{/each}
</div>

<style>
	.add-img {
		background: url('../../lib/assets/bg3_5.png');
		background-position: center;
		background-size: cover;
	}
	.add-filter {
		filter: drop-shadow(2px 4px 6px gray);
	}
</style>
