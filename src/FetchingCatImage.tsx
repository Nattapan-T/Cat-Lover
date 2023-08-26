import { useState } from "react";
import { useEffect } from "react";
interface CatDisplayProps {
  onLogout: () => void;
}

function CatDisplay({ onLogout }: CatDisplayProps) {
  const API_URL = "https://api.thecatapi.com/v1/images/search?format=json";
  const [catImage, setCatImage] = useState<string | null>(null);
  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error Fecthing Cat Image", Error);
    }
  };
  return (
    <div>
      <div className="image-container">
        {catImage && <img src={catImage} alt="Cat" />}
      </div>
      <button className="action-button" onClick={fetchImage}>
        Reload Cat Image
      </button>
      <button className="action-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
export default CatDisplay;
