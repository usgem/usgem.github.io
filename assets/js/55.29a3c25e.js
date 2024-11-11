(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{480:function(a,l,s){"use strict";s.r(l);var t=s(0),e=Object(t.a)({},(function(){var a=this,l=a._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[a._v("介绍")]),a._v(" "),l("p",[a._v("记录ollama，"),l("a",{attrs:{href:"https://blog.csdn.net/xiaobing259/article/details/139853520",target:"_blank",rel:"noopener noreferrer"}},[a._v("出处"),l("OutboundLink")],1)])]),a._v(" "),l("h2",{attrs:{id:"一、ollama概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#一、ollama概述"}},[a._v("#")]),a._v(" 一、Ollama概述")]),a._v(" "),l("h3",{attrs:{id:"_1、定义与定位"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1、定义与定位"}},[a._v("#")]),a._v(" 1、定义与定位")]),a._v(" "),l("p",[a._v("Ollama是一个专为本地环境设计的轻量级、可扩展的框架，用于构建和运行大型语言模型（LLMs）。它不仅仅是一个简单的运行时环境，而是一个完整的生态系统，提供了从模型创建、运行到管理的全套解决方案。Ollama的出现，标志着在本地机器上部署和操作复杂AI模型的新纪元。")]),a._v(" "),l("h3",{attrs:{id:"_2、核心功能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2、核心功能"}},[a._v("#")]),a._v(" 2、核心功能")]),a._v(" "),l("p",[a._v("Ollama的核心功能包括但不限于以下几点：")]),a._v(" "),l("ul",[l("li",[a._v("模型运行：支持多种大型语言模型的本地运行，无需依赖远程服务器。")]),a._v(" "),l("li",[a._v("模型管理：提供模型的下载、更新、删除等管理功能。")]),a._v(" "),l("li",[a._v("自定义模型：允许用户通过Modelfile自定义模型参数和行为。")]),a._v(" "),l("li",[a._v("API支持：提供REST API和编程语言库（如Python和JavaScript），方便集成到各种应用中。")]),a._v(" "),l("li",[a._v("多模态能力：支持图像等多模态数据的处理和分析。")]),a._v(" "),l("li",[a._v("安全性：注重数据的加密和安全传输，保护用户隐私。")])]),a._v(" "),l("h3",{attrs:{id:"_3、技术优势"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3、技术优势"}},[a._v("#")]),a._v(" 3、技术优势")]),a._v(" "),l("p",[a._v("Ollama的技术优势在于其对本地化部署的重视，以及对开发者友好的接口设计：")]),a._v(" "),l("ul",[l("li",[a._v("本地化部署：降低了对网络的依赖，提高了数据处理的隐私性。")]),a._v(" "),l("li",[a._v("易用性：简化了模型部署流程，使得即使是初学者也能快速上手。")]),a._v(" "),l("li",[a._v("灵活性：通过Modelfile和API，提供了高度的定制性和集成性。")]),a._v(" "),l("li",[a._v("社区支持：拥有活跃的社区和丰富的文档，便于用户学习和交流。")])]),a._v(" "),l("h3",{attrs:{id:"_4、应用场景"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4、应用场景"}},[a._v("#")]),a._v(" 4、应用场景")]),a._v(" "),l("p",[a._v("Ollama的应用场景广泛，包括但不限于：")]),a._v(" "),l("ul",[l("li",[a._v("自然语言处理：文本生成、翻译、摘要等。")]),a._v(" "),l("li",[a._v("代码生成与辅助：自动生成代码、代码补全等。")]),a._v(" "),l("li",[a._v("教育与研究：作为教学工具，帮助学生理解AI模型的工作原理。")]),a._v(" "),l("li",[a._v("企业解决方案：定制化模型以满足特定业务需求。")])]),a._v(" "),l("h2",{attrs:{id:"二、安装与配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#二、安装与配置"}},[a._v("#")]),a._v(" 二、安装与配置")]),a._v(" "),l("h3",{attrs:{id:"_1、系统要求"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1、系统要求"}},[a._v("#")]),a._v(" 1、系统要求")]),a._v(" "),l("p",[a._v("在开始安装Ollama之前，确保您的系统满足以下基本要求：")]),a._v(" "),l("ul",[l("li",[a._v("操作系统：macOS、Windows 10及以上版本、Linux（包括但不限于Ubuntu、Fedora）")]),a._v(" "),l("li",[a._v("内存：至少4GB RAM，推荐8GB或以上，具体取决于所运行模型的大小")]),a._v(" "),l("li",[a._v("硬盘空间：至少100GB的空闲空间，用于安装Ollama及其模型库")])]),a._v(" "),l("h3",{attrs:{id:"_2、安装方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装方法"}},[a._v("#")]),a._v(" 2、安装方法")]),a._v(" "),l("p",[a._v("Ollama支持多种安装方式，包括通过包管理器、Docker或从源代码编译。")]),a._v(" "),l("ol",[l("li",[a._v("通过包管理器安装\n对于macOS用户，可以使用Homebrew进行安装：")])]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("brew install ollama\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br")])]),l("p",[a._v("对于Linux用户，可以使用包管理器如apt（Ubuntu）或dnf（Fedora）：")]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("curl -fsSL https://ollama.com/install.sh | sh\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br")])]),l("p",[a._v("或")]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("sudo apt install ollama  # Ubuntu\nsudo dnf install ollama   # Fedora\n\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br"),l("span",{staticClass:"line-number"},[a._v("2")]),l("br"),l("span",{staticClass:"line-number"},[a._v("3")]),l("br")])]),l("ol",{attrs:{start:"2"}},[l("li",[a._v("Docker安装\nOllama提供了官方的Docker镜像，可以通过Docker Hub获取并运行：")])]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("docker pull ollama/ollama\ndocker run -p 11434:11434 ollama/ollama\n\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br"),l("span",{staticClass:"line-number"},[a._v("2")]),l("br"),l("span",{staticClass:"line-number"},[a._v("3")]),l("br")])]),l("ol",{attrs:{start:"3"}},[l("li",[a._v("从源代码编译\n如果您希望从源代码编译Ollama，需要先安装Go语言环境和cmake：")])]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("git clone https://github.com/your/ollama.git\ncd ollama\nmake build\n\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br"),l("span",{staticClass:"line-number"},[a._v("2")]),l("br"),l("span",{staticClass:"line-number"},[a._v("3")]),l("br"),l("span",{staticClass:"line-number"},[a._v("4")]),l("br")])]),l("h3",{attrs:{id:"_3、配置指南"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置指南"}},[a._v("#")]),a._v(" 3、配置指南")]),a._v(" "),l("p",[a._v("安装完成后，进行基本配置以确保Ollama能够正常运行。")]),a._v(" "),l("ol",[l("li",[a._v("环境变量配置\n根据需要配置环境变量，例如OLLAMA_HOME指向Ollama的安装目录。")]),a._v(" "),l("li",[a._v("防火墙和网络设置\n确保防火墙规则允许Ollama的端口（默认为11434）进行网络通信。")]),a._v(" "),l("li",[a._v("验证安装\n使用以下命令验证Ollama是否安装成功：")])]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("ollama --version\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br")])]),l("ol",{attrs:{start:"4"}},[l("li",[a._v("模型库访问")])]),a._v(" "),l("p",[a._v("运行Ollama服务前，确保可以访问Ollama的模型库，以便下载和使用预构建的模型。")]),a._v(" "),l("h3",{attrs:{id:"_4、启动ollama服务"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动ollama服务"}},[a._v("#")]),a._v(" 4、启动Ollama服务")]),a._v(" "),l("p",[a._v("Ollama服务可以通过命令行界面（CLI）启动。")]),a._v(" "),l("ul",[l("li",[a._v("使用以下命令启动Ollama服务：")])]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("ollama serve\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br")])]),l("ul",[l("li",[a._v("服务启动后，您可以通过Web界面或API与Ollama进行交互。")])]),a._v(" "),l("h2",{attrs:{id:"四、快速开始"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#四、快速开始"}},[a._v("#")]),a._v(" 四、快速开始")]),a._v(" "),l("h3",{attrs:{id:"_1、启动ollama"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1、启动ollama"}},[a._v("#")]),a._v(" 1、启动Ollama")]),a._v(" "),l("p",[a._v("在您的系统中成功安装Ollama之后，您可以通过以下步骤快速启动并运行您的第一个模型：\n启动服务：打开终端或命令提示符，输入以下命令以启动Ollama服务：")]),a._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[a._v("ollama serve\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br")])]),l("h3",{attrs:{id:"_2、部署运行模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2、部署运行模型"}},[a._v("#")]),a._v(" 2、部署运行模型")]),a._v(" "),l("p",[a._v("Ollama提供了丰富的预构建模型库，您可以根据自己的需求选择合适的模型进行部署。\n"),l("a",{attrs:{href:"https://img-blog.csdnimg.cn/direct/855a09d606be40f5a960d101cf611093.png",target:"_blank",rel:"noopener noreferrer"}},[a._v("出处"),l("OutboundLink")],1)]),a._v(" "),l("p",[a._v("|Model|Parameters|Size｜Download｜\n｜----｜----｜----｜----｜\n|Llama 3| 8B|4.7GB|ollama run llama3|")])])}),[],!1,null,null,null);l.default=e.exports}}]);