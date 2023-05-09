<script>
	// import { landingImages } from '$lib/data/foodLanding';
	// import { slideImages } from '$lib/data/foodSlide';

	import SlideFrame from '../components/SlideFrame.svelte';
	import WoodenSign from '../components/WoodenSign.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Food - Bubble in the Forrest</title>
	<meta name="description" content="Food - Bubble in the Forrest" />
</svelte:head>

<SlideFrame images={data.slideImages} />

<WoodenSign label="Food & Drinks" />
<div class="mb-6 mx-4 text-center">
	<p>
		ยุคโซเชียลมีเดีย ไม่ว่าจะกินอะไร Camera eat first เสมอ ทุกรุ่นอายุไปตั้งแต่วัยรุ่นยัง รุ่นใหญ่
		เพราะฉะนั้น การตกแต่งของเรา เราใส่ใจทุกรายละเอียด การตกแต่งจะสอดคล้องกับสไตล์ของร้าน
		ใช้จานไม้ในการเสิร์ฟทุกใบ การตกแต่งที่ดึงดูดคนให้ถ่ายรูป มีเม กนู D.I.Y ย้อนวัย
		ทำเมนูที่สร้างควา กมทรงจำ สร้างความประทับใจ เมื่อมาทานอาหารร้านเรา จะได้ความอิ่ม
		อร่อยและความทรงจำกลับบ้าน
	</p>
</div>
<div class="flex flex-col gap-4 px-4">
	{#each data.landingImages as img}
		<div class="w-full overflow-hidden shadow-xl rounded-3xl bg-none">
			<img src={img} alt="food" class="object-cover w-full" />
		</div>
	{/each}
</div>
