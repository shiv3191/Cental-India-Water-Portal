import React from 'react';
import './surguja.css';
import Indoreimg from './SURGUJA1.png';
import Indoreimg1 from './Surguja2.png';
import Indoreimg2 from './Surgjua3.png';
import picture1 from './surg4.png';
import picture2 from './surg5.png';

const Surguja= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Surguja District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="district-section"s>
  <h2 className="section-title">Basic District Information</h2>
<div className="basic-info">
  <p>• The district is having an area <strong>4371.64 sq.km</strong> and lies mainly in the 
     <strong>Gopad and Rihand River tributaries basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows 
     <strong>21,16,965</strong> and <strong>2,42,921</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1345 mm</strong> and <strong>≈36 °C & ≈6–7 °C</strong>.</p>

  <p>• District climate: <strong>Cool plateau–hilly climate — mild summers (~36 °C), cold winters (~6–7 °C), rainfall ≈1345 mm</strong>.</p>

  <p>• The district is drained mainly by the <strong>Gopad River and Rihand River tributaries</strong>.</p>

  <p>• Major irrigation projects include <strong>Lotan Dam, Ramgarh Dam, and Kanhar Dam</strong>.</p>

  <p>• The major crops grown in the district are as follows: 
     <strong>Paddy, Maize, Millets, Pulses</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Surguja" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Surguja District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">21.09 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.08 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">22.80 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">7.89 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">18.88 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">11.85 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">24.85 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">12.34 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Surguja" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Surguja" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Surguja District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1608.42 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '36.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 1.58 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.04%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 630.35 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '14.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1686.73 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '38.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 26.59 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 24.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 29.01 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Surguja" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Surguja;