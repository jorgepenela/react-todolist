import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class TodoList extends Component {

    // estado el componente
    constructor(props) {
        super(props);
        this.state = {
            tareaNueva : "",
            tareas: [
                { id: 1, nombre: "hacer una todolist", done: false },
                { id: 2, nombre: "sacar a pasear al perro", done: false },
                { id: 3, nombre: "hacer las compras", done: false }
            ]
        }
    }
    agregarTareaNueva() {
        // el metodo setState modifica el state y hace que se redibuje el componente
        if(this.state.tareaNueva.length>0){
            this.setState({
                tareas: [
                    ...this.state.tareas,
                    {
                        id: Math.max(0,...this.state.tareas.map((t)=>(t.id))) + 1,
                        nombre: this.state.tareaNueva,
                        done: false
                    }
                ],
                tareaNueva : ""
            })
        }
        

    }

    inputChange(e) {
        /* console.log(e.target.value) */
        this.setState({ tareaNueva : e.target.value})
    }

    eliminarTarea(id){
        //alert('borrando '+id);
        this.setState({
            tareas: this.state.tareas.filter( (tarea) => (tarea.id !== id))
        })        
    }

    // componente
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item active text-center">Lista de Tares</li>
                    {
                        this.state.tareas.map((tarea) => (
                            <li className="list-group-item" key={tarea.id}>
                                {tarea.nombre}
                                <button className="btn-outline-danger rounded-circle float-end"
                                    onClick={ (e)=>{
                                        this.eliminarTarea(tarea.id)
                                    }}>
                                    &#128465;
                                </button>
                            </li>
                        ))
                    }
                    <li className="list-group-item">
                        <div className="input-group">
                            <input type="text" className="form-control" 
                                placeholder="Ingresar Tarea" 
                                onChange={(e) => { this.inputChange(e) }} 
                                value={this.state.tareaNueva}
                                />
                            <button className="btn btn-outline-primary"
                                /* onClick={this.agregarTareaNueva.bind(this)} */
                                onClick={() => { this.agregarTareaNueva() }}
                                disabled={this.state.tareaNueva.length===0}
                            >+</button>
                        </div>
                    </li>

                </ul>
            </div>
        )
    }
}

export default TodoList;