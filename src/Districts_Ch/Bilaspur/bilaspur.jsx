import React from 'react';
import './bilaspur.css';
import Indoreimg from './BILASPUR1.png';
import Indoreimg1 from './Bilaspur2.png';
import Indoreimg2 from './Bilaspur3.png';
import picture1 from './bilaspur4.png';
import picture2 from './bilaspur5.png';

const Bilaspur= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Bilaspur District</h1>
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
  <p>• The district is having an area <strong>3845.68 sq.km</strong> and lies mainly in the <strong>Arpa River (tributary of Seonath) basin</strong>.</p>

  <p>• The total population of the district is <strong>19,83,759</strong> out of which the Scheduled Caste population is <strong>6,79,870</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1195 mm</strong> and <strong>≈44 °C & ≈12 °C</strong>.</p>

  <p>• District climate: <strong>Hot plain climate — intense summers (up to 44 °C), mild winters (~12 °C), rainfall ≈1195 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Arpa (tributary of Seonath)</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Khutaghat Dam, Hasdeo Barrage</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Oilseeds, Vegetables</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Bilaspur" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Bilaspur District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">52.64 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">21.30 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">61.81 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">14.37 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">62.32 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">26.60 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">87.53 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">23.86 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Bilaspur" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Bilaspur" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Bilaspur District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2088.00 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '58.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 813.64 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '22.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 405.04 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '11.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 115.66 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '3.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 90.85 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '2.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 25.92 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 4.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.08 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Bilaspur" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Bilaspur;