(this.webpackJsonptaskManager=this.webpackJsonptaskManager||[]).push([[0],{104:function(e,t,a){e.exports=a(220)},111:function(e,t,a){},136:function(e,t){},138:function(e,t){},173:function(e,t){},174:function(e,t){},216:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);a(105),a(106);var n=a(0),r=a.n(n),l=a(98),c=a.n(l),s=(a(111),a(223)),o=a(224),i=a(225),u=a(38),m=Object(u.a)(),d=a(4),p=function(){return null!==localStorage.getItem("isUserAuth")},f=function(){localStorage.removeItem("isUserAuth"),m.push("/login")},E=function(e){var t=e.text;return r.a.createElement("div",{className:"alert alert-success alert-dismissible fade show successedAddedTaskMessage"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert"},"\xd7"),r.a.createElement("strong",null,t))},v=a(222),b=function(e){return r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("div",{className:"container login"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(v.a,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d"),r.a.createElement("input",{type:"text",name:"userName",placeholder:"userName",onChange:e.changeUsername,value:e.userName})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:e.changePassword,value:e.password})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("button",{className:"btn btn-lg btn-success"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))))},g=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),o=s[0],i=s[1],u=Object(n.useState)(""),p=Object(d.a)(u,2),f=p[0],v=p[1];return r.a.createElement("div",null,f&&r.a.createElement(E,{text:"\u041b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0432\u0435\u0440\u043d\u044b!"}),r.a.createElement(b,{userName:a,password:o,changeUsername:function(e){return l(e.currentTarget.value)},changePassword:function(e){return i(e.currentTarget.value)},submit:function(e){e.preventDefault(),!function(e){var t=e.userName,a=e.password;return"admin"===t&&"123"===a}({userName:a,password:o})?v(!0):(localStorage.setItem("isUserAuth","yes"),m.push("/tasks"))}}))},h=a(34),N=a(35),j=a(39),O=a(36),x=a(40),k=function(e){function t(){return Object(h.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row small-up-2 medium-up-3 large-up-4",id:"Body"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",null,"404 Page")))}}]),t}(n.Component),w=a(12),y=a.n(w),C=a(21),S=a(28),P=a.n(S),B=a(99),F=a.n(B),M=a(7),T=a.n(M),U="https://uxcandy.com/~shapoval/test-task-backend/",A=function(){var e=Object(C.a)(y.a.mark((function e(){var t,a,n,r,l,c=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"asc",a=c.length>1&&void 0!==c[1]?c[1]:"email",n=c.length>2&&void 0!==c[2]?c[2]:1,r="".concat(U,"?developer='Georgiy'&page=").concat(n,"&sort_field=").concat(a,"&sort_direction =").concat(t),e.next=6,P.a.get(r);case 6:return l=e.sent,e.abrupt("return",l.data.message.tasks);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(C.a)(y.a.mark((function e(){var t,a,n,r,l,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=T()("#fileUpload")[0].files.length,a=T()("#fileUpload")[0].value,n=a.substring(a.lastIndexOf(".")+1).toLowerCase(),(r=T()("#image-holder")).empty(),"gif"===n||"png"===n||"jpg"===n||"jpeg"===n)if("undefined"!=typeof FileReader)for(l=0;l<t;l++)(c=new FileReader).onload=function(e){T()("<img />",{src:e.target.result,class:"thumb-image",height:320,width:240}).appendTo(r)},r.show(),c.readAsDataURL(T()("#fileUpload")[0].files[l]);else alert("This browser does not support FileReader.");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(y.a.mark((function e(t){var a,n,r,l,c,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.email,r=t.text,(l=new FormData).append("username",a),l.append("email",n),l.append("text",r),l.append("image",T()("#fileUpload")[0].files[0]),c="".concat(U,"create?developer='Georgiy'"),e.next=9,P.a.post(c,l);case 9:return s=e.sent,e.abrupt("return",s.data.message);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(y.a.mark((function e(t){var a,n,r,l,c,s,o,i,u,m,d,p,f;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.status,r=t.text,l=void 0===r?"":r,c=encodeURIComponent("beejee"),s=function(e){return F.a.createHash("md5").update(e).digest("hex")},o="",n&&(o+="status=".concat(encodeURIComponent(n),"&")),l&&(o+="text=".concat(encodeURIComponent(l),"&")),i=s("".concat(o,"token=").concat(c)),u="".concat(U,"edit/").concat(a,"?developer='Georgiy'"),m=new FormData,n&&m.append("status",n),l&&m.append("text",l),m.append("signature",i),m.append("token",c),d={headers:{"Content-Type":"multipart/form-data"}},e.next=16,P.a.post(u,m,d);case 16:return p=e.sent,f=p.data,e.abrupt("return",!!f.status);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){return r.a.createElement("div",null,p()?r.a.createElement("button",{onClick:f,className:"btn btn-lg btn-success"},"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement("button",{className:"btn btn-lg btn-success"},r.a.createElement("a",{href:"/login"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},q=function(e){return function(t){return t.length<e?"":"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 "+e+"\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!"}},z=function(e){return e.length>0?"":"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e!"},G=(a(216),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={isModalShow:a.props.isModalShow},a.closeModal=function(){a.setState({isModalShow:!1})},a}return Object(x.a)(t,e),Object(N.a)(t,[{key:"componentWillReceiveProps",value:function(){this.setState({isModalShow:!0})}},{key:"render",value:function(){var e=this.state.isModalShow,t=this.props.children,a=r.a.createElement("div",{className:"modalDialog"},r.a.createElement("div",null,r.a.createElement("button",{className:"close",onClick:this.closeModal},"X"),r.a.createElement("h2",null,t[0]),r.a.createElement("p",null,t[2]),r.a.createElement("p",null,t[3]),r.a.createElement("p",null,t[4]),r.a.createElement("button",{className:"btn btn-success",onClick:this.closeModal},t[1])));return r.a.createElement("div",null,e?a:"")}}]),t}(n.PureComponent)),V=function(e){var t=e.username,a=e.email,n=e.text,l=e.changeField,c=e.usernameErr,s=e.emailErr,o=e.textErr,i=e.imgErr,u=e.fileUpload,m=e.viewAddedTask,d=e.addTask,p=e.isShowSuccessMessage;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"\u0424\u043e\u0440\u043c\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u0430\u0441\u043a\u0430.")),r.a.createElement("div",{id:"preview-data",className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"}),r.a.createElement("div",{className:"panel-body"}),r.a.createElement("div",{id:"image-holder"})),r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:d,id:"feedback",className:"form-horizontal",encType:"multipart/form-data",method:"post"},r.a.createElement("div",{className:"form-group has-feedback"},r.a.createElement("label",{htmlFor:"username",className:"control-label col-xs-3"},"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",":"),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-user"})),r.a.createElement("input",{id:"username",type:"text",className:"form-control ".concat(c&&"errField"),name:"username",value:t,required:"required",pattern:"[A-Za-z]{6,}",onChange:l})),c&&r.a.createElement("div",{className:"err"},c))),r.a.createElement("div",{className:"form-group has-feedback"},r.a.createElement("label",{htmlFor:"email",className:"control-label col-xs-3"},"Email:",":"),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-envelope"})),r.a.createElement("input",{id:"email",type:"email",className:"form-control ".concat(s&&"errField"),name:"email",value:a,required:"required",onChange:l})),s&&r.a.createElement("div",{className:"err"},s))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0422\u0435\u043a\u0441\u0442"),r.a.createElement("textarea",{id:"text",name:"text",className:"form-control ".concat(o&&"errField"),rows:"3",value:n,onChange:l})),o&&r.a.createElement("div",{className:"err"},o),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"fileUpload",type:"file",className:"form-control ".concat(i&&"errField"),name:"fupload",multiple:"multiple",onChange:u})),i&&r.a.createElement("div",{className:"err"},i),r.a.createElement("div",{className:"panel-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("a",{href:"/"},"\u041e\u0442\u043c\u0435\u043d\u0430")),t||a||n?r.a.createElement("div",{className:"col-md-1"},r.a.createElement("button",{onClick:m,type:"button",className:"btn btn-lg btn-success","data-toggle":"modal","data-target":"#myModal"},"\u041f\u0440\u0435\u0432\u044c\u044e")):""))),r.a.createElement("button",{id:"save",onClick:d,type:"button",className:"btn btn-lg btn-success",disabled:c||s||o||i||!t||!a||!n},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0441\u043a"),p&&r.a.createElement(E,{text:"\u041d\u043e\u0432\u044b\u0439 \u0442\u0430\u0441\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d!"}))))},_=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),f=p[0],E=p[1],v=Object(n.useState)(""),b=Object(d.a)(v,2),g=b[0],h=b[1],N=Object(n.useState)(""),j=Object(d.a)(N,2),O=j[0],x=j[1],k=Object(n.useState)(""),w=Object(d.a)(k,2),y=w[0],C=w[1],S=Object(n.useState)(""),P=Object(d.a)(S,2),B=P[0],F=P[1],M=Object(n.useState)(!1),T=Object(d.a)(M,2),U=T[0],A=T[1],R=Object(n.useState)(!1),L=Object(d.a)(R,2),_=L[0],H=L[1],J=Object(n.useState)(!1),$=Object(d.a)(J,2),W=$[0],X=$[1],Z=function(e){var t,a=z(e)||(t=e,new RegExp(/^[a-z]+$/i).test(t)?"":"\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b!")||q(16)(e);return h(a||"")},K=function(){var e=function(){var e=document.getElementById("fileUpload").files[0];return e&&e.name.includes(".jpg")||e&&e.name.includes(".png")||e&&e.name.includes(".gif")?"":"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0442\u0440\u0435\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 - jpg, gif \u0438\u043b\u0438 png"}();return e?function(){F(e),A(!1)}:function(){F(""),A(!0),H(!1)}},Q=[];return Q.push("\u041d\u043e\u0432\u044b\u0439 \u0442\u0430\u0441\u043a:","\u041e\u041a","".concat("C\u043e\u0437\u0434\u0430\u043b:"," ").concat(l),"".concat("Email:"," ").concat(i),"".concat("\u0422\u0435\u043a\u0441\u0442 \u0442\u0430\u0441\u043a\u0430:"," ").concat(f.substr(0,35))),r.a.createElement("div",null,_?r.a.createElement(G,{isModalShow:_},Q):"",r.a.createElement(V,{username:l,email:i,text:f,changeField:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;"username"===t&&(Z(a),c(a)),"email"===t&&(!function(e){var t=z(e)||(/^\w+@\w+\.\w{2,4}$/i.test(e)?"":"Email \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439!");x(t||"")}(a),u(a)),"text"===t&&(!function(e){var t=z(e)||q(100)(e);C(t||"")}(a),E(a)),H(!1)},usernameErr:g,emailErr:O,textErr:y,imgErr:B,isValidImg:U,fileUpload:function(){I(),K()},isModalShow:_,modalData:Q,viewAddedTask:function(){H(!0)},addTask:function(t){t.preventDefault(),D({username:l,email:i,text:f}).then((function(t){e.addTask(t),H(!1),X(!0),c(""),u(""),E("")})),document.getElementById("image-holder").innerHTML="",document.getElementById("save").disabled=!0,function(){for(var e=document.getElementById("feedback"),t=e.elements.length,a=new Array(e.elements.length),n=0;n<t;n++)a[n]=e.elements.item(n).value;e.reset();for(var r=0;r<t;r++)"file"!==e.elements.item(r).type&&(e.elements.item(r).value=a[r])}()},isShowSuccessMessage:W}))},H=a(100),J=a(102),$={sortDir:0,sortField:"username",fields:{id:"num",username:"string",email:"string",text:"string",status:"string"}},W=function(e,t){var a=$.sortDir,n=$.sortField;return a?(""+t[n]).localeCompare(e[n]):(""+e[n]).localeCompare(t[n])},X=function(e,t){var a=$.sortDir,n=$.sortField;return a?t[n]-e[n]:e[n]-t[n]},Z=function(e){var t=e.onFocus,a=e.checkText,l=e.saveChanges,c=e.handleThClick,s=e.tasks,o=function(){var e={id:null,username:null,email:null,text:null,status:null};return e[$.sortField]=$.sortDir?"desc":"asc",e}();return r.a.createElement("div",{className:"tasks"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"\u0417\u0430\u0434\u0430\u0447\u043d\u0438\u043a")),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-primary"},r.a.createElement("th",{scope:"col","data-field":"text",onClick:c}," ","\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"," ",o.username),r.a.createElement("th",{scope:"col","data-field":"text",onClick:c},"Email:"),r.a.createElement("th",{scope:"col","data-field":"text",onClick:c}," ","\u0422\u0435\u043a\u0441\u0442 \u0442\u0430\u0441\u043a\u0430:"," ",o.text),r.a.createElement("th",{scope:"col"},"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"),r.a.createElement("th",{scope:"col","data-field":"text",onClick:c},"\u0421\u0442\u0430\u0442\u0443\u0441"," ",o.status),p()&&r.a.createElement("th",null,"\u0422\u0435\u043a\u0441\u0442 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u0434\u043c\u0438\u043d\u043e\u043c"))),r.a.createElement("tbody",{className:"table-striped"},s.map((function(e){return function(e){var c=e.id,s=e.username,o=e.email,i=e.text,u=e.image_path,m=e.status;return r.a.createElement(n.Fragment,{key:c},r.a.createElement("tr",{className:"table-secondary",key:c},r.a.createElement("td",null,s),r.a.createElement("td",null,o),p()?r.a.createElement("td",null,r.a.createElement("textarea",{name:"text",className:"form-control ",rows:"3",defaultValue:i,onChange:function(e){a(e)},onBlur:function(e){return l(e,c)},onFocus:t})):r.a.createElement("td",null,i),r.a.createElement("td",null,r.a.createElement("img",{src:u,alt:"",width:"100px"})),p()?r.a.createElement("td",null,r.a.createElement("select",{className:"form-control",defaultValue:m,name:"status",id:"status",onChange:function(e){return l(e,c)},onFocus:t},r.a.createElement("option",{value:0},"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),r.a.createElement("option",{value:10},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"))):r.a.createElement("td",null,0===m?"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e":"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),p()&&r.a.createElement("td",null,10===m?"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e":"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f","(\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u043e \u0430\u0434\u043c\u0438\u043d\u043e\u043c)")))}(e)}))))))},K=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2)[1],l=Object(n.useState)(""),c=Object(d.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),m=u[0],p=u[1];Object(n.useEffect)((function(){var e=f();a(e)}));var f=function(){var t=$.sortField,a=e.tasks;return"text"===$.fields[t]?a.sort(X):a.sort(W),a};return r.a.createElement("div",null,r.a.createElement(Z,{tasks:e.tasks,onFocus:function(e){o(e.target.value)},checkText:function(e){var t=e.target.value,a=z(t)||q(10)(t);return p(a||"")},textErr:m,saveChanges:function(e,t){var a=e.target,n=a.value,r=a.name;s===n||m||R(Object(H.a)({id:t},r,n))},handleThClick:function(e){var t=$.sortField,n=$.sortDir;e.currentTarget.dataset.field===t?n=!n:(t=e.currentTarget.dataset.field,n=!n),$.sortField=t,$.sortDir=n;var r=f();a(Object(J.a)(r))}}))},Q=(a(217),function(e){var t=e.tasks,a=e.currentPage,l=e.setCurrentPage,c=e.todosPerPage,s=e.upperPageBound,o=e.setUpperPageBound,i=e.lowerPageBound,u=e.setLowerPageBound,m=e.isPrevBtnActive,d=e.setIsPrevBtnActive,p=e.isNextBtnActive,f=e.setIsNextBtnActive,E=e.pageBound;Object(n.useEffect)((function(){T()("ul li.active").removeClass("active"),T()("ul li#"+a).addClass("active")}));for(var v=function(e){var t=Number(e.target.id);l(t),A(a).then((function(){T()("ul li.active").removeClass("active"),T()("ul li#"+t).addClass("active"),b(t)}))},b=function(e){var a=Math.ceil(t.length/c);f("disabled"),d("disabled"),a===e&&a>1?d(""):1===e&&a>1?f(""):a>1&&(f(""),d(""))},g=function(e){o("inc"===e?s+E:s-E),u("inc"===e?i+E:i-E);var t="inc"===e?s+1:s-E;l(t),b(t)},h=function(e){(a-1)%E===0&&(o("next"===e?s+E:s-E),u("next"===e?i+E:i-E));var t="next"===e?a+1:a-1;l(t),b(t)},N=a*c,j=N-c,O=t.slice(j,N),x=[],k=t.length,w=1;w<=Math.ceil(k/c);w+=1)x.push(w);var y=x.map((function(e){return 1===e&&1===a?r.a.createElement("li",{key:e,className:"active",id:e},r.a.createElement("button",{id:e,onClick:v}," ",e)):e<s+1&&e>i?r.a.createElement("li",{key:e,id:e},r.a.createElement("button",{id:e,onClick:v},e)):null})),C=null;x.length>s&&(C=r.a.createElement("li",null,r.a.createElement("button",{onClick:g("inc")}," \u2026 ")));var S=null;i>=1&&(S=r.a.createElement("li",null,r.a.createElement("button",{onClick:g}," \u2026 ")));var P=null;P="disabled"===m?r.a.createElement("li",{className:m},r.a.createElement("span",{id:"btnPrev"}," Prev ")):r.a.createElement("li",{className:m},r.a.createElement("button",{id:"btnPrev",onClick:h}," ","Prev"," "));var B=null;return B="disabled"===p?r.a.createElement("li",{className:p},r.a.createElement("span",{id:"btnNext"}," Next ")):r.a.createElement("li",{className:p},r.a.createElement("button",{id:"btnNext",onClick:function(){return h("inc")}}," ","Next"," ")),r.a.createElement("div",null,r.a.createElement(K,{tasks:O}),r.a.createElement("ul",{className:"pagination"},P,S,y,C,B))}),Y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(1),s=Object(d.a)(c,2),o=s[0],i=s[1],u=Object(n.useState)(3),m=Object(d.a)(u,1)[0],p=Object(n.useState)(3),f=Object(d.a)(p,2),E=f[0],v=f[1],b=Object(n.useState)(0),g=Object(d.a)(b,2),h=g[0],N=g[1],j=Object(n.useState)("disabled"),O=Object(d.a)(j,2),x=O[0],k=O[1],w=Object(n.useState)(""),y=Object(d.a)(w,2),C=y[0],S=y[1],P=Object(n.useState)(3),B=Object(d.a)(P,1)[0];Object(n.useEffect)((function(){A().then((function(e){l(a.concat(e))}))}),[]),Object(n.useMemo)(A,[a]);return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(Q,{tasks:a,currentPage:o,setCurrentPage:i,todosPerPage:m,upperPageBound:E,setUpperPageBound:v,lowerPageBound:h,setLowerPageBound:N,isPrevBtnActive:x,setIsPrevBtnActive:k,isNextBtnActive:C,setIsNextBtnActive:S,pageBound:B}),r.a.createElement(_,{addTask:function(e){l(a.concat(e))}}))},ee=function(){return r.a.createElement(s.a,{history:m},r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:Y}),r.a.createElement(i.a,{path:"/login",component:g}),r.a.createElement(i.a,{exact:!0,path:"/tasks",component:Y}),r.a.createElement(i.a,{component:k})))},te=function(){return r.a.createElement("main",null,r.a.createElement(ee,null))},ae=(a(219),function(){return r.a.createElement("div",{className:"off-canvas-wrapper"},r.a.createElement(te,null),r.a.createElement("hr",null))});a.d(t,"authContext",(function(){return ne}));var ne=r.a.createContext(localStorage.getItem("isUserAuth"));c.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.d2652cc4.chunk.js.map