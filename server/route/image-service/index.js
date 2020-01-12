const { Router } = require('express');
const { json } = require('body-parser');

module.exports = args => {
  const { httpRequest } = args;
  const router = Router();
  router.use(json());

  const serviceProvider = (req, res) => {
    const options = {
      url: `http://194.31.53.133:2000/getimg`,
      method: 'GET',
      headers: {
        Accept: '*/*',
        'content-type': 'application/json',
        'x-forwarded-for': req.headers['x-forwarded-for'],
      },
    };

    try {
      return httpRequest(options, (error, response, body) => {
        if (response) {
          if (response.statusCode === 200) {
            const { image } = body;
            const dataResponse = {
              // eslint-disable-next-line no-underscore-dangle
              success: true,
              data: image,
            };

            return res.status(200).json(dataResponse);
          }
          if (response.statusCode && body) {
            const { image } = body;
            const dataResponse = {
              // eslint-disable-next-line no-underscore-dangle
              success: true,
              data: image,
            };
            return res.status(200).json(dataResponse);
          }
        }
        return res.status(400).json({ success: false });
        // if (error) {
        //   switch (error.code) {
        //     case 'ECONNREFUSED':
        //       return res.status(502).json(Fail(createError(502)));
        //     case 'ETIMEDOUT':
        //     case 'ESOCKETTIMEDOUT':
        //       return res.status(504).json(Fail(createError(504)));
        //     default:
        //       break;
        //   }
        //   if (error.connect === true) {
        //     return res.status(509).json(Fail(createError(509)));
        //   }
        //   return res.status(503).json(Fail(createError(503)));
        // }
        // return res.status(500).json(Fail(createError(500)));
      });
    } catch (e) {
      // return res.status(500).json(e);
      return res.status(400).json({ success: false });
    }
  };

  router.get('*', serviceProvider);
  router.post('*', serviceProvider);
  router.patch('*', serviceProvider);
  router.put('*', serviceProvider);
  router.delete('*', serviceProvider);

  return router;
};
