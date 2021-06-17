import React, { useEffect, useState } from "react";
// import "./styles.css";
// https://api.github.com/users/matthewnorton

const Data = ({user}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [user]);
    // }, [login]);

    if (loading) return <h1>Loading ... </h1>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;

  if (data) {
    return (
      <div>
          { Object.entries(data).map(([key, value]) => {
            return (
              <div>
                <div style={{background: 'silver', margin:'10px', padding:'10px', textAlign:'left'}}>
                <strong>{key}</strong>: {value}</div>
              </div>
            )})}
      </div>
    );
  }
  return <div>No User Available</div>;
}

export default Data;
