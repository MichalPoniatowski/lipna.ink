// import css from './Opinions.module'

const Opinions = () => {
  return (
    <div>
      <h2>OPINIE Z GOOGLA</h2>
    </div>
  );
};

// import axios from "axios";

// export const Opinions = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(
//           `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,review&key=${apiKey}`
//         );
//         setReviews(response.data.result.reviews);
//         console.log("REVIEWS", response.data.result.reviews);
//         console.log("RES DATA", response.data);
//       } catch (error) {
//         console.error("Błąd podczas pobierania recenzji:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const renderREviews = () => {
//     reviews.map((review, index) => (
//       <div key={index}>
//         <p>Autor: {review.author_name}</p>
//         <p>Ocena: {review.rating}</p>
//         <p>Recenzja: {review.text}</p>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h2>OPINIE Z GOOGLA</h2>
//       <p>{renderREviews}</p>
//     </div>
//   );
// };

export default Opinions;
