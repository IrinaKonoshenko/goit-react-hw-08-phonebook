import { UserMenu } from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectErrorContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/contactsSelectors';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { FormCreate } from '../../components/FormCreate/FormCreate';
import { Section } from '../../components/Section/Section';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contacts">
      <Section title="User info">
        <UserMenu />
      </Section>
      <Section title="Phonebook">
        <FormCreate />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b> Loading contacts list... </b>}
        <ContactList />
      </Section>
    </div>
  );
};
