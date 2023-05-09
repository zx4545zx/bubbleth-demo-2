<script>
	export let url = '';
	export let title = '';
	export let des = '';
</script>

	<div class="card w-full bg-base-100 shadow-xl">
		<figure><img src={url} alt="card-img" /></figure>

		<div class="card-body">
			<h2 class="card-title">{title}</h2>
			<p>{des}</p>
		</div>
	</div>
