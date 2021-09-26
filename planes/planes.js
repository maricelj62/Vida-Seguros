$(document).ready(inicio);
var items = new Array();
var items2 = new Array();
var items3 = new Array();

function inicio() {

  cargarTabla1();
  cargarTabla2();
  cargarTabla3();
  mostrarTabla1();
  mostrarTabla2();
  mostrarTabla3();
  
  /*
  if ($("#hogar").display == "none" && $("#salud").display == "none" && $("#vida").display == "none") {
    $("#hogar").display = "block"
  }*/

  tablas(); 
}

function tablas() {
  $("li[data-tab]").on("click", function(event) {
    $(".active").removeClass("active");
    var cual = $(this).attr("data-tab");
    $(this).addClass("active");
    $(".tab-section").slideUp(0);
    $("#" + cual)
      .delay(0)
      .slideDown(0);
  });
}

//a la function cargarArea le declaro variables que cargen articulo, codigo y area
function cargarTabla1() {
  
  var item1 = {
    beneficio: "Respaldo económico para tus beneficiarios",
    premium: "<i class='fa fa-check-circle'></i>",
    clasico: "<i class='fa fa-check-circle'></i>",
    basico: "<i class='fa fa-check-circle'></i>"
  };
  var item2 = {
    beneficio: "Bono por hospitalización",
    premium: "<i class='fa fa-check-circle'></i>",
    clasico: "<i class='fa fa-times-circle'></i>",
    basico: "<i class='fa fa-times-circle'></i>"
  };
  var item3 = {
    beneficio: "Respaldo económico para enfermedades graves",
    premium: "<i class='fa fa-check-circle'></i>",
    clasico: "<i class='fa fa-plus-circle'></i>",
    basico: "<i class='fa fa-times-circle'></i>"
  };
  
  var item4 = {
    beneficio: "Posibilidad de ahorro",
    premium: "<i class='fa fa-check-circle'></i>",
    clasico: "<i class='fa fa-times-circle'></i>",
    basico: "<i class='fa fa-times-circle'></i>"
  };

  var item5 = {
    beneficio: "Auxilio de exequias",
    premium: "<i class='fa fa-check-circle'></i>",
    clasico: "<i class='fa fa-plus-circle'></i>",
    basico: "<i class='fa fa-times-circle'></i>"
  };

  var item6 = {
    beneficio: "Devolución de dinero si decides no continuar",
    premium: "<i class='fa fa-check-circle'></i>",
    clasico: "<i class='fa fa-times-circle'></i>",
    basico: "<i class='fa fa-times-circle'></i>"
  };
  items.push(item1,item2,item3,item4,item5,item6);
 //a la variable ariculos con el .push le voy cargando todas las variables

}

function cargarTabla2() {
  
    var item1_2 = {
      beneficio: "Habitación individual en hospitalización",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-check-circle'></i>"
    };
    var item2_2 = {
      beneficio: "Elección de clínica para ser atendido",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-plus-circle'></i>"
    };
    var item3_2 = {
      beneficio: "Acceso ilimitado a exámenes de diagnóstico o radiológicos",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-times-circle'></i>"
    };
    
    var item4_2 = {
      beneficio: "Acceso directo a especialistas",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-plus-circle'></i>"
    };
  
    var item5_2 = {
      beneficio: "Renta por días de hospitalización o cirugía",
      premium: "<i class='fa fa-plus-circle'></i>",
      clasico: "<i class='fa fa-times-circle'></i>",
      basico: "<i class='fa fa-times-circle'></i>"
    };
  
    var item6_2 = {
      beneficio: "Medicamentos y exámenes pre y pos hospitalarios",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-times-circle'></i>"
    };
    items2.push(item1_2,item2_2,item3_2,item4_2,item5_2,item6_2);
   //a la variable ariculos con el .push le voy cargando todas las variables
  
  }

  function cargarTabla3() {
  
    var item1_3 = {
      beneficio: "Incendio",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-check-circle'></i>"
    };
    var item2_3 = {
      beneficio: "Daños causados a causa de inundación",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-check-circle'></i>"
    };
    var item3_3 = {
      beneficio: "Daños a suelos y terrenos",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-check-circle'></i>",
      basico: "<i class='fa fa-times-circle'></i>"
    };
    
    var item4_3 = {
      beneficio: "Hurto con o sin violencia",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-plus-circle'></i>",
      basico: "<i class='fa fa-plus-circle'></i>"
    };
  
    var item5_3 = {
      beneficio: "Daño interno a equipos eléctricos, electrónicos y a gas",
      premium: "<i class='fa fa-check-circle'></i>",
      clasico: "<i class='fa fa-plus-circle'></i>",
      basico: "<i class='fa fa-plus-circle'></i>"
    };
  
    var item6_3 = {
      beneficio: "Asistencia domiciliaria",
      premium: "<i class='fa fa-plus-circle'></i>",
      clasico: "<i class='fa fa-plus-circle'></i>",
      basico: "<i class='fa fa-plus-circle'></i>"
    };
    items3.push(item1_3,item2_3,item3_3,item4_3,item5_3,item6_3);
   //a la variable ariculos con el .push le voy cargando todas las variables
  
  }
  
/*function ordenar(){
  articulos.sort(function (a, b) {
  if (a.articulo > b.articulo) {
    return 1;
  }
  if (a.articulo < b.articulo) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
mostrarTabla(); 
}*/
  
  function mostrarTabla1(){
    
     var tabla="";
  tabla+="<table><tr><th class='first_col'>Qué te ofrecemos?</th><th>Plan Futuro</th>     <th>Plan Clásico</th><th>Plan Para Todos</th></tr>"
  for (let i = 0; i < items.length; i++){
    tabla +="<tr>";
    tabla += "<td class='first_col'>" + items[i].beneficio + "</td>";
    tabla += "<td>" + items[i].premium + "</td>";
    tabla += "<td>" + items[i].clasico + "</td>";
    tabla += "<td>" + items[i].basico + "</td>";
    tabla += "</tr>";
  }
  tabla += "</table>";
  $("#vida").html(tabla);
}

function mostrarTabla2(){
    
    var tabla2="";
 tabla2+="<table><tr><th class='first_col'>Qué te ofrecemos?</th><th>Salud Plus</th>     <th>Salud Integral</th><th>Salud Personalizado</th></tr>"
 for (let i = 0; i < items2.length; i++){
   tabla2 +="<tr>";
   tabla2 += "<td class='first_col'>" + items2[i].beneficio + "</td>";
   tabla2 += "<td>" + items2[i].premium + "</td>";
   tabla2 += "<td>" + items2[i].clasico + "</td>";
   tabla2 += "<td>" + items2[i].basico + "</td>";
   tabla2 += "</tr>";
 }
 tabla2 += "</table>";
 $("#salud").html(tabla2);
}

function mostrarTabla3(){
    
  var tabla3="";
tabla3+="<table><tr><th class='first_col'>Qué te ofrecemos?</th><th>Hogar Premium</th>     <th>Hogar Clásico</th><th>Hogar Básico</th></tr>"
for (let i = 0; i < items3.length; i++){
 tabla3 +="<tr>";
 tabla3 += "<td class='first_col'>" + items3[i].beneficio + "</td>";
 tabla3 += "<td>" + items3[i].premium + "</td>";
 tabla3 += "<td>" + items3[i].clasico + "</td>";
 tabla3 += "<td>" + items3[i].basico + "</td>";
 tabla3 += "</tr>";
}
tabla3 += "</table>";
$("#hogar").html(tabla3);
}

