import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();

  const [Size, setSize] = useState(1);
  const [Quantity, setQuantity] = useState(1);

  // Handle Quantity
  const handleQty = (type) => {
    type === "increment"
      ? setQuantity((previousValue) => previousValue + 1)
      : Quantity === 1
      ? null
      : setQuantity((previousValue) => previousValue - 1);
  };

  //   console.log(pizza);
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        {/* Right Side*/}
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>

          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
            {pizza.price[Size]}
          </span>

          <div className={css.size}>
            <span>Size : </span>
            <div className={css.sizeVaraints}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ""}
              >
                Small Size
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ""}
              >
                Medium Size
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? css.selected : ""}
              >
                Largr Size
              </div>
            </div>
          </div>

          {/*Quantity Count*/}
          <div className={css.quant}>
            <span>Quantity : </span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQty("decrement")}
              />
              <span>{Quantity}</span>
              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQty("increment")}
              />
            </div>
          </div>

          {/*button*/}
          <div className={`btn ${css.btn}`}>Add To Cart</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
