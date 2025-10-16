import './Productos.css';
import ProductoCard from './ProductoCard';
import product1 from '../images/CompactoSalome.jpeg';
import product2 from '../images/Set.jpeg';
import product3 from '../images/ManCorp.jpeg';
import product4 from '../images/Oil.jpeg';
import product5 from '../images/Parches.jpeg';

function Productos() {
  const products = [
    { name: 'Compacto Salome', price: 3.5, image: product1 },
    { name: 'Set de Brochas x8', price: 2.5, image: product2 },
    { name: 'Mantequillas Corporales', price: 5, image: product3 },
    { name: 'Oil Glazed Engol', price: 3.5, image: product4 },
    { name: 'Parches Para El Acne', price: 2.7, image: product5 },
  ];

  return (
    <section className="productos">
      <h2 className="productos-title">Nuestros Productos</h2>
      <div className="productos-grid">
        {products.map((p, i) => (
          <ProductoCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Productos;
