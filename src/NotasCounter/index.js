import React from 'react';
import { NotasCotext } from '../NotasContext';
import './NotasCounter.css';

function NotasCounter({total, completed}) {
    const { totalNotas, completedNotas } = React.useContext(NotasCotext);

    return (
        <h2 className="NotasCounter"> notas de tu dia a dia hay {completedNotas} de {totalNotas}</h2>
    );
}

export {NotasCounter};