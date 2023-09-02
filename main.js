/*
    Beta 1.4.3    by:Reverse     声明:代码仅供学习
*/

"ui";

ui.layout(
    <drawer id="draw" >     //抽屉布局
        <vertical>          //垂直布局
            <appbar>        //顶端栏
                <toolbar id="tool" title="Daodao" />
                <tabs id="tab" />
            </appbar>

            <card w="*" h="45" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">      //卡片布局(固定顶端)
                <vertical padding="18 8" h="auto">
                    <text text="当前版本Beta 1.4.3                  by:Reverse" textSize="16sp" padding="3" textColor="#FFCD7F32" />
                </vertical>
                <View bg="#f44336" h="*" w="10" />
            </card>

            <viewpager id="slide" >     //滑动布局
                <vertical>              //主页
                    <card w="*" h="180" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <text text="域名" textColor="black" textSize="16sp" marginTop="16" />
                            <input hint="不带http(s)的域名" id="i1" />

                            <text text="密码" textColor="black" textSize="16sp" marginTop="16" />
                            <input password="true" hint="显示已加密" id="i2" />
                        </vertical>
                        <View bg="#2196f3" h="*" w="10" />
                    </card>

                    <card w="*" h="80" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">      //选择类型
                        <horizontal padding="18 8" h="auto">
                            <text text="选择类型    " textSize="16sp" textColor="black" />
                            <radiogroup>
                                <checkbox id="r1" text="c 发布     " textColor="blue" />
                                <checkbox id="r2" text="dn 删除     " textColor="blue" />
                            </radiogroup>
                            <radiogroup>
                                <checkbox id="r3" text="e 编辑  " textColor="blue" />
                                <checkbox id="r4" text="a 补充  " textColor="blue" />
                            </radiogroup>
                        </horizontal>
                        <View bg="#ff5722" h="*" w="10" />
                    </card>

                    <horizontal gravity="left">
                        <button id="b2" text="清除数据" w="100" h="50" margin="5 5" />
                        <button id="b3" text="网络测试" w="100" h="50" margin="5 5" />
                        <button id="b5" text="域名检测" w="100" h="50" margin="5 5" />
                        <button id="b6" text="" style="Widget.AppCompat.Button.Borderless" w="50" h="50" margin="5 5" />
                    </horizontal>

                    <horizontal gravity="left">
                        <button id="b7" text="密码检测(单次)" w="120" h="50" margin="5 5" />
                        <button id="b9" text="强制停止脚本" style="Widget.AppCompat.Button.Borderless.Colored" w="120" h="50" margin="5 5" />
                    </horizontal>

                    <button id="b1" text="确定" style="Widget.AppCompat.Button.Colored" w="*" h="50" margin="5 5" />
                </vertical>

                <vertical>     //预览
                    <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">      //类型
                        <horizontal padding="18 8" h="auto">
                            <text text="q= " textSize="16sp" textColor="black" />
                            <input inputType="number" hint="默认10" id="t3" text="10" />
                            <button id="b8" text="查询(旧)" w="100" h="40" margin="5 5" />
                            <button id="b4" text="查询" style="Widget.AppCompat.Button.Colored" w="100" h="40" margin="5 5" />
                        </horizontal>
                        <View bg="#4caf50" h="*" w="10" />
                    </card>
                    <webview id="webview"></webview>
                </vertical>

                <vertical bg="?attr/selectableItemBackground" clickable="true" >       //关于
                    <text text="使用教程：" textSize="16sp" textColor="red" gravity="center" />
                    <text id="t1" textSize="16sp" autoLink="all" textColor="#800080" gravity="left" />
                    <text text="  项目开源地址：" textSize="16sp" textColor="black" gravity="left" />
                    <text id="t6" textSize="16sp" autoLink="all" textColor="black" gravity="left" />
                    <text text="——————————分割线——————————" textSize="16sp" textColor="black" gravity="center" />
                    <text text="  其他版本：" textSize="16sp" textColor="black" gravity="left" />
                    <text id="t5" textSize="16sp" autoLink="all" textColor="black" textStyle="bold" gravity="left" />
                    <text text="——————————广告区——————————" textSize="16sp" textColor="black" gravity="center" />
                    <text text="  打个小广告 ~ " textSize="16sp" textColor="black" gravity="left" />
                    <text id="t2" textSize="16sp" autoLink="all" textColor="black" textStyle="italic" gravity="left" />
                    <text id="t4" textSize="16sp" autoLink="all" textColor="black" textStyle="italic" gravity="center_horizontal" />
                </vertical>

            </viewpager>
        </vertical>
    </drawer>
);

