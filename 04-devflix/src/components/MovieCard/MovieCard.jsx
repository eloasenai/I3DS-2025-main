import styles from "./MovieCard.module.css";

const MovieCard = (opiUrl, ...props) => {
  return (
      <>
    <div className={styles.movie}>
      <div>
        <p>{props.Year}</p>
      </div>
<div>
      <img src={props.Poster} alt="" />
</div>
<div>
      <span>{props.Type}</span>
      <h3>{props.Title}</h3>
    </div>
    </div>
    <MovieDescription opiUrl={opiUrl} movieID={props.imdbID}/> 
    </>
  );
};
export default MovieCard;