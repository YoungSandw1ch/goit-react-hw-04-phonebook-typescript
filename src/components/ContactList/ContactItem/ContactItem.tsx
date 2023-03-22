// import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Item, Text, Span, CloseButton } from './ContactItem.styled';

interface IProps {
  name: string;
  number: string;
  id: string;
  onDelete: (id: string) => void;
}

export const ContactItem: FC<IProps> = ({ name, number, id, onDelete }) => {
  const onClick = () => onDelete(id);
  return (
    <Item>
      <Text>
        {name}: <Span>{number}</Span>
      </Text>
      <CloseButton type="button" onClick={onClick}>
        delete
      </CloseButton>
    </Item>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
