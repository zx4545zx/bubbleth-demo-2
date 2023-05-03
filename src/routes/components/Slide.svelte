<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  
	export let slideImages = ['#'];
  export let type = "loop";
  export let arrows = true;

  let options = {
		width: '100%',
		height: '100%',
		// gap: '1rem',
		type: type,
		autoplay: true,
		perPage: 1,
		pagination: false,
    arrows: arrows,
		speed: 1000
	};
</script>

<div id="slide" class="w-full bg-white aspect-video sm:rounded-md sm:overflow-hidden sm:py-0">
  <Splide aria-label="Slide" options={options}>
    {#each slideImages as img, i}
    <SplideSlide>
      <img src={img} alt={`slide-${i+1}`}/>
    </SplideSlide>
    {/each}
  </Splide>
</div>

