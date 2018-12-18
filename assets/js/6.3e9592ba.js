(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("MDN,提前了解")]),n("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/AlloyTeam/AlloyLever",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("AlloyLever")]),n("OutboundLink")],1)]),t._v(" "),t._m(8),n("p",[n("a",{attrs:{href:"https://github.com/BetterJS/badjs-report",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("badjs-report")]),n("OutboundLink")],1)]),t._v(" "),t._m(9),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"项目中-error-事件的捕捉与处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目中-error-事件的捕捉与处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目中 error 事件的捕捉与处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"error-捕捉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-捕捉","aria-hidden":"true"}},[this._v("#")]),this._v(" error 捕捉")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("重点")])]),this._v(": 由于历史原因，"),s("code",[this._v("window.onerror")]),this._v("和"),s("code",[this._v("element.onerror")]),this._v("接受不同的参数。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 1. 全局 window.error 事件的捕捉")]),t._v("\nwindow"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lineNo"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colNo"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'message==>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'source==>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'lineNo==>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lineNo"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'colNo==>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colNo"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'error==>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//! 由于历史原因，window.onerror和element.onerror接受不同的参数。")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 2. img等标签的 onerror 事件的捕捉")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// (在W3C的DOM Level 2 Events中规定，error事件是会冒泡的，而在DOM Level 3 Events中规定，error事件是不会冒泡的。)")]),t._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'error'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 3. Promise 事件的 reject 捕获")]),t._v("\nwindow"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'unhandledrejection'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reason"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 监听unhandledrejection事件，即可捕获到未处理的Promise错误")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'rejectionhandled'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'rejection handled'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 当一个Promise错误最初未被处理，但是稍后又得到了处理，则会触发rejectionhandled事件")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 4. vue 实例中的报错捕捉")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// vue 提供 errorHandler钩子. https://cn.vuejs.org/v2/api/#errorHandler")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("errorHandler")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// handle error")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 只在 2.2.0+ 可用")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"当前情况分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前情况分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 当前情况分析:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 改写了 window.onerror")]),t._v("\n window"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg\n\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stack"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("processStackMsg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("isOBJByType")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Event"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"--"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"--"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                  "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"::"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("substr")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("500")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      AlloyLever"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          target"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          rowNum"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" line"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          colNum"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" col\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toLowerCase")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'script error'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Script Error: See Browser Console for Detail'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ss "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" AlloyLever"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("settings\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reportUrl"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" src "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reportUrl "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reportUrl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'?'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token string"}},[t._v("'&'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'?'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reportKey "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'='")]),n("span",{attrs:{class:"token operator"}},[t._v("+")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reportPrefix"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'['")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reportPrefix "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),n("span",{attrs:{class:"token string"}},[t._v("']'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" newMsg"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),n("span",{attrs:{class:"token string"}},[t._v("'&t='")]),n("span",{attrs:{class:"token operator"}},[t._v("+")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTime")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("otherReport"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("otherReport"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("otherReport"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("hasOwnProperty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                      src "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'&'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'='")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" ss"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("otherReport"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Image")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" src\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 同腾讯系, 处理方式一样. 改写 window.onerror")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" orgError "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" global"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onerror"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// rewrite window.oerror")]),t._v("\n    global"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stack"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("T")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("processStackMsg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("T")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isOBJByType")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Event"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            newMsg "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"--"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"--"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"::"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        report"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" newMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            target"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            rowNum"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" line"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            colNum"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" col"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            _orgMsg"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" msg\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token function"}},[t._v("_process_log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        orgError "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" orgError"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("apply")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决方案:")])}],!1,null,null,null);o.options.__file="error_handle.md";s.default=o.exports}}]);