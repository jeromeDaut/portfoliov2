import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../sectionTitle/SectionTitle";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
  
  return (
    <section className="formulaire">
        <SectionTitle id="contact"/>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__row">
               
                <div className="form__element form__element--half-width">
                    
                    <div className="form__field">
                        <label for="nom" className="form__label">Nom:</label>
                        <input type="text" {...register("nom", {required: true})} className="form__input" name="nom" id="nom"/>
                        {errors.nom && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                    <div className="form__field">
                        <label for="prenom" className="form__label">Prénom:</label>
                        <input type="text" {...register("prenom", {required: true})} className="form__input" name="prenom" id="prenom" />
                        {errors.prenom && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                    <div className="form__field">
                        <label for="mail" className="form__label">Adresse mail:</label>
                        <input type="email" {...register("email", {required: true})} className="form__input" name="mail" id="mail"/>
                    {   errors.email && <span className="form__error">Ce champ est requis.</span>}
                    </div>

                </div>

                <div className="form__element form__element--half-width">

                    <div className="form__field">
                        <label for="text" className="form__label">Message:</label>
                        <textarea {...register("message", {required: true})} className="form__textarea" name="text" id="text"/>
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