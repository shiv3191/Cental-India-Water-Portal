import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FaWater, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './mpdistricts.css';

const MPDistricts = () => {
  const districts = [
    'Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat',
    'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur',
    'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas',
    'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda',
    'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni',
    'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena',
    'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh',
    'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore',
    'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri',
    'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria',
    'Vidisha'
  ];

  // State for search and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('a-z');

  // Generate random water body counts for demo (consistent for each district)
  const getWaterBodies = (districtName) => {
    // Create a consistent hash for each district name
    let hash = 0;
    for (let i = 0; i < districtName.length; i++) {
      const char = districtName.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % 20 + 5; // Returns 5-24 water bodies
  };

  // Filter and sort districts based on search and sort criteria
  const filteredAndSortedDistricts = useMemo(() => {
    let filtered = districts.filter(district =>
      district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered districts
    switch (sortBy) {
      case 'a-z':
        return filtered.sort((a, b) => a.localeCompare(b));
      case 'z-a':
        return filtered.sort((a, b) => b.localeCompare(a));
      case 'most-water':
        return filtered.sort((a, b) => getWaterBodies(b) - getWaterBodies(a));
      default:
        return filtered;
    }
  }, [districts, searchTerm, sortBy]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle sort selection change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="mp-districts-container">
      {/* Header Section */}
      <header className="districts-header">
        <div className="header-content">
          <div className="header-top-row">
            <Link to="/" className="back-button">
              <IoArrowBack />
              <span>Back to Home</span>
            </Link>
            <div className="title-section">
              <h1 className="page-title">Madhya Pradesh Water Resources</h1>
              <p className="page-subtitle">Comprehensive water data across all districts</p>
            </div>
          </div>
          <div className="stats-container">
            <div className="stat-card">
              <FaMapMarkerAlt className="stat-icon" />
              <div>
                <span className="stat-number">55</span>
                <span className="stat-label">Districts</span>
              </div>
            </div>
            <div className="stat-card">
              <FaWater className="stat-icon" />
              <div>
                <span className="stat-number">156</span>
                <span className="stat-label">Water Bodies</span>
              </div>
            </div>
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div>
                <span className="stat-number">72.6M</span>
                <span className="stat-label">Population</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="districts-main">
        <div className="search-filter">
          <div className="search-section">
            <input 
              type="text" 
              placeholder="Search districts..." 
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <span className="search-results">
                {filteredAndSortedDistricts.length} of {districts.length} districts
              </span>
            )}
          </div>
          <div className="filter-section">
            <select 
              className="filter-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="a-z">Sort A-Z</option>
              <option value="z-a">Sort Z-A</option>
              <option value="most-water">Most Water Bodies</option>
            </select>
          </div>
        </div>

        <div className="districts-grid">
          {filteredAndSortedDistricts.length > 0 ? (
            filteredAndSortedDistricts.map((district, index) => (
              <div key={district} className="district-card">
                <div className="card-header">
                  <div className="district-icon">
                    <span>{district.charAt(0)}</span>
                  </div>
                  <h3 className="district-name">{district}</h3>
                </div>
                <div className="card-stats">
                  <span className="water-stat">
                    <FaWater /> {getWaterBodies(district)} water bodies
                  </span>
                </div>
                <Link to={`/district/${district.toLowerCase().replace(/\s+/g, '-')}`} className="district-button">
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No districts found matching "{searchTerm}"</p>
              <button 
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MPDistricts;