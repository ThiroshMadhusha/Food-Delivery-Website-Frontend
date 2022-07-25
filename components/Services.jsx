import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import Image from "next/image";



export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>What We Serve</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>

      {/* Feactures */}
      <div className={css.services}>
        <div clasName={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
        </div>
        <div clasName={css.feature}>2nd</div>
        <div clasName={css.feature}>3rd</div>
      </div>
    </>
  );
}
