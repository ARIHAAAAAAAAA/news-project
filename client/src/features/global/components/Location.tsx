import { useState, useEffect } from 'react';

const LocationComponent = () => {

  const [location, setLocation] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });
  
  const [error, setError] = useState<string | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setError('Unable to retrieve your location');
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <h2>Your Location</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default LocationComponent;
