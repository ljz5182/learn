// 为实例提供挂载元素。值可以是 CSS 选择符，或实际 HTML 元素，或返回 HTML 元素的函数。注意元素只用作挂载点。如果提供了模板则元素被替换，除非 replace 为 false。元素可以用 vm.$el 访问。

// 用在 Vue.extend 中必须是函数值，这样所有实例不会共享元素。

// 如果在初始化时指定了这个选项，实例将立即进入编译过程。否则，需要调用 vm.$mount()，手动开始编译。