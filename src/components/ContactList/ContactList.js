import { Contact } from 'components/Contact/Contact';
import { Empty } from 'components/Empty/Empty';
import { useSelector } from 'react-redux';
import { getContacts, getSearchStr } from 'redux/selectors';

const getVisibleContacts = (contacts, search) => {
  return contacts.filter(contact => {
    const searchLower = search.toLowerCase().trim();
    const nameLower = contact.name.toLowerCase().trim();
    return nameLower.includes(searchLower);
  });
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const search = useSelector(getSearchStr);
  const filteredContacts = getVisibleContacts(contacts, search);

  return (
    <div>
      {filteredContacts.length === 0 ? (
        <Empty text="Not found" />
      ) : (
        <ul>
          {filteredContacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
