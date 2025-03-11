import './MovieCards.css'

const MovieCards = (props) => {
  return (
    <div className="movie">
    <div>
      <p>{props.year}</p>
    </div>
    <img src={props.poster} alt="" />
    <h2>{props.type}</h2>
    <h3>{props.title}</h3>
  </div>
  )
}

export default MovieCards