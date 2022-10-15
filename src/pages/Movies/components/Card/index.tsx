import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FC } from "react";
import { Movie } from "@types";
import "./styles.scss";

type Props = {
  movie: Movie;
};

const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <Card className="movie-card" key={movie.id}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`poster-${movie.title}`}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className="card-text">{movie.overview}</Card.Text>
        <Button variant="primary">Compartir</Button>
      </Card.Body>
    </Card>
  );
};

export { MovieCard };