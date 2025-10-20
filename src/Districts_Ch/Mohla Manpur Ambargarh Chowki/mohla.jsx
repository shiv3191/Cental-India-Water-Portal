import React from 'react';
import './mohla.css';
import Indoreimg from './MOHLA MANPUR AMBAGARH CHOWKI1.png';
import Indoreimg1 from './Mohla Manpur Ambargarh Chowki2.png';
import Indoreimg2 from './Mohla Manpur Ambagarh Chowki3.png';
import picture1 from './mohla4.png';
import picture2 from './mohla5.png';

const Mohla= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Mohla District</h1>
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
  <p>• The district is having an area <strong>2671.36 sq.km</strong> and lies mainly in the <strong>Wainganga river basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>9,889</strong> and <strong>2,74,058</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1100 mm</strong> and <strong>≈39 °C & ≈10 °C</strong>.</p>

  <p>• District climate: <strong>Humid hilly climate — hot summers (~39 °C), cool winters (~10 °C), rainfall ≈1100 mm</strong>.</p>

  <p>• The district is drained mainly by the <strong>Wainganga river tributaries</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Seonath irrigation barrages</strong>.</p>

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
    <img src={Indoreimg1} alt="Water Level Changes Map - Mohla-Manpur-Ambagarh Chowki" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Mohla Manpur Ambagarh Chowki District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">8.93 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.01 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">9.60 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.89 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">17.78 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">8.23 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">20.55 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.04 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Mohla-Manpur-Ambagarh Chowki" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Mohla-Manpur-Ambagarh Chowki" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Mohla Manpur Ambagarh Chowki District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1208.37 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '45.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 12.30 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 360.58 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '13.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 873.45 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '32.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 9.91 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 8.06 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 16.70 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.01 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Mohla-Manpur-Ambagarh Chowki" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Mohla;