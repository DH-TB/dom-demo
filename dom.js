let p = document.createElement("p");  //创建节点
let p1 = p.cloneNode(true); //克隆p节点

let node = document.createTextNode("node");　　//创建文本节点
let node1 = document.createTextNode("node1");　　//创建文本节点
let div = document.getElementsByClassName("dom");　//获取已有节点

p.appendChild(node);   //将文本添加到节点上
p1.appendChild(node1);

div[0].appendChild(p);　//向div里面追加节点
div[1].appendChild(p1);

p1.removeChild(node1);   //从p1里面删除node1
p.insertBefore(node1,node); //找到node的父节点p,将node1插入
p.replaceChild(node1,node); //找到node的父节点p,用node1替换node,相当于删除node

let id = document.getElementById("id");
let node2 = document.createTextNode("node2");
id.appendChild(node2);
p.insertBefore(node2,node1); //现在p里面没有node,只有node1
