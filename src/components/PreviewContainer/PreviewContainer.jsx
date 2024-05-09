import css from "./PreviewContainer.module.scss";

export const PreviewContainer = ({ children, title, color }) => {
  const brgColor = {
    backgroundColor: `var(--${color})`,
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.wrapperContent} style={brgColor}>
        {children}
      </div>
    </div>
  );
};
