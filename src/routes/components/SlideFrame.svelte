<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import frame from "$lib/assets/frame.png";
  import defaultImg from "$lib/assets/home/slide/0.jpg";

  let options = {
    width: "100%",
    gap: "1rem",
    type: "loop",
    autoplay: true,
    perPage: 1,
    pagination: false,
    speed: 1000,
  };

  export let images = [defaultImg];
</script>

<div class="container mx-auto -mt-8 sm:mt-auto">
  <Splide {options}>
    {#each images as img}
      <SplideSlide>
        <div class="relative">
          <div class="relative">
            <div
              class="absolute left-0 w-full h-full top-4 sm:top-1"
              style="z-index: -1;"
            >
              <img
                src={img}
                alt="slimg"
                class="mx-auto mt-6 slide-img sm:mt-9 lg:mt-16 h-4/6"
              />
            </div>
            <img src={frame} alt="frame-img" class="mx-auto frame-img" />
          </div>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</div>

<style>
  .slide-img {
    width: 80%;
    max-width: 65rem;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  }
  @media (max-width: 500px) {
    .slide-img {
      margin-top: 1rem;
    }
  }
  @media (max-width: 425px) {
    .frame-img {
      height: 14rem;
    }
  }
  @media (max-width: 300px) {
    .slide-img {
      margin-top: 1.5rem;
    }
  }
</style>
