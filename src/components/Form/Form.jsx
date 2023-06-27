import React, { useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import axios from 'axios';


function Form() {
  
    const [status, setStatus] = useState({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
      email: '',
      message: '',
      prenom: '',
      nom: '',
    });
    const handleServerResponse = (ok, msg) => {
      if (ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: msg },
        });
        setInputs({
          email: '',
          message: '',
          prenom: '',
          nom: '',
        });
      } else {
        setStatus({
          info: { error: true, msg: msg },
        });
      }
    };
    const handleOnChange = (e) => {
      e.persist();
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: 'POST',
        url: 'https://formspree.io/' + process.env.REACT_APP_FORMSPREE_KEY,
        data: inputs,
      })
        .then((response) => {
          handleServerResponse(
            true,
            'Thank you, your message has been submitted.',
          );
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    };
  return (
    <section className="formulaire">
        <SectionTitle id="contact"/>
        <form  onSubmit={handleSubmit} className="form" >
            <div className="form__row">
               
                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label htmlFor="nom" className="form__label">Nom:</label>
                        <input 
                          type="text" 
                          name="nom"
                          id="nom" 
                          className="form__input"
                          onChange={handleOnChange}
                          required
                          value={inputs.nom}
                        />
                        
                        
                    </div>

                    <div className="form__field">
                        <label htmlFor="prenom" className="form__label">Prénom:</label>
                        <input 
                          type="text" 
                          name="prenom"  
                          className="form__input" 
                          id="prenom"
                          onChange={handleOnChange}
                          required
                          value={inputs.prenom}  
                        />

                        
                    </div>

                    <div className="form__field">
                        <label htmlFor="email" className="form__label">Adresse mail:</label>
                        <input
                         id="email" 
                         type="email" 
                         name="_replyto" 
                         className="form__input"
                         onChange={handleOnChange}
                          required
                          value={inputs.email}
                        />
                    </div>

                </div>

                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label htmlFor="text" className="form__label">Message:</label>
                        <textarea 
                          name="message" 
                          className="form__textarea" 
                          id="message"
                          onChange={handleOnChange}
                          required
                          value={inputs.message}
                        />
                    </div>

                </div>
                <button type="submit" className="form__submit" disabled={status.submitting}>
                  {!status.submitting
                  ? !status.submitted
                    ? 'Soumettre'
                    : 'Envoyé !'
                  : 'Envoie...'}
                </button>

            </div>

        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </section>
  );
}

export default Form;