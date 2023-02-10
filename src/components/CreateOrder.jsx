function CreateOrder() {

    function onSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(userData);
      }

    return (
        <>
        <form className="formOrder" onSubmit={onSubmit}>
            <span>Nombre</span>
            <input></input>
            <span>Apellido</span>
            <input></input>
            <span>Telefono</span>
            <input></input>
            <span>Email</span>
            <input></input>
            <span>Ingrese nuevamente el mail</span>
            <input></input>
            <button>Crear orden de compra</button>
        </form>  
        </>
        //         Input para nombre, apellido y teléfono
        // ○ Input para email y lógica de repetir el email 2 veces (a excepción de
        // que realicen el desafío extra de auth, en ese caso no sería necesario)
    )
}

export default CreateOrder;