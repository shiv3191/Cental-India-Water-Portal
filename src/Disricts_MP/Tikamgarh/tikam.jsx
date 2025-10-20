import React from 'react';
import './tikam.css';
import Indoreimg from './TIKAMGARH1.png';
import Indoreimg1 from './Tikamgarh2.png';
import Indoreimg2 from './Tikamgarh3.png';
import picture1 from './tikam4.png';
import picture2 from './tikam5.png';

const Tikamgarh= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Tikamgarh District</h1>
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
  <p>• The district is having an area <strong>6341.51 sq.km</strong> and lies in the <strong>floodplain of Son and Tons rivers</strong>.</p>

  <p>• The total population of the district is <strong>9,51,487</strong> out of which the Scheduled Caste population is <strong>2,26,786</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1000–1300 mm</strong> and <strong>≈38–42 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Tropical monsoon / plateau — hot summers (≈38–42 °C), mild winters (≈8–12 °C), rainfall ≈1000–1300 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Son and Tons</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat, Maize, Oilseeds</strong>.</p>
</div>



</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Singrauli" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Singrauli District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">111.18 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">42.22 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">101.56 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">47.09 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">117.38 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">35.21 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">114.18 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">46.17 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Singrauli" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Singrauli" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Singrauli District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2251.15 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '35.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1570.81 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '24.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1589.14 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '25.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 70.22 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 122.71 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 120.41 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '1.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 33.14 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.5%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Singrauli" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Tikamgarh;