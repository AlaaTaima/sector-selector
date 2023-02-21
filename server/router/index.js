/** @format */

const router = require('express').Router();

const {
	serverError,
	clientError,
	getUserData,
	addSelectors,
	updateSelectors,
	getSectors,
} = require('../controller');

router.get('/getSectors', getSectors);
router.get('/getUserData', getUserData);
router.post('/addSelectors', addSelectors);
router.post('/updateSelectors', updateSelectors);

router.use(clientError);
router.use(serverError);

module.exports = router;
