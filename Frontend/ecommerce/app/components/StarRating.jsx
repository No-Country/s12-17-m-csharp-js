import { IoStarHalf, IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const StarRating = ({ rating }) => {
  const starRatingIcons = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Add a filled star
      starRatingIcons.push(<IoStar key={i} className="text-secondary" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // Add a half-filled star
      starRatingIcons.push(<IoStarHalf key={i} className="text-secondary" />);
    } else {
      // Add an empty star
      starRatingIcons.push(<IoStarOutline key={i} className="text-sky-600" />);
    }
  }

  return <div className="flex space-x-2">{starRatingIcons}</div>;
};

export default StarRating;
