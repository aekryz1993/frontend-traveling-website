import itemlogoStyle from "../stylesheet/components/item-log.css";

const ItemLogo = ({ logo, alt, title }) => {
  return (
    <div className={itemlogoStyle.item}>
      <img className={itemlogoStyle.img} src={logo} alt={alt} />
      <div className={itemlogoStyle.title}><span>{title}</span></div>
      <div className={itemlogoStyle.text}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint</div>
    </div>
  )
}

export default ItemLogo