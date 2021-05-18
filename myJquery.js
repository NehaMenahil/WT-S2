console.log("Code starting");


/*$(function() {
    //Checking the binding here
    $("#addbtn").click(HandleBtnClick)

}); 

function HandleBtnClick()
{
    alert("Button clicked");
}*/

$(function(){
   var name, Email;
   $("#addbtn").on("click",handleAddBtnClick);
   $("#resetbtn").on("click",resetForm);
   var enRemovelink=true;
   $("a").click(updateOnTable);
   $("#addbtn").removeClass('disabled');
   $(".updatebtn").addClass('disabled');
});
function handleAddBtnClick(){
   if(!($("#addbtn").hasClass('disabled')))
   {
       name=$("#name").val();
       Email=$("#Email").val();
       
       $('#Email').parent().find("#spa").remove();
       $('#name').parent().find("#spn").remove();
        $('#select').parent().find("#spc").remove();

       if(checkInput()){
           $("#Email").removeClass("error")
           $("#name").removeClass("error")
         
           $("#tbody").append("<tr><td id="+"added_name"+">"+name+
           "</td><td id="+
           "added_Email"+">"+Email+"</td><td><a href="+"#"+" class="+"updatelink"+">"+
           "Update"+"</a></td></tr>");
       $('a').css('color','black');
       enRemovelink=true;
           $("a").click(updateOnTable);
       resetForm();
       }
       else{return;}
   }
   else{
       return;
   }
    
}
function resetForm(){
   
    if($("#addbtn").hasClass('disabled')){
       $("#addbtn").removeClass('disabled');
   }
  
   if(!($(".updatebtn").hasClass('disabled'))){
       $(".updatebtn").addClass('disabled');
   }
   if($('.removelink').hasClass('disabled')){
       $('removelink').removeClass('disabled');
       $('.removelink').attr('href','#');
           enRemovelink=true;
   }

  
   $('#Email').parent().find("#spa").remove();
   $('#name').parent().find("#spn").remove();
   $('#select').parent().find("#spc").remove();
   $("#Email").removeClass("error")
   $("#name").removeClass("error")
   $("#select").removeClass("error")
   $("#name").val("")
   $("#Email").val("");
       
}
function updateOnTable(){
   var $sname = $(this).closest("tr")   
                      .find("#added_name")     
                      .text();      
           
   var $sEmail = $(this).closest("tr") 
                      .find("#added_Email")  
                      .text();         
        
   
   if($(this).hasClass("updatelink"))
   {
       $('.removelink').removeAttr('href');
       enRemovelink=false;
       
  
    $(".updatebtn").removeClass('disabled');
    $("#addbtn").addClass('disabled');
   $('.removelink').addClass('disabled');

   
   $("#name").val($sname)
   $("#Email").val($sEmail);
   
   }
   else
   {
       if(enRemovelink==true){
           $(this).parent().parent().remove();
       }
   }
   var row=$(this).closest("tr");
   $(".updatebtn").unbind().click(function(){

       if(!($(".updatebtn").hasClass('disabled'))){
           $('#Email').parent().find("#spa").remove();
       $('#name').parent().find("#spn").remove();
       $('#select').parent().find("#spc").remove();
       if(checkInput()){
           $("#Email").removeClass("error")
           $("#name").removeClass("error")
           $("#select").removeClass("error")
           row.find("td:eq(0)").text($("#name").val());
           row.find("td:eq(1)").text($("input[type='radio']:checked").val());
           row.find("td:eq(2)").text($("#Email").val());
           row.find("td:eq(3)").text($("#select option:selected").val());
           $('.removelink').attr('href','#');
           enRemovelink=true;
       }
       else{
           return;
       }

       }
       else{
           return;
       }
   });
   
}
function checkInput(){
   var bool=true;
   if(!correctEmail()){
       bool=false
   }
   if(!correctName()){
       bool= false;
   }
  
   return bool;
}

function correctEmail(){
   var givenEmail=$("#Email").val();
   
   var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(Email)) {
            $("#Email").addClass("error")
            $('#Email').parent().append('<span id="spa">Email should be in Alpha-numeric value.</span>');
           return false;
        }
    
            $("#Email").removeClass("error")
           return true;
        }




function correctName(){
       var wrongexp= new RegExp('[^A-Za-z]');
       var givenName=$("#name").val();
if(givenName.match(wrongexp) && !!givenName)  
{
   $("#name").addClass("error")
   $('#name').parent().append('<span id="spn">Name should be in upper or lower case only.Also no space allowed!</span>');
   return false;
}
if(givenName.length>10){
   $("#name").addClass("error")
   $('#name').parent().append('<span id="spn">Name must not exceed 10 alphabets.</span>');
   return false;
}
if(!givenName){
   $("#name").addClass("error")
   $('#name').parent().append('<span id="spn">Field can not be left empty.</span>');
   return false;
}
$("#name").removeClass("error")
return true;
}


console.log("Code Finished");