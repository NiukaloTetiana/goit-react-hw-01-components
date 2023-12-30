import {
  Item,
  Label,
  Percentage,
} from '../StatisticsListItem/StatisticsListItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};
