import cardStyle from "../stylesheet/components/card.css";

const Card = ({image, alt}) => {
  return (
    <div className={cardStyle.container} >
      <img src={image} alt={alt} />
      <div className={cardStyle.content}>
        <p className={cardStyle.title}>Card title</p>
        <p className={cardStyle.main}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className={cardStyle.button}>Book now</div>
      </div>
    </div>
  )
}

export default Card