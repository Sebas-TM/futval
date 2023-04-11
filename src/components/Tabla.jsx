import React, { useEffect, useState } from 'react'
import '../styles/tabla.css'
import { FiSearch } from "react-icons/fi";
const Tabla = () => {
    const [datos, setDatos] = useState([])
    const [tableData, setTableData] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [page, setPage] = useState()
    const [info, setInfo] = useState([])
    const url = 'https://rickandmortyapi.com/api/character'

    const getData = (urlParam = null) => {
        fetch(urlParam == null ? url : `${url}?page=${urlParam}`).then(respuesta => respuesta.json())
            .then(
                respuesta => {
                    setInfo({
                        ...respuesta.info,
                        firstPage: url,
                        lastPage: respuesta.info.pages
                    })
                    setDatos(respuesta.results)
                    setTableData(respuesta.results)
                }
            )
    }
    useEffect(() => {
        getData()
        console.log(info)
    }, [])

    

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }
    // console.log(busqueda)

    const filtrar = terminoBusqueda => {
        var resultadoBusqueda = tableData.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.status.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.species.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        })
        setDatos(resultadoBusqueda)
    }
    // console.log(tableData)
    return (
        <div className='container'>
            <div className='contenedorInput'>
                <div className='contenedorInputButton'>
                    <button className='boton'>
                        <FiSearch />
                    </button>
                    <input type="text" className='inputText' placeholder='Buscar' onChange={handleChange} />
                </div>
            </div>
            <div className='table-container mb-5 mt-2 mx-auto overflow-auto'>
                <table className='table'>
                    <thead className='bg-light shadow text-center position-sticky top-0'>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Especie</th>
                            <th>Tipo</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.map((dato) => (
                                <tr key={dato.id}>
                                    <td className='text-center'>{dato.id}</td>
                                    <td className='ps-4'>{dato.name}</td>
                                    <td className='ps-4'>{dato.status}</td>
                                    <td className='ps-4'>{dato.species}</td>
                                    <td className='ps-4'>{dato.type}</td>
                                    <td className='ps-4'>
                                        <img className='imagen' src={dato.image} alt="imagen del personaje" />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='container d-flex justify-content-center mb-5'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link text-white bg-success" onClick={() => getData(info.prev)}>Anterior</a></li>
                        <li className="page-item"><a className="page-link text-black" onClick={() => getData(info.firstPage)}>1</a></li>
                        <li className="page-item"><a className="page-link text-black" onClick={() => getData(info.currentPage)}>2</a></li>
                        <li className="page-item"><a className="page-link text-black" onClick={() => getData(info.firstPage)}>3</a></li>
                        <li className="page-item"><a className="page-link text-black" onClick={() => getData(info.firstPage)}>...</a></li>
                        <li className="page-item"><a className="page-link text-black" onClick={() => getData(info.lastPage)}>{info.lastPage}</a></li>
                        <li className="page-item"><a className="page-link text-white bg-dark" onClick={() => getData(info.next)}>Siguiente</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Tabla