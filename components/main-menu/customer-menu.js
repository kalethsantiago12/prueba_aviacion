export class CustomerMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/*html*/ `
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/index.html">Inicio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/registroP.html">Registro Personal</a>
                            <a class="nav-link" href="/registroUsuario.html">Registro Usuario</a>
                            <a class="nav-link" href="#">Pricing</a>
                            
                        </div>
                    </div>
                    <h4>Campus Airlane</h4>
                    <img  id="logo" src="/img/logoPrincipal-s.png" height="70px" >
                </div>
            </nav>
        `
    }  
    
}
customElements.define("customer-menu",CustomerMenu);