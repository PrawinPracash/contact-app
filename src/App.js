import { useEffect, useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import Contact from "./components/Contact";

function App() {
  const STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(null);

  function addContact(contact) {
    setContacts([...contacts, { id: uuidv4(), details: contact }]);
  }

  function removeContact(id) {
    const filteredContacts = contacts.filter((ele) => ele.id !== id);
    setContacts(filteredContacts);
  }

  useEffect(() => {
    const retrieved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (retrieved) setContacts(retrieved);
  }, []);

  useEffect(() => {
    console.log("Set Item", contacts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<ContactList contacts={contacts} removeContact={removeContact} />} />
          <Route exact path="/add" element={<AddContact addContact={addContact} />} />
          <Route path="/contact/:id" element={<Contact />}/>
        </Routes>

        {/* <ContactList contacts={contacts} removeContact={removeContact}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
