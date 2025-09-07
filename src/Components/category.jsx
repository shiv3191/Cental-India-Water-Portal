import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';

const CombinedCategory = () => {
  const navigate = useNavigate();
  const mpImage = 'https://cdn.vectorstock.com/i/2000v/69/31/madhya-pradesh-3d-map-of-india-vector-35746931.avif';
  const cgImage = 'https://cdn.vectorstock.com/i/2000v/67/05/chhattisgarh-state-map-india-3d-vector-35746705.avif';

  const handleViewDistricts = (state) => {
    if (state === 'mp') {
      navigate('/districts/mp');
    } else if (state === 'cg') {
      navigate('/districts/cg');
    }
  };

  return (
    <div className="combined-category-container">
      <div className="section-header">
        <h2 className="section-title">Explore Water Research by State</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="state-grid">
        {/* Madhya Pradesh Card */}
        <div className="state-card">
          <div className="state-image-container">
            <div 
              className="state-image"
              style={{ backgroundImage: `url(${mpImage})` }}
            />
            <div className="state-content">
              <h3 className="state-title">Madhya Pradesh</h3>
              <p className="state-stats">55 Districts</p>
              <button 
                className="state-button"
                onClick={() => handleViewDistricts('mp')}
              >
                View Districts
              </button>
            </div>
          </div>
        </div>

        {/* Chhattisgarh Card */}
        <div className="state-card">
          <div className="state-image-container">
            <div 
              className="state-image"
              style={{ backgroundImage: `url(${cgImage})` }}
            />
            <div className="state-content">
              <h3 className="state-title">Chhattisgarh</h3>
              <p className="state-stats">33 Districts</p>
              <button 
                className="state-button"
                onClick={() => handleViewDistricts('cg')}
              >
                View Districts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedCategory;