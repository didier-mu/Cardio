
 /// COMBOS

 function valCombos(nameInput){
    var combosContacto = $(nameInput);
    
    combosContacto.each(function () {
        $(this).change(function () {
            if ($(this).val() != null) {
                $(this).parents(".combo").siblings("msjError").remove();
                
            }
        });

        if ($(this).val() == null) {
            $(this).parents(".combo").siblings(".msjError").remove();
            $(this).parents(".combo").after('<span class="msjError show"> Campo requerido </span>');
        }

    });
}

function validacionSesion2(nameCheck){
    
    if($(nameCheck).prop("checked") == false){
        nameCheck.siblings(".msjError").css("display","block");
    }
   
    else {
        nameCheck.siblings(".msjError").hide().removeClass("show");
        
    }
    
}


$(document).ready(function () {

    // FORMULARIO
    
    $('#boton-buscar').on("click", function (e) {
        
        var checkEdad = $("#checkEdad"),
            checkLegales = $("#checkLegale");
            
        validacionSesion2(checkEdad);
        validacionSesion2(checkLegales);
        valCombos($("#selectEdo"));
        
        //console.log($('.msjError.show').length);
        
        if ($('.msjError.show').length == 0) {
        
            //var data = "Especialista-" + jQuery("#selectEdo option:selected").text();

            //dataLayer.push({ 
            //    'event': data
            //});
            console.log("hecho");
            // window.dataLayer = window.dataLayer || [];
            // window.dataLayer.push({'event': 'buscarData'});
            console.log(selectedOption);
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'event': selectedOption});
            return true;
            
        }
        
        else{
            console.log("no hecho");
            return false;
        }
        
        
        
    });
    
    $(".checkmark, .check label").on("click", function () {
        //console.log($(this).siblings('input').prop("checked"));
        
        if($(this).siblings('input').prop("checked") == false){
            $(this).siblings('.msjError').hide().removeClass("show");
            //$(this).siblings('input').attr("checked","checked");
            $(this).siblings('input').prop("checked");
        }
        
        else {
             $(this).siblings('input').removeAttr("checked");
             $(this).siblings('.msjError').addClass("show");
        }
    });
    
    $("#selectEdo").on("change", function () {
        $("#linkBoton").attr({ "href": $(this).val(), "target": "_blank" });
        $(".comboBox .msjError").hide().removeClass("show");
        // console.log(selectedOption);
    });
    
   
    
    /// COMBO DATA LAYER
    
    (function() {
       var selectMenu = document.querySelector('#selectEdo');
       var callback = function(e) {
       window.selectedOption = selectMenu.options[selectMenu.selectedIndex].id;
       
        //  window.dataLayer.push({
        //    event: selectedOption,
        //    // selectedElement: selectedOption
        //  });
    
       };
    
       selectMenu.addEventListener('change', callback, true);
    
    })();


});

    

