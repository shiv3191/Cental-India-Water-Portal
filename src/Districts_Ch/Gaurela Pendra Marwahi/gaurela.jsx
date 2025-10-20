import React from 'react';
import './gaurela.css';
import Indoreimg from './GAURELA PENDRA MARWAHI1.png';
import Indoreimg1 from './Gaurela Pendra Marwahi2.png';
import Indoreimg2 from './Gaurela Pendra Marwahi3.png';
import picture1 from './gaurela4.png';
import picture2 from './gaurela5.png';

const GaurelaPendraMarwahi= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Gaurela Pendra Marwahi District</h1>
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
  <p>• The district is having an area <strong>2173.58 sq.km</strong> and lies mainly in the <strong>Mand River (Mahanadi basin)</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>32,285</strong> and <strong>3,04,135</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1150 mm</strong> and <strong>≈37 °C & ≈7 °C</strong>.</p>

  <p>• District climate: <strong>Cool plateau climate — mild summers (36–37 °C), cold winters (7–8 °C), rainfall ≈1150 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Mand</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Khudia Dam</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Pulses</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Gaurela-Pendra-Marwahi" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Gaurela Pendra Marwahi District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">4.51 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">0.56 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">3.75 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">0.50 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">8.93 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.21 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">11.95 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.03 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Gaurela-Pendra-Marwahi" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Gaurela-Pendra-Marwahi" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Gaurela Pendra Marwahi District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 734.73 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '42.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 3.66 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 387.9 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '22.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 842.37 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '47.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 11.29 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 4.81 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 9.52 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Gaurela-Pendra-Marwahi" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default GaurelaPendraMarwahi;