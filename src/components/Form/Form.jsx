import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../sectionTitle/SectionTitle";
import sgMail from '@sendgrid/mail';

sgMail.setApiKey("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");

function Form() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        message: ''
      });
    
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }
    
     async function handleSubmit(event) {
        event.preventDefault();

        const msg = {
          to: 'jerome.dautreme@live.fr',
          from: formData.email,
          subject: `Nouveau message de ${formData.nom} ${formData.prenom}`,
          text: formData.message
        };
        try {
            await sgMail.send(msg);
            setFormData({ nom: "", prenom: "", email: "", message: "" });
            console.log("Email sent successfully");
          } catch (error) {
            console.error("Error sending email:", error);
          }
        }
  return (
    <section className="formulaire">
        <SectionTitle id="contact"/>
        <form  onSubmit={handleSubmit} className="form" >
            <div className="form__row">
               
                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label htmlFor="nom" className="form__label">Nom:</label>
                        <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} className="form__input" />
                        {/* Error message if it's required */}
                        {/* {errors.nom && <span className="form__error">Ce champ est requis.</span>} */}
                    </div>

                    <div className="form__field">
                        <label htmlFor="prenom" className="form__label">Prénom:</label>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleInputChange} className="form__input" />
                        {/* Error message if it's required */}
                        {/* {errors.prenom && <span className="form__error">Ce champ est requis.</span>} */}
                    </div>

                    <div className="form__field">
                        <label htmlFor="mail" className="form__label">Adresse mail:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form__input" />
                        {/* Error message if it's required */}
                    {/* {   errors.email && <span className="form__error">Ce champ est requis.</span>} */}
                    </div>

                </div>

                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label htmlFor="text" className="form__label">Message:</label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange} className="form__textarea" />
                        {/* Error message if it's required */}
                        {/* {errors.message && <span className="form__error">Ce champ est requis.</span>} */}
                    </div>

                </div>
                <button type="submit" className="form__submit">Envoyer</button>

            </div>

        </form>
    </section>
  );
}

export default Form;