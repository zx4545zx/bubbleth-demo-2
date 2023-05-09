import { sk, cm} from "./eventSlide"

export const landingImages = [
  {
    url: new URL("../assets/event/landing/1.jpg", import.meta.url).href,
    title:{
      'th':'25 December 2023 - วันคริสต์มาส',
      'en':'25 December 2023 - Christmas Day'
    } ,
    des:{
      'th':'เทศกาลแห่งความสุข พร้อมกับกิจกรรมสนุกสนาน พร้อมของขวัญ และโปรโมชั่นอีกมากมาย',
      'en':'Happy festival with fun activities with gifts and promotions'
    }, 
    slide: cm
  },
  {
    url: new URL("../assets/event/landing/2.jpeg", import.meta.url).href,
    title:{
      'th':'13 April 2023 - วันสงกรานต์',
      'en':'13 April 2023 - Songkran Festival'
    },
    des:{
      'th':'ชุ่มฉำ่ไปกับเทศกาลสงกรานต์ พร้อมกับอาหารอร่อยๆ บรรยากาศดีๆ ได้ที่นี่',
      'en':'Lush with the Songkran festival. Along with delicious food, good atmosphere here'
    } ,
    slide: sk
  },
];
