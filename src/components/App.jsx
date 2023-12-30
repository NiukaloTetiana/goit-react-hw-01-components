import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import { StatisticsList } from './Statistics/StatisticsList/StatisticsList';
import data from './Statistics/data.json';

import friends from './Friends/friends.json';
import { FriendsList } from './Friends/FriendList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistoryTable/TransactionHistoryTable';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <StatisticsList stats={data} title="UPLOAD STATS" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
