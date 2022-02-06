import Service from '../../services/Password';
import Parser from '../../request/Password';
import Response from '../../../util/response';

export default {
    update: async (request, response) => {
        try {
            const { id } = request.params;
            const parser = await Parser.parserUpdate(request);
            const result = await Service.updatePassword(id, parser);
            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    }
}