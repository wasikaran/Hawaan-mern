import React, { useEffect, useState } from 'react';
import Slider from '../pages/home/Slider';
import './style.css';
import { useProduct } from '../contextAPI/FuncContext';
import { Link } from 'react-router-dom';
import Notification from './Notification';
import { useNavigate } from 'react-router-dom';

const FILTER_SECTIONS = [
  { key: 'rating', label: 'Rating' },
  { key: 'price', label: 'Price Range' },
  { key: 'brand', label: 'Brand' },
];

const Products = (props) => {
  const navigate = useNavigate()
  const { ChildCategory, ChildSubCategory } = props;
  const { setCategory, setSubCategory } = useProduct();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [openSections, setOpenSections] = useState({
    rating: true,
    price: true,
    brand: true,
  });

  useEffect(() => {
  const token =  localStorage.getItem('token')
    if(!token){
      navigate('/auth')
    }
    setCategory(ChildCategory);
    setSubCategory(ChildSubCategory);
  }, [ChildCategory, ChildSubCategory, setCategory, setSubCategory]);

  useEffect(() => {

    const fetchData = async () => {
      try {
const res = await fetch(process.env.PUBLIC_URL + '/data.json');
        const data = await res.json();
        if (data?.[ChildCategory]?.[ChildSubCategory]) {
          setProducts(data[ChildCategory][ChildSubCategory]);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchData();
  }, [ChildCategory, ChildSubCategory]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRatingChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedRatings((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((r) => r !== value)
    );
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrands((prev) =>
      e.target.checked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedRatings([]);
    setPriceRange({ min: 0, max: 500 });
    setSelectedBrands([]);
  };

  const filteredProducts = products.filter((prod) => {
    const matchSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRating =
      selectedRatings.length === 0 || selectedRatings.some((r) => prod.rating >= r);
    const matchPrice =
      prod.price >= priceRange.min && prod.price <= priceRange.max;
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(prod.brand?.toLowerCase());
    return matchSearch && matchRating && matchPrice && matchBrand;
  });

  return (
    <>
    <Slider/>
    
    <Notification />

    
      <div className="header-search-container">
        <input
          type="search"
          className="search-field"
          placeholder="Enter your product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" aria-label="Search">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>

      <div className="product-container">
        <div className="container">
          <div className="filter-sidebar">
            <div className="filter-header">
              <h3>Filters</h3>
            </div>

            {FILTER_SECTIONS.map(({ key, label }) => (
              <div className="filter-section" key={key}>
                <div
                  className="filter-title"
                  onClick={() => toggleSection(key)}
                >
                  <h4>{label}</h4>
                  <ion-icon
                    name={openSections[key] ? 'chevron-up-outline' : 'chevron-down-outline'}
                    className="toggle-icon"
                  />
                </div>

                <div className={`filter-content ${openSections[key] ? 'open' : ''}`}>
                  {key === 'rating' &&
                    [5, 4, 3, 2, 1].map((rate) => (
                      <div className="rating-option" key={rate}>
                        <input
                          type="checkbox"
                          id={`rating-${rate}`}
                          value={rate}
                          checked={selectedRatings.includes(rate)}
                          onChange={handleRatingChange}
                        />
                        <label htmlFor={`rating-${rate}`}>
                          {[...Array(5)].map((_, i) => (
                            <ion-icon
                              key={i}
                              name={i < rate ? 'star' : 'star-outline'}
                            />
                          ))}
                          <span className="rating-text">& Up</span>
                        </label>
                      </div>
                    ))}

                  {key === 'price' && (
                    <div className="price-range">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange((prev) => ({
                            ...prev,
                            min: Number(e.target.value),
                          }))
                        }
                      />
                      <span>-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange((prev) => ({
                            ...prev,
                            max: Number(e.target.value),
                          }))
                        }
                      />
                    </div>
                  )}

                  {key === 'brand' &&
                    ['nike', 'adidas', 'apple'].map((b) => (
                      <div className="filter-option" key={b}>
                        <input
                          type="checkbox"
                          id={`brand-${b}`}
                          value={b}
                          checked={selectedBrands.includes(b)}
                          onChange={handleBrandChange}
                        />
                        <label htmlFor={`brand-${b}`}>{b}</label>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div className="filter-buttons">
              <button className="btn apply-filters">Apply Filters</button>
              <button className="btn reset-filters" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((prod, idx) => {
              const discount = prod.originalPrice
                ? Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)
                : 0;
              return (
                <div className="product-card" key={idx}>
                  <div className="product-image">
                    <img src={prod.image} alt={prod.name} className="main-img" />
                    <img src={prod.hoverImage} alt="hover" className="hover-img" />
                    <div className="discount">{discount}%</div>
                    <div className="icons">
                      <span><i className="bi bi-cart" /></span>
                      <Link to={`/product/${prod.id}`}>
                        <span><i className="bi bi-eye" /></span>
                      </Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <p className="category">{prod.category || 'Product'}</p>
                    <h3>{prod.name}</h3>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${i < prod.rating ? 'bi-star-fill' : 'bi-star'}`}
                          style={{ color: i < prod.rating ? '#f5a623' : '#ccc' }}
                        />
                      ))}
                    </div>
                    <div className="price">
                      <b>${prod.price}</b>
                      <span>${prod.originalPrice}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </>
  );
};

export default Products;
