import p1_img from "./merch1.png";
import p2_img from "./merch2.png";
import p4_img from "./merch4.png";
import p3_img from "./merch3.png";
import p5_img from "./merch5.png";
import p6_img from "./merch6.png";
import p7_img from "./merch7.png";
import p8_img from "./merch8.png";
import p9_img from "./merch9.png";
import p10_img from "./merch10.png";
import p11_img from "./merch11.png";
import p12_img from "./merch12.png";
import p13_img from "./merch1.png";
import p14_img from "./merch2.png";
import p15_img from "./merch4.png";
import p16_img from "./merch3.png";
import p17_img from "./merch5.png";
import p18_img from "./merch6.png";
import p19_img from "./p1.png";
import p20_img from "./p2.png";
import p21_img from "./p3.png";
import p22_img from "./p4.png";
import p23_img from "./p5.png";
import p24_img from "./p6.png";
import p25_img from "./p1.png";
import p26_img from "./p2.png";
import p27_img from "./p3.png";
import p28_img from "./p4.png";
import p29_img from "./p5.png";
import p30_img from "./p6.png";
import p31_img from "./p7.png";
import p32_img from "./p8.png";
import p33_img from "./p9.png";
import p34_img from "./p10.png";
import p35_img from "./p11.png";
import p36_img from "./p12.png";
let all_product = [
  {
    id: 1,
    name: "Executive Key chain set",
    category: "merch",
    image: p1_img,
    new_price: 1650,
    old_price: 2000,
  },
  {
    id: 2,
    name: "Retractable Card Holder",
    category: "merch",
    image: p2_img,
    new_price: 125,
    old_price: 150,
  },
  {
    id: 3,
    name: "Printed Gift Bag",
    category: "merch",
    image: p3_img,
    new_price: 75,
    old_price: 100,
  },
  {
    id: 4,
    name: "Black Cap",
    category: "merch",
    image: p4_img,
    new_price: 250,
    old_price: 300,
  },
  {
    id: 5,
    name: "HU Cufflinks",
    category: "merch",
    image: p5_img,
    new_price: 880,
    old_price: 1000,
  },
  {
    id: 6,
    name: "Executive World Map Pen Set",
    category: "merch",
    image: p6_img,
    new_price: 2530,
    old_price: 2800,
  },
  {
    id: 7,
    name: "HU Hoodie",
    category: "merch",
    image: p7_img,
    new_price: 2600,
    old_price: 3000,
  },
  {
    id: 8,
    name: "HU Spiral Branded Notebook",
    category: "merch",
    image: p8_img,
    new_price: 185,
    old_price: 200,
  },
  {
    id: 9,
    name: "HU Leather Back Notebook",
    category: "merch",
    image: p9_img,
    new_price: 500,
    old_price: 750,
  },
  {
    id: 10,
    name: "HU Keychain Set",
    category: "merch",
    image: p10_img,
    new_price: 130,
    old_price: 150,
  },
  {
    id: 11,
    name: "HU Polo Shirt",
    category: "merch",
    image: p11_img,
    new_price: 650,
    old_price: 700,
  },
  {
    id: 12,
    name: "HU Tissue Box",
    category: "merch",
    image: p12_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 13,
    name: "Executive Key chain set",
    category: "new_arrival",
    image: p13_img,
    new_price: 1650,
    old_price: 2000,
  },
  {
    id: 14,
    name: "Retractable Card Holder",
    category: "new_arrival",
    image: p14_img,
    new_price: 125,
    old_price: 150,
  },
  {
    id: 15,
    name: "Printed Gift Bag",
    category: "new_arrival",
    image: p15_img,
    new_price: 75,
    old_price: 100,
  },
  {
    id: 16,
    name: "Black Cap",
    category: "new_arrival",
    image: p16_img,
    new_price: 250,
    old_price: 300,
  },
  {
    id: 17,
    name: "HU Cufflinks",
    category: "new_arrival",
    image: p17_img,
    new_price: 880,
    old_price: 1000,
  },
  {
    id: 18,
    name: "Executive World Map Pen Set",
    category: "new_arrival",
    image: p18_img,
    new_price: 2530,
    old_price: 2800,
  },
  {
    id: 19,
    name: "HP DHE-7000 Music Headset In-Ear Headphone Black",
    category: "new_arrival",
    image: p19_img,
    new_price: 800,
    old_price: 1200,
  },
  {
    id: 20,
    name: "HP DHE-7000 Music Headset In-Ear Headphone White",
    category: "new_arrival",
    image: p20_img,
    new_price: 800,
    old_price: 1200,
  },
  {
    id: 21,
    name: "DataTraveler Exodia 256GB USB 3.2 Flash Drive DTX/256GB",
    category: "new_arrival",
    image: p21_img,
    new_price: 5000,
    old_price: 5500,
  },
  {
    id: 22,
    name: "Silicon Power Blaze B03 128GB USB 3.2 Gen 1 Flash Drive, Black",
    category: "new_arrival",
    image: p22_img,
    new_price: 2600,
    old_price: 2800,
  },
  {
    id: 23,
    name: "JBL Flip 6 Portable Bluetooth Waterproof Speaker, Bold JBL Original Pro Sound, Red, JBLFLIP6RED",
    category: "new_arrival",
    image: p23_img,
    new_price: 29000,
    old_price: 30000,
  },
  {
    id: 24,
    name: "Logitech Ultimate Ears Wonderboom 3 Ultraportable Bluetooth Speaker | Performance Blue",
    category: "new_arrival",
    image: p24_img,
    new_price: 20000,
    old_price: 24999,
  },
  {
    id: 25,
    name: "HP DHE-7000 Music Headset In-Ear Headphone Black",
    category: "accessoriess",
    image: p25_img,
    new_price: 800,
    old_price: 1200,
  },
  {
    id: 26,
    name: "HP DHE-7000 Music Headset In-Ear Headphone White",
    category: "accessoriess",
    image: p26_img,
    new_price: 800,
    old_price: 1200,
  },
  {
    id: 27,
    name: "DataTraveler Exodia 256GB USB 3.2 Flash Drive DTX/256GB",
    category: "accessoriess",
    image: p27_img,
    new_price: 5000,
    old_price: 5500,
  },
  {
    id: 28,
    name: "Silicon Power Blaze B03 128GB USB 3.2 Gen 1 Flash Drive, Black",
    category: "accessoriess",
    image: p28_img,
    new_price: 2600,
    old_price: 2800,
  },
  {
    id: 29,
    name: "JBL Flip 6 Portable Bluetooth Waterproof Speaker, Bold JBL Original Pro Sound, Red, JBLFLIP6RED",
    category: "accessoriess",
    image: p29_img,
    new_price: 29000,
    old_price: 30000,
  },
  {
    id: 30,
    name: "Logitech Ultimate Ears Wonderboom 3 Ultraportable Bluetooth Speaker | Performance Blue",
    category: "accessoriess",
    image: p30_img,
    new_price: 20000,
    old_price: 24999,
  },
  {
    id: 31,
    name: "Logitech PEBBLE MOUSE 2 M350S Slim Compact Bluetooth Mouse | Tonal White",
    category: "accessoriess",
    image: p31_img,
    new_price: 5000,
    old_price: 5400,
  },
  {
    id: 32,
    name: "Logitech M240 Silent Bluetooth Wireless Mouse - Silent Touch, Graphite",
    category: "accessoriess",
    image: p32_img,
    new_price: 3500,
    old_price: 4000,
  },
  {
    id: 33,
    name: "Samsung Galaxy Watch6 Aluminum Smartwatch 44mm BT - Graphite R940",
    category: "accessoriess",
    image: p33_img,
    new_price: 60000,
    old_price: 64500,
  },
  {
    id: 34,
    name: "Samsung Galaxy Watch4 Smartwatch (International, 44mm, Bluetooth/Wi-Fi, Silver) - SM-R870",
    category: "accessoriess",
    image: p34_img,
    new_price: 35000,
    old_price: 39500,
  },
  {
    id: 35,
    name: "One by Wacom Medium Creative Pen Graphics Tablet - CTL-672 - Black / Red, USB",
    category: "accessoriess",
    image: p35_img,
    new_price: 30000,
    old_price: 35400,
  },
  {
    id: 36,
    name: "Wacom Intuos CTL-4100WL/K0-BX - Small Bluetooth Pen Tablet | Black - Bonus Software Included",
    category: "accessoriess",
    image: p36_img,
    new_price: 32000,
    old_price: 34900,
  },
];

export default all_product;
