//$("#edit_line").on("click",".edit",function(){//点击编辑的操作（动态绑定，作用于动态生成的HTML）
//       var origin=$(this).parent().find(".edit_input");//找到要修改文本的容器节点
//       var text=origin.text();//保存下初始文本
//       var id = origin.attr("id");
//       origin.remove();//移除这个节点
//       var input=$("<input>");//创建一个input
//       input.attr("class","edit_input").attr("value",text);//给这个input指定class并把初始值赋给它的value
//       $(this).parent().prepend(input);//插到父容器的前面
//       input.focus();//把光标移动到input上
//       $(this).removeClass("edit").addClass("confirm").text("确定");//修改class和button的文字
//    }).on("click",".confirm",function(){//点击确定的操作
//       var change=$(this).parent().find(".edit_input");//找到input的节点
//       var value=change.val();//获取修改后的值
//       //do some post action here!（发送一个请求保存到数据库）
//       /*
//        $.ajax({
//           type: "POST",
//           url: "some.php",
//           data: "id=id,Ncontent="value",
//           success: function(msg){
//             alert( "Data Saved: " + msg );
//           }
//       });    
//        */
//       change.remove();//移除这个input
//       var span=$("<span/>");//创建一个span标签
//       span.attr("class","edit_input").text(value);//修改它的class和文本内容为用户输入的内容
//       $(this).parent().prepend(span);//插到父容器前面
//       $(this).removeClass("confirm").addClass("edit").text("编辑");//修改class和button的文字
//    }).on("keyup",".edit_input",function(e){//输入后按回车键保存功能
//       var e=e||window.event;
//       if(e.keyCode==13){
//          $("#edit_line").find(".confirm").click();//调用上面的“确定”点击事件
//       }
//    }).on("click","span.edit_input",function(){//直接点击文字也可以编辑
//       $("#edit_line").find(".edit").click();//调用上面的“编辑”点击事件
//    })

$(".list").on("click",".edit",function (){
	  var origin=$(this).parent().find(".edit_input");//找到要修改文本的容器节点
	  var text=origin.text();//保存下初始文本
	  var id = origin.attr("id");

	  origin.remove();//移除这个节点
	  var input=$("<input>");//创建一个input
	  input.attr("class","edit_input").attr("value",text);//给这个input指定class并把初始值赋给它的value
	  input.attr("class","edit_input").attr("id",id);
	  $(this).parent().prepend(input);//插到父容器的前面
	  input.focus();//把光标移动到input上
	  $(this).removeAttr("onclick");
	  $(this).removeClass("edit").addClass("confirm").text("确定");//修改class和button的文字
}).on("click",".confirm",function (){
	  var id = $(this).parent().find(".edit_input").attr("id");

	  var change=$(this).parent().find(".edit_input");//找到input的节点
	  var value=change.val();//获取修改后的值
	  var mthis = this;
	  //do some post action here!（发送一个请求保存到数据库）
$.ajax({
	      type: "get",
	      contentType : 'application/json',
	      dataType:'text',
	      url: "/update",
//	      data: "id="+id+"Ncontent="+value,
	      data:{
	    	id:id,
	    	Ncontent:value
	      },
	      success: function(msg){
	    	  change.remove();//移除这个input
	    	  var p=$("<p/>");//创建一个p标签
	    	  p.attr("class","edit_input").text(value);//修改它的class和文本内容为用户输入的内容
	    	  p.attr("class","edit_input").attr("id",id);
	    	  $(mthis).parent().prepend(p);//插到父容器前面
	    	  $(mthis).removeClass("confirm").addClass("edit").text("编辑");//修改class和button的文字
//	    	  $(e).attr("onclick","updateN(this);");
	  
	      }
	  });    
})



 
  
//  $(e).on("click",".confirm",function(){//点击确定的操作
//  var change=$(e).parent().find(".edit_input");//找到input的节点
//  var value=change.val();//获取修改后的值
//  //do some post action here!（发送一个请求保存到数据库）
//  
//$.ajax({
//      type: "POST",
//      url: "/update",
//      data: "id=id,Ncontent=value",
//      success: function(msg){
//    	  change.remove();//移除这个input
//    	  var p=$("<p/>");//创建一个p标签
//    	  p.attr("class","edit_input").text(value);//修改它的class和文本内容为用户输入的内容
//    	  $(e).parent().prepend(p);//插到父容器前面
//    	  $(e).removeClass("confirm").addClass("edit").text("编辑");//修改class和button的文字
//      }
//  });    
//   
// 
//}).on("keyup",".edit_input",function(e){//输入后按回车键保存功能
//  var e=e||window.event;
//  if(e.keyCode==13){
//     $("#edit_line").find(".confirm").click();//调用上面的“确定”点击事件
//  }
//}).on("click","span.edit_input",function(){//直接点击文字也可以编辑
//  $("#edit_line").find(".edit").click();//调用上面的“编辑”点击事件
//})

