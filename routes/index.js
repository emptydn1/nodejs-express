var express = require('express');
var router = express.Router();

var schema = require('../model/contact.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* xem du liệu */
router.get('/xem', function(req, res, next) {
  schema.find({},function(err, dulieu){
    res.render('xem', { data:dulieu });
  })
});



/* xoa du liệu */
router.get('/xoa/:idcanxoa', function(req, res, next) {
  var id = req.params.idcanxoa;
  schema.findByIdAndRemove(id).exec();
  res.redirect('/xem');
});



/* sua du liệu */
router.get('/sua/:idcansua', function(req, res, next) {
  var id = req.params.idcansua;
  
  schema.find({ _id:id }, function(err,dulieu){
    res.render('sua',{data:dulieu});
  });

});

/* sua du lieu post */
router.post('/sua/:idcansua', function(req, res, next) {
  var id = req.params.idcansua;
  
  /* đưa id truyền vào view, update luôn */
  schema.findById(id, function (err, dulieu) {
    if (err) return handleError(err);
  
    dulieu.ten = req.body.ten;
    dulieu.dienthoai = req.body.dt;
    dulieu.save();
  });

  res.redirect('/xem');

});







/* them du liệu */
router.get('/them', function(req, res, next) {
  res.render('them');
});

router.post('/them', function(req, res, next) {
  var data = {
    "ten" : req.body.ten,
    "dienthoai" : req.body.dt
  }

  var dulieu = new schema(data);
  dulieu.save();
  res.redirect('/xem');
});


module.exports = router;
