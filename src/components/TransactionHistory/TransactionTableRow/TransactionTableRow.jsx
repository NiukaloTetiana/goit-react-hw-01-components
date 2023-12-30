import PropTypes from 'prop-types';
import {
  Td,
  Type,
  ExtendedTr,
} from '../TransactionTableRow/TransactionTableRow.style';

export const TableRow = ({ type, amount, currency }) => {
  return (
    <ExtendedTr>
      <Type>{type}</Type>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </ExtendedTr>
  );
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
