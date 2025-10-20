import React from 'react';
import './raj.css';
import Indoreimg from './RAJNANDGAON1.png';
import Indoreimg1 from './Rajnandgaon.png';
import Indoreimg2 from './Rajnandgaon3.png';
import picture1 from './raj4.png';
import picture2 from './raj5.png';

const Rajnandgaon= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Rajnandgaon District</h1>
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
  <p>• The district is having an area <strong>3512.31 sq.km</strong> and lies mainly in the <strong>Seonath River (Shivnath) and Pairi River basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>12,64,621</strong> and <strong>2,72,512</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1133 mm</strong> and <strong>≈42 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Sub-humid plains climate — hot summers (~42 °C), mild winters (~11 °C), rainfall ≈1133 mm</strong>.</p>

  <p>• The district is drained mainly by the <strong>Seonath (Shivnath) and Pairi Rivers</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Kharkhara Dam, Pairi feeder</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Sugarcane, Oilseeds</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Rajnandgaon" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Rajnandgaon District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">48.46 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">16.17 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">40.42 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">15.48 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">71.53 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">19.19 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">81.13 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">15.97 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Rajnandgaon" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Rajnandgaon" />
    </div>
  </div>
</div>


      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Rajnandgaon District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 729.61 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '21.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 26.70 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 351.96 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '10.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2011.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '59.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 68.91 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '2.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 13.40 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 58.39 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.01 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Rajnandgaon" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Rajnandgaon;