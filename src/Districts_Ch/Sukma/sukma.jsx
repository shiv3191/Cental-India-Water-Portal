import React from 'react';
import './sukma.css';
import Indoreimg from './SUKMA1.png';
import Indoreimg1 from './Sukma2.png';
import Indoreimg2 from './Sukma3.png';
import picture1 from './sukma4.png';
import picture2 from './sukma5.png';

const Sukma= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Sukma Bilaigarh District</h1>
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
  <p>• The district is having an area <strong>5800.94 sq.km</strong> and lies mainly in the <strong>Indravati River basin (Godavari basin)</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>50,965</strong> and <strong>13,926</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1359 mm</strong> and <strong>≈39 °C & ≈10 °C</strong>.</p>

  <p>• District climate: <strong>Humid tropical forest belt — hot summers (~39 °C), cool winters (~10 °C), rainfall ≈1359 mm</strong>.</p>

  <p>• The district is drained mainly by the <strong>Indravati River</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Millets, Pulses</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Sukma" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Sukma District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">9.14 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.75 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">7.60 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">7.93 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">13.25 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">7.52 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">18.83 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.87 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Sukma" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Sukma" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Sukma District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 3602.04 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '62.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 58.37 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1096.27 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '18.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 684.28 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '11.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 7.53 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 7.56 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 22.65 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.05 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Sukma" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Sukma;