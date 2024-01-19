// satırı geçerli bir JavaScript ifadesi değil ve bu nedenle bu satırın kaldırılması gerekiyor.
'use client'; 

import { useState, useEffect } from 'react';

// Ana bileşen tanımı
const Home = () => {
  // Tema durumu ve temayı değiştirmek için işlevlerin kullanılması
  const [darkMode, setDarkMode] = useState(false);
  const [lightGrayMode, setLightGrayMode] = useState(false);

  // Tema değiştirme işlevi
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setLightGrayMode(false);
  };

  // Sistem temasını ayarlama işlevi
  const setSystemTheme = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    setLightGrayMode(false);
  };

  // Açık gri modunu değiştirme işlevi
  const toggleLightGrayMode = () => {
    setDarkMode(false);
    setLightGrayMode(!lightGrayMode);
  };

  // Komponentin oluşturulduğu anda sistem temasını ayarlama
  useEffect(() => {
    setSystemTheme();
  }, []);

  // Kutu renklerini temsil eden dizi
  const boxColors = lightGrayMode
    ? ["#1b263b", "#1b263b", "#1b263b", "#1b263b", "#1b263b", "#1b263b", "#1b263b", "#1b263b"]
    : darkMode
    ? ["#6b6b6b", "#575757", "#444444", "#333333", "#232323", "#121212", "#050505", "#000000"]
    : ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155"];

  // Sayfa içeriğini temsil eden stiller
  const containerStyle = {
    backgroundColor: lightGrayMode ? "#415a77" : darkMode ? "#1b263b" : "#f8fafc",
    color: lightGrayMode ? "white" : darkMode ? "white" : "black",
  };

  // Ana bileşenin JSX yapısı
  return (
    <main className={`container ${darkMode ? 'dark' : 'light'} ${lightGrayMode ? 'light-gray-mode' : ''}`} style={containerStyle}>
      <div className="content">
        <h1 className="title">Dark Mode</h1>

        {/* Tema değiştirme düğmeleri */}
        <div className="button-container">
          <button
            aria-label="Toggle Dark Mode"
            className={`toggle-button ${darkMode ? 'dark' : 'light'}`}
            onClick={toggleTheme}
          >
            Mode
          </button>

          <button
            aria-label="Set System Theme"
            className="toggle-button"
            onClick={setSystemTheme}
          >
            Sistem Tema
          </button>

          <button
            aria-label="Toggle Light Gray Mode"
            className="light-gray-mode-button"
            onClick={toggleLightGrayMode}
          >
            Açık Gri Mod
          </button>
        </div>

        {/* Renkli kutuların haritalanması */}
        {boxColors.map((color, index) => (
          <div
            key={index}
            className={`box ${darkMode ? 'dark' : 'light'} ${lightGrayMode ? 'light-gray-mode' : ''}`}
            style={{ backgroundColor: color, color: darkMode || lightGrayMode ? 'white' : (lightGrayMode ? 'white' : 'black') }}
          >
            Örnek kutu {index + 1}
          </div>
        ))}
      </div>
    </main>
  );
};

// Ana bileşenin dışa aktarılması
export default Home;
