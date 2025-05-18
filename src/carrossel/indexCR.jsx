import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./stylesCT.module.css";
import { useEffect, useState } from "react";
import dadojson from "../../static/shoes.json";

export default function Carrossel() {
  const [dado, setdado] = useState([]);

  useEffect(() => {
    setdado(dadojson); /*
    const fedata = async () => {
      try {
        const response = await fetch("shoes.json");
        const dados = await response.json();
        setdado(dados);
      } catch (error) {
        console.error("Erro ao buscar", error);
      }
    };
    fedata();*/
    /*fetch("https://github.com/Zerogallo/carrossel/blob/main/static/shoes.json")
      .then((response) => response.json())
      .then(setdado);*/
  }, []);

  return (
    <>
      <div className={styles.CS}>
        <div className="logo">
          {dado.map((item) => {
            const { id, name, image } = item;
            return (
              <div key={id}>
                <img src={image} alt={name} />
              </div>
            );
          })}
        </div>

        <div className="butt">
          <button onClick="{leftclick}">
            <FaArrowLeft />
          </button>
          <button onClick="{rightclick}">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
