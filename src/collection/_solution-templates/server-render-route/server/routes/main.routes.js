import express from 'express';
import mainController from '../controllers/main.controller';


// Initialize express router
const router = new express.Router();

router.route('/*')
	.get(mainController.main);


// Export API routes
export default router;
