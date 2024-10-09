import { IoArrowForwardOutline } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import css from './Contact.module.scss';
import { SEND_CONTACT_FORM_URL } from '../../../api.URLs';
import { reSizeFiles } from './resizeFiles';
import { Form } from './Form';
import { Loader } from '../../components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import {
  toastSuccess,
  toastError,
  toastWarning,
} from '../../components/Toasts/Toasts';
import { Modal } from '../../components/Modal/Modal';
('../../components/Toasts');

const Contact = () => {
  const fileSizeLimit = 800 * 1024;
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'application/pdf',
    'image/heic',
    'image/heif',
    'image/tiff',
    'image/webp',
    'image/svg+xml',
  ];
  const filesTotalNumber = 6;
  const MAX_NAME_LENGTH = 50;

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...files]);
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
      return [...resizedFiles, ...filesBelowLimit];
    } else {
      return filesToCheck;
    }
  };

  const checkFilesNumberAndType = (files) => {
    let allertMessageToSend = '';

    const notAllowedFilesNames = files
      .filter((file) => !allowedTypes.includes(file.type))
      .map((file) => file.name);

    if (notAllowedFilesNames.length > 0) {
      const filesTypesString = allowedTypes.join(', ');
      const notAllowedFilesNamesStrig = notAllowedFilesNames.join(', ');

      allertMessageToSend += `Dopuszczalne typy plików do wysłania formularza to: ${filesTypesString}
      Wybrałeś pliki: ${notAllowedFilesNamesStrig} które nie spełniają kryteriów, wybierz poprawne pliki.`;
    }

    if (files.length > filesTotalNumber) {
      allertMessageToSend += `Dopuszczalna ilość plików to ${filesTotalNumber}, wybrałeś ${files.length} plików, 
      wybierz pliki zgodnie z limitem. Jeżeli chcesz wysłać więcej plików, możesz wysłać 2gi formularz dodajac w opisie tatuażu taką informację`;
    }

    return allertMessageToSend;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let proccessedFiles = [];
    setIsLoading(true);

    const messageForAlert = checkFilesNumberAndType(files);

    if (formData.name.length > MAX_NAME_LENGTH) {
      setIsLoading(false);
      toastWarning('Maksymalna długość imienia to 50 znaków');
      return;
    }

    if (messageForAlert !== '') {
      setIsLoading(false);
      toastWarning(messageForAlert);
      return;
    }

    const formData = new FormData(formRef.current);
    formData.delete('attachment');

    if (files.length > 0) {
      proccessedFiles = await proccessFiles(files);
      console.log('PROCESSED FILES', proccessedFiles);
    }

    proccessedFiles.forEach((file) => {
      formData.append('files', file);
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      console.log('SEND_CONTACT_FORM_URL:', SEND_CONTACT_FORM_URL);

      const response = await axios.post(SEND_CONTACT_FORM_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('FORM SEND SUCCESSFULY', response.data);
      toastSuccess(
        'Formularz wysłany poprawnie. Na podany przez Ciebie adres mailowy została wysłana kopia formularza.'
      );

      formRef.current.reset();
      setFiles([]);
    } catch (error) {
      toastError(
        'Bład poczas wysyłania formularza. Sprawdż dane oraz załączniki i spróbuj jeszcze raz.'
      );
      console.error('Error during sending form', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    document.getElementById('attachment').click();
  };

  return (
    <div className={css.contactWrapper}>
      <h2 className={css.contactTitle}>Formularz kontaktowy:</h2>
      <div className={css.formWrapper}>
        <form onSubmit={handleSubmit} ref={formRef}>
          {isLoading && (
            <Modal portal='portal-loading' open={isLoading}>
              <Loader />
            </Modal>
          )}

          <Form
            files={files}
            handleFileChange={handleFileChange}
            removefiles={removefiles}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
