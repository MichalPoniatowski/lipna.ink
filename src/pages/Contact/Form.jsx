import { IoCloseOutline } from "react-icons/io5";

import css from "./Contact.module.css";
import { ButtonSubmit } from "../../components/Button/ButtonSubmit";

export const Form = ({ files, handleFileChange, removefiles, handleClick }) => {
  return (
    <div>
      <div className={css.formField}>
        <label>Imię:</label>
        <input
          placeholder="Podaj swoje imię"
          type="text"
          name="name"
          required
          pattern="^[A-Za-ząęółśżźćńĄĘÓŁŚŻŹĆŃ]{2,}(?:\s[A-Za-ząęółśżźćńĄĘÓŁŚŻŹĆŃ]{2,})?$"
        />
      </div>
      <div className={css.formField}>
        <label>E-mail:</label>
        <input
          placeholder="Podaj swój adres e-mail"
          type="email"
          name="email"
          required
        />
      </div>
      <div className={css.formField}>
        <label>Opisz swój projekt:</label>
        <textarea
          placeholder="Opisz jaki masz pomysł na dziarkę :) Zamin o coś zapytasz zerknij na FAQ ;), Minmalna długość opisu to 5 słów."
          type="text"
          name="description"
          required
          pattern="^\s*\S+(?:\s+\S+){4,}\s*$"
        />
      </div>
      <div className={css.formField}>
        <label htmlFor="attachment">
          Maksmymalna ilość załączników to 6.
          <br />
          Dopuszczalne rodzaje plików to zdjecia oraz pdf.
        </label>
        <button onClick={handleClick} className={css.filesButton} type="button">
          {files.length > 0
            ? `Wybrano plików: ${files.length}`
            : "Wybierz pliki"}
        </button>

        <input
          type="file"
          id="attachment"
          name="attachment"
          multiple
          onChange={handleFileChange}
          className={css.hiddenInput}
        />

        <ul>
          {files.map((attachment, index) => {
            const sizeInMb = (attachment.size / 1024 / 1024).toFixed(2);
            return (
              <li key={index} className={css.fileItem}>
                {`${attachment.name} (${sizeInMb} MB)`}
                <button type="button" onClick={() => removefiles(index)}>
                  <IoCloseOutline size={30} className={css.fileClose} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ButtonSubmit text="Wyślj formularz" />
      </div>
    </div>
  );
};
