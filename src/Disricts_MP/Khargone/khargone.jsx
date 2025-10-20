import React from 'react';
import './khargone.css';
import Indoreimg from './KHARGONE1.png';
import Indoreimg1 from './Khargone2.png';
import Indoreimg2 from './Khargone3.png';
import picture1 from './khar1.png';
import picture2 from './khar2.png';

const Khargone= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Khargone District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>8678.3202 sq.km</strong> and has following major rivers <strong>Narmada, Kunda, Veda</strong></p>
  
  <p>• Major dams/projects in the district include <strong>Maheshwar Dam (Narmada), Omkareshwar beneficiary</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>1574190</strong> and <strong>298856</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>700–900 mm</strong> and <strong>≈43–46 °C & ≈8–12 °C</strong></p>
  
  <p>• District climate: <strong>Very hot semi-arid (Nimar plains) — summers (≈43–46 °C), cool winters (≈8–12 °C), rainfall ≈700–900 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Cotton</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Khargone District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">34.4808 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">37.9944 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">35.3538 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">38.1438 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">64.6209 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">42.363 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">73.2978 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">40.5486 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2" />
    </div>
  </div>
</div>


      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Khargone District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 4834.99 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '55.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 695.68 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '8.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 2207.59 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '25.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 102.54 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 86.39 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 33.05 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 51.7 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.6%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Khargone" className="water-map-image" />
  </div>
</div>


    </div>
    </div>
  );
};

export default Khargone;