import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.PNG';
import Background from '../assets/background.jpg';
import Background1 from '../assets/background1.jpg';
import Background2 from '../assets/background2.jpg';
import Background3 from '../assets/background3.jpg';
import Background4 from '../assets/background4.jpg';
import Background5 from '../assets/background5.jpg';
import Background6 from '../assets/background6.jpg';
import Background7 from '../assets/background7.jpg';
import Background8 from '../assets/background8.jpg';
import Background9 from '../assets/background9.jpg';
import Background10 from '../assets/background10.jpg';

function Home() {
  const backgroundImages = [
    Background,
    Background1,
    Background2,
    Background3,
    Background4,
    Background5,
    Background6,
    Background7,
    Background8,
    Background9,
    Background10,
  ];

  const [currentBackground, setCurrentBackground] = useState('');

  // Function to get a random image from the array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  useEffect(() => {
    // Set initial random background
    setCurrentBackground(getRandomImage());

    // Change the background every 5 seconds
    const interval = setInterval(() => {
      setCurrentBackground(getRandomImage());
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section
        style={{
          ...styles.hero,
          backgroundImage: `url(${currentBackground})`,
        }}
      >
        <div style={styles.overlay}>
          <div style={styles.logoContainer}>
            <img src={Logo} alt="The Daily Drive Logo" style={styles.logo} />
          </div>
          <div style={styles.heroContent}>
            <h1 style={styles.title}>
              Welcome to <span style={styles.brand}>The Daily Drive</span>
            </h1>
            <p style={styles.subtitle}>
              Discover our exclusive content, premium products, and more. Your daily dose of inspiration starts here!
            </p>
            <button style={styles.ctaButton}>Explore Now</button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section style={styles.features}>
        <div style={styles.featureItem}>
          <h3>👕 Premium Clothing</h3>
          <p>From timeless classics to modern streetwear, our clothing is designed to make a statement wherever you go.</p>
        </div>
        <div style={styles.featureItem}>
          <h3>📝 Templates And Courses</h3>
          <p>Save time with professionally designed templates and enrich your knowledge with expert courses.</p>
        </div>
        <div style={styles.featureItem}>
          <h3>📱 Mobile Apps</h3>
          <p>Discover apps that empower you to stay ahead every day.</p>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section style={styles.ctaSection}>
        <h2>Join the Community</h2>
        <p>Subscribe to our newsletter and never miss an update from The Daily Drive.</p>
        <button style={styles.ctaButton}>Subscribe Now</button>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: '#333',
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
  hero: {
    height: '100vh', // Full screen height
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    transition: 'background-image 1s ease-in-out',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for better text visibility
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    width: '150px',
    height: '150px',
  },
  heroContent: {
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  brand: {
    color: '#FFD700', // Gold tone for brand highlight
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '12px 25px',
    backgroundColor: '#004AAD',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px 10%',
    backgroundColor: '#f7f7f7',
  },
  featureItem: {
    textAlign: 'center',
    maxWidth: '30%',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '50px 10%',
    backgroundColor: '#333',
    color: '#fff',
  },
};

export default Home;
