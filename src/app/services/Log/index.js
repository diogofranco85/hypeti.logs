import Log from '../../model/Log';

export default {
    create: async (dto) => {
        const log = await Log.create(dto);
        return log;
    },

    show: async (dto) => {

        const field = dto.field;
        const filter = dto.filter;
        const page = parseInt(dto.page);
        const limit = parseInt(dto.limit);

        const log = await Log.paginate({
            [field]: filter
        }, {
            page,
            limit
        })

        return log;

    }
}