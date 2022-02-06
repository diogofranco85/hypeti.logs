import Exception from "../../../util/exception";
import * as Yup from 'yup';

export default {
    parserUpdate: async (request) => {

        const schema = Yup.object().shape({
            id: Yup.string().required(),
            password: Yup.string().min(6).required(),
            passwordConfirmation: Yup.string().min(6).required(),
            oldPassword: Yup.string().min(6).required(),
        });

        const fields = { ...request.body, ...request.params };
        let parser;
        await schema.validate(fields, { strict: true })
            .then(() => {
                parser = {
                    password: fields.password,
                    passwordConfirmation: fields.passwordConfirmation,
                    oldPassword: fields.oldPassword,
                }
            })
            .catch(err => {
                const errors = err.errors;
                throw new Exception(errors, 400);
            })

        return parser;
    }
}