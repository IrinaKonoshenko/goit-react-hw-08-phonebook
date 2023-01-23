import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormCreate } from './FormCreate/FormCreate';
import { Section } from './Section/Section';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
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
