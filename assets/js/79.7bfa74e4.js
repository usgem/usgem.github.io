(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{498:function(t,r,a){"use strict";a.r(r);var s=a(0),e=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://cycyzj.bjchy.gov.cn:8080/AdminLogin.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("发改委产业资金引导平台-管理端"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"http://cycyzj.bjchy.gov.cn:8080/login.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("发改委产业资金引导平台-企业端"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"基本信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[t._v("#")]),t._v(" 基本信息")]),t._v(" "),r("p",[t._v("服务器SSL证书密码 cbd2021")]),t._v(" "),r("p",[t._v("SSL证书在的d://ssl/ca/2021")]),t._v(" "),r("h2",{attrs:{id:"运维事项记录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运维事项记录"}},[t._v("#")]),t._v(" 运维事项记录")]),t._v(" "),r("h3",{attrs:{id:"开启新批次"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启新批次"}},[t._v("#")]),t._v(" 开启新批次")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("用发改委账号登陆正式系统的后台,在资金申报管理模块中添加新的批次（建议用正式系统）")]),t._v(" "),r("ul",[r("li",[t._v("添加新批次时，系统会自动的将其他产业办的批次进行创建。")]),t._v(" "),r("li",[t._v("但运维平台的批次管理模块只能单条进行手动创建。")])])]),t._v(" "),r("li",[r("p",[t._v("将批次字典表中ProjectApply_TimeDic 上半年申报类别拷贝一份关联今年的总批次id")]),t._v(" "),r("ul",[r("li",[t._v("总批次Id 需要查找ProjectApply_Time表parentid=0 并且是部门Id为发改委的，并且为今年新增批次")])])]),t._v(" "),r("li",[r("p",[t._v("如果只想设置指定的类别允许申报，可以去运维平台中批次管理页面找到是否开启字段，设置成否")])]),t._v(" "),r("li",[r("p",[t._v("如果需要更改附件下载模版，需要到ProjectApply_TimeDic表中Url字段进行附件调整（非必要）")]),t._v(" "),r("ul",[r("li",[t._v("如附件模版无变化，不需要进行更改，使用上一批次模版即可")]),t._v(" "),r("li",[t._v("如有变化，附件应进行压缩，命名规则为 批次名称+类别名称.rar格式")])])])]),t._v(" "),r("h3",{attrs:{id:"新批次中增加最新申报类别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新批次中增加最新申报类别"}},[t._v("#")]),t._v(" 新批次中增加最新申报类别")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("如果开启的新批次中出现从为有过的新类别，需要先在Dic_Class表中找到对应的申报大类，在其下方新增类别数据")])]),t._v(" "),r("li",[r("p",[t._v("在ProjectApply_TimeDic表中找到新开批次，同理在对应的申报大类下，增加新类别数据")])])]),t._v(" "),r("h3",{attrs:{id:"上传及替换申报模版"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#上传及替换申报模版"}},[t._v("#")]),t._v(" 上传及替换申报模版")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("登陆"),r("a",{attrs:{href:"http://www.cbdtelecom.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("电子政务部管理系统"),r("OutboundLink")],1),t._v("查看**.***.247.58服务器账号密码（如无权限查看，请找相关人员进行咨询）。")])]),t._v(" "),r("li",[r("p",[t._v("远程登陆服务器（必须政务网或VPN）")])]),t._v(" "),r("li",[r("p",[t._v("打开模版文件存放地址D:\\WEB\\FgwFundApply\\file\\ApplyTable，文件按照命名规则更改后，将附件上传到此地址")])]),t._v(" "),r("li",[r("p",[t._v("文件命名规则，批次名称+类别名称.rar")])])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("\n2020年上半年XXX.rar\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("ol",{attrs:{start:"5"}},[r("li",[t._v("打开运维模块中的批次类别管理中，更改对应批次类别中的附件地址,或使用数据库进行更改，注意ProjectApply_Time_Id，DicId 一定要查看对。")])]),t._v(" "),r("div",{staticClass:"language-sql line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" ProjectApply_TimeDic "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" ApplyFileUrl"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../file/ApplyTable/xxx.rar'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ProjectApply_Time_Id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" DicId"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("h3",{attrs:{id:"产业办账号密码丢失"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#产业办账号密码丢失"}},[t._v("#")]),t._v(" 产业办账号密码丢失")]),t._v(" "),r("p",[r("strong",[t._v("第一步")]),r("br"),t._v("\n确认丢失账号的用户名，登陆"),r("a",{attrs:{href:"http://www.cbdtelecom.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("电子政务部管理系统"),r("OutboundLink")],1),t._v("查看电-运维管理系统用户（如无权限查看，请找相关人员进行咨询）。")]),t._v(" "),r("p",[r("strong",[t._v("第二步")]),r("br"),t._v("\n将密码下方文字提示中的32位码粘贴到密码文本框中，点击保存，这时密码将修改为000000")])])}),[],!1,null,null,null);r.default=e.exports}}]);