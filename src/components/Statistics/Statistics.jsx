import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(item => (
    <li
      className={styles.item}
      key={item.id}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}</span>
    </li>
  ));
  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.list}>{elements}</ul>
      </section>
    </>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
