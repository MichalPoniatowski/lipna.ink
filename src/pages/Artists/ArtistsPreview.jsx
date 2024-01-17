import css from "./Artists.module.css";
import profilePhoto from "../../assets/photos/jagoda-profile.JPG";

export const ArtistsPreview = (children) => {
  return (
    <div className={css.artistWrapper}>
      <div className={css.photo}>
        <img src={profilePhoto} alt="Jagoda profile photo"></img>
      </div>
      <p className={css.artistText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        praesentium repellendus inventore dolorem animi provident culpa sed,
        facere alias magnam ab rem architecto delectus cupiditate, eius
        doloribus distinctio eveniet? Illum eius deserunt dolores magni ullam
        molestias laudantium unde asperiores accusantium iusto quo, ad
        repellendus sit quis enim magnam explicabo minima fugit ratione
        reprehenderit obcaecati aut corrupti eveniet repellat! Laudantium omnis
        ea vitae reiciendis atque, laborum iure eos enim illo nisi doloribus
        placeat corrupti distinctio corporis pariatur inventore culpa, eveniet
        sequi deleniti neque fuga nostrum! Blanditiis sapiente libero officiis
        tempora ullam laudantium fugiat consequuntur, quidem exercitationem
        aspernatur mollitia labore dicta ea!dsvfadsfdfsdfdafadf
      </p>
    </div>
  );
};
