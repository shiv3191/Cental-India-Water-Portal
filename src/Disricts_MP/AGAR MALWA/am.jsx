import React from 'react';
import './am.css';
import AM from './AGAR_MALWA.png';
import AM1 from './Agar Malwa (1).png';
import AM2 from './Agar Malwa (2).png';
import picture1 from './Picture1-am.png';
import picture2 from './Picture2-am.png';

const am= () => {
  return (
    <div className='am-body'>

    <div className="container">
      <div className="header">
        <h1>Agar Malwa District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={AM} alt="Indore District Location Map" className="district-image" />

        <div className="basic-info">
  <p>• The district is having an area <strong>3001.5531 sq.km</strong> and has following major rivers <strong>Kali Sindh River, Parbati River</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>117329</strong> and <strong>453949</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>88.5 mm/month</strong> and <strong>44.24 °C & 5.293 °C</strong></p>
  
  <p>• District climate: <strong>Semi-arid / Malwa plateau — very hot summers (42–45 °C), cool winters (8–12 °C), rainfall 700–900 mm</strong></p>
  
  <p>• District has following major dams and reservoirs are <strong>Kundalia Dam</strong></p>
  
  <p>• The district lies partly in the <strong>Yamuna sub basin</strong> (75%) and <strong>partly in the Narmada basin</strong> (25%).</p>
  
  <p>• District observed a <strong>drought in 2000-2001</strong> and <strong>excessive rainfall and hail storms in years 1997-1998 and 1998-1999</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Soybean, Wheat, Gram, Mustard</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
      <div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={AM1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Agar Malwa District</h4>
      <div className="analysis-description">
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">17.5968 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.8368 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">10.6308 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.331 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">36.2061 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.5731 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">61.0569 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">10.854 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Agar Malwa District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1936.13 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '70.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 181.94 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '6.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 512.94 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '18.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 36.71 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 39.44 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 20.91 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 5.20 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.2%'}}></div>
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

export default am;