import React from 'react';
import './sakti.css';
import Indoreimg from './SAKTI1.png';
import Indoreimg1 from './Sakti2.png';
import Indoreimg2 from './Sakti3.png';
import picture1 from './sakti4.png';
import picture2 from './sakti5.png';

const Sakti= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Sakti District</h1>
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
  <p>• The district covers an area of <strong>1772.00 sq.km</strong> and lies mainly in the <strong>Hasdeo River basin</strong> with minor influence of the Kelo tributary.</p>

  <p>• The rural and urban population of the district are as follows: <strong>1,45,729</strong> (rural) and <strong>30,748</strong> (urban).</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district are 
     <strong>≈1190 mm</strong>, <strong>≈41 °C</strong> (summer), and <strong>≈11 °C</strong> (winter).</p>

  <p>• District climate: <strong>Sub-humid climate — hot summers (~41 °C), cool winters (~11 °C), rainfall ≈1190 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Hasdeo and its tributaries, including Kelo</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are: <strong>Paddy, Maize, Pulses</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Sakti" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Sakti District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">33.99 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.47 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">39.94 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">4.81 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">45.06 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">4.16 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">45.85 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">7.58 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Sakti" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Sakti" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Sakti District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 262.72 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '14.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 0.90 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 124.22 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '7.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1136.93 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '64.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 42.81 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '2.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 26.52 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '1.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 42.15 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '2.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.02 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Sakti" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Sakti;