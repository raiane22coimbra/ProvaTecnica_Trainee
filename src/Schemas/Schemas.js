import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    marca: Yup.string().required("Campo obrigatório!"),
    modelo: Yup.string().required("Campo obrigatório!"),
    placa: Yup.string().required("Campo obrigatório!"),
    nome: Yup.string().required("Campo obrigatório!"),
    contato: Yup.string().required("Campo obrigatório!"),
    status: Yup.string().required("Campo obrigatório!"),
});
const LoginSchema = Yup.object().shape({
    username:Yup.string().required("campo obrigatório!"),
    senha: Yup.string().required("campo obrigatório!")
})

export {RegisterSchema, LoginSchema};
