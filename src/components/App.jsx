import { ContactList } from '../components/contactList/ContactList';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Filter } from '../components/filter/Filter';

const App = () => {
  
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;