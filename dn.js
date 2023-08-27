var key2 = files.read("./2.txt");
var key3 = files.read("./3.txt");

var url = "https://" + key2 + "/api?dn=1&k=" + key3
http.get(url);