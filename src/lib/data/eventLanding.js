import { sk, cm} from "./eventSlide"

export const landingImages = [
  {
    url: new URL("../assets/event/landing/1.jpg", import.meta.url).href,
    title: "25 December 2023 - วันคริสต์มาส",
    des: "เทศกาลแห่งความสุข พร้อมกับกิจกรรมสนุกสนาน พร้อมของขวัญ และโปรโมชั่นอีกมากมาย",
    slide: cm
  },
  {
    url: new URL("../assets/event/landing/2.jpeg", import.meta.url).href,
    title: "13 April 2023 - วันสงกรานต์",
    des: "ชุ่มฉำ่ไปกับเทศกาลสงกรานต์ พร้อมกับอาหารอร่อยๆ บรรยากาศดีๆ ได้ที่นี่",
    slide: sk
  },
];
