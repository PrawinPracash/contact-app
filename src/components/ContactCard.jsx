import { Link } from "react-router-dom";

function ContactCard(props) {
  const { name, email } = props.contact.details;
  function handleDelete() {
    props.handleDelete(props.contact.id);
  }
  return (
    <div className="item">
      <div onClick={handleDelete} className="right floated content">
        <div className="ui primary button">Delete</div>
      </div>
      <div className="right floated content">
        <div className="ui primary button">Edit</div>
      </div>
      <img
        className="ui avatar image"
        src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
      />

      <div className="content">
        <Link
          to={`/contact/${props.contact.id}`}
          state={{ contact: props.contact }}
        >
          <div className="header"> {name} </div>
          <p>{email}</p>
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
