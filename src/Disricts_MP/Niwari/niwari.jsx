import React from 'react';
import './niwari.css';
import Indoreimg from './NIWARI1.png';
import Indoreimg1 from './Niwari2.png';
import Indoreimg2 from './Niwari3.png';
import picture1 from './niw1.png';
import picture2 from './niw2.png';

const Niwari= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Niwari District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>1463.69 sq.km</strong> and lies in the <strong>Betwa basin (Jamni sub-basin)</strong></p>
  
  <p>• The total population of the district is <strong>1,36,495</strong> out of which the Scheduled Caste population is <strong>31,398</strong>.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>800–1000 mm</strong> and <strong>≈40–44 °C & ≈6–10 °C</strong></p>
  
  <p>• District climate: <strong>Subtropical (Niwari/Tikamgarh zone) — hot summers (≈40–44 °C), cool winters (≈6–10 °C), rainfall ≈800–1000 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Wheat, Gram, Mustard, Jowar</strong></p>
</div>


        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Niwari District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">16.24 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.41 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">12.37 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">4.79 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">17.28 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">4.53 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">25.04 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.37 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2" />
    </div>
  </div>
</div>


      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Niwari District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 872.1 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '59.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 69.7 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '4.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 293.77 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '20.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 26.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 19.55 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 7.58 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 28.33 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.05 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Niwari" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Niwari;