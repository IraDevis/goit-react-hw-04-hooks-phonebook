import { Component } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

import "modern-normalize";
import "./styles.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (data) => {
    const { contacts } = this.state;
    const allContacts = contacts.map((contact) => contact.name.toLowerCase());

    if (allContacts.find((contact) => contact === data.name.toLowerCase())) {
      return alert("This name has already used, enter another name, please!");
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      };
      return { contacts: [...contacts, newContact] };
    });
  };

  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContactsList = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} value={this.state.filter} />
        <ContactList
          contacts={this.getContactsList()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
