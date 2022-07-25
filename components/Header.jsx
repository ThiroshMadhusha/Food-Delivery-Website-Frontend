import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { UilShoppingCart } from "@iconscout/react-unicons";

export default function Header() {
  return (
    <div className={css.header}>
      {/*logo side*/}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>FoodApp</span>
      </div>
      {/*menu side*/}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/*cart side*/}
      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingCart size={35} color="#2E2E2E" />
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
}