//关于
ui.t6.setText("  Github： github.com/12thstan/daodao-android\n  Gitee： gitee.com/c12th/daodao-android\n");
ui.t1.setText("  1.  请确保在网络正常下使用。\n  2.  填入域名和密码点击确定即可。\n  3.  第一次使用和修改密码都需要点击密码检测。\n  4.  只查询(需要悬浮窗权限)和域名检测可以只填域名。\n  5.  每次修改域名和密码都需要点击确定。\n");
ui.t5.setText("  Daodao for Ios icloud.com/shortcuts/06fc462d4b4b4f668b16cb11e2e9d010\n  作者：冰糖红茶 https://github.com/Rock-Candy-Tea\n\n  Daodao for Bash github.com/LittFlower/daodao-bash\n  作者：许江一墨 https://github.com/LittFlower\n")
ui.t2.setText("  GitHub: github.com/12thstan\n  Gitee: gitee.com/c12th\n  CSDN: blog.csdn.net/qq_39788788\n  Blog: blog.c12th.cn\n");
ui.t4.setText("by:Reverse\n");

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("日志");
    menu.add("退出");
});

//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "日志":
            alert("上个版本Beta 1.4.2(D) \n" +
                "\n 1.查询(旧)加上空位检测，并修正其他空位检测 \n" +
                "\n 2.完善了日志和关于页面的内容 \n" +
                "\n 3.新添加了启动画面 \n" +
                "\n 4.新添加强制停止脚本按钮 \n" +
                "\n 2023.08.29"
            );
            alert("当前版本Beta 1.4.3 \n" +
                "\n 1.修改部分空位检测 \n" +
                "\n 2.修复一个bug \n" +
                "\n 3.微调了下部分配置 \n" +
                "\n 2023.09.03"
            );
            break;

        case "退出":
            ui.finish();
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.tool);

//滑动布局
ui.slide.setTitles(["主页", "预览", "关于"])
ui.tab.setupWithViewPager(ui.slide)


/*-----------------------------------------------------------------*/
//main
ui.b1.on("click", () => {
    threads.start(function () {
        sleep(200);

        //c
        if (ui.r1.isChecked()) {
            dialogs.confirm("c 增加一条叨叨", "", function (b) {
                if (b) {
                    dialogs.rawInput("请输入即将 发布的内容:", "", function (str) {
                        http.get("www.baidu.com", {}, function (res, err) {
                            if (err) {
                                toast("网络异常!");
                                return;
                            }
                            sleep(200);
                            var txt = files.read("./4.txt");
                            if (txt == '0') {
                                toast("密码错误!");
                                return;
                            }
                            if (txt == '2') {
                                toast("没有密码!");
                                return;
                            }
                            sleep(200);
                            var url = ui.i1.text() + "/api?c=" + str + "&k=" + ui.i2.text();
                            sleep(200);
                            toast("发送中，请稍等～");
                            sleep(200);
                            if (str == null) {
                                toast("没有内容!");
                                return;
                            } else {
                                if (res.statusCode == 200) {
                                    var r = http.get(url);
                                    var txt = r.body.string();
                                    if (txt == "Please enter the correct password") {
                                        toast("密码错误，发送失败!");
                                        sleep(200);
                                        m0();
                                    }
                                    else { toast("发送成功"); }
                                }
                            }
                        });
                    });
                }
            });
        }

        //dn
        if (ui.r2.isChecked()) {
            dialogs.confirm("dn 删除第一条/n条最新的叨叨", "", function (b) {
                if (b) {
                    dialogs.rawInput("请输入即将 删除第n条叨叨:", "1", function (str) {
                        http.get("www.baidu.com", {}, function (res, err) {
                            if (err) {
                                toast("网络异常!");
                                return;
                            }
                            toast("执行中...");
                            sleep(200);
                            var txt = files.read("./4.txt");
                            if (txt == '0') {
                                toast("密码错误!");
                                return;
                            }
                            if (txt == '2') {
                                toast("没有密码!");
                                return;
                            }
                            sleep(200);
                            var url = ui.i1.text() + "/api?dn=" + str + "&k=" + ui.i2.text();
                            sleep(200);
                            if (str == null) {
                                toast("没有内容!");
                                return;
                            } else {
                                if (res.statusCode == 200) {
                                    var r = http.get(url);
                                    var txt = r.body.string();
                                    if (txt == "Please enter the correct password") {
                                        toast("密码错误，删除失败!");
                                        sleep(200);
                                        m0();
                                    }
                                    else { toast("已删除"); }
                                }
                            }
                        });
                    });
                }
            });
        }

        //e
        if (ui.r3.isChecked()) {
            dialogs.confirm("e 编辑第n条叨叨替换内容", "", function (b) {
                if (b) {
                    dialogs.rawInput("请输入即将 编辑第n条:", "1", function (str) {
                        if (str == 0) {
                            toast("执行失败，没有内容");
                        } else {
                            dialogs.rawInput("请输入 叨叨内容:", "", function (gtr) {
                                http.get("www.baidu.com", {}, function (res, err) {
                                    if (err) {
                                        toast("网络异常!");
                                        return;
                                    }
                                    toast("执行中...");
                                    sleep(200);
                                    var txt = files.read("./4.txt");
                                    if (txt == '0') {
                                        toast("密码错误!");
                                        return;
                                    }
                                    if (txt == '2') {
                                        toast("没有密码!");
                                        return;
                                    }
                                    sleep(200);
                                    var url = ui.i1.text() + "/api?e=" + str + "," + gtr + "&k=" + ui.i2.text();
                                    sleep(200);
                                    if (str == null) {
                                        toast("没有内容!");
                                        return;
                                    } else {
                                        if (res.statusCode == 200) {
                                            var r = http.get(url);
                                            var txt = r.body.string();
                                            if (txt == "Please enter the correct password") {
                                                toast("密码错误，替换失败!");
                                                sleep(200);
                                                m0();
                                            }
                                            else { toast("已替换"); }
                                        }
                                    }
                                });
                            });
                        }
                    });
                }
            });
        }

        //a
        if (ui.r4.isChecked()) {
            dialogs.confirm("a 给第n条叨叨增加内容", "", function (b) {
                if (b) {
                    dialogs.rawInput("请输入即将 增加第n条:", "1", function (str) {
                        if (str == 0) {
                            toast("执行失败，没有内容");
                        } else {
                            dialogs.rawInput("请输入 叨叨内容:", "", function (gtr) {
                                http.get("www.baidu.com", {}, function (res, err) {
                                    if (err) {
                                        toast("网络异常!");
                                        return;
                                    }
                                    toast("执行中...");
                                    sleep(200);
                                    var txt = files.read("./4.txt");
                                    if (txt == '0') {
                                        toast("密码错误!");
                                        return;
                                    }
                                    if (txt == '2') {
                                        toast("没有密码!");
                                        return;
                                    }
                                    sleep(200);
                                    var url = ui.i1.text() + "/api?a=" + str + "," + gtr + "&k=" + ui.i2.text();
                                    sleep(200);
                                    if (str == null) {
                                        toast("没有内容!");
                                        return;
                                    } else {
                                        if (res.statusCode == 200) {
                                            var r = http.get(url);
                                            var txt = r.body.string();
                                            if (txt == "Please enter the correct password") {
                                                toast("密码错误，发送失败!");
                                                sleep(200);
                                                m0();
                                            }
                                            else { toast("已发送"); }
                                        }
                                    }
                                });
                            });
                        }
                    });
                }
            });
        }
    });
})

