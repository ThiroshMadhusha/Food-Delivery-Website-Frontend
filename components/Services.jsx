import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>-- What Are We Serve --</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>

      {/* Feactures */}
      <div className={css.services}>
        {/* Feactures 1 */}
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy To order</span>
          <span>You Only Need a Few Steps in Food Ordering..!</span>
        </div>

        {/* Feactures 2 */}
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Fast Delivery</span>
          <span>Delevery That Is Always On Time Even Faster..!</span>
        </div>

        {/* Feactures 3 */}
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Best Quality</span>
          <span>Not only Fast for US, Quality is Also Number One..!</span>
        </div>
      </div>
    </>
  );
}
