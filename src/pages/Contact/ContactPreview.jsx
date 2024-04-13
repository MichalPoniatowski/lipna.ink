import { IoArrowForwardOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

import css from "./Contact.module.css";
import { SEND_CONTACT_FORM_URL } from "../../../api.URLs";
import { reSizeFiles } from "./resizeFiles";
import { ContactForm } from "./ContactForm";
import { Loader } from "../../components/Loader/Loader";
import { ModalAlert } from "../../components/ModalAlert/ModalAlert";

const ContactPreview = () => {
  const fileSizeLimit = 4 * 1024 * 1024;
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "image/heic",
    "image/heif",
    "image/tiff",
    "image/webp",
    "image/svg+xml",
  ];
  const filesTotalNumber = 6;

  // let allertMessage;

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const formRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...files]);
    // console.log("files", files);
  };

  const removefiles = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const proccessFiles = async (filesToCheck) => {
    const filesOverLimit = filesToCheck.filter(
      (file) => file.size > fileSizeLimit
    );
    const filesBelowLimit = filesToCheck.filter(
      (file) => file.size <= fileSizeLimit
    );

    if (filesOverLimit.length > 0) {
      let resizedFiles = [];

      resizedFiles = await reSizeFiles(fileSizeLimit, filesOverLimit);
      // console.log("RESIZED FILES", resizedFiles);
      return [...resizedFiles, ...filesBelowLimit];
    } else {
      return filesToCheck;
    }
  };

  const checkFilesNumberAndType = (files) => {
    let allertMessage = "";

    const notAllowedFilesNames = files
      .filter((file) => !allowedTypes.includes(file.type))
      .map((file) => file.name);

    if (notAllowedFilesNames.length > 0) {
      const filesTypesString = allowedTypes.join(", ");
      const notAllowedFilesNamesStrig = notAllowedFilesNames.join(", ");

      allertMessage += `Dopuszczalne typy plików do wysłania formularza to: ${filesTypesString}
      Wybrałeś pliki: ${notAllowedFilesNamesStrig} które nie spełniają kryteriów, wybierz poprawne pliki.`;
    }

    if (files.length > filesTotalNumber) {
      allertMessage += `Dopuszczalna ilość plików to ${filesTotalNumber}, wybrałeś ${files.length} plików, 
      wybierz pliki zgodnie z limitem. Jeżeli chcesz wysłać więcej plików, możesz wysłać 2gi formularz dodajac w opisie tatuażu taką informację`;
    }

    return allertMessage;
  };

  useEffect(() => {
    if (alertMessage !== "") {
      setIsOpenAlert(true);
    }
  }, [alertMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let proccessedFiles = [];
    setIsLoading(true);

    const alertMessage = checkFilesNumberAndType(files);

    if (alertMessage !== "") {
      setAlertMessage(alertMessage);
      setIsOpenAlert(true);
      setIsLoading(false);
      return;
    }

    const formData = new FormData(formRef.current);
    formData.delete("attachment");

    if (files.length > 0) {
      proccessedFiles = await proccessFiles(files);
      console.log("PROCESSED FILES", proccessedFiles);
    }

    proccessedFiles.forEach((file) => {
      formData.append("files", file);
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(SEND_CONTACT_FORM_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("FORM SEND SUCCESSFULY", response.data);

      formRef.current.reset();
      setFiles([]);
    } catch (error) {
      console.error("Error during sending form", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    document.getElementById("attachment").click();
  };

  return (
    <div className={css.contactWrapper}>
      <>
        {isOpenAlert && (
          <ModalAlert open={isOpenAlert} onClose={() => setIsOpenAlert(false)}>
            <p>{alertMessage}</p>
          </ModalAlert>
        )}
      </>

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
        <form onSubmit={handleSubmit} ref={formRef}>
          {isLoading ? (
            <Loader />
          ) : (
            <ContactForm
              files={files}
              handleFileChange={handleFileChange}
              removefiles={removefiles}
              handleSubmit={handleSubmit}
              handleClick={handleClick}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPreview;
