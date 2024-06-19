/***** ***** ***** ***** *****

[task_local]
1 0 * * * https://raw.githubusercontent.com/shling680/QuanX/main/scripts/yanluo.js, tag=阎王签到, enabled=true

***** ***** ***** ***** *****/


const number = Math.floor(Math.random() * 10000);
const yanluo = new Date()+"\n时不待我，吾辈当争分夺秒...";
$notify("阎王签到", "👻 签到成功 寿元减少"+number+"天", yanluo);
$done();
