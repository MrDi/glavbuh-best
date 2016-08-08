jQuery(document).ready(function(){
var ErrorName = true;
var ErrorMail = true;
var index = 0;
var click_id=0;

 var jVal = {
                'f_userName' : function(index) {
        
                        var ele = jQuery("#form"+index+" .name");
                        if(ele.val().length < 2){
      
                          ErrorName = true;
                           ele.css('border-bottom','1px solid red');
                         /*  ele.css('border-color',colorError);*/
                        }
                         else{
                            ErrorName = false;
                          
                              ele.css('border-bottom','1px solid green');
                             /*ele.css('border-color',colorNoError);*/
                             
                        }
                         
                }
                ,
                'f_mail' : function(index) {
             
                        var ele = jQuery("#form"+index+" #email");
                        ErrorMail = true;
                  
                        
                        if(ele.val() != '') {
                            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                            if(pattern.test(ele.val())){
                                ele.css('border-bottom','1px solid green');
                                ErrorMail = false;
                                console.log('f1');
                                //  console.log(ele.val());
                                
                            } else {
                                ele.css('border-bottom','1px solid red');
                                ErrorMail = true;
                                console.log('f2');
                            }
                            } else {
                                ele.css('border-bottom','1px solid red');
                                ErrorMail = true;
                                console.log('f3');
                            }
                         
                },
                'sendIt':function() {
                    
                           //jQuery('#jform').submit(); 
                }
 }



jQuery.change_form = function(index){
    jQuery("#form"+index+" .name").change(function(){ jVal.f_userName(index); });
    jQuery("#form"+index+" .email").change(function(){ jVal.f_mail(index); });
}

//Кликаем на красную кнопку, получам её id
jQuery(".my_feed_button").click(function(e){
   
    click_id =e.target.id;
    click_id = click_id.substr(11);
     console.log(click_id);
    e.preventDefault();
    jVal.f_userName(click_id);
    jVal.f_mail(click_id);
    jQuery.change_form(click_id);
    if(!ErrorName&&!ErrorMail){
       jQuery.ajax({
            url: "templates/lemon/php/form.php",
            type: "POST",
            cache: false,//url-адрес, по которому будет отправлен запрос
            dataType: "html", //“ип данных
            data: jQuery("#form"+click_id).serialize(), 
            success:function(html){
             
             jQuery("#form"+click_id+" .name").val("");
             jQuery("#form"+click_id+" .email").val("");
             jQuery("textarea").val("");
             

             if(click_id==3){
             }
             jQuery('.ok').css("display","block").delay(500).animate({opacity:0},1000,function(){
             jQuery('.ok').css("display","none");
             jQuery('.ok').css("opacity","1");
             jQuery("#form"+click_id+" .name").css('border-bottom','');
             jQuery("#form"+click_id+" .message").css('border-bottom','');
             jQuery("#form"+click_id+" .email").css('border-bottom','');
             ErrorName = true;
          
             ErrorMail = true;
                 
             });
             
             
            },
            error:function (xhr, ajaxOptions, thrownError){
                console.log("”пс"); //выводим ошибку
            }
        });
    }
    else {
        return false;
    }
    
});


jQuery.change_form(3);







});