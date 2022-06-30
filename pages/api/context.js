// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Request, Response } from 'express';

export const context = ({ req, res }) => {
  const token = req.headers.authorization || '';
  return { req, res, token };
};
