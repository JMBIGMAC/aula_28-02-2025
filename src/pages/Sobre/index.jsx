import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import node from './images/node.png'
import sql from './images/sql.png'

function Sobre() {
    return (
        <>
        <Header/>
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>João_Miguel</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Trabalho com desenvolvimento Web desde 2020.</p>

                    <p>gosto de transformar ideias em realidade.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
        <Footer/>
        </>
    )
}

export default Sobre