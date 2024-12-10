import cubi12Client from '../../cubi12Client.js';

const apiGatewayMiddleware = async (req, res, next) => {
  try {
    const { method, originalUrl, query, body } = req;

    const response = await cubi12Client({
      method,
      url: originalUrl,
      params: query,
      data: body,
    });

    res.status(response.status).json(response.data);
  } catch (err) {
    console.error('Error redirecting to monolith:', err);

    if (err.response) {
      // Maneja errores específicos del monolito
      if (err.response.status === 404) {
        return res.status(404).json({
          message: 'El recurso solicitado no se encontró en el monolito.',
          details: err.response.data || null,
        });
      }
      if (err.response.status === 401) {
        return res.status(401).json({
          message: 'No autorizado para realizar esta acción.',
          details: err.response.data || null,
        });
      }

      return res.status(err.response.status).json(err.response.data);
    }

    next(err);
  }
};

export default apiGatewayMiddleware;
