export function success(data = null, message = null) {

    const response = {
        success: true
    };

    if (message) {
        response.message = message;
    }

    if (data !== null) {
        response.data = data;
    }

    return response;

}

export function error(message, errors = null) {

    const response = {
        success: false,
        message
    };

    if (errors) {
        response.errors = errors;
    }

    return response;

}