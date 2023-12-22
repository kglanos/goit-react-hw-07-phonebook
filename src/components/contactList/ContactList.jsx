import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { selectContacts, selectFilterValue } from '../../redux/selectors';

  export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const filteredContacts = Array.isArray(contacts)
  ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    )
  : [];

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = async (contactId) => {
    try {
      await dispatch(deleteContact(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {filteredContacts.map(contact => (
          <li className={css.contacts__item} key={contact.id}>
            {contact.name} : {contact.phone}{' '}
            <button
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};