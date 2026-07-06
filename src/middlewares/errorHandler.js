export default function errorHandler(err, req, res, next) {

    console.error(err);

    return res.status(err.status || 500).json({
        erro: err.message || "Erro interno do servidor."
    });

}