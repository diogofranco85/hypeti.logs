import HypeException from "../exception";

export default {
    success: (response, data, statusCode = 200) => {
        return response.status(statusCode).json({
            success: true,
            result: data
        });
    },

    error: (response, data, err) => {
        let code = 500;
        if (err instanceof HypeException) {
            code = err.code;
        }

        return response.status(code).json({
            success: false,
            message: data
        });
    }
};