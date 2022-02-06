import Service from '../../services/Log';
import Parser from '../../request/Log';
import Response from '../../../util/response';

export default {
    show: async (request, response) => {
        try {
            const parser = await Parser.parserFind(request);
            const result = await Service.show(parser);

            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    }
}