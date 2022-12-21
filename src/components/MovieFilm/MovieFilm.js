import Image from "../Image";

function MovieFilm({ movie }) {
  return (
    <>
      <Image src={movie.poster_path} />
      <h3>{movie.title}</h3>
    </>
  );
}

export default MovieFilm;
