import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FaWater, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './cgdistricts.css';

const CGDistricts = () => {
  // Corrected Chhattisgarh Districts Data (28 districts as of 2023)
  const districtsData = [
    { name: 'Balod', waterBodies: 12 },
    { name: 'Baloda Bazar', waterBodies: 8 },
    { name: 'Balrampur', waterBodies: 15 },
    { name: 'Bastar', waterBodies: 22 },
    { name: 'Bemetara', waterBodies: 7 },
    { name: 'Bijapur', waterBodies: 18 },
    { name: 'Bilaspur', waterBodies: 14 },
    { name: 'Dantewada', waterBodies: 16 },
    { name: 'Dhamtari', waterBodies: 9 },
    { name: 'Durg', waterBodies: 11 },
    { name: 'Gariaband', waterBodies: 6 },
    { name: 'Janjgir-Champa', waterBodies: 13 },
    { name: 'Jashpur', waterBodies: 10 },
    { name: 'Kabirdham', waterBodies: 8 },
    { name: 'Kanker', waterBodies: 17 },
    { name: 'Kondagaon', waterBodies: 12 },
    { name: 'Korba', waterBodies: 15 },
    { name: 'Koriya', waterBodies: 9 },
    { name: 'Mahasamund', waterBodies: 7 },
    { name: 'Mungeli', waterBodies: 5 },
    { name: 'Narayanpur', waterBodies: 14 },
    { name: 'Raigarh', waterBodies: 16 },
    { name: 'Raipur', waterBodies: 20 },
    { name: 'Rajnandgaon', waterBodies: 11 },
    { name: 'Sukma', waterBodies: 13 },
    { name: 'Surajpur', waterBodies: 8 },
    { name: 'Surguja', waterBodies: 19 }
  ];

  // State for search and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('a-z');

  // Filter and sort districts based on search and sort criteria
  const filteredAndSortedDistricts = useMemo(() => {
    let filtered = districtsData.filter(district =>
      district.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered districts
    switch (sortBy) {
      case 'a-z':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'z-a':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      case 'most-water':
        return filtered.sort((a, b) => b.waterBodies - a.waterBodies);
      default:
        return filtered;
    }
  }, [districtsData, searchTerm, sortBy]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle sort selection change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Calculate total water bodies
  const totalWaterBodies = districtsData.reduce((total, district) => total + district.waterBodies, 0);

  return (
    <div className="cg-districts-container">
      {/* Header Section */}
      <header className="districts-header">
        <div className="header-content">
          <div className="header-top-row">
            <Link to="/" className="back-button">
              <IoArrowBack />
              <span>Back to Home</span>
            </Link>
            <div className="title-section">
              <h1 className="page-title">Chhattisgarh Water Resources</h1>
              <p className="page-subtitle">Comprehensive water data across all districts</p>
            </div>
          </div>
          <div className="stats-container">
            <div className="stat-card">
              <FaMapMarkerAlt className="stat-icon" />
              <div>
                <span className="stat-number">{districtsData.length}</span>
                <span className="stat-label">Districts</span>
              </div>
            </div>
            <div className="stat-card">
              <FaWater className="stat-icon" />
              <div>
                <span className="stat-number">{totalWaterBodies}</span>
                <span className="stat-label">Water Bodies</span>
              </div>
            </div>
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div>
                <span className="stat-number">29.4M</span>
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
                {filteredAndSortedDistricts.length} of {districtsData.length} districts
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
              <div key={index} className="district-card">
                <div className="card-header">
                  <div className="district-icon">
                    <span>{district.name.charAt(0)}</span>
                  </div>
                  <h3 className="district-name">{district.name}</h3>
                </div>
                <div className="card-stats">
                  <span className="water-stat">
                    <FaWater /> {district.waterBodies} water bodies
                  </span>
                </div>
                <Link to={`/district/${district.name.toLowerCase().replace(/\s+/g, '-')}`} className="district-button">
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

export default CGDistricts;