//关闭所有脚本
ui.b9.on("click", function () {
    engines.stopAllAndToast();
});

//复选判定
ui.r1.on("check", (checked) => {
    if (ui.r1.isChecked()) {
        ui.r2.setChecked(false)
        ui.r3.setChecked(false)
        ui.r4.setChecked(false)
    }
});

ui.r2.on("check", (checked) => {
    if (ui.r2.isChecked()) {
        ui.r1.setChecked(false)
        ui.r3.setChecked(false)
        ui.r4.setChecked(false)
    }
});

ui.r3.on("check", (checked) => {
    if (ui.r3.isChecked()) {
        ui.r1.setChecked(false)
        ui.r2.setChecked(false)
        ui.r4.setChecked(false)
    }
});

ui.r4.on("check", (checked) => {
    if (ui.r4.isChecked()) {
        ui.r1.setChecked(false)
        ui.r2.setChecked(false)
        ui.r3.setChecked(false)
    }
});

//空位检测
ui.b1.click(() => {
    var text = ui.i1.text();
    if (text.length == 0) {
        ui.i1.setError("输入不能为空!");
        return;
    }

    key2();
    key3();
    toast("已保存");
});

//网络检测
ui.b3.on("click", () => {
    threads.start(function () {
        http.get("www.baidu.com", {}, function (res, err) {
            if (err) {
                toast("网络异常!");
                return;
            }
            toast("网络正常");
        });
    });
})

ui.b3.on("long_click", function () {
    threads.start(function () {
        var txt = files.read("./4.txt");
        if (txt == '0') {
            toast("密码错误!");
            return;
        }
        if (txt == '2') {
            toast("没有密码!");
            return;
        }
        sleep(500);
        var key2 = files.read("./2.txt");
        var key3 = files.read("./3.txt");
        var url = "https://" + key2 + "/api?dn=1&k=" + key3
        http.get(url);
        sleep(200);
    });
    toast("已删除当前第一条说说");
})


