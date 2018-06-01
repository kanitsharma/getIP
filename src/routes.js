import { Router } from 'express';

const router = new Router();

router.route('/').get(async (req, res) => {
  const response = await Promise.resolve('Server Working Fine Again');
  res
    .create(response)
    .success()
    .send();
});

router.route('/getIP').get(async (req, res) => {
  const ip = req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',')[0].toString()
  res.json({ ip })
})

export default router;
