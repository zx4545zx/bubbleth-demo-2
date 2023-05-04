<script>
	import { page } from '$app/stores';

	import home from '../../lib/assets/icon/home.png';
	import about from '../../lib/assets/icon/about.png';
	import event from '../../lib/assets/icon/event.png';
	import food from '../../lib/assets/icon/food.png';
	import review from '../../lib/assets/icon/review.png';

	let pages = [
		{
			name: "Home",
			url: '/',
			img: home
		},
		{
			name: "Food",
			url: '/food',
			img: food
		},
		{
			name: "Review",
			url: '/review',
			img: review
		},
		{
			name: "Event",
			url: '/event',
			img: event
		},
		{
			name: "About Us",
			url: '/about',
			img: about,
		},
	];
	
</script>

<div class="add-img btm-nav h-16 sm:hidden">
	{#each pages as p}
		<a href={p.url} class={$page.url.pathname === p.url ? 'active text-primary  bg-t' : ''}>
			<!-- {@html p.svg} -->
			<img src={p.img} alt="bottom-nav" class={$page.url.pathname === p.url ? 'w-14 ' : 'w-14'}>
			<div class="-mt-4 text-sm">{p.name}</div>
		</a>
	{/each}
</div>

<style>
	.add-img {
		background: url("../../lib/assets/bg-nav.png");
		background-position: center;
		background-size: 114vw;
	}
	.bg-t {
    background: rgba(197, 254, 197, 0.2);
}
</style>
