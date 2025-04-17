import React, { useState } from 'react';

const TeacherDashboard = ({ setClassCode }) => {
    const [code, setCode] = useState('');

    const generateCode = () => {
        const newCode = Math.floor(1000 + Math.random() * 9000).toString();
        setCode(newCode);
        setClassCode(newCode);
    };

    return (
        <div className="teacher-dashboard">
            <h2>Panel del Profesor</h2>
            <button onClick={generateCode}>Generar Código de Clase</button>
            {code && (
                <div className="code-display">
                    <p>Código: <strong>{code}</strong></p>
                    <p>Comparte este código con tus estudiantes</p>
                </div>
            )}
        </div>
    );
};

export default TeacherDashboard;
