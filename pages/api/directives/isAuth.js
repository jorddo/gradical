import jwt from 'jsonwebtoken';

const isAuthDirective = {
  auth: (next, _source, _args, ctx) => {
    const { token } = ctx;

    const errorObject = {
      errors: {
        __typename: 'BaseError',
        message: 'You must supply a JWT for authorization!',
        path: `isAuthorized directive: ${ctx.req.body.operationName} operation`,
      },
    };

    if (!token) return { ...errorObject };

    try {
      const decoded = jwt.verify(
        token.replace('Bearer ', ''),
        process.env.JWT_SECRET
      );

      if (decoded) return next();
    } catch (err) {
      return { ...errorObject };
    }
  },
};

export default isAuthDirective;
