import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";
function ContactList(props) {
  const navigate = useNavigate();
  const { contacts } = props;
  function handleDelete(id) {
    props.removeContact(id);
  }
  return (
    <>
      <h1 className="ui header"> Contact List </h1>
      <hr></hr>
      <div className="ui celled list">
        {contacts &&
          contacts.map((contact) => {
            return (
              <ContactCard
                handleDelete={handleDelete}
                key={contact.id}
                contact={contact}
              />
            );
          })}
      </div>
      <Link to="/add">
        {/* <button onClick={ ()=> navigate(-1) } className="ui primary button">Create Contact</button> */}
        <button className="ui primary button">Create Contact</button>
      </Link>
    </>
  );
}

export default ContactList;
