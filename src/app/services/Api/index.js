import Exception from '../../../util/exception';
import Model from '../../model/Api';
import { uuid, isUuid } from 'uuidv4';

export default {
    create: async (dto) => {
        const { app } = dto;

        const exists = await Model.findOne({
            app
        })

        if (exists) {
            throw new Exception('App already exists', 400);
        }

        const data = {
            ...dto,
            key: uuid()
        }

        const model = await Model.create(data);
        return model;
    },

    listAll: async (dto) => {

        const page = parseInt(dto.page);
        const limit = parseInt(dto.limit);

        const model = await Model.paginate({}, {
            page,
            limit
        })

        return model;

    },

    findByKey: async (key) => {
        const model = await Model.findOne({ key });

        if (!model)
            throw new Exception('API-KEY invalid', 400);

        if (!isUuid(key))
            throw new Exception('API-KEY format invalid', 400);

        return model;
    }

}