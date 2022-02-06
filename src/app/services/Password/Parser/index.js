import Exception from "../../../../util/exception"

export default {
    responseUpdate: (response) => {
        if (!response)
            throw new Exception('Not found', 400);

        return {
            id: response._id,
            name: response.name,
            email: response.email,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt
        }
    }
}