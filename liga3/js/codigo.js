$(function(){
    var metodo = {
     func : function(resp){
      if(resp != 1){
        $.liga('mensaje','Error al registrar');
      }else{
        $.liga('mensaje','Registrado');
        $('#divTabla').load('tabla.php');
        $('#algocual').load('modificador.php');
      }
     }
    };
   $('form').liga('AJAX',metodo); 
});