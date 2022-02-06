import Exception from "../../../../util/exception"

export default {
    response: (response) => {
        if (!response)
            throw new Exception('not found', 200);

        return {
            id: response._id,
            name: response.name,
            email: response.email,
            active: response.active,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt
        }

    }
}