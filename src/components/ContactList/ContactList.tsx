// import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { ContactItem } from 'components/ContactList/ContactItem';
import React from 'react';

// interface IContacts {
//   id: string;
//   name: string;
//   number: string;
// }

// interface IProps {
//   contacts: IContacts[];
//   onContactDelete: (id: string) => void;
// }

export const ContactList = (props: any) => {
  return (
    <Box
      as="ul"
      width="item"
      height="contactsList"
      mx="auto"
      px={4}
      overflowY="scroll"
    >
      {props.contacts.map(({ id, name, number }: any) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={props.onContactDelete}
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
