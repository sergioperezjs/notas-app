import React from 'react';
import './NotasList.css'

function Notaslist(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {Notaslist}