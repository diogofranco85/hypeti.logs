import service from '../../services/User';
import Response from '../../../util/response';
import Parser from '../../request/User';

export default {
    create: async (request, response) => {
        try {
            const parser = await Parser.parserCreate(request)
            const result = await service.create(parser);

            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    },

    find: async (request, response) => {
        try {
            const { id } = request.params;
            const result = await service.find(id);

            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    },

    update: async (request, response) => {
        try {
            const { id } = request.params;
            const parser = await Parser.parserUpdate(request);
            const result = await service.update(id, parser);

            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    }
}