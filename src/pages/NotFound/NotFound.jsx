import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={css.wrapper}>
      <div className={css.content}>
        <p className={css.title}>LIPA :(</p>
        <p className={css.status}>404</p>
        <p className={css.info}>
          strona o podanym <br />
          adresie nie istnieje
        </p>
      </div>
    </main>
  );
};

export default NotFound;
