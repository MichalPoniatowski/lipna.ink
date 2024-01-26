import { IoArrowForwardOutline } from "react-icons/io5";

import css from "./Contact.module.css";

import { ButtonSubmit } from "../../components/Button/ButtonSubmit";
import { useEffect, useState } from "react";

const ContactPreview = () => {
  // const [formData, setFormData] = useState({});

  const hamdelSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = {
      name: form.elements.name.value,
      surname: form.elements.surname.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      description: form.elements.description.value,
    };

    form.reset();

    console.log("FORM SENT");
    console.log("FORM DATA", formData);
  };

  return (
    <div className={css.contactWrapper}>
      <div className={css.contactText}>
        <h3>Jeżeli chcesz zapytać o:</h3>
        <ul>
          <li>
            <IoArrowForwardOutline size="1rem" />
            możliwość wykonania projektu?
          </li>
          <li>
            <IoArrowForwardOutline size="1rem" />
            wolne terminy?
          </li>
          <li>
            <IoArrowForwardOutline size="1rem" />
            konkretny projekt/ pomysł na tatuaż?
          </li>
          <li>
            <IoArrowForwardOutline size="1rem" />
            cenę?
          </li>
        </ul>
        <p>
          Wypełnij poniższy formualarz kontaktowy: <br />
          lub zadzwón pod <a href="+4877766655">+48 777 666 555</a>
        </p>
      </div>
      <div className={css.formWrapper}>
        <form onSubmit={hamdelSubmit}>
          <div className={css.formField}>
            <label>Imię:</label>
            <input placeholder="Podaj swoje imię" type="text" name="name" />
          </div>
          <div className={css.formField}>
            <label>Nazwisko (opcjonalnie):</label>
            <input placeholder="Podaj swoje imię" type="text" name="surname" />
          </div>
          <div className={css.formField}>
            <label>E-mail:</label>
            <input
              placeholder="Podaj swoje adres e-mail"
              type="email"
              name="email"
            />
          </div>
          <div className={css.formField}>
            <label>Telefon (opcjonalnie):</label>
            <input
              placeholder="777 666 555 lub 48 444 333 222"
              type="tel"
              name="phone"
            />
          </div>
          <div className={css.formField}>
            <label>Opisz swój projekt:</label>
            <textarea
              placeholder="Opisz jaki masz pomysł na dziarkę :) Zamin o coś zapytasz zerknij na FAQ ;)"
              type="text"
              name="description"
            />
          </div>
          <div className={css.formField}>
            <label htmlFor="attachment">
              Załącznik (max rozm. 1 zał..; max rozmiar wszsytkich...):
            </label>
            <input type="file" id="attachment" name="attachment" multiple />
            {/* dodać stan/ store i liste wszystkich zał z ich rozmiarem, z możliwością usuwania każdego */}
          </div>
          <div>
            <ButtonSubmit text="Wyślj formularz" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPreview;
