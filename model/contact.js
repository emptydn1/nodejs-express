/* muốn sử dụng mongoose này thì phãi khai báo dòng require này */
var mongoose = require('mongoose');


/*                               |           ràng buộc dữ liệu        | tức là ứng với collection huy */
var schema = new mongoose.Schema({ ten: 'string', dienthoai: 'string' },{collection:'nguoidung'});


/* muốn sử dụng cái module này ở file khác t dùng module 
trong đó có           |tên values ở trên| đặt tên là schema luôn */
module.exports = mongoose.model('schema', schema);