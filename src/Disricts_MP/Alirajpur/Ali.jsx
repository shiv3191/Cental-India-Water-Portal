import React from 'react';
import './Ali.css';
import AM from './ALIRAJPUR.jpg';
import AM1 from './Alirajpur (1).jpg';
import AM2 from './Alirajpur (2).jpg';
import picture1 from './Picture1-Ali.png';
import picture2 from './Picture2-Ali.png';

const Ali= () => {
  return (
    <div className='ali-body'>

    <div className="container">
      <div className="header">
        <h1>Alirajpur District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={AM} alt="Indore District Location Map" className="district-image" />

       <div className="basic-info">
  <p>• The district is having an area <strong>3618.5436 sq.km</strong> and has following major rivers <strong>Narmada basin</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>671925</strong> and <strong>57074</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>88.5 mm/month</strong> and <strong>44.24 °C & 5.293 °C</strong></p>
  
  <p>• District climate: <strong>Tropical monsoon / humid highlands — hot humid summers (35–40 °C), mild winters (12–16 °C), rainfall 1100–1400 mm</strong></p>
  
  <p>• District has following major dams and reservoirs are <strong>Sardar Sarovar Project (beneficiary)</strong></p>
  
  <p>• The district lies partly in the <strong>Yamuna sub basin</strong> (75%) and <strong>partly in the Narmada basin</strong> (25%).</p>
  
  <p>• District observed a <strong>drought in 2000-2001</strong> and <strong>excessive rainfall and hail storms in years 1997-1998 and 1998-1999</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
     <div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={AM1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Alirajpur District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">10.1574 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">4.968 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">8.8263 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.6345 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">17.8857 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">23.9958 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">31.9167 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">25.9074 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Alirajpur District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1175.06 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '45.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 634.91 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '24.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 431.65 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '16.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 35.70 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 36.34 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 11.34 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 6.61 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.3%'}}></div>
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
    <img src={AM2} alt="LULC Classification Map" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Ali;