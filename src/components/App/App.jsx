import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css'

function App() {

  return (
    <>
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </div>
    </>
  );
}

export default App
