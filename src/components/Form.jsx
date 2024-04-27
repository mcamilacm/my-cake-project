import React, { useState } from "react";
import Pastel from "../img/pastel-3.png";
import LogoImage from "../img/cakelogo.png";

const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputValidation = (e) => {
    e.preventDefault();

    if (name === "" || mail === "" || phone === "" || description === "") {
      setError(true);
      setSuccess(false); 
      return;
    }

    setSuccess(true);

    setName("");
    setMail("");
    setPhone("");
    setDescription("");
    setError(false); 
  };

  return (
    <div className="form_container">
      <img src={Pastel} className="form_photos" alt="Cake" />
      <form onSubmit={inputValidation}>
        <h2>Quote your cake</h2>



        <div className="input_container">
          <p>Name</p>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        <div className="input_container">
          <p>Mail</p>
          <input type="text" name="mail" onChange={(e) => setMail(e.target.value)} value={mail} />
        </div>

        <div className="input_container">
          <p>Phone</p>
          <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
        </div>

        <div className="input_container">
          <p>Cake Description</p>
          <input
            type="text"
            name="description"
            className="description_input"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <button type="submit" className="button_form">
          SEND
        </button>
        {error && <p className="error_message">Debes llenar toda la información.</p>}
        {success && <p className="success_message">Mensaje enviado.</p>}
      </form>
    </div>
  );
};

export default Form;