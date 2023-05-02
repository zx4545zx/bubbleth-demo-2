<script>
	import { page } from '$app/stores';

	import highlight from '../../lib/assets/icon/highlight.png';
	import event from '../../lib/assets/icon/event.png';
	import food from '../../lib/assets/icon/food.png';
	import review from '../../lib/assets/icon/review.png';

	let pages = [
		{
			name: "Highlight",
			url: '/',
			img: highlight,
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
		background-image: url("../../lib/assets/bg-nav.jpeg");
		background-position: center;
		background-size: cover;
	}
	.bg-t {
    background: rgba(197, 254, 197, 0.2);
}
</style>
