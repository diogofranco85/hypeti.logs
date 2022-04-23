import * as Yup from 'yup'

export default {
    fromMessaging: (data) => {

        if (data.length < 10)
            return {
                code: data[0].code,
                app: data[1],
                action: data[3],
                path: JSON.stringify(data[2]),
                method: JSON.stringify(data[3]),
                input: JSON.stringify(data[5]),
                output: JSON.stringify(data),
                message: JSON.stringify(data[4])
            }

        return {
            code: data[0].code,
            app: data[1],
            action: data[6],
            path: JSON.stringify(data[2]),
            method: JSON.stringify(data[3]),
            input: JSON.stringify(data[5]),
            output: JSON.stringify(data),
            message: JSON.stringify(data[7])
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