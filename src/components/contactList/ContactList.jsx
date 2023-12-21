import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactSlice';
export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter.status);

  const filterContact = Array.isArray(contacts)
  ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    )
  : [];

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {filterContact.map(contact => (
          <li className={css.contacts__item} key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button
              className={css.contacts__btn}
              id={contact.id}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};