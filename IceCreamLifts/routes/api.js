apiRouter = require('express').Router();
const { getCurrentSets,
        createSetsA,
        createSetsB,
        incrementSet
      } = require('../models/sets.js');

apiRouter.route('/sets')
  .post(getCurrentSets, (req, res, next) => res.json(res.currentSets))
  .put(incrementSet, (req, res, next) => res.json({message: 'current set incremented'}));

apiRouter.route('/create/A')
  .post(createSetsA, (req, res, next) => res.json({message: 'A sets added'}));

apiRouter.route('/create/B')
  .post(createSetsB, (req, res, next) => res.json({message: 'B sets added'}));

module.exports = apiRouter;
