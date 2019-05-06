$(document).ready(function () {
    var loc= window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/'));
    $("#planta_id").change(function (e) {
        var id = $("#planta_id").val();
        var token = $("#token").val();
        $.ajax({
            type: "POST",
            url: pathName+"/planta/find/"+id,
            data: { "_token": token, "id": id},
            success: function (response) {
                if(response == "-1"){
                    $("#menuMessage").addClass("alert alert-error").html("Planta no encontrado");
                    $("#clientesc").val("");
                    $('#pops').modal('show');
                }
                else{
                    var fillSecondary = function(){
                      var selected = $('#planta_id').val();
                      $('#contenedor_mesa').empty();
                      response.forEach(function(element,index){
                          if(element['estado_mesa']==true){
                            cadena='<div class="mesa col-md-2 col-xs-6">'
                            cadena=cadena+'<a href="#">';
                            cadena=cadena +'<div class="cuartoactive "></div>';
                            cadena=cadena +'<div class="primeractive">';
                            cadena=cadena +'<div class="terceroactive"></div>';
                            cadena=cadena + '</div>';
                            cadena=cadena+ '<div class="centroactive">'+element['numero_mesa']+'</div>';
                            cadena=cadena +'<div class="segundoactive"></div>';
                            cadena=cadena +'</a>'
                            cadena=cadena + '<br>'
                            cadena=cadena +'</div>'
                          }else{
                            cadena='<div class="mesa col-md-2 col-xs-6">'
                            cadena=cadena +'<a href="'+pathName+'/reservasm/'+element['id']+'">';
                            cadena=cadena +'<div class="cuarto col"></div>';
                            cadena=cadena +'<div class="primer">';
                            cadena=cadena +'<div class="tercero"></div>';
                            cadena=cadena + '</div>';
                            cadena=cadena+ '<div class="centro">'+element['numero_mesa']+'</div>';
                            cadena=cadena +'<div class="segundo"></div>';
                            cadena=cadena +'</a>'
                            cadena=cadena + '<br>'
                            cadena=cadena +'</div>'
                          }
                          $('#contenedor_mesa').append(cadena);
                      });

                    }
                    fillSecondary();
                }
            }
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            alert( 'Error!!'+errorThrown );
        });
    });
});