//查询
ui.b8.on("click", function () {
    //悬浮窗权限
    if (!是否有悬浮窗权限()) {
        toast("请打开悬浮窗权限!");
        申请悬浮窗权限();
        return;
    }
    var text = ui.i1.text();
    if (text.length == 0) {
        ui.i1.setError("输入不能为空!");
        return;
    }
    threads.start(function () {
        toast("执行中，请稍等...");
        sleep(300);
        console.clear();
        sleep(200);
        console.hide();
        sleep(200);

        var url = "https://" + ui.i1.text() + "/api?q=" + ui.t3.text()
        var r = http.get(url);
        var t = r.body.string();
        sleep(200);
        toast("已获取");
        sleep(200);
        var txt = /("content":[\s\S]*?,|"from":[\s\S]*?,)/g;
        var a = t.match(txt);
        var res;
        a.forEach((child, index) => {
            if (index % 2 == 0) {
                res = "";
                var one = child.match(/"[\s\S]*?"/g)[1];
                var u8 = unescape(one.replace(/\\u/g, '%u'));
                res = u8 + "\n";
            } else {
                var two = child.match(/"[\s\S]*?"/g)[1];
                res += two + "\n";
                console.show();
                console.setTitle("摸鱼", "#ff11ee00", 30);
                console.setSize(1000, 1000);
                console.setCanInput(false);
                log(res);

            }
        })
    });
})

ui.b4.on("click", function () {
    var text = ui.i1.text();
    if (text.length == 0) {
        ui.i1.setError("输入不能为空!");
        return;
    }
    threads.start(function () {
        toast("执行中，请稍等...");
        sleep(200);
    });
    pc2();
})


//密码检测
ui.b7.on("click", function () {
    var text = ui.i2.text();
    if (text.length == 0) {
        ui.i2.setError("输入不能为空!");
        m2();
        return;
    }
    var pc = require("./pc.js");
});


//域名检测
ui.b5.on("click", function () {
    var text = ui.i1.text();
    if (text.length == 0) {
        ui.i1.setError("输入不能为空!");
        return;
    }
    threads.start(function () {
        http.get(ui.i1.text(), {}, function (res, err) {
            if (err) {
                toast("域名异常!");
                return;
            }
            toast("域名正常，可访问");
        });
    });
})


//?
ui.b6.on("click", function () {
    toast("呀");
})

ui.b6.on("long_click", function () {
    toast("听说长按 网络测试 可以删除当前第一条说说");
})


//本地储存
var save = storages.create("user")

//读取数据
var input = save.get("i1")
if (input) {
    ui.i1.setText(input)
};
var input = save.get("i2")
if (input) {
    ui.i2.setText(input)
};

ui.b1.click(function () {
    var input = ui.i1.text()
    save.put("i1", input)
})

ui.b1.click(function () {
    var input = ui.i2.text()
    save.put("i2", input)
})

ui.b2.on("click", () => {
    threads.start(function () {
        save.clear()
        sleep(200);
        files.write("./2.txt", "");
        files.write("./3.txt", "");
        files.write("./4.txt", 2);
        sleep(200);
        toast("已清除，请重启软件");
    });
})


/*-----------------------------------------------------------------*/
//key
function key2() {
    var path = "./2.txt";
    var key = ui.i1.text();
    var file = open(path, "w");
    file.write(key);
    file.close();
}

function key3() {
    var path = "./3.txt";
    var key1 = ui.i2.text();
    var file = open(path, "w");
    file.write(key1);
    file.close();
}


//q-pc
function pc2() {
    let webview = ui.webview;
    var client = android.webkit.WebViewClient;

    var settings = webview.getSettings();
    settings.setUserAgentString(
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    );
    function 网页中获取网页源代码() {
        r = document.getElementsByTagName("html")[0].innerText;
        return r;
    }
    var t = new JavaAdapter(client, {
        onPageFinished: function (view) {
            webview.evaluateJavascript(";" + 网页中获取网页源代码.toString() + ";网页中获取网页源代码();", function (s) {
                toast("已获取");
            });
        },
    });

    webview.setWebViewClient(t);
    webview.loadUrl("https://" + ui.i1.text());
}


//悬浮窗权限
function 是否有悬浮窗权限() {
    return new android.provider.Settings().canDrawOverlays(context);
}

function 申请悬浮窗权限() {
    var intent = new Intent();
    intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");
    activity.getEventEmitter().on("activity_result", function (requestCode, resultCode, intentData) { });
    activity.startActivityForResult(intent, 8000);
}

//m2
function m2() {
    var path = "./4.txt";
    var m = '2';
    var file = open(path, "w");
    file.write(m);
    file.close();
}

//m0
function m0() {
    var path = "./4.txt";
    var m = '0';
    var file = open(path, "w");
    file.write(m);
    file.close();
}
