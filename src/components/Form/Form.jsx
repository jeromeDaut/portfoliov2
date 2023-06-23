import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import SectionTitle from "../sectionTitle/SectionTitle";


function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_omiyaph', 'template_sx62q5j', form.current, 'OIDXRZBCHs5rksSz0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section className="formulaire">
        <SectionTitle id="contact"/>
        <form ref={form} method="POST" onSubmit={sendEmail} className="form" >
            <div className="form__row">
               
                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label htmlFor="nom" className="form__label">Nom:</label>
                        <input type="text" {...register("nom", {required: true})} className="form__input" name="nom" id="nom"/>
                        {/* Error message if it's required */}
                        {errors.nom && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                    <div className="form__field">
                        <label htmlFor="prenom" className="form__label">Prénom:</label>
                        <input type="text" {...register("prenom", {required: true})} className="form__input" name="prenom" id="prenom" />
                        {/* Error message if it's required */}
                        {errors.prenom && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                    <div className="form__field">
                        <label htmlFor="mail" className="form__label">Adresse mail:</label>
                        <input type="email" {...register("email", {required: true})} className="form__input" name="email" id="mail"/>
                        {/* Error message if it's required */}
                    {   errors.email && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                </div>

                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label htmlFor="text" className="form__label">Message:</label>
                        <textarea {...register("message", {required: true})} className="form__textarea" name="message" id="text"/>
                        {/* Error message if it's required */}
                        {errors.message && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                </div>
                <button type="submit" className="form__submit">Envoyer</button>

            </div>

        </form>
    </section>
  );
}

export default Form;