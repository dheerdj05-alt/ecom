import React, { useState } from "react";

// PRODUCTS array (complete as provided)
const PRODUCTS = [
  {
    id: 1,
    name: "Elegant Satin Dress",
    price: 8999,
    originalPrice: 11999,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Bs7dX9opDQnGhzMNCUaTsgHaLG?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "dresses",
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 2, M: 5, L: 3, XL: 0 },
    color: "Navy Blue",
    reviews: [
      {
        id: 1,
        user: "Sophia R.",
        rating: 5,
        comment: "Absolutely love this dress! Perfect for weddings.",
        date: "2023-10-15",
      },
      {
        id: 2,
        user: "Emma L.",
        rating: 4,
        comment: "Beautiful fabric but runs a bit small.",
        date: "2023-09-22",
      },
    ],
  },
  { 
    id: 9, 
    name: 'Elegant Satin Dress', 
    price: 9200, 
    originalPrice: 12500,
    image: 'https://www.lulus.com/images/product/xlarge/12424961_2590371.jpg?w=195&hdpi=1', 
    category: 'dresses', 
    sizes: ['S', 'M', 'L'], 
    stock: { 'S': 3, 'M': 2, 'L': 4 },
    color: 'Burgundy',
    reviews: [
      { id: 1, user: "Olivia M.", rating: 4, comment: "Gorgeous color and perfect fit!", date: "2023-11-10" }
    ]
  },
  { 
    id: 2, 
    name: 'Classic Leather Loafers', 
    price: 12000, 
    originalPrice: 15000,
    image: 'https://www.shoetree.io/cdn/shop/files/AW22-LBL1232-WOOD_0_3ec869fd-138e-4bee-b266-ec90ac857484.jpg?v=1736849583', 
    category: 'shoes', 
    sizes: [7, 8, 9, 10], 
    stock: { 7: 1, 8: 0, 9: 4, 10: 2 },
    reviews: [
      { id: 1, user: "Michael T.", rating: 5, comment: "Extremely comfortable and stylish.", date: "2023-11-05" },
      { id: 2, user: "James K.", rating: 3, comment: "Good quality but took long to break in.", date: "2023-10-18" }
    ]
  },
  { 
    id: 3, 
    name: 'Floral Maxi Dress', 
    price: 7550, 
    image: 'https://www.vastranand.in/cdn/shop/files/3_7c1972c8-de21-4ca3-9367-2c143e926b9a.jpg?v=1743074435', 
    category: 'dresses', 
    sizes: ['S', 'M', 'L', 'XL'], 
    stock: { 'S': 0, 'M': 2, 'L': 1, 'XL': 0 },
    color: 'Floral Print',
    reviews: [
      { id: 1, user: "Olivia P.", rating: 4, comment: "Beautiful pattern and very comfortable.", date: "2023-09-30" }
    ]
  },
  { 
    id: 10, 
    name: 'Floral Maxi Dress', 
    price: 7800, 
    image: 'https://img.tatacliq.com/images/i8/437Wx649H/MP000000012747256_437Wx649H_202204072113581.jpeg', 
    category: 'dresses', 
    sizes: ['S', 'M', 'L'], 
    stock: { 'S': 1, 'M': 3, 'L': 2 },
    color: 'Pink Floral',
    reviews: [
      { id: 1, user: "Sophia K.", rating: 5, comment: "Love the vibrant colors!", date: "2023-11-15" }
    ]
  },
  { 
    id: 4, 
    name: 'Vintage Ankle Boots', 
    price: 15000, 
    originalPrice: 18000,
    image: 'https://m.media-amazon.com/images/I/71iUu5aiYCL._UY1000_.jpg', 
    category: 'shoes', 
    sizes: [7, 8, 9, 10], 
    stock: { 7: 3, 8: 1, 9: 0, 10: 2 },
    reviews: [
      { id: 1, user: "Daniel R.", rating: 5, comment: "Perfect fit and great quality leather.", date: "2023-11-12" },
      { id: 2, user: "Noah S.", rating: 4, comment: "Love the style but heel is a bit high for everyday.", date: "2023-10-28" },
      { id: 3, user: "William H.", rating: 5, comment: "Received many compliments on these boots!", date: "2023-10-15" }
    ]
  },
  { 
    id: 5, 
    name: 'Summer Linen Dress', 
    price: 6500, 
    image: 'https://i.etsystatic.com/9617243/r/il/6e57db/2901695259/il_570xN.2901695259_nc6y.jpg', 
    category: 'dresses', 
    sizes: ['S', 'M', 'L', 'XL'], 
    stock: { 'S': 5, 'M': 8, 'L': 6, 'XL': 7 },
    color: 'Beige',
    reviews: []
  },
  { 
    id: 11, 
    name: 'Summer Linen Dress', 
    price: 6800, 
    image: 'https://i.etsystatic.com/7799304/r/il/a1a321/6098117149/il_570xN.6098117149_6oua.jpg', 
    category: 'dresses', 
    sizes: ['S', 'M', 'L'], 
    stock: { 'S': 3, 'M': 5, 'L': 4 },
    color: 'Light Blue',
    reviews: [
      { id: 1, user: "Emma W.", rating: 4, comment: "Perfect for hot summer days.", date: "2023-08-20" }
    ]
  },
  { 
    id: 6, 
    name: 'Sleek Stiletto Heels', 
    price: 9500, 
    originalPrice: 12000,
    image: 'https://pazzion.in/cdn/shop/files/9823-2000006newweb.jpg?v=1729793389', 
    category: 'shoes', 
    sizes: [7, 8, 9, 10], 
    stock: { 7: 2, 8: 1, 9: 0, 10: 1 },
    reviews: [
      { id: 1, user: "Ava M.", rating: 2, comment: "Not comfortable for long wear.", date: "2023-10-05" },
      { id: 2, user: "Isabella T.", rating: 4, comment: "Beautiful shoes but sizing is off.", date: "2023-09-18" }
    ]
  },
  { 
    id: 7, 
    name: 'Evening Gown', 
    price: 12500, 
    image: 'https://dhb8p39s5y2g5.cloudfront.net/rib/1628870041831_FLY050-2A-R_1.jpg', 
    category: 'dresses', 
    sizes: ['S', 'M', 'L', 'XL'], 
    stock: { 'S': 1, 'M': 0, 'L': 1, 'XL': 0 },
    color: 'Black',
    reviews: [
      { id: 1, user: "Mia J.", rating: 5, comment: "Stunning gown! Felt like a princess at my event.", date: "2023-11-08" }
    ]
  },
  { 
    id: 12, 
    name: 'Evening Gown', 
    price: 13500, 
    originalPrice: 16000,
    image: 'https://i.pinimg.com/736x/1e/f0/3b/1ef03b5861d060be3cc679782611e9de.jpg', 
    category: 'dresses', 
    sizes: ['S', 'M', 'L'], 
    stock: { 'S': 2, 'M': 1, 'L': 3 },
    color: 'Navy Blue',
    reviews: [
      { id: 1, user: "Charlotte R.", rating: 5, comment: "Elegant and classy!", date: "2023-10-25" }
    ]
  },
  { 
    id: 8, 
    name: 'Casual Sneakers', 
    price: 8500, 
    image: 'https://redtape.com/cdn/shop/files/RLL0224_1.jpg?v=1754292762', 
    category: 'shoes', 
    sizes: [7, 8, 9, 10], 
    stock: { 7: 4, 8: 3, 9: 2, 10: 1 },
    reviews: [
      { id: 1, user: "Ethan L.", rating: 5, comment: "Most comfortable sneakers I've ever owned.", date: "2023-10-22" },
      { id: 2, user: "Liam W.", rating: 4, comment: "Great for everyday wear, good arch support.", date: "2023-10-10" }
    ]
  },
];

