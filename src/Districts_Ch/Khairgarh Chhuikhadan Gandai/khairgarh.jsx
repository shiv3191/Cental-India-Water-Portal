import React from 'react';
import './khairgarh.css';
import Indoreimg from './KHAIRGARH CHHUIKHADAN GANDAI1.png';
import Indoreimg1 from './Khaigarh Chhuikhadan Gandai2.png';
import Indoreimg2 from './Khairgar Chhuikhadan Gandai3.png';
import picture1 from './khair4.png';
import picture2 from './khair5.png';

const Khairgarh= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Khairgarh District</h1>
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
  <p>• The district is having an area <strong>2506.77 sq.km</strong> and lies mainly in the <strong>Arpa River tributaries basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>42,935</strong> and <strong>3,25,509</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1105 mm</strong> and <strong>≈42 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Sub-humid climate — summers (~42 °C), winters (~11 °C), rainfall ≈1105 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Arpa River tributaries</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Kharkhara feeder dams</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Oilseeds</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Khairgarh-Chhuikhadan-Gandai" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Khairgarh Chhuikhadan Gandai District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">15.79 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">7.15 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">12.77 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.91 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">22.76 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">6.93 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">25.27 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.64 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Khairgarh-Chhuikhadan-Gandai" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Khairgarh-Chhuikhadan-Gandai" />
    </div>
  </div>
</div>


      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Khairgarh Chhuikhadan Gandai District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 848.41 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '34.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 8.46 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 226.44 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '9.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1187.98 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '47.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 19.81 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 5.47 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 23.79 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.0%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Khairgarh-Chhuikhadan-Gandai" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Khairgarh;