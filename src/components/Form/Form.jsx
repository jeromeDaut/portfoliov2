import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
  
  return (
    <section className="formulaire">
        <div className="formulaire__banner" id="contact">
            <h2>Contact</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__row">
               
                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label className="form__label">Nom:</label>
                        <input type="text" {...register("nom", {required: true})} className="form__input" />
                        {errors.nom && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                    <div className="form__field">
                        <label className="form__label">Prénom:</label>
                        <input type="text" {...register("prenom", {required: true})} className="form__input" />
                        {errors.prenom && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                    <div className="form__field">
                        <label className="form__label">Adresse mail:</label>
                        <input type="email" {...register("email", {required: true})} className="form__input" />
                    {   errors.email && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                </div>

                <div className="form__element form__element--half-width">

                    <div className="form__field">
                        <label className="form__label">Message:</label>
                        <textarea {...register("message", {required: true})} className="form__textarea" />
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