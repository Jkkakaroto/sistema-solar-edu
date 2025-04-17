import React from 'react';

export default function Auth({ setRole }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido al Sistema Solar Educativo</h1>
      <button 
        onClick={() => setRole('teacher')}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        Soy Profesor
      </button>
      <button 
        onClick={() => setRole('student')}
        style={{ margin: '10px', padding: '10px 20px' }}
      >
        Soy Estudiante
      </button>
    </div>
  );
}
