<script>
	import logo from '$lib/assets/logo.png';

	import line from '$lib/assets/icon/social/line.png';
	import facebook from '$lib/assets/icon/social/facebook.png';
	import messenger from '$lib/assets/icon/social/messenger.png';
	import instagram from '$lib/assets/icon/social/instagram.png';
	import tiktok from '$lib/assets/icon/social/tiktok.png';

	import th from '$lib/assets/icon/flag/th.png';
	import us from '$lib/assets/icon/flag/us.png';
	import cn from '$lib/assets/icon/flag/cn.png';

	import WaveTop from './WaveTop.svelte';
</script>

<div class="relative w-full">
	<div class="absolute top-0 left-0 w-full">
		<WaveTop />
	</div>

	<div class="items-start navbar bg-none">
		<div class="navbar-start">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="hidden dropdown sm:block sm:mt-9">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li><a href="/">Home</a></li>
					<li><a href="/food#slide">Food</a></li>
					<li><a href="/review">Review</a></li>
					<li><a href="/event#slide">Event</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</div>

			<div class="dropdown sm:hidden">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-globe"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
						/>
					</svg>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="gap-2 p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li><button><img src={th} alt="line" class="w-8" /> TH</button></li>
					<li>
						<button class="btn-disabled"
							><img src={us} alt="line" class="w-8" /> EN Coming sooon</button
						>
					</li>
					<li>
						<button class="btn-disabled"
							><img src={cn} alt="line" class="w-8" /> CN Coming sooon</button
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a href="/" class="text-xl normal-case mt-6">
				<div class="avatar">
					<div class="w-24 rounded">
						<img src={logo} alt="logo" />
					</div>
				</div>
			</a>
		</div>
		<div class="navbar-end sm:mt-9">
			<div class="hidden dropdown dropdown-end sm:block">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-translate"
						viewBox="0 0 16 16"
					>
						<path
							d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"
						/>
						<path
							d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"
						/>
					</svg>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="gap-2 p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li><button><img src={th} alt="line" class="w-8" /> TH</button></li>
					<li>
						<button class="btn-disabled"
							><img src={us} alt="line" class="w-8" /> EN Coming sooon</button
						>
					</li>
					<li>
						<button class="btn-disabled"
							><img src={cn} alt="line" class="w-8" /> CN Coming sooon</button
						>
					</li>
				</ul>
			</div>

			<div class="dropdown dropdown-end">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chat-right-dots-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
						/>
					</svg>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<a href="http://line.me/ti/p/@bubbleintheforest" target="_blank"
							><img src={line} alt="line" class="w-8" /> LINE</a
						>
					</li>
					<li>
						<a href="http://m.facebook.com/Bubbleintheforest" target="_blank"
							><img src={facebook} alt="facebook" class="w-8" /> FACEBOOK</a
						>
					</li>
					<li>
						<a href="http://m.me/Bubbleintheforest" target="_blank"
							><img src={messenger} alt="messenger" class="w-8" /> MESSENGER</a
						>
					</li>
					<li>
						<a href="http://m.instagram.com/bubbleintheforest" target="_blank"
							><img src={instagram} alt="instagram" class="w-8" /> INSTAGRAM</a
						>
					</li>
					<li>
						<a href="http://www.tiktok.com/@bubbleintheforest" target="_blank"
							><img src={tiktok} alt="tiktok" class="w-8" /> TIK TOK</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
