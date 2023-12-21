import React from 'react';
import { ContactList } from '../components/contactList/ContactList';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Filter } from '../components/filter/Filter';
import css from '../index.css';

const App = () => {
  
  return (
    <>
    <div className="container">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
    </>
  );
};

export default App;