import noImage from '../../images/no_img.png';

const MovieDetails = ({
  poster_path,
  vote_average,
  genres,
  release_date,
  title,
  overview,
}) => {
  const date = release_date.slice(0, 4);
  const userScore = vote_average * 10 + '%';
  const genreName = genres.map(genre => genre.name).join(', ');
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const imgURL = baseURL + poster_path;

  return (
    <>
      <img src={poster_path ? imgURL : noImage} alt={title} />
      <h1>
        {title} ({date})
      </h1>
      <p>User score: {userScore}</p>
      <h3>Overview:</h3>
      <span>{overview}</span>
      <h3>Genres:</h3>
      <span>{genreName}</span>
    </>
  );
};
export default MovieDetails;
