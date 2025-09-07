import React from 'react';
import './Ashok.css';
import AM from './ASHOKNAGAR.jpg';
import AM1 from './Ashoknagar (1).jpg';
import AM2 from './Ashoknagar (2).jpg';
import picture1 from './Picture1_ashok.png';
import picture2 from './Picture2_ashok.png';

const Ashok= () => {
  return (
    <div className='ali-body'>

    <div className="container">
      <div className="header">
        <h1>Ashoknagar District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={AM} alt="Indore District Location Map" className="district-image" />

      <div className="basic-info">
  <p>• The district is having an area <strong>5242.6782 sq.km</strong> and has following major rivers <strong>Sindh River, Betwa River</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>691387</strong> and <strong>153684</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>88.5 mm/month</strong> and <strong>44.24°C & 5.293°C</strong> </p>
  
  <p>• District climate: <strong>Subtropical / semi-humid — hot summers (≈40–44 °C), cool winters (≈8–12 °C), rainfall ≈800–1000 mm</strong></p>
  
  <p>• The district lies partly in the <strong>Yamuna sub basin</strong> (75%) and <strong>partly in the Narmada basin</strong> (25%).</p>
  
  <p>• District observed a <strong>drought in 2000-2001</strong> and <strong>excessive rainfall and hail storms in years 1997-1998 and 1998-1999</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Soybean, Mustard</strong></p>
</div>


        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
     <div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={AM1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Ashoknagar District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">16.8057 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.7902 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">90.666 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">33.3468 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">125.8452 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">33.6645 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">122.0508 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">46.0071 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Ashoknagar District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 3459.84 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '66.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 195.62 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '3.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 672.1 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '12.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 38.53 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 96.71 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 12.94 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 269.75 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '5.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.01 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={AM2} alt="LULC Classification Map" className="water-map-image" />
  </div>
</div>


    </div>
    </div>
  );
};

export default Ashok;