import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./stylesCT.module.css";
import { useEffect, useRef, useState } from "react";
import dadojson from "../../static/shoes.json";
import logoImg from "../../static/images/super-shoes.png";

export default function Carrossel() {
  const [dado, setdado] = useState([]);
  const carosel = useRef(null);

  useEffect(() => {
    setdado(dadojson);
  }, []);
  const leftclick = (e) => {
    e.preventDefault();
    carosel.current.scrollLeft -= carosel.current.offsetWidth;
  };

  const rightclick = (e) => {
    e.preventDefault();
    carosel.current.scrollLeft += carosel.current.offsetWidth;
  };

  return (
    <>
      <div className={styles.containet}>
        <div className={styles.logo}>
          <img src={logoImg} alt="supr" />
        </div>
      </div>
      <div className={styles.carosel} ref={carosel}>
        {dado.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.images}>
                <img src={image} alt={name} />
              </div>
              <div className={styles.info}>
                <span className={styles.nome}>{name}</span>
                <span className={styles.oldPrice}>$${oldPrice}</span>
                <span className={styles.prico}>$${price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.butt}>
        <button onClick={leftclick}>
          <FaArrowLeft />
        </button>
        <button onClick={rightclick}>
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