// Checkout Steps
const CHECKOUT_STEPS = {
  CART: "cart",
  SHIPPING: "shipping",
  PAYMENT: "payment",
  CONFIRMATION: "confirmation",
};

// Format price in Indian rupees
const formatPrice = (price) => {
  return `₹${price.toLocaleString("en-IN")}`;
};

// Calculate discount percentage
const calculateDiscount = (originalPrice, salePrice) => {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

// Star rating component
const StarRating = ({ rating, onChange, editable = false, size = "medium" }) => {
  const starSize = size === "large" ? "28px" : "18px";

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${editable ? "editable" : ""} ${
            star <= rating ? "filled" : ""
          }`}
          onClick={() => editable && onChange(star)}
          style={{ fontSize: starSize, cursor: editable ? "pointer" : "default" }}
        >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
      <style jsx>{`
        .star-rating {
          display: inline-flex;
          align-items: center;
        }
        .star {
          color: #ddd;
          margin-right: 2px;
        }
        .star.filled {
          color: #ffd700;
        }
        .star.editable:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

// Review Form Component
const ReviewForm = ({ product, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    onSubmit({
      id: Date.now(),
      user: user || "Anonymous",
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    });

    setRating(0);
    setComment("");
    setUser("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Write a Review</h3>
      <div className="form-group">
        <label>Your Name (optional)</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label>Rating</label>
        <StarRating rating={rating} onChange={setRating} editable={true} />
      </div>
      <div className="form-group">
        <label>Your Review</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this product"
          rows="4"
          required
        />
      </div>
      <button type="submit" className="submit-review-btn">
        Submit Review
      </button>
    </form>
  );
};

// Similar Products Component
const SimilarProducts = ({ product, products, onProductClick }) => {
  // Find products with the same name but different ID (variations)
  const similarProducts = products.filter(
    (p) => p.name === product.name && p.id !== product.id
  );

  // If no same-name products, find products in same category
  const categoryProducts =
    similarProducts.length === 0
      ? products.filter(
          (p) => p.category === product.category && p.id !== product.id
        ).slice(0, 4)
      : [];

  const productsToShow = similarProducts.length > 0 ? similarProducts : categoryProducts;

  if (productsToShow.length === 0) return null;

  return (
    <div className="similar-products">
      <h3>{similarProducts.length > 0 ? "product related to this item" : "Similar Products"}</h3>
      <div className="similar-products-grid">
        {productsToShow.map((p) => (
          <div
            key={p.id}
            className="similar-product-card"
            onClick={() => onProductClick(p)}
          >
            <img src={p.image} alt={p.name} />
            <div className="similar-product-info">
              <p className="similar-product-name">{p.name}</p>
              <p className="similar-product-color">{p.color}</p>
              <div className="similar-product-price">
                {p.originalPrice ? (
                  <>
                    <span className="original-price">{formatPrice(p.originalPrice)}</span>
                    <span className="sale-price">{formatPrice(p.price)}</span>
                  </>
                ) : (
                  <span className="price">{formatPrice(p.price)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Product Details Modal Component
const ProductDetailsModal = ({
  product,
  isOpen,
  onClose,
  onAddReview,
  products,
  onProductClick,
}) => {
  const [activeTab, setActiveTab] = useState("description");
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!isOpen || !product) return null;

  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length
      : 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-body">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
            {product.originalPrice && (
              <div className="discount-badge">
                {calculateDiscount(product.originalPrice, product.price)}% OFF
              </div>
            )}
          </div>

          <div className="product-details">
            <h2>{product.name}</h2>
            {product.color && <p className="product-color">Color: {product.color}</p>}

            <div className="price-container">
              {product.originalPrice ? (
                <>
                  <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  <span className="sale-price">{formatPrice(product.price)}</span>
                </>
              ) : (
                <span className="price">{formatPrice(product.price)}</span>
              )}
            </div>

            <div className="rating-summary">
              <StarRating rating={Math.round(averageRating)} size="large" />
              <span>({product.reviews.length} reviews)</span>
            </div>

            <div className="tabs">
              <button
                className={activeTab === "description" ? "active" : ""}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({product.reviews.length})
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "description" && (
                <div className="product-description">
                  <p>
                    This beautiful {product.name.toLowerCase()} is made from
                    high-quality materials and designed for comfort and style.
                    Perfect for various occasions.
                  </p>
                  <ul>
                    <li>Premium quality fabric/materials</li>
                    <li>Comfortable fit</li>
                    <li>Easy care instructions</li>
                    <li>Available in multiple sizes</li>
                    {product.color && <li>Color: {product.color}</li>}
                  </ul>
                </div>
              )}
              {activeTab === "reviews" && (
                <div className="reviews-section">
                  {product.reviews.length === 0 ? (
                    <p className="no-reviews">
                      No reviews yet. Be the first to review this product!
                    </p>
                  ) : (
                    <div className="reviews-list">
                      {product.reviews.map((review) => (
                        <div key={review.id} className="review-item">
                          <div className="review-header">
                            <span className="reviewer">{review.user}</span>
                            <StarRating rating={review.rating} />
                            <span className="review-date">{review.date}</span>
                          </div>
                          <p className="review-comment">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {!showReviewForm ? (
                    <button
                      className="add-review-btn"
                      onClick={() => setShowReviewForm(true)}
                    >
                      Write a Review
                    </button>
                  ) : (
                    <ReviewForm
                      product={product}
                      onSubmit={(review) => {
                        onAddReview(product.id, review);
                        setShowReviewForm(false);
                      }}
                    />
                  )}
                </div>
              )}
            </div>

            <SimilarProducts
              product={product}
              products={products}
              onProductClick={onProductClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Authentication Modal Component
const AuthModal = ({ isOpen, onClose, onLogin, onSignup }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      onLogin(formData.email, formData.password);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      onSignup(formData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2>{isLoginMode ? "Login" : "Create Account"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLoginMode && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {!isLoginMode && (
            <>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {!isLoginMode && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLoginMode ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="auth-switch">
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            className="switch-mode-btn"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode ? "Sign up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(CHECKOUT_STEPS.CART);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(PRODUCTS);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSizeSelection = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleAddToCart = (product) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    const selectedSize = selectedSizes[product.id];

    if (!selectedSize) {
      alert(`Please select a size for ${product.name}`);
      return;
    }

    if (product.stock[selectedSize] <= 0) {
      alert(`Sorry, the selected size is out of stock for ${product.name}`);
      return;
    }

    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      }

      return [...prevCart, { ...product, quantity: 1, size: selectedSize }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId, size) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === productId && item.size === size
      );

      if (existingProductIndex !== -1) {
        const existingProduct = prevCart[existingProductIndex];

        if (existingProduct.quantity > 1) {
          const updatedCart = [...prevCart];
          updatedCart[existingProductIndex] = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1,
          };
          return updatedCart;
        } else {
          return prevCart.filter(
            (item) => !(item.id === productId && item.size === size)
          );
        }
      }
      return prevCart;
    });
  };

  const toggleWishlist = (product) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    setWishlist((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some(
        (item) => item.id === product.id
      );

      if (isProductInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const moveToCart = (product) => {
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));

    const selectedSize = selectedSizes[product.id];
    if (selectedSize) {
      handleAddToCart(product);
    } else {
      setIsCartOpen(true);
      alert(`Please select a size for ${product.name}`);
    }
  };

  const handleCheckout = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    if (cart.length === 0) return;
    setCheckoutStep(CHECKOUT_STEPS.SHIPPING);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitShipping = (e) => {
    e.preventDefault();
    setCheckoutStep(CHECKOUT_STEPS.PAYMENT);
  };

  const handlePayment = () => {
    setCheckoutStep(CHECKOUT_STEPS.CONFIRMATION);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddReview = (productId, review) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, reviews: [...product.reviews, review] }
          : product
      )
    );
  };

  const handleSimilarProductClick = (product) => {
    setSelectedProduct(product);
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
      modalContent.scrollTop = 0;
    }
  };

  const handleLogin = (email, password) => {
    setCurrentUser({
      name: "Demo User",
      email: email,
    });
    setIsAuthModalOpen(false);
    alert("Login successful!");
  };

  const handleSignup = (userData) => {
    setCurrentUser({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
    });
    setIsAuthModalOpen(false);
    alert("Account created successfully!");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCart([]);
    setWishlist([]);
    alert("You have been logged out.");
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartOriginalPrice = cart.reduce(
    (total, item) => total + (item.originalPrice || item.price) * item.quantity,
    0
  );

  // Filter products by category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="app-container">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap');

        :root {
            --primary-color: #0b0101ff;
            --secondary-color: #A9A9A9;
            --accent-color: #D3D3D3;
            --background-color: #ddc0f9ff;
            --text-color: #333;
            --sale-color: #E64A19;
            --wishlist-color: #E64A19;
            --low-stock-color: #FF9800;
            --out-of-stock-color: #9E9E9E;
            --discount-color: #4CAF50;
        }

        body {
            font-family: 'Lato', sans-serif;
            margin: 0;
            padding: 0;
            background-image: url('https://i.pinimg.com/736x/b2/e3/90/b2e390787bebb8cc32c83c5861b54d89.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            line-height: 1.6;
        }
        /* Header */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f9c5feff;
            padding: 1.5rem 3rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }
        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-color);
        }
        .header-right {
          display: flex;
          align-items: center;
        }
        .nav-links-container {
          display: block;
        }
        .nav-links {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }
        .nav-links li {
            margin-left: 2rem;
        }
        .nav-links a {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: 700;
            transition: color 0.3s ease;
        }
        .nav-links a:hover {
            color: var(--secondary-color);
        }
        .header-icons {
            display: flex;
            gap: 1.5rem;
            align-items: center;
        }
        .cart-container, .wishlist-container, .user-container {
            position: relative;
            cursor: pointer;
            font-size: 1.5rem;
        }
        .cart-count, .wishlist-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: #E64A19;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 0.75rem;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 20px;
            height: 20px;
        }
        .wishlist-count {
            background-color: var(--wishlist-color);
        }
        .user-menu {
            position: relative;
        }
        .user-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 0.5rem 0;
            min-width: 150px;
            z-index: 100;
        }
        .user-dropdown button {
            width: 100%;
            text-align: left;
            padding: 0.5rem 1rem;
            background: none;
            border: none;
            cursor: pointer;
        }
        .user-dropdown button:hover {
            background: #f5f5f5;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          margin-left: 1rem;
        }

        /* Auth Modal */
        .auth-modal {
            max-width: 500px;
            padding: 2rem;
        }
        .auth-form {
            margin: 1.5rem 0;
        }
        .auth-submit-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem;
            width: 100%;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 1rem;
        }
        .auth-switch {
            text-align: center;
            margin-top: 1.5rem;
        }
        .switch-mode-btn {
            background: none;
            border: none;
            color: var(--primary-color);
            text-decoration: underline;
            cursor: pointer;
        }

        /* Category Filter */
        .category-filter {
            display: flex;
            justify-content: center;
            margin: 1rem 0 2rem;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .category-btn {
            background: white;
            border: 2px solid var(--accent-color);
            padding: 0.5rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .category-btn.active, .category-btn:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        /* Main Content */
        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
        }
        .page-title {
            font-family: 'Playfair Display', serif;
            text-align: center;
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }

        /* Product Card */
        .product-card {
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            cursor: pointer;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        .product-image-container {
            position: relative;
        }
        .product-image {
            width: 100%;
            height: 350px;
            object-fit: cover;
            display: block;
        }
        .wishlist-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: white;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            font-size: 1.2rem;
            transition: all 0.3s ease;
            z-index: 2;
        }
        .wishlist-btn.active {
            color: var(--wishlist-color);
        }
        .wishlist-btn:hover {
            transform: scale(1.1);
        }
        .stock-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: var(--sale-color);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            z-index: 2;
        }
        .discount-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: var(--discount-color);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            z-index: 2;
        }
        .low-stock {
            background: var(--low-stock-color);
        }
        .out-of-stock {
            background: var(--out-of-stock-color);
        }
        .product-info {
            padding: 1.5rem 1rem;
            text-align: left;
        }
        .product-name {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 0 0 0.5rem;
            cursor: pointer;
        }
        .product-name:hover {
            text-decoration: underline;
        }
        .price-container {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }
        .original-price {
            text-decoration: line-through;
            color: var(--secondary-color);
            font-size: 0.9rem;
        }
        .sale-price {
            color: var(--sale-color);
            font-weight: bold;
            font-size: 1.1rem;
        }
        .price {
            font-size: 1.1rem;
            color: var(--secondary-color);
            font-weight: 700;
            margin: 0;
        }
        .product-rating {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }
        .review-count {
            font-size: 0.9rem;
            color: var(--secondary-color);
        }
        
        /* Size Selection */
        .size-selection {
            margin: 1rem 0;
        }
        .size-options {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-top: 0.5rem;
        }
        .size-option {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--accent-color);
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }
        .size-option.selected {
            background-color: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }
        .size-option:hover:not(.selected):not(.out-of-stock) {
            border-color: var(--primary-color);
        }
        .size-option.out-of-stock {
            cursor: not-allowed;
            opacity: 0.5;
            text-decoration: line-through;
        }
        .size-option.low-stock:after {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: var(--low-stock-color);
        }
        
        .add-to-cart-btn {
            background-color: #5D5D5D;
            color: #fff;
            border: none;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
            border-radius: 0 0 8px 8px;
        }
        .add-to-cart-btn:hover:not(:disabled) {
            background-color: #A9A9A9;
        }
        .add-to-cart-btn:disabled {
            background-color: var(--out-of-stock-color);
            cursor: not-allowed;
        }

        /* Product Details Modal */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 2000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 900px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        }
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            z-index: 10;
            color: var(--primary-color);
        }
        .modal-body {
            display: flex;
            flex-direction: column;
            padding: 2rem;
        }
        @media (min-width: 768px) {
            .modal-body {
                flex-direction: row;
            }
        }
        .modal-body .product-image-container {
            flex: 1;
            max-width: 100%;
        }
        @media (min-width: 768px) {
            .modal-body .product-image-container {
                max-width: 400px;
                margin-right: 2rem;
            }
        }
        .modal-body .product-details {
            flex: 2;
        }
        .modal-body .product-image {
            border-radius: 8px;
        }
        .product-color {
            font-style: italic;
            color: var(--secondary-color);
            margin: 0.5rem 0;
        }
        .rating-summary {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin: 1rem 0;
        }
        .tabs {
            display: flex;
            border-bottom: 1px solid var(--accent-color);
            margin: 1.5rem 0;
        }
        .tabs button {
            background: none;
            border: none;
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            font-weight: 600;
            color: var(--secondary-color);
            position: relative;
        }
        .tabs button.active {
            color: var(--primary-color);
        }
        .tabs button.active:after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: var(--primary-color);
        }
        .tab-content {
            margin-bottom: 1.5rem;
        }
        .product-description ul {
            padding-left: 1.5rem;
        }
        .product-description li {
            margin-bottom: 0.5rem;
        }
        .reviews-section {
            margin-top: 1rem;
        }
        .no-reviews {
            color: var(--secondary-color);
            font-style: italic;
            text-align: center;
            padding: 2rem;
        }
        .reviews-list {
            margin-bottom: 2rem;
        }
        .review-item {
            border-bottom: 1px solid var(--accent-color);
            padding: 1rem 0;
        }
        .review-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.5rem;
            flex-wrap: wrap;
            font-size: 0.9rem;
        }
        .reviewer {
            font-weight: bold;
        }
        .review-date {
            color: var(--secondary-color);
        }
        .review-comment {
            margin: 0;
            line-height: 1.5;
        }
        .add-review-btn, .submit-review-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 1rem;
        }
        .review-form {
            background: var(--background-color);
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 1.5rem;
        }
        .review-form h3 {
            margin-top: 0;
        }
        .review-form .form-group {
            margin-bottom: 1rem;
        }
        .review-form label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        .review-form input, .review-form textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--accent-color);
            border-radius: 4px;
            font-family: inherit;
        }

        /* Similar Products */
        .similar-products {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid var(--accent-color);
        }
        .similar-products h3 {
            font-family: 'Playfair Display', serif;
            margin-bottom: 1rem;
        }
        .similar-products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
        }
        .similar-product-card {
            cursor: pointer;
            transition: transform 0.3s ease;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .similar-product-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        }
        .similar-product-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }
        .similar-product-info {
            padding: 0.75rem;
        }
        .similar-product-name {
            font-weight: 600;
            margin: 0 0 0.25rem;
            font-size: 0.9rem;
        }
        .similar-product-color {
            color: var(--secondary-color);
            margin: 0 0 0.5rem;
            font-size: 0.8rem;
        }
        .similar-product-price {
            font-size: 0.9rem;
        }
        .similar-product-price .original-price {
            text-decoration: line-through;
            color: var(--secondary-color);
            margin-right: 0.5rem;
            font-size: 0.8rem;
        }
        .similar-product-price .sale-price {
            color: var(--sale-color);
            font-weight: 600;
        }

        /* Cart Sidebar */
        .cart-overlay, .wishlist-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            display: flex;
            justify-content: flex-end;
        }
        .cart-sidebar, .wishlist-sidebar {
            width: 400px;
            height: 100%;
            background-color: #fff;
            box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            box-sizing: border-box;
            z-index: 1001;
            transform: translateX(0);
            transition: transform 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        }
        .cart-header, .wishlist-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        .cart-header h2, .wishlist-header h2 {
            margin: 0;
            font-family: 'Playfair Display', serif;
        }
        .cart-header button, .wishlist-header button {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--primary-color);
        }
        .cart-items, .wishlist-items {
            flex-grow: 1;
            overflow-y: auto;
        }
        .cart-item, .wishlist-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--accent-color);
        }
        .cart-item-image, .wishlist-item-image {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 4px;
            margin-right: 1rem;
        }
        .cart-item-info, .wishlist-item-info {
            flex-grow: 1;
            font-size: 0.9rem;
        }
        .cart-item-name, .wishlist-item-name {
            font-weight: 700;
            margin: 0;
        }
        .cart-item-details {
            display: flex;
            justify-content: space-between;
            margin-top: 0.25rem;
        }
        .cart-item-price {
            color: var(--secondary-color);
        }
        .cart-item-size {
            color: var(--primary-color);
            font-weight: 700;
        }
        .cart-item-quantity {
            display: flex;
            align-items: center;
            margin-top: 0.5rem;
        }
        .quantity-btn {
            background: var(--accent-color);
            border: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
        }
        .quantity-value {
            margin: 0 0.5rem;
        }
        .remove-btn {
            background: none;
            border: none;
            color: #E64A19;
            cursor: pointer;
            margin-left: 1rem;
            font-size: 0.9rem;
        }
        .wishlist-item-actions {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }
        .move-to-cart-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
        }
        .cart-footer, .wishlist-footer {
            margin-top: 2rem;
            border-top: 1px solid var(--accent-color);
            padding-top: 1.5rem;
        }
        .price-summary {
            margin-bottom: 1rem;
        }
        .price-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        .original-total {
            text-decoration: line-through;
            color: var(--secondary-color);
        }
        .discount-amount {
            color: var(--discount-color);
        }
        .cart-total {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 1rem 0;
        }
        .checkout-btn {
            background-color: #5D5D5D;
            color: #fff;
            border: none;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
        }
        .checkout-btn:hover {
            background-color: #A9A9A9;
        }
        .checkout-btn:disabled {
            background-color: #A9A9A9;
            cursor: not-allowed;
        }
        .empty-wishlist {
            text-align: center;
            padding: 2rem;
            color: var(--secondary-color);
        }
        
        /* Checkout Forms */
        .checkout-form {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            margin: 2rem auto;
            max-width: 600px;
        }
        .form-title {
            font-family: 'Playfair Display', serif;
            text-align: center;
            margin-bottom: 2rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 700;
        }
        .form-group input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--accent-color);
            border-radius: 4px;
            font-size: 1rem;
        }
        .form-row {
            display: flex;
            gap: 1rem;
        }
        .form-row .form-group {
            flex: 1;
        }
        
        /* Payment Options */
        .payment-options {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin: 2rem 0;
        }
        .payment-option {
            border: 2px solid var(--accent-color);
            border-radius: 8px;
            padding: 1rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .payment-option:hover {
            border-color: var(--primary-color);
        }
        .payment-option.selected {
            border-color: var(--primary-color);
            background-color: rgba(93, 93, 93, 0.1);
        }
        
        /* Confirmation */
        .confirmation {
            text-align: center;
            padding: 3rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            margin: 2rem auto;
            max-width: 600px;
        }
        .confirmation-icon {
            font-size: 4rem;
            color: #4CAF50;
            margin-bottom: 1rem;
        }
        
        /* Contact Section */
        .contact-section {
            background: white;
            padding: 3rem 2rem;
            margin: 4rem 0;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .section-title {
            font-family: 'Playfair Display', serif;
            text-align: center;
            font-size: 2rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
            position: relative;
        }
        .section-title:after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background: var(--primary-color);
            margin: 10px auto;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .contact-card {
            padding: 1.5rem;
            background: var(--background-color);
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s ease;
        }
        .contact-card:hover {
            transform: translateY(-5px);
        }
        .contact-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }
        
        /* Footer */
        footer {
            background-color: var(--primary-color);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            text-align: left;
        }
        .footer-section h3 {
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        .footer-section ul {
            list-style: none;
            padding: 0;
        }
        .footer-section ul li {
            margin-bottom: 0.5rem;
        }
        .footer-section ul li a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s ease;
        }
        .footer-section ul li a:hover {
            opacity: 0.8;
        }
        .footer-bottom {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        /* Mobile Responsive CSS */
        @media screen and (max-width: 768px) {
          .header {
            padding: 1rem 1.5rem;
          }
          .hamburger {
            display: block;
          }
          .nav-links-container {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #f9c5feff;
            z-index: 100;
          }
          .nav-links-container.open {
            display: block;
          }
          .nav-links {
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            margin: 0;
          }
          .nav-links li {
            margin-left: 0;
            margin-bottom: 1rem;
          }
          .container {
            padding: 0 1rem;
          }
          .product-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .product-image {
            height: 200px;
          }
          .modal-content,
          .cart-sidebar,
          .wishlist-sidebar {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 0 !important;
            height: 90vh !important;
            padding: 1rem !important;
          }
          .size-options {
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .page-title {
            font-size: 1.8rem;
          }
          .add-to-cart-btn {
            font-size: 1rem;
            padding: 0.5rem;
          }
          .header-icons {
            gap: 1rem;
            font-size: 1.2rem;
          }
          .payment-options {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="logo">D&amp;J Boutique</div>
        <div className="header-right">
          <div className="header-icons">
            {currentUser ? (
              <div className="user-container user-menu">
                <div>{currentUser.name}</div>
                <div className="user-dropdown">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <div className="user-container" onClick={() => setIsAuthModalOpen(true)}>
                Login
              </div>
            )}
            <div className="wishlist-container" onClick={() => setIsWishlistOpen(true)}>
              ❤️
              {wishlist.length > 0 && (
                <span className="wishlist-count">{wishlist.length}</span>
              )}
            </div>
            <div className="cart-container" onClick={() => setIsCartOpen(true)}>
              🛒
              {cartTotalItems > 0 && <span className="cart-count">{cartTotalItems}</span>}
            </div>
          </div>
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
        <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <a href="#dresses" onClick={() => { setActiveCategory("dresses"); setIsMenuOpen(false); }}>
                Dresses
              </a>
            </li>
            <li>
              <a href="#shoes" onClick={() => { setActiveCategory("shoes"); setIsMenuOpen(false); }}>
                Shoes
              </a>
            </li>
            <li>
              <a href="#new-arrivals" onClick={() => { setActiveCategory("all"); setIsMenuOpen(false); }}>
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Product Grid */}
      <main className="container">
        <h1 className="page-title">Featured Collection</h1>

        <div className="category-filter">
          <button
            className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Products
          </button>
          <button
            className={`category-btn ${activeCategory === "dresses" ? "active" : ""}`}
            onClick={() => setActiveCategory("dresses")}
          >
            Dresses
          </button>
          <button
            className={`category-btn ${activeCategory === "shoes" ? "active" : ""}`}
            onClick={() => setActiveCategory("shoes")}
          >
            Shoes
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => {
            const isInWishlist = wishlist.some((item) => item.id === product.id);
            const averageRating =
              product.reviews.length > 0
                ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
                  product.reviews.length
                : 0;

            return (
              <div className="product-card" key={product.id}>
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    onClick={() => openProductDetails(product)}
                  />
                  <button
                    className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
                    onClick={() => toggleWishlist(product)}
                  >
                    {isInWishlist ? "❤️" : "🤍"}
                  </button>

                  {Object.values(product.stock).some((stock) => stock === 0) && (
                    <div className="stock-badge out-of-stock">Out of Stock</div>
                  )}
                  {!Object.values(product.stock).some((stock) => stock === 0) &&
                    Object.values(product.stock).some((stock) => stock < 3) && (
                      <div className="stock-badge low-stock">Low Stock</div>
                    )}

                  {product.originalPrice && (
                    <div className="discount-badge">
                      {calculateDiscount(product.originalPrice, product.price)}% OFF
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <h3
                    className="product-name"
                    onClick={() => openProductDetails(product)}
                  >
                    {product.name}
                  </h3>
                  {product.color && (
                    <p className="product-color">{product.color}</p>
                  )}

                  <div className="price-container">
                    {product.originalPrice ? (
                      <>
                        <span className="original-price">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <span className="sale-price">{formatPrice(product.price)}</span>
                      </>
                    ) : (
                      <span className="price">{formatPrice(product.price)}</span>
                    )}
                  </div>

                  {product.reviews.length > 0 && (
                    <div className="product-rating">
                      <StarRating rating={Math.round(averageRating)} />
                      <span className="review-count">({product.reviews.length})</span>
                    </div>
                  )}

                  <div className="size-selection">
                    <p>Select Size:</p>
                    <div className="size-options">
                      {product.sizes.map((size) => {
                        const stock = product.stock[size];
                        let sizeClass = "";
                        if (stock === 0) {
                          sizeClass = "out-of-stock";
                        } else if (stock < 3) {
                          sizeClass = "low-stock";
                        }

                        return (
                          <div
                            key={size}
                            className={`size-option ${sizeClass} ${
                              selectedSizes[product.id] === size ? "selected" : ""
                            }`}
                            onClick={() =>
                              stock > 0 && handleSizeSelection(product.id, size)
                            }
                            title={stock === 0 ? "Out of stock" : stock < 3 ? "Low stock" : ""}
                          >
                            {size}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                  disabled={Object.values(product.stock).every((stock) => stock === 0)}
                >
                  {Object.values(product.stock).every((stock) => stock === 0)
                    ? "Out of Stock"
                    : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>support@d&jboutique.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>+91 6458938385</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>123 Fashion Avenue, Coimbatore, 645341</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🕒</div>
              <h3>Hours</h3>
              <p>
                Mon-Fri: 9AM-6PM
                <br />
                Sat: 10AM-4PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeProductDetails}
        onAddReview={handleAddReview}
        products={products}
        onProductClick={handleSimilarProductClick}
      />

      {/* Cart Sidebar & Checkout */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>
                {checkoutStep === CHECKOUT_STEPS.CART && "Your Cart"}
                {checkoutStep === CHECKOUT_STEPS.SHIPPING && "Shipping Information"}
                {checkoutStep === CHECKOUT_STEPS.PAYMENT && "Payment Method"}
                {checkoutStep === CHECKOUT_STEPS.CONFIRMATION && "Order Confirmation"}
              </h2>
              <button
                onClick={() => {
                  if (checkoutStep === CHECKOUT_STEPS.CART) {
                    setIsCartOpen(false);
                  } else {
                    setCheckoutStep(CHECKOUT_STEPS.CART);
                  }
                }}
              >
                &times;
              </button>
            </div>

            {checkoutStep === CHECKOUT_STEPS.CART && (
              <>
                <div className="cart-items">
                  {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    cart.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="cart-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image"
                        />
                        <div className="cart-item-info">
                          <p className="cart-item-name">{item.name}</p>
                          <div className="cart-item-details">
                            <span className="cart-item-price">
                              {item.originalPrice ? (
                                <>
                                  <span
                                    style={{
                                      textDecoration: "line-through",
                                      marginRight: "0.5rem",
                                      color: "#A9A9A9",
                                    }}
                                  >
                                    {formatPrice(item.originalPrice)}
                                  </span>
                                  {formatPrice(item.price)}
                                </>
                              ) : (
                                formatPrice(item.price)
                              )}
                            </span>
                            <span className="cart-item-size">Size: {item.size}</span>
                          </div>
                          <div className="cart-item-quantity">
                            <button
                              className="quantity-btn"
                              onClick={() => handleRemoveFromCart(item.id, item.size)}
                            >
                              -
                            </button>
                            <span className="quantity-value">{item.quantity}</span>
                            <button
                              className="quantity-btn"
                              onClick={() => handleAddToCart(item)}
                            >
                              +
                            </button>
                            <button
                              className="remove-btn"
                              onClick={() =>
                                setCart(
                                  cart.filter(
                                    (cartItem) =>
                                      !(
                                        cartItem.id === item.id && cartItem.size === item.size
                                      )
                                  )
                                )
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="cart-footer">
                  {cartOriginalPrice > cartTotalPrice && (
                    <div className="price-summary">
                      <div className="price-row">
                        <span>Original Price:</span>
                        <span className="original-total">{formatPrice(cartOriginalPrice)}</span>
                      </div>
                      <div className="price-row">
                        <span>Discount:</span>
                        <span className="discount-amount">
                          -{formatPrice(cartOriginalPrice - cartTotalPrice)}
                        </span>
                      </div>
                    </div>
                  )}
                  <p className="cart-total">Total: {formatPrice(cartTotalPrice)}</p>
                  <button
                    className="checkout-btn"
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}

            {checkoutStep === CHECKOUT_STEPS.SHIPPING && (
              <form className="checkout-form" onSubmit={handleSubmitShipping}>
                <h3 className="form-title">Shipping Information</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={contactInfo.address}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={contactInfo.city}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">ZIP Code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={contactInfo.zip}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="checkout-btn">
                  Continue to Payment
                </button>
              </form>
            )}

            {checkoutStep === CHECKOUT_STEPS.PAYMENT && (
              <div className="checkout-form">
                <h3 className="form-title">Payment Method</h3>
                <div className="payment-options">
                  <div className="payment-option selected">Credit Card</div>
                  <div className="payment-option">PayPal</div>
                  <div className="payment-option">Apple Pay</div>
                  <div className="payment-option">Google Pay</div>
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input type="text" id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="123" required />
                  </div>
                </div>

                <button className="checkout-btn" onClick={handlePayment}>
                  Pay {formatPrice(cartTotalPrice)}
                </button>
              </div>
            )}

            {checkoutStep === CHECKOUT_STEPS.CONFIRMATION && (
              <div className="confirmation">
                <div className="confirmation-icon">✅</div>
                <h2>Thank You for Your Order!</h2>
                <p>Your order has been confirmed and will be shipped within 2-3 business days.</p>
                <p>Order #: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                <p>You saved {formatPrice(cartOriginalPrice - cartTotalPrice)} on this order!</p>
                <button
                  className="checkout-btn"
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep(CHECKOUT_STEPS.CART);
                    setCart([]);
                    setSelectedSizes({});
                  }}
                  style={{ marginTop: "2rem" }}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Sidebar */}
      {isWishlistOpen && (
        <div className="wishlist-overlay" onClick={() => setIsWishlistOpen(false)}>
          <div className="wishlist-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="wishlist-header">
              <h2>Your Wishlist</h2>
              <button onClick={() => setIsWishlistOpen(false)}>&times;</button>
            </div>

            <div className="wishlist-items">
              {wishlist.length === 0 ? (
                <div className="empty-wishlist">
                  <p>Your wishlist is empty.</p>
                  <p>Add items you love by clicking the heart icon!</p>
                </div>
              ) : (
                wishlist.map((item) => (
                  <div key={item.id} className="wishlist-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="wishlist-item-image"
                    />
                    <div className="wishlist-item-info">
                      <p className="wishlist-item-name">{item.name}</p>
                      <div className="price-container">
                        {item.originalPrice ? (
                          <>
                            <span className="original-price">{formatPrice(item.originalPrice)}</span>
                            <span className="sale-price">{formatPrice(item.price)}</span>
                          </>
                        ) : (
                          <span className="price">{formatPrice(item.price)}</span>
                        )}
                      </div>
                      <div className="wishlist-item-actions">
                        <button
                          className="move-to-cart-btn"
                          onClick={() => moveToCart(item)}
                        >
                          Move to Cart
                        </button>
                        <button
                          className="remove-btn"
                          onClick={() => toggleWishlist(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="wishlist-footer">
              <button
                className="checkout-btn"
                onClick={() => setIsWishlistOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>D&amp;J Boutique</h3>
            <p>Your one-stop shop for fashionable dresses and shoes for every occasion.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#dresses" onClick={() => setActiveCategory("dresses")}>
                  Dresses
                </a>
              </li>
              <li>
                <a href="#shoes" onClick={() => setActiveCategory("shoes")}>
                  Shoes
                </a>
              </li>
              <li>
                <a href="#new-arrivals" onClick={() => setActiveCategory("all")}>
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📧 support@d&jboutique.com</p>
            <p>📞 +91 6458938385</p>
            <p>📍 123 Fashion Avenue, Coimbatore, 645341</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 D&J Boutique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}