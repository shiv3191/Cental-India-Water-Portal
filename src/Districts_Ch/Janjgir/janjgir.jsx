import React from 'react';
import './janjgir.css';
import Indoreimg from './JANJGIR CHAMPA.png';
import Indoreimg1 from './Janjgir2.png';
import Indoreimg2 from './Janjgir3.png';
import picture1 from './janjgir4.png';
import picture2 from './janjgir5.png';

const Janjgir= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Janjgir District</h1>
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
  <p>• The district is having an area <strong>2412.02 sq.km</strong> and lies mainly in the <strong>Hasdeo River (Mahanadi tributary) and Seonath basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>13,94,646</strong> and <strong>2,25,061</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1190 mm</strong> and <strong>≈43 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Sub-humid climate — summers (~43 °C), winters (~11 °C), rainfall ≈1190 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Hasdeo and Seonath</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Hasdeo Bango Dam</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Sugarcane, Maize</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Janjgir-Champa" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Janjgir Champa District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">48.20 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">12.78 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">43.81 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">12.60 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">50.43 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.65 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">59.43 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">8.44 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Janjgir-Champa" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Janjgir-Champa" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Janjgir Champa District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 269.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '11.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 7.32 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 226.36 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '9.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1574.19 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '65.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 68.77 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '2.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 27.44 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '1.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 52.38 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '2.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.03 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Janjgir-Champa" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Janjgir;