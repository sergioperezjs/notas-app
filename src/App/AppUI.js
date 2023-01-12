import React from 'react';
import { NotasCounter } from '../NotasCounter';
import { NotasCotext } from '../NotasContext';
import { NotasSearch } from '../NotasSearch';
import { Notaslist } from '../NotasList';
import { NotasItem } from '../NotasItem';
import { NotasForm } from '../NotasForm';
import { CreateNotasButton } from '../CreateNotasButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedNotas, 
    completeNota,
    deleteNota,
    openModal,
    setOpenModal,
  } = React.useContext(NotasCotext);

    return (
    <React.Fragment>
        <NotasCounter />
        <NotasSearch />
            <Notaslist>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedNotas.length) && <p>¡Crea tu primer TODO!</p>}
              {searchedNotas.map(notas=> (
                <NotasItem 
                key={notas.text} 
                text={notas.text} 
                completed={notas.completed}
                onComplete={() => completeNota(notas.text)}
                onDelete={() => deleteNota(notas.text)}
                />
              ))}
            </Notaslist>

            {!!openModal && (
        <Modal>
          <NotasForm />
        </Modal>
      )}


         <CreateNotasButton setOpenModal={setOpenModal} />
        </React.Fragment>
        );
}

export { AppUI }