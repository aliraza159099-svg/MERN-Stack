function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> Rs. {product.price}
      </p>

      <p>
        <strong>Stock Status:</strong>{" "}
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <button
        onClick={addToCart}
        disabled={product.stock === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;