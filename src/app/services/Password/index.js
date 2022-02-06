import User from '../../model/User';
import bcrypt from 'bcryptjs';
import Exception from '../../../util/exception';
import ParserResponse from './Parser';

export default {
    updatePassword: async (identifier, dto) => {
        const { password, oldPassword, passwordConfirmation, email } = dto;

        const user = await User.findById(identifier);

        if (!user)
            throw new Exception(`User not already exists`, 400);

        if (password !== passwordConfirmation)
            throw new Exception(`the fields and confirmation password are different`, 400);

        const checkPassword = await bcrypt.compare(oldPassword, user.password);

        if (!checkPassword)
            throw new Exception('Password invalid', 400);

        const update = await User.findOneAndUpdate(
            { _id: identifier },
            { password: await bcrypt.hash(password, 10) },
            { new: true }
        )

        return ParserResponse.responseUpdate(update);
    }
}