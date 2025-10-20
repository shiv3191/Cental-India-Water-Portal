import React from 'react';
import './sarangarh.css';
import Indoreimg from './SARANGARH BILAIGARH1.png';
import Indoreimg1 from './Sarangarh Bilaigarh2.png';
import Indoreimg2 from './Sarangarh Bilaigarh3.png';
import picture1 from './saran4.png';
import picture2 from './saran5.png';

const Sarangarh= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Sarangarh Bilaigarh District</h1>
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
  <p>• The district is having an area <strong>2375.34 sq.km</strong> and lies mainly in the <strong>Mahanadi River basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>2,14,649</strong> and <strong>14,954</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1160 mm</strong> and <strong>≈41 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Sub-humid climate — hot summers (~41 °C), cool winters (~11 °C), rainfall ≈1160 mm</strong>.</p>

  <p>• The district is drained mainly by the <strong>Mahanadi River tributaries and Jonk River</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Pulses, Oilseeds</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Sarangarh-Bilaigarh" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Sarangarh Bilaigarh District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">58.68 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">14.69 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">66.10 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">12.74 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">70.58 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">10.70 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">69.77 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">17.10 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Sarangarh-Bilaigarh" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Sarangarh-Bilaigarh" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Sarangarh Bilaigarh District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 575.54 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '26.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 44.10 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '2.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 289.63 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '13.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1165.85 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '53.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 37.12 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 23.51 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '1.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 62.26 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '2.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.04 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>

    <img src={Indoreimg2} alt="LULC Classification Map - Sarangarh-Bilaigarh" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Sarangarh;