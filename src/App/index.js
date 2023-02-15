import React from 'react';
import { useNotas } from './useNotas';
import { NotasCounter } from '../NotasCounter';
import { NotasHeader } from '../NotasHeader';
import { NotasSearch } from '../NotasSearch';
import { Notaslist } from '../NotasList';
import { EmptyNotas } from '../EmptyNotas';
import { NotasItem } from '../NotasItem';
import { NotasForm } from '../NotasForm';
import { NotasLoading } from '../NotasLoading';
import { NotasError } from '../NotasError';
import { CreateNotasButton } from '../CreateNotasButton';
import { Modal } from '../Modal';
import { ChangeAlert } from '../changeAlert';

function App() {
  const {
    error,
    loading,
    searchedNotas, 
    completeNota,
    deleteNota,
    openModal,
    totalNotas,
    completedNotas,
    searchValue, 
    setSearchValue,
    setOpenModal,
    addNotas,
    sincronizeNotas,
  } = useNotas();

    return (
      <React.Fragment>
        <NotasHeader loading={loading}>
         <NotasCounter 
          totalNotas={totalNotas}
          completedNotas={completedNotas}
          />
          <NotasSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
        </NotasHeader>

        <Notaslist
        error={error}
        loading={loading}
        totalNotas={totalNotas}
        searchedNotas={searchedNotas}
        searchText={searchValue}
        onError={() => <NotasError />}
        onLoading={() => <NotasLoading />}
        onEmptyNotas={() => <EmptyNotas />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        //</React.Fragment>render={Notas => (
         // <NotasItem
         //  key={Notas.text}
         //   text={Notas.text}
         //   completed={Notas.completed}
         //   onComplete={() => completeNota(Notas.text)}
         //   onDelete={() => deleteNota(Notas.text)}
         // />
       // )}
    >
      {Notas => (
          <NotasItem
            key={Notas.text}
            text={Notas.text}
            completed={Notas.completed}
            onComplete={() => completeNota(Notas.text)}
            onDelete={() => deleteNota(Notas.text)}
          />
        )}



    </Notaslist>

  
              {!!openModal && (
          <Modal>
            <NotasForm
            addNotas={addNotas}
            setOpenModal={setOpenModal}
            />
          </Modal>
        )}
  
  
           <CreateNotasButton 
           setOpenModal={setOpenModal} 
           />
           <ChangeAlert
           sincronize={sincronizeNotas} 
           />
          </React.Fragment>
          );
 }

export default App;
