import React from 'react';
import './vidisha.css';
import Indoreimg from './VIDISHA1.png';
import Indoreimg1 from './Vidisha2.png';
import Indoreimg2 from './Vidisha3.png';
import picture1 from './vidisha4.png';
import picture2 from './vidisha5.png';

const Vidisha= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Vidisha District</h1>
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
  <p>• The district is having an area <strong>8035.13 sq.km</strong> and lies mainly in the <strong>Betwa / Halali basin (part of Ganga basin)</strong>.</p>
  
  <p>• The total population of the district is <strong>11,19,257</strong> out of which the Scheduled Caste population is <strong>3,39,618</strong>.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈800–1000 mm</strong> and <strong>≈40–44 °C & ≈8–12 °C</strong>.</p>
  
  <p>• District climate: <strong>Subtropical / semi-arid to sub-humid — hot summers (≈40–44 °C), cool winters (≈8–12 °C), rainfall ≈800–1000 mm</strong>.</p>
  
  <p>• The district is drained mainly by the rivers <strong>Betwa and Halali</strong>.</p>
  
  <p>• District has following major dams and reservoirs: <strong>Halali Dam (Samrat Ashok Sagar, shared)</strong>.</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Soybean</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Vidisha" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Vidisha District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">17.53 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">13.50 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">27.10 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">11.74 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">57.45 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.07 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">87.31 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">21.99 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Vidisha" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Vidisha" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Vidisha District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 6018.38 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '74.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 448.34 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '5.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 595.95 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '7.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 113.26 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 75.36 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 50.54 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 11.63 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.01 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Vidisha" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Vidisha;