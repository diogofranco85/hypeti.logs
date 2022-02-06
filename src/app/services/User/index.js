import User from '../../model/User';
import Exception from '../../../util/exception';
import ParserResponse from './Parser';

export default {
    create: async (dto) => {
        const { email } = dto;
        const Exists = await User.findOne({ email });

        if (Exists) {
            throw new Exception(`User already exists: '${email}'`, 400);
        }

        const user = await User.create(dto);
        return user;
    },

    find: async (id) => {
        const user = await User.findById(id);

        if (!user)
            throw new Exception(`User not exists`, 400);

        return ParserResponse.response(user);
    },

    update: async (id, dto) => {
        const user = await User.findById(id);

        if (!user) {
            throw new Exception(`User not already exists`, 400);
        }

        const update = await User.findOneAndUpdate(
            { _id: id },
            dto,
            { new: true }
        );

        return ParserResponse.response(update);
    }

}