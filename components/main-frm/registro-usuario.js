export class RegitroUsuario extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/*html*/ `
            </nav>
                <h2>Registro Clientes</h2>
                <div class="card">
                <h5 class="card-header">
                <div class="card-body">
                    <div class="container">
                        <div class="row g-3">
                            <div class="col-114">
                                <form id = "frmData">
                                    <div class="row g-3">
                                        <div class="col-3">
                                            <label for="createdAt" class="form-label">Numero de documento</label>
                                            <input type="text" class="form-control" id="cc" name="cc">                  
                                        </div>
                                        <div class="col-3">
                                            <label for="cc" class="form-label">Nombres</label>
                                            <input type="text" class="form-control" id="nombres" name="nombres">
                                        </div>
                                        <div class="col-3">
                                            <label for="nombres" class="form-label">Apellidos</label>
                                            <input type="text" class="form-control" id="apellidos" name="apellidos">                  
                                        </div>
                                        <div class="col-3">
                                            <label for="telefono" class="form-label">Nro Movil</label>
                                            <input type="text" class="form-control" id="telefono" name="telefono">                  
                                        </div>
                                        <div class="row g-3">
                                        <div class="col-3">
                                            <label for="date" class="form-label">Fecha de Nacimiento</label>
                                            <input type="date" class="form-control" id="fechanc" name="fechanc" >
                                        </div>

                                        <div class="col-3">
                                            <label for="fechanac" class="form-label">Ciudad de Origen</label>
                                            <input type="tetx" class="form-control" id="ciuorigen" name="ciuorigen">                  
                                        </div>

                                        <div class="col-3">
                                            <label for="fechanac" class="form-label">Pais de Origen</label>
                                            <input type="tetx" class="form-control" id="paisorigen" name="paisorigen">                  
                                        </div>

                                         <div class="col-3">
                                            <label for="email" class="form-label">Email cliente</label>
                                            <input type="email" class="form-control" id="email" name="email" >
                                        </div>

                                        </div>

                                        <div class="container mt-4 text-center" >
                                            <input type="submit" data-accion="POST" class="btn btn-success" value="Guardar Cliente">
                                        </div>
                                    </div>
                                </form>                         
                        </div>
                    </div>
                </div>
                </div>
            </div>       
            
            
        `  
    }
}
customElements.define("registro-usuario", RegitroUsuario );