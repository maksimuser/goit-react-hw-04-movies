import noPhoto from '../../images/no-photo.png';
const CastItem = ({ name, path, character }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const imgURL = baseURL + path;

  return (
    <li>
      <img src={path ? imgURL : noPhoto} alt={name} width="150" />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </li>
  );
};
export default CastItem;
