<script>
	import bg from '$lib/assets/bg-sm-top.png';
</script>

<div class="w-full overflow-hidden">
	<div class="w-full h-full add-img"></div>
</div>

<style>
	.add-img {
		background: url('../../lib/assets/bg-sm-top.png');
    width: 100%;
    height: 3rem;
    background-size: contain;
    background-position: top;
    background-repeat: repeat no-repeat;
	}
  
  @media (min-width: 640px) {
    .add-img {
      background: url('../../lib/assets/bg-top-new.jpg');
      background-size: contain;
      background-position: top;
      background-repeat: repeat no-repeat;
    }
  }
</style>