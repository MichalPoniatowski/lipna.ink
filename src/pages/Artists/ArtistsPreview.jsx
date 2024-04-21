import css from "./ArtistsPreview.module.css";
import profilePhoto from "../../assets/photos/jagoda-profile.JPG";

const ArtistsPreview = () => {
  return (
    <div className={css.artistWrapper}>
      <div className={css.photo}>
        <img src={profilePhoto} alt="Jagoda profile photo"></img>
      </div>
      <p className={css.artistText}>
        Cześć! Mam na imię Jagoda i jestem tatuatorką z pięcioletnim
        doświadczeniem. Prowadzę swoje studio we Wrocławiu o wdzięcznej nazwie
        „Lipna tattoo studio” Czemu Lipna? Trochę zaczepnie, trochę z przekory.
        Jeśli chodzi o tatuaże jestem raczej perfekcjonistką. W moim poprzednim
        studiu zwykło się mówić, że kiedy w studiu jest lipna, to ”nie ma lipy”
        ;-). Mój styl charakteryzuje się precyzyjnym lineartem i cieniowaniem.
        Nazywam go ilustracyjnym, graficznym.
      </p>
    </div>
  );
};

export default ArtistsPreview;
