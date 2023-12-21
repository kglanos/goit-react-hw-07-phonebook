import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { selectContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    
        useEffect(() => {
        if (contacts) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
        }, [contacts]);
    
        const handleSubmit = e => {
        e.preventDefault();
    
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const id = nanoid();
        let exist = false;
    
        if (Array.isArray(contacts)) {
            contacts.forEach(contact => {
            if (contact.name.toLowerCase().trim() === name.toLowerCase().trim()) {
                alert(`${name} is already in contacts`);
                exist = true;
            }
            });
        }
    
        if (!exist) {
            dispatch(addContact({ id, name, number }));
        }
        e.target.reset();
        };

    return (
        <>
        <div className={css.form}>
            <h2 className={css.form__title}>Phonebook</h2>
            <form className={css.form__form} onSubmit={handleSubmit}>
            <label className={css.form__label} htmlFor="name">
                Name
            </label>
            <input
                type="text"
                name="name"
                className={css.form__input}
                pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)?"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Adrian Smith"
                required
            />
            <label className={css.form__label} htmlFor="number">
                Number
            </label>
            <input
                type="tel"
                name="number"
                className={css.form__input}
                placeholder="+48 123-456-789"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.form__btn} type="submit">
                Add contact
            </button>
            </form>
        </div>
        </>
    );
};