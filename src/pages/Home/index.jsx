import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'
import developer from './imagen/developer-red.png'

function Home() {
    return (
      <>
      <Header />
      <Container>
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>João_Miguel</span> <br />
              Dev Full Stack
          </p>
          <Link to="/Sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={developer} alt="Imagem de Home" />
      </figure>
  </section>
</Container>
<Footer />
      </>
    )
}
export default Home