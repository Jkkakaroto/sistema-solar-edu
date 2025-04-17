import React, { useState } from 'react';
import Auth from './components/Auth';
import TeacherDashboard from './components/TeacherDashboard';
import SolarSystem from './components/SolarSystem';

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [classCode, setClassCode] = useState(null);

  return (
    <div>
      {!role ? (
        <Auth setRole={setRole} />
      ) : role === 'teacher' ? (
        <TeacherDashboard setClassCode={setClassCode} />
      ) : (
        <SolarSystem classCode={classCode} />
      )}
    </div>
  );
}

export default App;
