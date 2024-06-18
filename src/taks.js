import './estilos.css'
export function TaksC({ready}) {
    return <div className='fondo card'>
        <h1>Mi pagina</h1>
        <span className={ready ? 'color-verde':'color-rojo'}>
            {ready ? 'tarea realizada' : 'tarea no realiza'}
        </span>
    </div>
}