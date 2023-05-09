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
	import { lang } from '$lib/stores/language';
</script>

<div class="relative w-full">
	<div class="absolute top-0 left-0 w-full">
		<WaveTop />
	</div>

	<div class="items-start navbar bg-none">
		<div class="navbar-start">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="hidden dropdown sm:block sm:mt-8">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle bg-[#f0ffff8c]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
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

		<div class="navbar-end">
			<div class="dropdown dropdown-end sm:mt-8">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle bg-[#f0ffff8c]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="black"
						class="bi bi-list"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
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
					<hr class="p-2" />
					<li>
						<div
							class="
							flex justify-center gap-4 items-center
							focus:bg-transparent
							focus-within:bg-transparent
							active:bg-transparent
							"
						>
							<button class="btn btn-circle btn-primary p-0 bg-transparent border-none"
							on:click={() => lang.set("th")}>
								<img src={th} alt="line" class="w-full" />
							</button>
							<button class="btn btn-circle btn-primary p-0 bg-transparent border-none"
							on:click={() => lang.set("en")}>
								<img src={us} alt="line" class="w-full" />
							</button>
							<!-- <button class="btn btn-circle btn-primary p-0 bg-transparent border-none">
                <img src={cn} alt="line" class="w-full"/>
              </button> -->
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
