<script>
	export let url = '';
	export let title = '';
	export let des = '';
</script>

<div class="w-full p-4">
	<div class="card w-full bg-base-100 shadow-xl mx-auto">
		<figure><img src={url} alt="card-img" /></figure>

		<div class="card-body">
			<h2 class="card-title">{title}</h2>
			<p>{des}</p>
		</div>
	</div>
</div>
