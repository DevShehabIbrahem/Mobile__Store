import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsMinecartLoaded } from "react-icons/bs";
import apple from "./assests/Svg/footer.svg";
import bank from "./assests/details/CIB_Logo.png";

const words = {
  NavbarList: [
    "Mac",
    "iPad",
    "iphone",
    "Watch",
    "TV",
    "Accessories",
    "Offers",
    "|",
    "Support",
    "Services",
    "Locations",
  ],

  icons: [<BiSearchAlt2 />, <AiOutlineUser />, <BsMinecartLoaded />],

  exploreProducts: "Explore Products",

  out_of_stock: "Out of Stock",

  In_Stock: "In Stock",

  subscribe: "Subscribe our newsletter to be notified when it’ll be live.",

  subscribe_Btn: "Subscribe",

  footerImage: [{ img: apple }],

  footerCopyRight: "Copyright © 2022 - All rights reserved",

  payment: ["Full Price", "Installments"],

  paymentBank: [bank, bank, bank, bank],

  Memory: "Memory",
  MemoryArr: [
    { size: "128 GB", price: 999.0 },
    { size: "256 GB", price: 999.0 },
    { size: "512 GB", price: 999.0 },
    { size: "1T", price: 999.0 },
  ],

  Color: "Color",

  productColor: ["silver", "Sierra Blue"],

  insurance: "Insurance",

  insuranceArr: [
    { year: "1 year", price: 99.0 },
    { year: "2 year", price: 159.0 },
  ],
};
export default words;
