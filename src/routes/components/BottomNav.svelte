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

	// let pages = [
	// 	{
	// 		url: '/',
	// 		svg: `
	// 		<svg
	// 		xmlns="http://www.w3.org/2000/svg"
	// 		width="16"
	// 		height="16"
	// 		fill="currentColor"
	// 		class="bi bi-house-fill"
	// 		viewBox="0 0 16 16"
	// 	>
	// 		<path
	// 			d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
	// 		/>
	// 		<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
	// 	</svg>
	// 		`
	// 	},
	// 	{
	// 		url: '/food',
	// 		svg: `
	// 		<svg
	// 		xmlns="http://www.w3.org/2000/svg"
	// 		width="16"
	// 		height="16"
	// 		fill="currentColor"
	// 		class="bi bi-egg-fill"
	// 		viewBox="0 0 16 16"
	// 	>
	// 		<path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z" />
	// 	</svg>
	// 		`
	// 	},
	// 	{
	// 		url: '/review',
	// 		svg: `
	// 		<svg
	// 		xmlns="http://www.w3.org/2000/svg"
	// 		width="16"
	// 		height="16"
	// 		fill="currentColor"
	// 		class="bi bi-star-fill"
	// 		viewBox="0 0 16 16"
	// 	>
	// 		<path
	// 			d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
	// 		/>
	// 	</svg>
	// 		`
	// 	},
	// 	{
	// 		url: '/event',
	// 		svg: `
	// 		<svg
	// 		xmlns="http://www.w3.org/2000/svg"
	// 		width="16"
	// 		height="16"
	// 		fill="currentColor"
	// 		class="bi bi-calendar-event-fill"
	// 		viewBox="0 0 16 16"
	// 	>
	// 		<path
	// 			d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
	// 		/>
	// 	</svg>
	// 		`
	// 	},
	// 	// {
	// 	// 	url: '/about',
	// 	// 	svg: `
	// 	// 	<svg
	// 	// 	xmlns="http://www.w3.org/2000/svg"
	// 	// 	width="16"
	// 	// 	height="16"
	// 	// 	fill="currentColor"
	// 	// 	class="bi bi-info-circle-fill"
	// 	// 	viewBox="0 0 16 16"
	// 	// >
	// 	// 	<path
	// 	// 		d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
	// 	// 	/>
	// 	// </svg>
	// 	// 	`
	// 	// }
	// ];
</script>

<!-- <div class="h-auto btm-nav sm:hidden">
	{#each pages as p}
		<a href={p.url} class={$page.url.pathname === p.url ? 'active bg-primary' : ''}>
				<img src={p.img} alt="bottom-nav" class={$page.url.pathname === p.url ? 'w-14' : 'w-14'}>
				<div class="-translate-y-2">{$page.url.pathname === p.url ? p.name : ''}</div>
		</a>
	{/each}
</div> -->

<div class="add-img btm-nav sm:hidden">
	{#each pages as p}
		<a href={p.url} class={$page.url.pathname === p.url ? 'active text-primary' : ''}>
			<!-- {@html p.svg} -->
			<img src={p.img} alt="bottom-nav" class={$page.url.pathname === p.url ? 'w-14' : 'w-14'}>
		</a>
	{/each}
</div>

<style>
	.add-img {
		background-image: url("../../lib/assets/bg-nav.jpeg");
		background-position: center;
		background-size: cover;
	}
</style>
