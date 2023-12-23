import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AddContact(props) {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const navigate = useNavigate();
  function handleNameChange(e) {
    setContactName(e.target.value);
  }
  function handleEmailChange(e) {
    setContactEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (contactName == "" || contactEmail == "") {
      alert("fill all details");
      return;
    }

    const contact = {
      name: contactName,
      email: contactEmail,
    };
    props.addContact(contact);
    navigate("/");
    setContactName("");
    setContactEmail("");
  }

  useEffect(() => {
    const contact = {
      name: contactName,
      email: contactEmail,
    };
    localStorage.setItem("1213", JSON.stringify(contact));
  }, [contactName, contactEmail]);

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h1 className="ui header"> Add Contact </h1>
      <hr></hr>
      <div className="field">
        <label>Contact Name</label>
        <input
          type="text"
          name="contact-name"
          onChange={handleNameChange}
          placeholder="Enter Name"
          value={`${contactName}`}
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          type="text"
          name="contact-email"
          onChange={handleEmailChange}
          placeholder="Enter Email"
          value={`${contactEmail}`}
        />
      </div>
      <button className="ui primary button" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddContact;
