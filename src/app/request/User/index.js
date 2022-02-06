import * as Yup from 'yup';
import Exception from '../../../util/exception';

export default {
    parserCreate: async (request) => {

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            name: Yup.string().min(6).required(),
            password: Yup.string().min(6).required(),
        });

        const { body } = request;
        let parser;
        await schema.validate(body, { strict: true })
            .then(() => {
                parser = {
                    email: body.email,
                    name: body.name,
                    password: body.password,
                    active: true,
                }
            })
            .catch(err => {
                const errors = err.errors;
                throw new Exception(errors, 400);
            })

        return parser;
    },

    parserUpdate: async (request) => {

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            name: Yup.string().min(6).required(),
            active: Yup.bool().required()
        });

        const { body } = request;
        let parser;
        await schema.validate(body, { strict: true })
            .then(() => {
                parser = {
                    email: body.email,
                    name: body.name,
                    active: body.active,
                }
            })
            .catch(err => {
                const errors = err.errors;
                throw new Exception(errors, 400);
            })

        return parser;
    }

}