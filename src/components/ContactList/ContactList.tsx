// import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { ContactItem } from 'components/ContactList/ContactItem';
import React from 'react';
import { JsxElement } from 'typescript';

interface IContacts {
  id: string;
  name: string;
  number: string;
}

interface IProps {
  contacts: IContacts[];
  onContactDelete: any;
}

export const ContactList: React.FC<IProps> = props => {
  const { contacts, onContactDelete } = props;
  return (
    <Box
      as="ul"
      width="item"
      height="contactsList"
      mx="auto"
      px={4}
      overflowY="scroll"
    >
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onContactDelete}
        />
      ))}
    </Box>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onContactDelete: PropTypes.func.isRequired,
// };
