import express from 'express';
import { check } from 'express-validator';

import ControllerRepfora from '../controllers/repfora.js';  


const router = express.Router();

router.post('/Login', [ ],ControllerRepfora.login)

router.get('/listInstructors' , [ ], ControllerRepfora.listallinstructors)

router.get('/listInstructorsId',[ ],  ControllerRepfora.listinstructorbyid)

router.get('/listFiche',[ ], ControllerRepfora.listafiches)

router.get('/listFicheId',[ ], ControllerRepfora.listfichesbyid)

export default router