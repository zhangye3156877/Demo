
声明一个局部变量：
element {
  --main-bg-color: brown;
}

使用一个局部变量：

element {
  background-color: var(--main-bg-color);
}

声明一个 全局 CSS 变量：

:root {
  --global-color: #666;
  --pane-padding: 5px 42px;
}
使用一个 全局 CSS 变量：

.demo{
   color: var(--global-color);
}