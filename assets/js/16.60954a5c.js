(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{440:function(s,v,i){"use strict";i.r(v);var n=i(0),a=Object(n.a)({},(function(){var s=this,v=s._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h2",{attrs:{id:"mac-删除windows系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mac-删除windows系统"}},[s._v("#")]),s._v(" Mac 删除Windows系统")]),s._v(" "),v("p",[v("a",{attrs:{href:"https://sspai.com/post/43699",target:"_blank",rel:"noopener noreferrer"}},[s._v("具体讲解"),v("OutboundLink")],1),v("br"),s._v("\n注意：本教程理论上来说适用于 macOS Sierra 及以上系统，任何使用纯固态硬盘的 MacBook，MacBook Air，MacBook Pro， Mac Pro，iMac，iMac Pro； 但由于系统不同，不一定适用于使用「融合硬盘」的 iMac，融合硬盘的修复指令在文末。")]),s._v(" "),v("p",[s._v("若你需要我的帮助，或当前机型不在本文适用范围内，请参考文末有偿服务。iMac 将 Windows 10 安装在固态硬盘请参考关联阅读：解救融合硬盘版 iMac：将 Windows 10 放入内置固态硬盘中")]),s._v(" "),v("p",[s._v("过去，通过 Mac 系统自带的工具「启动转换助理」安装或者移除 Windows 10 十分方便；然而在 macOS 版本更新至 High Sierra 后，你可能发现「安装或移除 Windows 7或更高版本」的按钮变成了灰色，没法移除 Windows 分区；或者，移除分区后那一部分空间就「不见了」。")]),s._v(" "),v("p",[s._v("本文教你用命令行来解决这一卸载难题。")]),s._v(" "),v("p",[s._v("此操作需要一定动手能力，一共三步，分别是下文中的「2，3，4」。步骤完成后现有 Mac 系统不会有任何变化，Windows 10 系统会被彻底移除，Mac 系统将会重新拥有全部硬盘空间。")]),s._v(" "),v("p",[s._v("【此步已废弃，请从第二步开始即可】1. 打开「磁盘工具」- 从左侧选中「BOOTCAMP」- 从上方工具图标中选择「抹掉」工具 - 弹出的对话框「格式」那一栏选择「APFS」- 点击「抹掉」按钮。若你已经尝试了这一步，请看文末「更新 2」，并输入其中的指令。")]),s._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("p",[s._v("打开「终端」输入代码 diskutil list，并按「Return」来显示所有磁盘信息，记下 BOOTCAMP 盘所对应的「IDENTIFIER」，我这里所对应的盘符是 disk0s3；")])]),s._v(" "),v("li",[v("p",[s._v("继续在「终端」输入代码 sudo diskutil eraseVolume free none disk0s3 并按「Return」来彻底移除刚刚记录下的这个磁盘，这里的 disk0s3 需要根据你的实际 BOOT CAMP 磁盘盘符替换；")])]),s._v(" "),v("li",[v("p",[s._v("继续在「终端」输入代码 sudo diskutil apfs resizeContainer disk0s2 0 并按「Return」来将所有可用空间恢复到 Mac 盘，这里的 disk0s2 需要根据你的实际 Mac 磁盘盘符替换。")])])]),s._v(" "),v("p",[s._v("究其原因，是因为在 macOS High Sierra 中，系统的底层文件系统被彻底替换为 APFS， 但是系统自带的「磁盘工具」并未针对APFS 进行更新，很多常用操作（比如磁盘扩容）无法用它实现，导致现阶段移除 Windows 10 系统分区后重新分配这部分磁盘空间异常繁琐。")]),s._v(" "),v("p",[s._v("如果你安装了 Mac、Windows 10 双系统启动，但出于各种原因，需要将 Windows 10 移除、 使 Mac 恢复到刚买回来初始单个系统盘状态的，却发现「启动转换助理」不奏效，可是试试本文提供的命令行方法。")]),s._v(" "),v("p",[s._v("本文只专注于从 Mac 上移除 Windows 10 且料理后续磁盘问题，不会讲解如何安装双系统，如有需求欢迎在评论中提及，将会单独开文讲解流程。")]),s._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[s._v("\ndiskutil list\n\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" diskutil eraseVolume "),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" none disk0s3\n\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" diskutil apfs resizeContainer disk0s2 "),v("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br"),v("span",{staticClass:"line-number"},[s._v("6")]),v("br"),v("span",{staticClass:"line-number"},[s._v("7")]),v("br")])]),v("h2",{attrs:{id:"mac-删除windows系统后，重启还是引导进入windows系统解决方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mac-删除windows系统后，重启还是引导进入windows系统解决方法"}},[s._v("#")]),s._v(" Mac 删除Windows系统后，重启还是引导进入windows系统解决方法")]),s._v(" "),v("p",[v("a",{attrs:{href:"https://www.jianshu.com/p/c4db4cdeed87",target:"_blank",rel:"noopener noreferrer"}},[s._v("处理方法"),v("OutboundLink")],1)]),s._v(" "),v("p",[s._v("由于我的 mac 之前装了 Windows 双系统，然后 mac 系统升级后，我想把 Windows 系统给删掉，但是发现升级 mac 系统以后不能用 Boot Camp 删除 Windows 了，然后我就用 磁盘工具 把 Windows 分区给删除合并到 mac 分区了，但是发现系统虽然删除了，但是开机按住 option 键还是会出现 Windows 启动盘，虽然没什么影响但是强迫症当然不能忍 ，下面就记录一下解决方法。")]),s._v(" "),v("p",[s._v("作者：Jonzzs\n链接：https://www.jianshu.com/p/c4db4cdeed87\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),s._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[s._v("因为以下命令需要 root 用户执行，所以打开终端执行以下命令切换到 root 用户，输入密码后回车即可。\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("  \n接着在终端执行以下命令，作用是在 Macintosh HD 根目录新建一个目录 mnt 。\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /mnt  \n接着在终端执行以下命令，作用是将该 windows 盘挂在到 /mnt 目录下。\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" msdos /dev/disk0s1 /mnt  \n\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br"),v("span",{staticClass:"line-number"},[s._v("6")]),v("br"),v("span",{staticClass:"line-number"},[s._v("7")]),v("br")])]),v("ul",[v("li",[v("p",[s._v("打开 Finder ，在 Macintosh HD 根目录会看到一个叫 EFI 的磁盘（桌面应该也会显示这个磁盘，和 Finder 置有关）。")])]),s._v(" "),v("li",[v("p",[s._v("打开 EFI 磁盘，这里要说一下，如果你只想删除 Windows 启动盘，可以找到有个 Microsoft 文件夹删除即可，但是如果只删除这个的话，开机还是会显示一个叫 EFI Boot 的启动盘，个人建议将 EFI 磁盘里面的东西全部删除，这样 Windows 和 EFI Boot 启动盘就都没了，亲测有效无副作用。")])]),s._v(" "),v("li",[v("p",[s._v("删除以后清空废纸篓然后把 EFI 磁盘推出，然后重启按住 option 键检验是否删除。")])])]),s._v(" "),v("p",[s._v("作者：Jonzzs\n链接：https://www.jianshu.com/p/c4db4cdeed87\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),s._v(" "),v("p",[s._v("更新 2:")]),s._v(" "),v("p",[s._v("文章的假设条件是，你没有使用系统自带的「磁盘工具」自行格式化 BOOTCAMP 磁盘。若你已经不小心格式化过了，则很可能在尝试文章第三步时报错。这是因为第三步的命令不适用于 APFS 磁盘。")]),s._v(" "),v("p",[s._v("解决方法是在运行第三步之前，输入下面这一条命令来将 APFS 格式的 BOOTCAMP 磁盘转化为 HFS 格式，命令为「sudo diskutil apfs deleteContainer disk0s3」，这里的 disk0s3 依旧是你在步骤二中找到的 BOOTCAMP 对应盘符。运行完这条指令后，继续跟着文中 3， 4 步骤走即可。")]),s._v(" "),v("p",[s._v("更新 3:")]),s._v(" "),v("p",[s._v("一点点题外话，有些人不确定第二部中的盘符如何找到，下面我机型简单说下。")]),s._v(" "),v("p",[s._v("若你的电脑为 Mac 的笔记本，如 Macbook, Macbook Air, Macbook Pro。这类电脑通常只有一块物理磁盘，你的 BOOTCAMP 盘符一定是类似于 disk0s3 这类格式。这里的数字 0，代表着电脑中的第一个（也是唯一的一个）物理磁盘，数字 3，代表着 BOOTCAMP 处在这块磁盘中的第三个分区。")]),s._v(" "),v("p",[s._v("若你的电脑是 iMac 的 Fusion Drive 版本，那么你的电脑中则会有两块物理磁盘，BOOTCAMP 一般会默认使用第二块硬盘，此时你的 BOOTCAMP 盘符就会变成 disk1s4 这类格式，这里的数字 1 代表着电脑中的第二个物理磁盘，数字 4，代表着 BOOTCAMP 处在这块磁盘中的第四个分区。")]),s._v(" "),v("p",[s._v("更新 4:")]),s._v(" "),v("p",[s._v("若你在运行完第三步之后，运行第四步时报错。请重新运行第二步查看磁盘列表，并检查其中是否出现了「Apple_KernelCoreDump」，若出现了这一部分，请重新运行第三步，消除这一部分分区，再进行第四步即可。")]),s._v(" "),v("p",[s._v("更新 5:")]),s._v(" "),v("p",[s._v("若你在运行完第三步之后，运行第四步时报错。请重新运行第二步查看磁盘列表，并检查其中是否出现了「Microsoft Reserved」，若出现了这一部分，请重新运行第三步，移除这一部分分区，再进行第四步即可。")]),s._v(" "),v("p",[s._v("更新 6:")]),s._v(" "),v("p",[s._v("最近有不少人用本教程修 iMac， iMac 融合硬盘的情况相较于本文的例子复杂很多。因此我在文章开头处更新了本文的适用范围，若你使用的是 iMac，请务必弄清楚每一步命令的实际用途，再尝试修复。贸然尝试，可能会把相对复杂的问题变得特别复杂。")]),s._v(" "),v("p",[s._v("更新 7:")]),s._v(" "),v("p",[s._v("iMac 融合硬盘修复时可能会用到的命令如下。因为 iMac 的具体情况比较复杂，因此目前只是将代码罗列在这里。若你了解硬盘命令的话可以尝试修复；若你刚刚接触硬盘命令的话，暂时不建议尝试。")]),s._v(" "),v("p",[s._v("进⼊入恢复磁盘")]),s._v(" "),v("p",[s._v("进入恢复系统：Command + R")]),s._v(" "),v("p",[s._v("显示磁盘信息")]),s._v(" "),v("p",[s._v("显示硬盘列：diskutil list")]),s._v(" "),v("p",[s._v("显示 cs 硬盘列：diskutil cs list")]),s._v(" "),v("p",[s._v("查看分区上限：sudo diskutil resizeVolume /dev/disk1s3 limits")]),s._v(" "),v("p",[s._v("重置空间：sudo diskutil resizeVolume /dev/disk1s2 100GB")]),s._v(" "),v("p",[s._v("强制断开驱动器")]),s._v(" "),v("p",[s._v("sudo diskutil unmountDisk force /dev/disk1")]),s._v(" "),v("p",[s._v("删除 EFI NO NAME")]),s._v(" "),v("p",[s._v("彻底移除逻辑磁盘: diskutil unmount /Volumes/Macintosh\\ HD")]),s._v(" "),v("p",[s._v("显⽰示分区结构： gpt -r show /dev/disk1")]),s._v(" "),v("p",[s._v("删除 EFI NO NAME：gpt remove -i 4 /dev/disk1")]),s._v(" "),v("p",[s._v("BOOT 丢失重新还原")]),s._v(" "),v("p",[s._v("显⽰示分区结构：gpt -r show /dev/disk0")]),s._v(" "),v("p",[s._v("断开磁盘链接：diskutil umountdisk disk0")]),s._v(" "),v("p",[s._v("新增存储区块：gpt add -I 3 -b 1362424032 -s 1269536 -t 426F6F74-0000-11AA- AA11-00306543ECAC（128MiB (262144 sectors) free space following a partition；gpt add -b 409640 -s 195313624 -t hfs disk2）GUID UUID")]),s._v(" "),v("p",[s._v('新增 Boot 分区：newfs_hfs -v "Volume Name" -J /dev/disk2s8')]),s._v(" "),v("p",[s._v("新增 EFI 区块：gpt add -b 40 -i 1 -s 409600 -t C12A7328-F81F-11D2-BA4B-00A0C93EC93B disk0")]),s._v(" "),v("p",[s._v("新增 HFS 区块：gpt add -I 2 -b 409640 -s 5450355 -t 48465300-0000-11AA-AA11-00306543ECAC disk0")]),s._v(" "),v("p",[s._v("解除磁盘锁：diskutil cs unlockVolume UUID")]),s._v(" "),v("p",[s._v("删除 APFS：diskutil  apfs deleteContainer disk0s4")]),s._v(" "),v("p",[s._v("coreStorage 扩容")]),s._v(" "),v("p",[s._v("物理理扩容: diskutil cs resizeDisk 11111111-2222-3333-4444-555555555555 980g")]),s._v(" "),v("p",[s._v("逻辑扩容: diskutil cs resizeVolume 11111111-2222-3333-4444-555555555555 980g")]),s._v(" "),v("p",[s._v("更新 8:")]),s._v(" "),v("p",[s._v("若你对 BOOT CAMP 安装及显卡驱动优化有需求，可以参考我的另外两篇文章：")]),s._v(" "),v("p",[s._v("Mac 如何安装 Windows 10?")]),s._v(" "),v("p",[s._v("如何大幅提升 Boot Camp Windows 10 图形性能？")]),s._v(" "),v("p",[s._v("更新 9:")]),s._v(" "),v("p",[s._v("在极少的情况下，对于老旧系统，若你的 Windows 卸载过程中没有使用 BOOT CAMP 自带的「移除 Windows 分区」的方式，可能会造成删除完 Windows 之后 Mac 引导丢失的问题。具体表现为启动系统按下 Option 之后找不到 Mac 的选项。这个问题不在本文的讨论范畴内，但如果你不幸遇到了，可以尝试以下方法：")]),s._v(" "),v("p",[s._v("无论你的电脑处在什么状态，长按电源键 10 秒对电脑进行强制关机。接着点按开机按钮并松开，同时按下「Command + Option + R」进入网络修复模式，这时候你会看到如下图标，稍等片刻。")]),s._v(" "),v("p",[s._v("网络修复模式\n进入该模式后，在罗列出的选项中选择「磁盘工具」，选择你的 Mac 磁盘，并点击上方的「急救」按钮，稍等片刻。此操作 Mac 会自动寻找丢失的启动项并尝试修复，修复完成后重启电脑即可。")]),s._v(" "),v("p",[s._v("磁盘急救")]),s._v(" "),v("p",[s._v("更新 10:")]),s._v(" "),v("p",[s._v("我写了一篇新文章讲解终端的用法，若你想要入门终端，可以查看这篇文章：")]),s._v(" "),v("p",[s._v("Terminal 终端：入门指南及进阶技巧")]),s._v(" "),v("p",[s._v("更新 11:")]),s._v(" "),v("p",[s._v("自从这帖子发布后，我大概在微信上帮忙修复了 50 台左右的电脑，大家都是很友善的人，也交了不少新朋友。但是最近一次遇到了一个奇葩令我很生气，一上来先讲价，等我帮他移除 BOOT CAMP 并合并分区全弄好了以后他又抛过来各种其他问题，我和他说明了其他问题需要额外收费之后他说我套路他。")]),s._v(" "),v("p",[s._v("现在特此声明，我不是专职修电脑的，有偿服务也只是在我的闲暇时间帮助新手或移除 BOOT CAMP 过程中遇到问题的人，在我尊重你并解决问题的同时，也请尊重我的时间。这项服务只包含移除 BOOT CAMP 分区并将剩余空间还原到 Mac 磁盘。")]),s._v(" "),v("p",[s._v("若你添加我的微信，请务必在下方看清你的电脑所属的类型及价格，不会讲价。若你本身有其他需求，请务必在我开始帮你处理前说清楚，我会根据所需用时向你报价，和则开始。")]),s._v(" "),v("p",[s._v("更新 12:")]),s._v(" "),v("p",[s._v("若移除完 BOOT CAMP 分区后，你可能发现 WIndows 10 还会默认启动，这其实是因为 Windows 10 在 EFI 中的启动项还在，下面这几句命令可以帮你移除掉它。注意：下面的盘符需要被替换为 EFI 所在盘符。")]),s._v(" "),v("p",[s._v("sudo mkdir /Volumes/EFI")]),s._v(" "),v("p",[s._v("sudo mount -t msdos /dev/disk0s1 /Volumes/EFI")]),s._v(" "),v("p",[s._v("cd /Volumes/EFI/EFI")]),s._v(" "),v("p",[s._v("rm -rf Microsoft")]),s._v(" "),v("p",[s._v("更新 13:")]),s._v(" "),v("p",[s._v("若你想深入理解 BOOT CAMP 的原理，这里有一篇很好的文章：")]),s._v(" "),v("p",[s._v("https://bbs.feng.com/read-htm-tid-6890655.html")])])}),[],!1,null,null,null);v.default=a.exports}}]);