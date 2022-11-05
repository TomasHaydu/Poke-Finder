const Modal = ({ pokeInfo }) => {
    return (
        <div
            className='modal'
        >
            <div
                className='modal__container'
            >
                <label
                 className='modal__container--label'
                >NRO: </label>
                <p
                 className='modal__container--info'
                >{pokeInfo.id}</p>
            </div>
            <div
                className='modal__container'
            >

                <label
                className='modal__container--label'
                >ALTURA: </label>
                <p
                 className='modal__container--info'
                >{pokeInfo.height}mts</p>
            </div>
            <div
                className='modal__container'
            >
                <label
                 className='modal__container--label'
                >PESO: </label>
                <p
                 className='modal__container--info'
                >{pokeInfo.weight}kg</p>
            </div>
            <div
                className='modal__container'
            >
                <label
                 className='modal__container--label'
                >HABILIDADES: </label>
                {(pokeInfo.abilities).map(poke => 
                <p
                 className='modal__container--info'
                 >{poke.ability.name}</p>)}
            </div>
            <div
                className='modal__container'
            >
                <label
                 className='modal__container--label'
                >TIPO: </label>
                {(pokeInfo.types).map(poke =>
                <p
                 className='modal__container--info'
                >{poke.type.name}</p>)}
            </div>
            <div
                className='modal__container'
            >
                <label
                 className='modal__container--label'
                >FORMAS: </label>
                {(pokeInfo.forms).map(poke =>
                <p
                 className='modal__container--info'
                >{poke.name}</p>)}
            </div>




        </div>
    )
}

export default Modal