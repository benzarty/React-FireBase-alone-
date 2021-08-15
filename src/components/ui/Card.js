import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;  //children bech ya9ra eli fi west div
}

export default Card;
