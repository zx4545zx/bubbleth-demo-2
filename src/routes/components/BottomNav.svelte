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

<div class="h-auto btm-nav sm:hidden">
	{#each pages as p}
		<a href={p.url} class={$page.url.pathname === p.url ? 'active bg-primary' : ''}>
				<img src={p.img} alt="bottom-nav" class={$page.url.pathname === p.url ? 'w-14' : 'w-14'}>
				<div class="-translate-y-2">{$page.url.pathname === p.url ? p.name : ''}</div>
		</a>
	{/each}
</div>

<style>
</style>
