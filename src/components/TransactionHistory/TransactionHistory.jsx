import PropTypes from 'prop-types';

import styles from './transaction-history.module.css';

const TransactionHistory = ({ transactions }) => {
  const elements = transactions.map(({ id, type, amount, currency }) => (
    <tr key={id} className={styles.row}>
      <td className={styles.body}>{type}</td>
      <td className={styles.body}>{amount}</td>
      <td className={styles.body}>{currency}</td>
    </tr>
  ));
  return (
    <table className={styles.history}>
      <thead>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
