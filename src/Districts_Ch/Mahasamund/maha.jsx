import React from 'react';
import './maha.css';
import Indoreimg from './MAHASAMUND1.png';
import Indoreimg1 from './Mahasamund2.png';
import Indoreimg2 from './Mahasamund3.png';
import picture1 from './maha4.png';
import picture2 from './maha5.png';

const Mahasamund= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Mahasamund District</h1>
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
  <p>• The district is having an area <strong>5122.66 sq.km</strong> and lies mainly in the <strong>Jonk River and Mahanadi tributaries basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>9,12,602</strong> and <strong>1,20,152</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1159 mm</strong> and <strong>≈42 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Sub-humid plains climate — very hot summers (~42 °C), cool winters (~11 °C), rainfall ≈1159 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Jonk and Mahanadi tributaries</strong>.</p>

  <p>• District has following major dams and canals: <strong>Sondur feeder dams</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Oilseeds, Vegetables</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Mahasamund" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Mahasamund District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">71.42 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">17.79 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">69.81 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">12.72 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">83.66 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">19.57 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">83.64 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">17.25 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Mahasamund" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Mahasamund" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Mahasamund District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1129.25 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '22.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 46.34 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 585.91 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '11.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2828.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '55.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 70.87 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 26.72 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 64.77 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Mahasamund" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Mahasamund;