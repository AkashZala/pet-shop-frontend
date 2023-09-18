import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get('http://localhost:3000/api/pets');
      setPets(response.data);
    }
    fetchPets();
  }, []);

  return (
    <>
      <h1>Pet Shop ({pets.length})</h1>
      {
        pets.map(pet => {
          return (
            <li key={pet.id} className={pet.is_favorite ? 'favorite' : ''}>
              {pet.name} {pet.is_favorite ? '*' : ''}
            </li>
          );
        })
      }
      <p>Favorite *</p>
    </>
  )
}

export default App
