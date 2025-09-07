import React from 'react';
import './Indor.css';
import Indoreimg from './INDORE.png';
import Indoreimg1 from './Indore1.png';
import Indoreimg2 from './Indore2.png';
import picture1 from './Picture1-Indore.png';
import picture2 from './Picture2-Indore.png';

const Indore= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Indore District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

          <div className="basic-info">
            <p>• The district is having an area <strong>3917.88 sq.km</strong> and has following major rivers <strong>Chambal, in the west, and Kshipra, a tributary of Chambal River.</strong></p>
            
            <p>• The rural and urban population of the district are as follows <strong>159400</strong> and <strong>490140</strong> respectively.</p>
            
            <p>• The mean precipitation,  Maximum and Minimum Temperature of the district is <strong>88.5 mm/month</strong> and <strong>44.24°C & 5.293°C</strong> </p>
            
            <p>• District climate: <strong>Moderately extreme climate, characterized by a hot days during summer (peak summer daytime temperature reaches upto 45 C) and cold nights during winters (temperature drops upto 10 C).</strong></p>
            
            <p>• District has following major dams and reservoirs are <strong>Yashwanth Sagar Dam and Reservoir near Indore city</strong></p>
            
            <p>• The district lies partly in the <strong>Yamuna sub basin</strong> (75%) and <strong>partly in the Narmada basin</strong> (25%).</p>
            
            <p>• District observed a <strong>drought in 2000-2001</strong> and <strong>excessive rainfall and hail storms in years 1997-1998 and 1998-1999</strong>.</p>
            
            <p>• The major crops grown in the district are as follows: <strong>Wheat, Soyabeam, gram</strong></p>
          </div>
        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
      <div className="district-section">
        <h2 className="section-title">Decadal Water Level Changes</h2>
        <div className="water-analysis-section">
          <img src={Indoreimg1 }alt="Water Level Changes Map" className="water-map-image" />
          <div className="analysis-info">
            <h4 className="analysis-title">Water Area Analysis - Indore District</h4>
            <div className="analysis-description">
              <div className="year-section">
                <div className="year-title">1991</div>
                <div className="water-data">
                  <div className="water-item">
                    <span className="water-label">Seasonal Water Area:</span>
                    <span className="water-value">19.65 km²</span>
                  </div>
                  <div className="water-item">
                    <span className="water-label">Permanent Water Area:</span>
                    <span className="water-value">4.34 km²</span>
                  </div>
                </div>
              </div>

              <div className="year-section">
                <div className="year-title">2001</div>
                <div className="water-data">
                  <div className="water-item">
                    <span className="water-label">Seasonal Water Area:</span>
                    <span className="water-value">7.39 km²</span>
                  </div>
                  <div className="water-item">
                    <span className="water-label">Permanent Water Area:</span>
                    <span className="water-value">2.52 km²</span>
                  </div>
                </div>
              </div>

              <div className="year-section">
                <div className="year-title">2011</div>
                <div className="water-data">
                  <div className="water-item">
                    <span className="water-label">Seasonal Water Area:</span>
                    <span className="water-value">36.74 km²</span>
                  </div>
                  <div className="water-item">
                    <span className="water-label">Permanent Water Area:</span>
                    <span className="water-value">4.02 km²</span>
                  </div>
                </div>
              </div>

              <div className="year-section">
                <div className="year-title">2021</div>
                <div className="water-data">
                  <div className="water-item">
                    <span className="water-label">Seasonal Water Area:</span>
                    <span className="water-value">41.52 km²</span>
                  </div>
                  <div className="water-item">
                    <span className="water-label">Permanent Water Area:</span>
                    <span className="water-value">3.76 km²</span>
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
            <h4 className="lulc-title">LULC Distribution - Indore District (2021)</h4>
            
            <div className="lulc-grid">
              <div className="lulc-category">
                <div className="lulc-category-title cropland">Cropland - 2707.62 km²</div>
                <div className="lulc-bar">
                  <div className="lulc-fill cropland" style={{width: '69.4%'}}></div>
                </div>
              </div>
              
              <div className="lulc-category">
                <div className="lulc-category-title tree-cover">Tree Cover - 516.98 km²</div>
                <div className="lulc-bar">
                  <div className="lulc-fill tree-cover" style={{width: '13.3%'}}></div>
                </div>
              </div>
              
              <div className="lulc-category">
                <div className="lulc-category-title grassland">Grassland - 402.41 km²</div>
                <div className="lulc-bar">
                  <div className="lulc-fill grassland" style={{width: '10.3%'}}></div>
                </div>
              </div>
              
              <div className="lulc-category">
                <div className="lulc-category-title built-up">Built-up Area - 234.43 km²</div>
                <div className="lulc-bar">
                  <div className="lulc-fill built-up" style={{width: '6.0%'}}></div>
                </div>
              </div>
              
              <div className="lulc-category">
                <div className="lulc-category-title water-bodies">Permanent Water Bodies - 22.21 km²</div>
                <div className="lulc-bar">
                  <div className="lulc-fill water-bodies" style={{width: '0.6%'}}></div>
                </div>
              </div>
              
              <div className="lulc-category">
                <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 15.89 km²</div>
                <div className="lulc-bar">
                  <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
                </div>
              </div>
              
              <div className="lulc-category">
                <div className="lulc-category-title shrubland">Shrubland - 6.11 km²</div>
                <div className="lulc-bar">
                  <div className="lulc-fill shrubland" style={{width: '0.16%'}}></div>
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
          <img src={Indoreimg2} alt="LULC Classification Map" className="water-map-image" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Indore;