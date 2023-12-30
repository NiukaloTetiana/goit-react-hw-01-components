import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsItem } from '../FriendList/FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsItem>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsItem>
  );
};
