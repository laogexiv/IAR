var text = document.querySelector('.typingtext');
var messages = ["Hello", "Hi", "Hey"];
var index = 0;

function changeText() {
    typingtext.innerHTML = messages[index];
    index = (index + 1) % messages.length;
    setTimeout(changeText, 1000);
}

changeText();

function titleshow() {
    document.getElementById("welcome").style.color = "rgb(255, 255, 255)";
}

function titlehigh() {
    document.getElementById("welcome").style.color = "rgba(255, 255, 255, 0)";
}

// function copyIP() {
//     // 当函数被调用时，将指定文字(IP地址)复制到剪贴板
//     navigator.clipboard.writeText("iar.laogexiv.top");
//     alert("IP地址已复制到剪贴板");
// }

// function copyGroup() {
//     // 当函数被调用时，将指定文字(IP地址)复制到剪贴板
//     navigator.clipboard.writeText("711163656");
//     alert("QQ群号已复制到剪贴板");
// }

function copyIP() {
    const ip = "iar.lvix.top";
    copyTextToClipboard(ip);
}

function copyIPSEC() {
    const ip = "iar.laogexiv.top";
    copyTextToClipboard(ip);
}

function copyGroup() {
    const group = "711163656";
    copyTextToClipboard(group);
}

// 当Clipboard API不可用时，我们可以使用document.execCommand结合创建一个临时的<textarea>元素来实现复制功能。考虑到document.execCommand在某些浏览器中可能被弃用，以下代码提供了一个兼容方案，它在不支持Clipboard API的浏览器中使用document.execCommand来尝试复制文本。
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Copy Text to Clipboard Fallback</title>
// </head>
// <body>
//     <button onclick="copyIP()">复制IP地址</button>
//     <button onclick="copyQQGroup()">复制QQ群号</button>

//     <script>
function copyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? '复制成功' : '复制失败';
        alert(msg);
    } catch (err) {
        console.error('无法复制到剪贴板', err);
    }

    document.body.removeChild(textArea);
}

//         function copyIP() {
//             const ip = "iar.laogexiv.top";
//             copyTextToClipboard(ip);
//         }

//         function copyQQGroup() {
//             const group = "711163656";
//             copyTextToClipboard(group);
//         }
//     </script>
// </body>
// </html>

// 在上述代码中：
//   1.copyTextToClipboard函数：
//       1.创建了一个<textarea>元素，将需要复制的文本放入其中。
//       2.将<textarea>元素添加到DOM中，然后聚焦和选中这个元素。
//       3.使用document.execCommand('copy')来执行复制操作。
//       4.成功复制后，弹出一个警告框告知用户复制成功或失败。
//       5.最后，移除创建的<textarea>元素。
//   2.copyIP和copyQQGroup函数：
//       1.分别调用copyTextToClipboard函数，传入需要复制的IP地址或QQ群号。
// 这种方法适用于大部分浏览器，但请注意document.execCommand在某些现代浏览器中可能已被弃用或不被支持。如果在不支持的浏览器中运行，可能需要提供其他备选方案，或提醒用户手动复制。

function PeopleAboutEaster() {
    PA = document.getElementById("people-about")
    PA.textContent = prompt("这是一个屑菜单, 随便输入点什么吧")
}

function PeopleAbout(number) {
    var a = [
        "[X_star] 这是和IAR合作的服务器 [X_star NetWork] 的腐竹 X_star, X_star创立于IAR之前, 为IAR服务器多次提供技术支持. 双方互帮互助, 之后也会考虑进行联合活动. 详见: [Java Minecraft Server IP] mc.tbedu.top",
        "[Lurir_ama] 这是和IAR合作的服务器 [Byside 相伴同行] 的腐竹 企鹅, Byside创立于IAR之后, 与IAR服务器进行过联合活动, 有着一些不为人知的历史, 详见[WebSite] mc.byside.top",
        "[mc_keja] keja在 2024年1月27日 加入服务器, 属于开元老玩家, 有着较高的建筑技术, 在 [粘液科技] 中能见到其代表作 [桃李院&广寒宫] , 同时也经常帮助新玩家, 是个十分友好的人物 (与群里某个提纯脑啡肽供应商截然相反)",
        "[wase123] wase在 [null] 加入服务器, 属于开元老玩家, 有着较高的建筑技术, 其技术含量堪比隔壁友商 Byside 大部分建筑",
        "[rushi2012] rushi2012在 2024年2月17日 加入服务器, 属于开元老玩家, 腐竹亲自认证的粘液大佬, 有着极高的粘液技术, 对新人非常友好, 是个十分友好的人物 (与群里某个提纯脑啡肽供应商截然相反)",
        "[lukelzlz] luke在 2024年6月14日 加入服务器, 有着很多的技术, 同时有着部分资源, 曾经给服务器提供过一些",
        "[村庄] 村庄在 2024年2月17日 加入服务器, 因为是腐竹学长,所以是吉祥物 [等压! ] (其实有些红石技术, 只不过没帮上过啥忙暂列吉祥物)",
        "[Balle31] ImBalle31在 2024年2月17日 加入服务器, 属于开元老玩家, 有着很多的相关技术, 在服务器建设初期曾在很多功能上提供技术支持",
        "[AETEHL] 红莲在 2024年10月13日 加入服务器, 在2024年第四季度与腐竹在B站直播间认识, 曾为服务器多次进行宣传, 很多游戏都是其擅长领域, 详见[Bilibili UID]1480788938",
        "[Sen] SentientRook131 在 2024年1月27日 加入服务器, X_star服务器的技术 (详见: X_star), 同时也是IAR服务器的技术, 为服务器提供少许技术支持",
        "[yuanxiu] yuanxiu 在 [null] 加入服务器, 属于开元老玩家, 腐竹亲自认证的粘液大佬, 有着极高的粘液技术, 对新人非常友好, 是个十分友好的人物 (与群里某个提纯脑啡肽供应商截然相反) (同时也是腐竹同学)"
    ]
    PA = document.getElementById("people-about")
    PA.textContent = a[number]
}