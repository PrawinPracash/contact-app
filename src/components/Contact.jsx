import { useLocation } from "react-router-dom";

function Contact(props) {
  const location = useLocation();
  const data = location.state;
  const contact = data.contact;
  const { name, email } = contact.details;
  console.log("I am here", props, data);
  // const {name, email}= props.contact;
  return (
    <div className="center ui aligned card">
      <div className="image">
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile.png" />
      </div>
      <div className="content">
        <h1 className="header"> {name} </h1>
        <div className="description">{email}</div>
      </div>
    </div>
  );
}

export default Contact;
