import React from 'react';
import './Indor.css';
import Indoreimg from './INDORE.png';
import Indoreimg1 from './Indore1.png';
import Indoreimg2 from './Indore2.png';
import picture1 from './Picture1-Indore.png';
import picture2 from './Picture2-Indore.png';

const Indore = () => {
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
              <p>• Indore district covers an area of about <strong>3,917.88 square kilometers</strong>, located in the western part of Madhya Pradesh within the Malwa Plateau.</p>
              
              <p>• The <strong>Yashwant Sagar Dam</strong>, situated near Indore city, serves as the major surface water storage structure supporting irrigation and domestic supply.</p>
              
              <p>• The district lies partly in the <strong>Yamuna sub-basin (about 75%)</strong> and partly in the <strong>Narmada basin (around 25%)</strong>.</p>
              
              <p>• The population includes around <strong>2427709 urban residents</strong> and <strong>848988 rural residents</strong>.</p>
              
              <p>• Agriculture is one of the primary economic activities in the district. The main crops grown are <strong>wheat, soybean, and gram</strong>, which depend heavily on groundwater irrigation.</p>
            </div>
          </div>
        </div>

        {/* Hydrology, Climate & Groundwater Section */}
        <div className="district-section">
          <h2 className="section-title hydrology-title">Hydrology, Climate & Groundwater</h2>
          
          <div className="hydrology-content">
            {/* Geography & Geology */}
            <h3 className="subsection-title">Geography & Geology</h3>
            <p>Indore lies at the center of the Malwa Plateau, with elevations ranging from <strong>487 to 881 meters above sea level</strong>. The district's surface gradually slopes toward the north, naturally directing water flow in that direction.</p>
            
            <p>The underlying geology consists mainly of <strong>Deccan Trap Basalt</strong>, a volcanic rock formation characterized by weathered, vesicular, and fractured layers that act as natural aquifers. Along the riverbanks, sandy and gravelly alluvial deposits form small but productive groundwater zones.</p>

            {/* River Systems */}
            <h3 className="subsection-title">River Systems</h3>
            <p>Three seasonal rivers <strong>Kshipra, Khan, and Gambhir</strong> flow from south to north, eventually joining the Chambal River system. The Khan River passes through Indore city and carries both monsoon runoff and urban wastewater. These rivers flow actively during the monsoon but nearly dry up in the summer months, offering limited groundwater recharge.</p>

            {/* Climate */}
            <h3 className="subsection-title">Climate</h3>
            <p>Indore experiences a moderately extreme climate, characterized by hot summers and cool winters. The average annual rainfall is around <strong>920 mm</strong>, with an average monthly precipitation of <strong>88.5 mm</strong>. Temperatures range between <strong>5.3°C in winter</strong> and <strong>44.2°C in summer</strong>.</p>
            
            <p>The climate is semi-arid monsoon type, with four well-marked seasons:</p>
            
            <ul className="simple-list">
              <li><strong>Winter (Dec–Feb):</strong> Cool and dry, with mild daytime temperatures and cold nights.</li>
              <li><strong>Summer (Mar–Jun):</strong> Hot and dry, with maximum temperatures reaching around 42°C.</li>
              <li><strong>Monsoon (Jun–Oct):</strong> Humid, with heavy rainfall that provides most of the annual precipitation.</li>
              <li><strong>Post-Monsoon (Oct–Nov):</strong> Short retreating period with light rain.</li>
            </ul>
            
            <p>Average humidity ranges between <strong>53% and 66%</strong>, highest in August.</p>
            
            <p>The region occasionally faces drought conditions severe droughts occur roughly once in 50 years, and moderate ones about once every 7 years. Periods of excessive rainfall also affect agriculture and water availability.</p>

            {/* Groundwater Resources */}
            <h3 className="subsection-title">Groundwater Resources</h3>
            <p>Although Indore receives about 920 mm of rainfall annually, only around <strong>10% of it infiltrates</strong> into the ground to recharge aquifers due to the hard basaltic rock and steep slopes. The rest flows away as surface runoff.</p>
            
            <p>Groundwater serves as the primary source of water for domestic and agricultural use, fulfilling nearly <strong>97% of irrigation demand</strong>. The district relies on more than <strong>54,000 tube wells</strong> and <strong>4,500 dug wells</strong> for water supply.</p>
            
            <p><strong>Typical groundwater levels are:</strong></p>
            
            <ul className="simple-list">
              <li><strong>Pre-monsoon:</strong> 15–20 meters below ground level (some areas exceed 30 meters)</li>
              <li><strong>Post-monsoon:</strong> 8–12 meters below ground level</li>
              <li><strong>Annual decline rate:</strong> Around 0.5–0.9 meters per year</li>
            </ul>

            {/* Key Groundwater Concerns */}
            <h3 className="subsection-title">Key Groundwater Concerns</h3>
            <p><strong>Over-Extraction:</strong> Groundwater withdrawal exceeds natural recharge by about <strong>1.5 times</strong>, placing Indore among the most over-exploited areas in the district.</p>
            
            <p><strong>Declining Water Levels:</strong> Continuous pumping has caused groundwater levels to fall below <strong>18 meters</strong> in several locations, making shallow wells dry and increasing pumping costs.</p>
            
            <p><strong>Water Quality Degradation:</strong></p>
            <ul className="simple-list">
              <li><strong>Fluoride:</strong> Up to 1.93 mg/L, exceeding the safe limit of 1.5 mg/L.</li>
              <li><strong>Nitrate:</strong> Up to 135 mg/L, mainly from fertilizers and sewage infiltration.</li>
              <li><strong>Hardness:</strong> Up to 1,015 mg/L, affecting domestic use.</li>
              <li><strong>Salinity:</strong> Up to 3,500 µS/cm, reducing suitability for irrigation.</li>
            </ul>
            
            <p>The major causes of contamination include sewage leakage, industrial effluents, agricultural runoff, and natural mineral leaching from basaltic rock layers.</p>
          </div>
        </div>

        {/* Enhanced Water Analysis Section */}
        <div className="district-section">
          <h2 className="section-title">Decadal Water Level Changes</h2>
          <div className="water-analysis-section">
            <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
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
                  <div className="lulc-category-title built-up">Built-up - 234.43 km²</div>
                  <div className="lulc-bar">
                    <div className="lulc-fill built-up" style={{width: '6.0%'}}></div>
                  </div>
                </div>
                
                <div className="lulc-category">
                  <div className="lulc-category-title water-bodies">Water Bodies - 22.21 km²</div>
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
