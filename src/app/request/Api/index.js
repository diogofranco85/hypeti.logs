import * as Yup from 'yup';
import Exception from '../../../util/exception';

export default {
    create: async ({ body }) => {
        const schema = Yup.object().shape({
            app: Yup.string().required(),
        });

        let parser;
        await schema.validate(body, { strict: true })
            .then(() => {
                parser = {
                    app: body.app,
                }
            })
            .catch(err => {
                const errors = err.errors;
                throw new Exception(errors, 400);
            })

        return parser;
    },

    update: async ({ body }) => {
        const schema = Yup.object().shape({
            app: Yup.string().required(),
            active: Yup.bool().required(),
        });

        let parser;
        await schema.validate(body, { strict: true })
            .then(() => {
                parser = {
                    app: body.app,
                    active: body.active
                }
            })
            .catch(err => {
                const errors = err.errors;
                throw new Exception(errors, 400);
            })

        return parser;
    }
}