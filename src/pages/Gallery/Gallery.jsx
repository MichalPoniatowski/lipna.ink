import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  useThrottle,
  useDebounce,
} from "../../components/CustomHooks/CustomHooks";

import css from "./Gallery.module.css";
import {
  getImages,
  getMoreImages,
} from "../../redux/gallery/API-actions-gallery";
import {
  selectImages,
  selectIsLoading,
  selectError,
  selectNextPage,
  selectCurrentPage,
} from "../../redux/gallery/selectors-gallery";

const Gallery = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = useSelector(selectImages);
  const isLoading = useSelector(selectIsLoading);
  const nextPage = useSelector(selectNextPage);
  const currentPage = useSelector(selectCurrentPage);

  const slides = images.map((image) => ({
    src: image.imageUrl,
    caption: image.alt,
  }));

  const loadMoreImages = async () => {
    console.log("CURRENT PAGE: ", currentPage);
    if (nextPage && !isLoading) {
      dispatch(getMoreImages(currentPage + 1));
    } else {
      console.log("No more results");
      return null;
    }
  };

  const vhToPixels = (vh) => window.innerHeight * (vh / 100);

  const checkIfNearBottom = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - vhToPixels(40)
    ) {
      loadMoreImages();
    }
  };

  const throttledCheck = useThrottle(checkIfNearBottom, 300);

  useEffect(() => {
    window.addEventListener("scroll", throttledCheck);
    return () => {
      window.removeEventListener("scroll", throttledCheck);
    };
  }, [throttledCheck]);

  const renderImages = () => {
    return images.map((image, index) => (
      <div
        key={image.id}
        className={css.imageContainer}
        onClick={() => {
          setIndex(index);
          setOpen(true);
        }}
      >
        <img src={image.imageUrl} alt={image.alt} loading="lazy" />
      </div>
    ));
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.wrapperContent}>
          <h2 className={css.titleMain}>Galeria</h2>
          <div className={css.gridContainer}>{renderImages()}</div>
        </div>
      </div>
      {open && (
        <Lightbox
          index={index}
          on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
          open={open}
          close={() => setOpen(false)}
          slides={slides}
        />
      )}
    </>
  );
};

export default Gallery;
