import { useState, useContext } from "react";
import { InsertFormAndGetIdForm } from "../services/firebase";
import { cartContext } from "../storage/ContextProvider";

function CreateOrder() {

    const { cart, ClearCart } = useContext(cartContext);
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        emailRepeat: "",
        emailRepeatHasError: false
    });

    const [idForm, setIdForm] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        const newForm = { ...form };
        if (newForm["email"] != newForm["emailRepeat"]) {
            setFormInput(true, "emailRepeatHasError")
        }
        else {
            InsertFormAndGetIdForm(form, cart).then((id) =>
                setIdForm(id)
            );
            ClearCart();
        }
    }

    function handleInputChange(event) {
        let nameField = event.target.name;
        setFormInput(event.target.value, nameField)

    }

    function setFormInput(value, nameField) {
        const newForm = { ...form };
        newForm[nameField] = value;
        setForm(newForm);
    }

    function clearForm(event) {
        const newForm = {
            name: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            emailRepeat: "",
            emailRepeatHasError: false
        }
        setForm(newForm);
    }

    return (
        <>
            {
                !idForm ?
                    <form className="formOrder" onSubmit={onSubmit}>
                        <span>Nombre</span>
                        <input
                            name="name"
                            type="text"
                            value={form.name.value}
                            onChange={handleInputChange} />
                        <span>Apellido</span>
                        <input
                            name="lastName"
                            type="text"
                            value={form.lastName.value}
                            onChange={handleInputChange} />
                        <span>Número de teléfono</span>
                        <input
                            name="phoneNumber"
                            type="text"
                            value={form.phoneNumber.value}
                            onChange={handleInputChange} />
                        <span>Email</span>
                        <input
                            name="email"
                            type="text"
                            value={form.email.value}
                            onChange={handleInputChange} />
                        <span>Ingrese mail nuevamente</span>
                        <input
                            name="emailRepeat"
                            type="text"
                            value={form.emailRepeat.value}
                            onChange={handleInputChange}
                            aria-invalid={form.emailRepeatHasError}
                            aria-errormessage="emailErrorID" />
                        <p
                            id="msgID"
                            aria-live="assertive"
                            style={{ visibility: form.emailRepeatHasError ? "visible" : "hidden" }}
                        >
                            Validar los emails
                        </p>

                        <button
                            disabled={
                                !(
                                    form.name !== "" &&
                                    form.lastName !== "" &&
                                    form.phoneNumber !== "" &&
                                    form.email !== "" &&
                                    form.emailRepeat !== ""
                                )
                            }
                            type="submit"
                        >
                            Crear orden de compra
                        </button>
                    </form>
                    :
                    <div>
                        <h1>Su id de compra es {idForm}</h1>
                    </div>
            }
        </>
    )
}

export default CreateOrder;