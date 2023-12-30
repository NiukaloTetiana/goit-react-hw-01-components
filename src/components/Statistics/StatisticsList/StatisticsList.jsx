// import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/Statistics/StatisticsListItem/StatisticsListItem';
import { StatList, Statistics, Title } from './StatisticsList.styled';

export const StatisticsList = ({ stats, title }) => {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map((stat, idx) => (
          <StatisticsItem key={stat.id} {...stat} index={idx} />
        ))}
      </StatList>
    </Statistics>
  );
};
