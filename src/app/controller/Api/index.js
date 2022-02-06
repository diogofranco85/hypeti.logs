import Service from '../../services/Api';
import Parser from '../../request/Api';
import Response from '../../../util/response';

export default {
    index: async (request, response) => {
        try {
            const parser = await Parser.create(request);
            const result = await Service.create(parser);

            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    },

    show: async (request, response) => {
        try {

        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    },

    create: async (request, response) => {
        try {
            const parser = await Parser.create(request);
            const result = await Service.create(parser);

            return Response.success(response, result);
        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    },

    edit: async (request, response) => {
        try {

        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    },

    delete: async (request, response) => {
        try {

        } catch (err) {
            return Response.error(response, err?.message, err);
        }
    },
}