import "./App.css";
import React from "react";
import contactsFromJSON from "./contacts.json";

class App extends React.Component {
  state = {
    contacts: contactsFromJSON.slice(0, 5),
  };

  addRandomContact = () => {
    const randomContact =
      contactsFromJSON[Math.floor(Math.random() * contactsFromJSON.length)];
    this.setState({
      contacts: this.state.contacts.concat(randomContact),
    });
  };

  sortByName = () => {
    const sortName = this.state.contacts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: sortName,
    });
  };

  sortByPopularity = () => {
    const sortPopular = this.state.contacts.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    this.setState({
      contacts: sortPopular,
    });
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <strong>Picture</strong>
        <strong>Name</strong>
        <strong>Popularity</strong>
        {contacts.map((contacts, index) => {
          return (
            <>
              <div>
                <img
                  src={contacts.pictureUrl}
                  width="100px"
                  alt="contact picture"
                />
              </div>
              <div>
                <p>{contacts.name}</p>
              </div>
              <div>
                <p>{contacts.popularity}</p>
              </div>
              <button onClick={() => this.deleteContact(contacts.id)}>
                Delete
              </button>
            </>
          );
        })}
      </div>
    );
  }
}

export default App;
