// 密码-pc
var key2 = files.read("./2.txt");
var key3 = files.read("./3.txt");
var url = "https://" + key2 + "/api?c=Daodao for Android&k=" + key3;

key();

//判断key
function key() {
  http.get("www.baidu.com", {}, function (res, err) {
    if (err) {
      toast("网络异常");
      return;
    }
    sleep(200);
    toast("检测中...");
    sleep(1500);
    var r = http.get(url);
    var txt = r.body.string();
    if (txt == "Please enter the correct password") {
      toast("密码错误");
      sleep(200);
      m0();
    }
    else {
      toast("密码正确！");
      sleep(200);
      m1();
    }
    sleep(300);
    var dn = require("./dn.js");

    sleep(300);
    toast("已执行，请重启软件!");
  });
}

//m0
function m0() {
  var path = "./4.txt";
  var m = '0';
  var file = open(path, "w");
  file.write(m);
  file.close();
}

//m1
function m1() {
  var path = "./4.txt";
  var m = '1';
  var file = open(path, "w");
  file.write(m);
  file.close();
}