export class CustomerForm extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/*html*/ `
                <h2>Registro Personal</h2>
                <div class="card">
                <h5 class="card-header">
                <div class="card-body">
                    <div class="container">
                        <div class="row g-3">
                            <div class="col-12">
                                <form id = "frmData">
                                    <div class="row g-3">
                                        <div class="col-3">
                                            <label for="createdAt" class="form-label">Numero de documento</label>
                                            <input type="text" class="form-control" id="cc" name="cc">                  
                                        </div>
                                        <div class="col-4">
                                            <label for="cc" class="form-label">Nombres</label>
                                            <input type="text" class="form-control" id="nombres" name="nombres">
                                        </div>
                                        <div class="col-4">
                                            <label for="nombres" class="form-label">Apellidos</label>
                                            <input type="text" class="form-control" id="apellidos" name="apellidos">                  
                                        </div>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-4">
                                            <label for="email" class="form-label">Email Personal</label>
                                            <input type="email" class="form-control" id="email" name="email" >
                                            
                                        </div>
                                        <div class="col-4">
                                            <label for="telefono" class="form-label">Nro Movil</label>
                                            <input type="text" class="form-control" id="telefono" name="telefono">                  
                                        </div>
                                        <div class="col-3">
                                            <label for="fechanac" class="form-label">Profesion</label>
                                            <input type="tetx" class="form-control" id="profesion" name="profesion">                  
                                        </div>
                                        <div class="container mt-4 text-center" >
                                            <input type="submit" data-accion="POST" class="btn btn-success" value="Guardar Personal">
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
customElements.define("customer-form",CustomerForm);