---
title: 虚拟DOM
date: 2018-10-30 18:36:13
tags: DOM
categories: 框架
---

# 0.虚拟 DOM

## I.先来看看原生 DOM 是怎么工作的

1. 用户操作 DOM 的时候，有一个元素的数据变了
2. 删除所有 DOM ，重新创建，重新渲染，把新 DOM 丢进去
3. 用户又创建了一条数据
4. 好了，继续重做 1. 2. 两步。

有没有感觉这一来二去造成了超大的性能开销,数据量特别大同时操作频繁的时候，会造成卡顿。

## II.有没有什么解决的办法呢？

1. 我写一个 JS，和真实的 DOM 一一映射
2. 在需要操作的时候，比较新旧数据的改变。操作 JS 的数据结构，JS 的数据量很小
3. 无论是排序还是处理都可以从容运行
4. 完成处理以后再把他变成一个真实的 DOM
5. 这样完成对虚拟的 DOM 进行操作后再进行渲染

通过对 JS 的数据操作，完成对真实 DOM 的数据操作

# 1.如何实现

## I.这里是一个简单的实现方法

不考虑复杂情况的前提下，参考以下代码：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
   <div id="root"></div>
   <button id="btn">change</button>
</body>
</html>
```

```
class VNode {
  constructor(tag, children, text) {
    this.tag = tag
    this.text = text
    this.children = children
  }

  render() {
    if(this.tag === '#text') {
      return document.createTextNode(this.text)
    }
    let el = document.createElement(this.tag)
    this.children.forEach(vChild => {
      el.appendChild(vChild.render())
    })
    return el
  }
}

function v(tag, children, text) {
  if(typeof children === 'string') {
    text = children
    children = []
  }
  return new VNode(tag, children, text)
}


/*

let nodesData = {
  tag: 'div',
  children: [
    {
      tag: 'p',
      children: [
        {
          tag: 'span',
          children: [
            {
              tag: '#text',
              text: 'oracle.zealot.fun'
            }
          ]
        }
      ]
    },
    {
      tag: 'span',
        children: [
          {
            tag: '#text',
            text: 'zealot.fun'
          }
        ]
    }
  ]
}

 */


let vNodes = v('div', [
      v('p', [
        v('span', [ v('#text', 'oracle.zealot.fun') ] )
        ]
      ),
      v('span', [
        v('#text',  'zealot.fun')
        ])
    ]
  )
console.log(vNodes.render())




function patchElement(parent, newVNode, oldVNode, index = 0) {
  if(!oldVNode) {
    parent.appendChild(newVNode.render())
  } else if(!newVNode) {
    parent.removeChild(parent.childNodes[index])
  } else if(newVNode.tag !== oldVNode.tag || newVNode.text !== oldVNode.text) {
    parent.replaceChild(newVNode.render(), parent.childNodes[index])
  }  else {
    for(let i = 0; i < newVNode.children.length || i < oldVNode.children.length; i++) {
      patchElement(parent.childNodes[index], newVNode.children[i], oldVNode.children[i], i)
    }
  }
}



let vNodes1 = v('div', [
      v('p', [
        v('span', [ v('#text', 'oracle.zealot.fun') ] )
        ]
      ),
      v('span', [
        v('#text',  'zealot.fun')
        ])
    ]
  )

let vNodes2 = v('div', [
      v('p', [
        v('span', [
          v('#text', 'oracle.zealot.fun')
          ] )
        ]
      ),
      v('span', [
        v('#text',  'zealot.fun'),
        v('#text',  'content')
        ])
    ]
  )
const root = document.querySelector('#root')
patchElement(root, vNodes1)
```

- DOM 本身就是一个包含很多数据的对象
- 我们通过用 JS 写一个简化的对象
- 操作 DOM 时改变这个简化对象的数据
- render 时通过 appendChild 添加到 DOM 上

**但是我们发现一个问题：**

- 这样开销依然很大,即便更改一个很小的数据，也会有多次的 createElement 操作
- 于是乎有了下面的 patchElement
- 审查判断条件：
  1. 如果存在新 DOM ，但是没有旧 DOM ，就把新 DOM 渲染到页面
  2. 如果什么新旧 DOM 都没有传入，那么删除目标父元素的第一个子元素
  3. 如果新标签不等于旧标签，或新内容不等于旧内容，那么用新 DOM 替换旧 DOM
  4. 其他情况，递归遍历找不同，把不同的替换掉
- 到这里就完成了动态改变，动态查找，动态渲染。

**简单情况下适用，不包括复杂情况：**
例如 DOM 节点换位置，调整顺序
不过这个例子已经可以体现虚拟 DOM 的原理了
