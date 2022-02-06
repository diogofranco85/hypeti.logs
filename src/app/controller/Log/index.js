import Service from '../../services/Log';
import dto from '../../request/Log';
import Response from '../../../util/response';

export default {
    find: async (request, response) => {
        try {
            const parser = dto.find(request);
            const result = await Service.find(parser);

            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    }
}