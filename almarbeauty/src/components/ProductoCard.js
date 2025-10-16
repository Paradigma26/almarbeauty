import './ProductoCard.css';

function ProductoCard({ name, price, image }) {
  return (
    <div className="producto-card">
      <div className="producto-image-container">
        <img
          src={image} // ya no usamos placeholder
          alt={name}
          className="producto-image"
        />
      </div>
      <div className="producto-info">
        <h3 className="producto-name">{name}</h3>
        <p className="producto-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}


export default ProductoCard;
