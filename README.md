遮罩层
=====

一个遮罩层模块；

其实用法很简单，
1.在head引入文件，或者在body最下面引入本文件。
2.通过new setPopup(str)来获取弹出层对象，str为文本型参数，是弹出的层的html内容。
3.然后通过 obj.showPopup();方法来弹出遮罩层。
4.通过obj.closePopup()方法来关闭遮罩层。
