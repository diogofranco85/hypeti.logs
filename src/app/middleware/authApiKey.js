import Service from '../services/Api';
import _ from 'lodash';
import Response from '../../util/response';
import Exception from '../../util/exception';

export default async function (request, response, next) {
    try {
        const { headers } = request;

        const key = _.get(headers, 'x-api-key');

        if (!key)
            throw new Exception('X-API-KEY not found', 401);

        const app = await Service.findByKey(key);

        if (!app.active)
            throw new Exception('X-API-KEY is blocked', 401);

        next();
    } catch (err) {
        return Response.error(response, err?.message, err);
    }


}