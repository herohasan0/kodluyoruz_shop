import './Card.css';

function Card(props) {
  return (
    <section className="Card">
      <div className="top">
        <img alt={props.alt} src={props.img} />
      </div>
      <div className="bottom">
        <div className="title">{props.title}</div>
        <div className="price">${props.price}</div>
      </div>
    </section>
  );
}

export default Card;
