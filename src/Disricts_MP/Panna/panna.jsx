import React from 'react';
import './panna.css';
import Indoreimg from './PANNA1.png';
import Indoreimg1 from './Panna2.png';
import Indoreimg2 from './Panna3.png';
import picture1 from './pan1.png';
import picture2 from './pan2.png';

const Panna= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Panna District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>7815.67 sq.km</strong> and lies in the <strong>Ken basin (tributaries of Ken, part of Ganga basin)</strong></p>
  
  <p>• The total population of the district is <strong>8,91,185</strong> out of which the Scheduled Caste population is <strong>1,25,335</strong>.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>800–1000 mm</strong> and <strong>≈42–45 °C & ≈6–10 °C</strong></p>
  
  <p>• District climate: <strong>Semi-arid to sub-humid (Bundelkhand fringe) — hot summers (≈42–45 °C), cool winters (≈6–10 °C), rainfall ≈800–1000 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• District has following major dams and reservoirs: <strong>Gangau Dam, Daudhan Dam (Ken–Betwa Link Project)</strong></p>
  
  <p>• The major crops grown in the district are as follows: <strong>Paddy, Pulses</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Panna" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Panna District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">22.86 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">10.47 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">37.89 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.34 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">52.87 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.29 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">62.47 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">13.27 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Panna" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Panna" />
    </div>
  </div>
</div>


      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Panna District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 3322.49 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '42.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 904.4 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '11.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 2231.07 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '28.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 506.88 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '6.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 46.38 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 22.24 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 51.47 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.7%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Panna" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Panna;