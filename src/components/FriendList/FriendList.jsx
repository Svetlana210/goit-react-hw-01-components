import PropTypes from 'prop-types';

import styles from './friend-list.module.css';
import FriendListItem from '../FriendList/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  const elements = friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
