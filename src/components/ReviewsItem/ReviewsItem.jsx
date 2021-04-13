const ReviewsItem = ({ author, content }) => (
  <li>
    <h5>Author: {author}</h5>
    <p>{content}</p>
  </li>
);
export default ReviewsItem;
