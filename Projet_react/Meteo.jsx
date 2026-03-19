import { useState } from 'react'; // ❌ Tu avais écrit "userState"
import './App.css';
import './Meteo.css'; // ❌ Tu avais oublié le point

function App() {
  // States
  const [ville, setVille] = useState("");
  const [meteo, setMeteo] = useState(null);
  const [chargement, setChargement] = useState(false); // ✅ Ajouté
  const [erreur, setErreur] = useState(''); // ✅ Déplacé ici
  
  // ⚠️ Remplace par ta vraie clé API
  const API_KEY = 'ta_clé_api_ici';
  
  const rechercherMeteo = async () => {
    setChargement(true);
    setErreur('');
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      console.log(data); // Pour débugger
      
      if (data.cod === '404') {
        setErreur('Ville non trouvée');
        setMeteo(null);
      } else {
        setMeteo(data);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setErreur('Erreur de connexion');
    }
    
    setChargement(false);
  };
  
  return (
    <div className="App">
      <h1>Application Météo</h1>
      
      <div className="App-weather">
        <input 
          type="text" 
          placeholder="Entrez une ville" 
          value={ville} 
          onChange={(e) => setVille(e.target.value)}
        />
        <button onClick={rechercherMeteo}>Rechercher</button>
      </div>
      
      {/* Affichage du chargement */}
      {chargement && <p>Chargement...</p>}
      
      {/* Affichage des erreurs */}
      {erreur && <p style={{color: 'red'}}>{erreur}</p>}
      
      {/* Affichage des données météo */}
      {meteo && meteo.main && (
        <div className="App-info">
          <h2>{meteo.name}</h2>
          <p className="temp">{Math.round(meteo.main.temp)}°C</p>
          <p className="description">{meteo.weather[0].description}</p>
          <p className="humidity">Humidité: {meteo.main.humidity}%</p>
          <p className="wind">Vent: {Math.round(meteo.wind.speed)} km/h</p>
          <p className="sun">Météo: {meteo.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;