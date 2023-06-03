const express = require('express');
const router = express.Router();
const clothesCtrl = require('./clothes.controller');
const authVerify = require('../../middleware/authVerify');
const authOptional = require('../../middleware/authOptional');

router.post('/add',authVerify,clothesCtrl.add);
router.get('/',authOptional,authVerify,clothesCtrl.getAll); // getAll
router.get('detail/:id',clothesCtrl.getDetail); // getDetail
router.get('/myStuff', authVerify,clothesCtrl.getMyStuff);
router.patch('/status/:id',clothesCtrl.changeStatus); //*
router.put('/:id',authVerify,clothesCtrl.update);

module.exports = router;
