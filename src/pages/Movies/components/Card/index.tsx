import { Button, Card } from "react-bootstrap";
import { FC } from "react";
import { Movie, Post } from "@types";
import "./styles.scss";

type Props = {
  movie: Movie;
  handleClick: (payload: Post) => void;
};

const MovieCard: FC<Props> = ({ movie, handleClick }) => {
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
        <Button variant="primary" onClick={handleClick()}>
          Compartir
        </Button>
      </Card.Body>
    </Card>
  );
};

export { MovieCard };
