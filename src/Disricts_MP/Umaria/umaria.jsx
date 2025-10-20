import React from 'react';
import './umaria.css';
import Indoreimg from './UMARIA1.png';
import Indoreimg1 from './Umaria2.png';
import Indoreimg2 from './Umaria3.png';
import picture1 from './umaria4.png';
import picture2 from './umaria5.png';

const Umaria= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Umaria District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="district-section">
  <h2 className="section-title">Basic District Information</h2>
<div className="basic-info">
  <p>• The district is having an area <strong>5004.58 sq.km</strong> and lies in the <strong>Narmada / Son fringe</strong>.</p>

  <p>• The total population of the district is <strong>5,34,214</strong> out of which the Scheduled Caste population is <strong>1,10,544</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1100–1400 mm</strong> and <strong>≈34–38 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Tropical monsoon (forest fringe) — hot humid summers (≈34–38 °C), mild winters (≈8–12 °C), rainfall ≈1100–1400 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Narmada and Son (fringe areas)</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Umaria" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Umaria District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">18.25 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.42 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">20.51 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">26.26 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">79.34 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">29.34 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">55.09 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">51.47 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Umaria" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Umaria" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Umaria District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1500.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '30.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1945.56 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '38.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 911.56 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '18.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 26.66 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 81.69 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 12.86 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 87.21 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.7%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Umaria" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Umaria;