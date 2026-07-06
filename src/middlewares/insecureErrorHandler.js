export default function insecureErrorHandler(err, req, res, next) {

    console.error(err);

    res.status(err.status || 500).json({
        success: false,
        error: {
            message: err.message,
            code: err.code,
            stack: err.stack,
            details: err
        }
    });

}