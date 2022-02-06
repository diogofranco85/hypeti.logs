import Log from '../../model/Log';

export default {
    create: async (dto) => {
        const log = await Log.create(dto);
        return log;
    },

    find: async (dto) => {
        console.log('log', [dto, Log]);
        const field = dto.field;
        const filter = dto.filter;

        const log = await Log.find({
            [field]: filter
        }).exec();

        return log;

    }
}