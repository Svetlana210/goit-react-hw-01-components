import PropTypes from 'prop-types';
import styles from './friend-list-item.module.css';

const FriendListItem = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  name,
  isOnline,
}) => {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={status}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

// FriendListItem.defaultProps = {
//   avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
// };

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
