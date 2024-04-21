import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import css from "./SkeletonLoader.module.css";

export const SkeletonHeroLoader = () => {
  return (
    <div className={css.skeltonHeroWrapper}>
      <div className={css.skeltonHeroText}>
        <Skeleton baseColor="grey" height="14vw" width="60vw" />
        <br />
        <Skeleton baseColor="grey" height="14vw" width="80vw" />
        <br />
        <Skeleton baseColor="grey" height="14vw" width="10vw" />
        <br />
        <Skeleton baseColor="grey" height="14vw" width="50vw" />
      </div>
    </div>
  );
};

export const SkeletonLoader = ({ previePath }) => {
  return (
    <>
      <div className={css.skeltonTitle}>
        <Skeleton baseColor="grey" height={40} width={200} />
      </div>
      <div className={css.skeltonWrapper}>
        <div className={css.skeltonImage}>
          <img src={previePath} alt="preview image"></img>
        </div>
        <div className={css.skeltonText}>
          <Skeleton baseColor="grey" height={16} count={4} />
        </div>
        <div className={css.skeltonButtonWrapper}>
          <div className={css.skeltonButton}>
            <Skeleton baseColor="grey" height={70} width={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export const SkeletonGallerLoader = ({ previePath }) => {
  return (
    <>
      <div className={css.skeltonTitle}>
        <Skeleton baseColor="grey" height={40} width={200} />
      </div>
      <div className={css.skeltonGalleryWrapper}>
        <div className={css.skeltonGalleryPosition}>
          <div className={css.skeltonGalleryImage}>
            <img src={previePath} alt="preview image"></img>
          </div>
        </div>

        <div className={css.skeltonButtonWrapper}>
          <div className={css.skeltonButton}>
            <Skeleton baseColor="grey" height={70} width={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export const SkeletonLoader2 = () => {
  return (
    <>
      <div className={css.skeltonTitle}>
        <Skeleton baseColor="grey" height={40} width={200} />
      </div>
      <div className={css.skeltonWrapper}>
        <div className={css.skeltonText2}>
          <h3>
            <Skeleton baseColor="grey" height={40} width={250} />
          </h3>

          <Skeleton baseColor="grey" height={16} count={10} />
        </div>
        <div className={css.skeltonButtonWrapper}>
          <div className={css.skeltonButton}>
            <Skeleton baseColor="grey" height={70} width={500} />
          </div>
        </div>
      </div>
    </>
  );
};
