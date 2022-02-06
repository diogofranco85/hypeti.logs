import * as Yup from 'yup'

export default {
    fromMessaging: (data) => {
        return {
            code: data.code ?? 0,
            app: data.app,
            description: data.description,
            input: data.input,
            output: data.output,
            message: data.message
        }
    },

    parserFind: async ({ body, query }) => {
        const schema = Yup.object().shape({
            filter: Yup.string().required(),
            field: Yup.string().required(),
        });

        let parser;
        await schema.validate(body, { strict: true })
            .then(() => {
                parser = {
                    filter: body.filter,
                    field: body.field,
                    page: body.page ?? 1,
                    limit: body.limit ?? 50
                }
            })
            .catch(err => {
                const errors = err.errors;
                throw new Exception(errors, 400);
            })

        return parser;
    }
}