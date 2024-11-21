import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

import Bread from "../../img/pao.jpg";
import Didi from "../../img/didi.jpg";
import Boy from "../../img/menino.jpg";

const Home = () => {
  return (
    <div className={styles.container_home}>
      <h1>Bem-vindo ao site de nutrição do projeto integrador </h1>

      <p className={styles.info}>
        Esse aplicativo tem como propósito auxiliar escolas no acompanhamento da
        alimentação infantil, promovendo hábitos saudáveis e facilitando o
        monitoramento dos alimentos consumidos pelos alunos. Com uma interface
        intuitiva e educativa, professores e educadores podem registrar e
        consultar valores nutricionais, contribuindo para uma alimentação
        equilibrada no ambiente escolar.
      </p>

      <div className={styles.container_card}>
        <div className={styles.card_sheet}>
          <img src={Didi}></img>

          <div className={styles.article_card}>
            <h3>Alimentação saudável desde cedo</h3>

            <article>
              <p>Energia para brincar e aprender</p>
            </article>
          </div>
        </div>

        <div className={styles.card_sheet}>
          <img src={Bread}></img>

          <div className={styles.article_card}>
            <h3>CaloKids</h3>

            <article>
              <p>Alimentação Consciente, Infância Saudável</p>
            </article>
          </div>
        </div>

        <div className={styles.card_sheet}>
          <img src={Boy}></img>

          <div className={styles.article_card}>
            <h3>Incentivando a alimentação</h3>

            <article>
              <p>Balanceada nas escolas.</p>
            </article>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Home;
