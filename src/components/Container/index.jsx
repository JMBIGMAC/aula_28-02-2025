import styles from './Container.module.css'
import PropTypes from 'prop-types'
// eslint-disable-next-line react/prop-types
Container.propTypes = {
    children: PropTypes.any
  }.isRequired

function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container