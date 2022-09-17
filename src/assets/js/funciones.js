var edad1 = 0;
var edad2 = 0;
var num_adultos = 1;

let numhijo1 = 0;
let numhijo2 = 0;
let edadID1 = '';
let edadID2 = '';
let hijoId = '';
let hijo2Id = '';
let edadID1OMINT = '';
let edadID2OMINT = '';
let hijoIdOMINT = '';
let hijo2IdOMINT = '';

let compania_prepaga = 0;
let prepaga_empresa = 0;
let bonifAportGaleno = 0;
let bonifAportSancor = 0;
let tipoAsoc = $('#tipo').val();

let tipoIngreso = '';

let gen = '';
let grupoFam = 1;

let numHijos = 0;

let planesSeleccionados = '';
let seleccionados = new Array();
let Tipo_de_Dato = '';
let pasarGet = '';

function alertado() {
  alert("ok!");
  console.log("hola");
}

function funcion1() {
  alert("Welcome to custome js Funcion 1");
  // document.write("Welcome to custome js Funcion 1");
  // console.log("Welcome to custome js Funcion 1");
}

function finalizar() {

  var form = document.querySelector('form');
  var boton = document.querySelector('[type=submit]');
  form.onsubmit = e => {
    boton.disabled = true;
    if ($('#cantAport').val() > grupoFamiliar($('#edad_1').val(), $('#edad_2').val(), $('#numkids').val())) {
      alert("El n&uacute;mero de aportantes no puede ser mayor a los integrantes del grupo familiar")
    }

    tipoAsoc = $('#tipo').val();
    tipoIngreso = $('#tipo').val();
    edad1 = $('#edad_1').val();
    edad2 = $('#edad_2').val();
    numHijos = $('#numkids').val();
    segVidacheck = document.querySelector('#segVidaTitular');
    segVida2check = document.querySelector('#segVidaConyuge');
    suprasalud = document.querySelector('#supras');
    afinidaCH = document.querySelector('#afinidadCheck');
    prepaga_empresa = $('#empresa_prepaga').val();
    Tipo_de_Dato = '';
    bonifAf = $('#bonAfinidad').val();
    mAdic = document.querySelector('#monoadic');
    let sueldo = $('#sueldo').val();
    let cantAport = $('#cantAport').val();


    supras = suprasalud.checked;
    segVida1 = segVidacheck.checked;
    segVida2 = segVida2check.checked;
    monoAdicional = mAdic.checked;
    afinidadCheck = afinidaCH.checked;
    tabla_precios = 'precios_' + prepaga_empresa;
    grupoFam = 0;
    grupoFamiliar(edad1, edad2, numHijos);
    tipoAsociado(tipoAsoc, grupoFam, cantAport);

    if (tipoIngreso == "M" || tipoIngreso == "D" && monoAdicional == true) {
      if (cantAport > grupoFam) {
        alert("El número de aportantes no puede ser mayor a los integrantes del grupo familiar. Calcularemos con la cantidad máxima");
        cantAport = grupoFam
      };
    }

    productID($('#edad_1').val(), tipoAsoc, gen, 'titular', numHijos);
    productID($('#edad_2').val(), tipoAsoc, gen, 'conyuge', numHijos);
    productIdGaleno($('#edad_1').val(), $('#edad_2').val(), tipoAsoc, numHijos);
    productIdPremedic(edad1, edad2, tipoAsoc, numHijos);
    productIdOmint($('#edad_1').val(), tipoAsoc, 'titular');
    productIdOmint($('#edad_2').val(), tipoAsoc, 'conyuge');



    console.log(edadIdGaleno);

    hijoIdmenor1preme = tipoAsoc + 'AD-1anio';
    hijoIdmenor25preme = tipoAsoc + 'AD-25';






    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    displayRadioValue();



    e.preventDefault();
    var result = new XMLHttpRequest();
    result.open('POST', 'consulta.php');
    result.onload = function () {
      boton.disabled = false;
      var results = JSON.parse(result.responseText);
      valorPlan(results, tipoIngreso, sueldo, cantAport, segVida1, segVida2, bonifAf, Tipo_de_Dato, afinidadCheck, edadIdPremedic);

      form.reset();
    }




  }
}

function tipoAsociado(tipo, grupo, cant) {
  if (tipo === "M" && grupo == cant) {
    tipoAsoc = "D";
  } else if (tipo === "I") {
    tipoAsoc = "P"
  }
}

function displayRadioValue() {
  var ele = document.getElementsByName('aporteOS');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      Tipo_de_Dato = ele[i].value;
      document.getElementById("result").innerHTML
        = ele[i].value;
    }
  } console.log(Tipo_de_Dato)
}

function comparition() {
  let sel = document.getElementsByName('miComparacion');
  let select = document.getElementsByName('miComparacionMobile');
  seleccionados = new Array();
  let tmpHTML_selecionados = '';


  for (i = 0; i < sel.length; i++) {

    if (sel[i].checked == true) {

      seleccionados.push(sel[i].value);
      tmpHTML_selecionados += "<div class='col-sm-4' style='background-color:yellow;'><p>" + sel[i].value + "</p></div>";
      select[i].checked = true;
      if (seleccionados.length == 4) { alert('solo 3'); sel[i].checked = false; select[i].checked = false; return };
    } else { select[i].checked = false }
  }
  planesSeleccionados = "<div class='row'>" + tmpHTML_selecionados + "</div>"
  $('#selectHTML_comparar').html(planesSeleccionados);
  $('#selectHTML_compararM').html(planesSeleccionados);
} console.log(planesSeleccionados);

function comparitionM() {
  let select = document.getElementsByName('miComparacion');
  let sel = document.getElementsByName('miComparacionMobile');
  seleccionados = new Array();
  let tmpHTML_selecionados = '';

  for (i = 0; i < sel.length; i++) {

    if (sel[i].checked == true) {

      seleccionados.push(sel[i].value);
      tmpHTML_selecionados += "<div class='col-sm-4' style='background-color:yellow;'><p>" + sel[i].value + "</p></div>";
      select[i].checked = true;
      if (seleccionados.length == 4) { alert('solo 3'); sel[i].checked = false; select[i].checked = false; return };
    } else { select[i].checked = false }
  }
  planesSeleccionados = "<div class='row'>" + tmpHTML_selecionados + "</div>"
  $('#selectHTML_compararM').html(planesSeleccionados);
  $('#selectHTML_comparar').html(planesSeleccionados);

} console.log(planesSeleccionados);

function pasarvariable(plan1, plan2, plan3) {

  let planes = plan1 + '%' + plan2 + '%' + plan3;

  location.href = "recibir.html?" + planes;
}

// ------------------------------------------------------------------------------------------------

function grupoFamiliar(age0, age1, kids) {
  if (age1 == 0 && kids == 0) {
    num_adultos = 1;
    numhijo1 = 0;
    numhijo2 = 0;
    numhijos = 0;
  } else if (age1 > 0 && kids == 0) {
    num_adultos = 2;
    numhijo1 = 0;
    numhijo2 = 0;
    numhijos = 0;
  } else if (age1 == 0 && kids >= 1) {
    num_adultos = 1;
    numhijo1 = 1;
    numhijo2 = kids - 1;
    numhijos = kids;
  } else if (age1 > 0 && kids >= 1) {
    num_adultos = 2;
    numhijo1 = 1;
    numhijo2 = kids - 1;
    numhijos = kids;
  } grupoFam = parseInt(num_adultos) + parseInt(kids);
  numhijo = parseInt(kids);
  if (age0 <= 35 && age1 <= 35) {
    gen = 'GEN'
  } else {
    gen = ''
  }
};


function valorPlan(resultado, tipoIngreso, sueldo, aportantes, segvida1, segvida2, bonA, tipoDeDato, aficheq, edadIdPremedic) {


  let precio_adultos_Sancor = {};


  let precio_hijos = {};
  let valor_plan_sancor = {};
  let results = resultado;
  let precio1Hijo = results[0][0];
  let precio2Hijo = results[1][0];
  let precioTitular = results[2][0];
  let preciosConyuge = results[3][0];

  let valor_plan_premedic = {};
  let valorAdultosPremedic = results[5][0];
  let precioPremedichm1 = results[6][0];
  let precioPremedichm25 = results[7][0];
  const removeEmpty = (obj) => {
    Object.keys(obj).forEach(key =>
      (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
      (obj[key] === undefined || obj[key] === null) && delete obj[key]
    );
    return obj;
  };

  let precio_titular_Omint = removeEmpty(results[8][0]);
  let precio_conyuge_Omint = removeEmpty(results[9][0]);
  let precio_hijo1_Omint = removeEmpty(results[10][0]);
  let precio_hijo2_Omint = removeEmpty(results[11][0]);
  let precio_hijos_Omint = {};
  let precio_adultos_Omint = {};
  let valor_plan_omint = {};

  console.log('funcion valorPremedic precioPremedichm25 : ' + precioPremedichm25);
  let aportMonPremedic = 1579;
  let aportMonGaleno = 1400;
  let aportMonOmint = 1400;
  let aportMonSancor = 1482.63;
  let aportMon = 1482.63;
  let bonifAport = 0;


  let tipo_DeDato = tipoDeDato;


  // <!----------------------Funcion VALOR DEL PLAN SANCOR start----------------------------> 
  function valorSancorSalud(edad2, preciosConyuge, precioTitular, numHijos, precio1Hijo, precio2Hijo) {
    if (edad2 > 17) {

      precio_adultos_Sancor = Object.entries(preciosConyuge).reduce((acc, [key, value]) => // matrimonio
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
        , { ...precioTitular });
    } else {
      precio_adultos_Sancor = precioTitular
    }

    if (numHijos == 1) {
      valor_plan_sancor = Object.entries(precio1Hijo).reduce((acc, [key, value]) =>
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
        , { ...precio_adultos_Sancor });
    } else if (numHijos > 1) {
      precio_hijos = Object.entries(precio2Hijo).reduce((acc, [key, value]) =>  // dis hijos o mas
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value * numhijo2) })
        , { ...precio1Hijo });
      valor_plan_sancor = Object.entries(precio_hijos).reduce((acc, [key, value]) =>
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
        , { ...precio_adultos_Sancor });
    } else {
      valor_plan_sancor = precio_adultos_Sancor;
    }
  }


  // <!----------------------Funcion VALOR DEL PLAN SANCOR end----------------------------> 

  // <!----------------------Funcion VALOR DEL PLAN PREMEDIC start----------------------------> 
  function valorPremedic(edad2, numHijo, valorAdultosPremedic, preciohm25, preciohm1, edadIdPremedic) {

    if (edadIdPremedic.includes('I') == true) {
      valor_plan_premedic = Object.entries(preciohm25).reduce((acc, [key, value]) =>  // dis hijos o mas
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value * numHijo) })
        , { ...valorAdultosPremedic });
    }
    else {
      valor_plan_premedic = valorAdultosPremedic;
    }

  }

  // <!----------------------Funcion VALOR DEL PLAN PREMEDIC end---------------------------->  
  // <!----------------------Funcion VALOR DEL PLAN OMINT start----------------------------> 

  function valorOmint(edad2, numHijos, precio_titular_Omint, precio_conyuge_Omint, precio_hijo1_Omint, precio_hijo2_Omint, edadID1OMINT) {


    if (edad2 > 17) {

      precio_adultos_Omint = Object.entries(precio_conyuge_Omint).reduce((acc, [key, value]) => // matrimonio
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
        , { ...precio_titular_Omint });
    } else {
      precio_adultos_Omint = precio_titular_Omint
    }

    if (numHijos == 1) {
      valor_plan_omint = Object.entries(precio_hijo1_Omint).reduce((acc, [key, value]) =>
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
        , { ...precio_adultos_Omint });
    } else if (numHijos > 1) {
      precio_hijos_Omint = Object.entries(precio_hijo2_Omint).reduce((acc, [key, value]) =>  // dis hijos o mas
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value * numhijo2) })
        , { ...precio_hijo1_Omint });
      valor_plan_omint = Object.entries(precio_hijos_Omint).reduce((acc, [key, value]) =>
        ({ ...acc, [key]: parseInt((acc[key]) || 0) + parseInt(value) })
        , { ...precio_adultos_Omint });
    } else {
      valor_plan_omint = precio_adultos_Omint;
    };
    if (edadID1OMINT.includes('P') == true) {
      valor_plan_omint = valor_plan_omint
    }
  }

  // <!----------------------Funcion VALOR DEL PLAN OMINT end----------------------------> 


  // <!----------------------Funcion escribir valores en pantalla start---------------------------->   


  $("#sueldo").on("change keyup paste click", function () {
    sueldoaporte = $('#sueldo').val();
    let descuentoAporte = 0;
    let haberesbruto = 0;

    if (Tipo_de_Dato == 'Sueldo Bruto') {
      descuentoAporte = sueldoaporte * multiplicarSueldo;
      document.getElementById("calculosueldo").innerHTML = 'Bonificacion por Aportes OS :' + descuentoAporte.toFixed(2);
    } else if (Tipo_de_Dato == 'Aporte Obra Social') {
      descuentoAporte = sueldoaporte * multiplicarAporte;
      haberesbruto = sueldoaporte * 33.3333333334;

      bonifAportSancor = sueldoaporte * 2.3666666666666667;
      bonifAport = sueldoaporte * 2.3666666666666667;

      bonifAportGaleno = sueldoaporte * 2.34;
      bonifAport = sueldoaporte * 2.34;

      bonifAportPremedic = sueldoaporte * 2.55;
      bonifAport = sueldoaporte * 2.55;

      bonifAportOmint = sueldoaporte * 2.1266666666666667;
      bonifAport = sueldoaporte * 2.1266666666666667;

      document.getElementById("calculosueldo").innerHTML = 'Sueldo Bruto: ' + haberesbruto.toFixed(2) + ' ; Bonificacion por Aportes OS aprox.:' + descuentoAporte.toFixed(2);
    }
  }
  );
  // <!----------------------Funcion escribir valores en pantalla end----------------------------> 
  // <!----------------------Funcion bonificacion Aportes start---------------------------->     
  function bonificacionaportes(tipoIngreso, sueldo, aportMon, aportantes, tipoDeDato) {
    if (tipoIngreso == "D") {
      if (tipoDeDato.includes('Sueldo')) {
        bonifAport = sueldo * 0.071;
        bonifAportSancor = sueldo * 0.071;
        bonifAportGaleno = sueldo * 0.0702;
        bonifAportPremedic = sueldo * 0.0765;
        bonifAportOmint = sueldo * 0.0638;


      } else if (tipoDeDato.includes('Aporte')) {
        bonifAport = sueldo * 2.3666666666666666;
        bonifAportSancor = sueldo * 2.3666666666666666;
        bonifAportGaleno = sueldo * 2.34;
        bonifAportPremedic = sueldo * 2.55;
        bonifAportOmint = sueldo * 2.1266666666666667;

      } else if (document.getElementById("monoadic").checked == true) {
        bonifAport = bonifAport + (aportantes * aportMon);
        bonifAportSancor = bonifAportSancor + (aportantes * aportMonSancor);
        bonifAportGaleno = bonifAportGaleno + (aportantes * aportMonGaleno);
        bonifAportPremedic = bonifAportPremedic + (aportantes * aportMonPremedic);
        bonifAportOmint = bonifAportOmint + (aportantes * aportMonOmint);
      };
    } else if (tipoIngreso === "M") {
      bonifAport = aportantes * aportMon;

      bonifAportSancor = aportantes * aportMonSancor
      bonifAportGaleno = aportantes * aportMonGaleno;
      bonifAportPremedic = aportantes * aportMonPremedic;
      bonifAportOmint = aportantes * aportMonOmint;

    } else {
      bonifAport = '';
      bonifAportSancor = '';
      bonifAportGaleno = '';
      bonifAportPremedic = '';
      bonifAportOmint = '';
    };
  };

  // <!----------------------Funcion bonifocacion Aportes end---------------------------->   
  console.log(results);

  bonificacionaportes(tipoIngreso, sueldo, aportMon, aportantes, tipo_DeDato);

  valorSancorSalud(edad2, preciosConyuge, precioTitular, numHijos, precio1Hijo, precio2Hijo);

  valorPremedic(edad2, numHijos, valorAdultosPremedic, precioPremedichm25, precioPremedichm1, edadIdPremedic);

  valorOmint(edad2, numHijos, precio_titular_Omint, precio_conyuge_Omint, precio_hijo1_Omint, precio_hijo2_Omint, edadID1OMINT)

  let precio = {};

  parseR(precio, bonifAport, segvida1, segvida2, bonA, aficheq);
}

// <!----------------------Funcion PRODUCT ID SANCOR start---------------------------->     
function productID(edad, tipoAsoc, gen, miembro, numHijos) {
  let edadID = '';
  let grupoSigla = '';
  tipo = tipoAsoc + gen;
  if (gen == 'GEN' && numHijos > 0) { grupoSigla = 'GF' };
  if (18 <= edad && edad <= 25) {
    edadID = '1' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  } else if (26 <= edad && edad <= 29) {
    edadID = '2' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  } else if (30 <= edad && edad <= 35) {
    edadID = '3' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  } else if (36 <= edad && edad <= 39) {
    edadID = '4' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  } else if (40 <= edad && edad <= 45) {
    edadID = '5' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  } else if (46 <= edad && edad <= 49) {
    edadID = '6' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  } else if (50 <= edad && edad <= 59) {
    edadID = '7' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  } else if (60 <= edad && edad <= 69) {
    edadID = '8' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  }
  else if (70 <= edad) {
    edadID = '9' + tipo;
    hijoId = '1H' + tipo;
    hijo2Id = '2H' + tipo;
  }
  if (miembro === 'titular') { edadID1 = edadID + grupoSigla } else { edadID2 = edadID + grupoSigla };
};
// <!----------------------Funcion PRODUCT ID SANCOR end---------------------------->     
// <!----------------------Funcion PRODUCT ID GALENO start---------------------------->        
function productIdGaleno(anios_1, anios_2, tipoAsoc, numHijos) {
  let tipoGaleno = tipoAsoc + 'S';
  let grupoSiglaGaleno = 'IND';
  edadIdGaleno = '';
  let anios2 = anios_2;
  let anios = anios_1;

  if (anios2 > anios) {
    anios2 = anios_1;
    anios = anios_2
  };
  if (anios2 >= 18) { grupoSiglaGaleno = 'MAT'; anios2 = anios2; anios = anios; }

  if (anios <= 25) {

    edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 25 + '+' + numHijos + 'h';

  } else if (anios <= 36) {

    edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 36 + '+' + numHijos + 'h';
  }
  else if (anios <= 64) {

    edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 64 + '+' + numHijos + 'h';

  } else if (anios <= 65) {

    edadIdGaleno = tipoGaleno + grupoSiglaGaleno + 65 + '+' + numHijos + 'h';
  }

};
// <!----------------------Funcion PRODUCT ID GALENO end---------------------------->

// <!----------------------Funcion PRODUCT ID PREMEDIC start----------------------------> 
function productIdPremedic(age_1, age_2, tipoAsoc, numHijos) {


  edadIdPremedic = '';


  age2 = age_2;
  age = age_1;



  if (age2 > age) {
    age2 = age_1;
    age = age_2
  };

  if (age2 >= 18) {

    if (age <= 29) {

      edadIdPremedic = tipoAsoc + 'MAT' + 29 + '+' + numHijos + 'h';

    } else if (age <= 39 && age >= 30) {

      edadIdPremedic = tipoAsoc + 'MAT' + 39 + '+' + numHijos + 'h';

    } else if (age <= 49 && age >= 40) {

      edadIdPremedic = tipoAsoc + 'MAT' + 49 + '+' + numHijos + 'h';

    } else if (age <= 59 && age >= 50) {

      edadIdPremedic = tipoAsoc + 'MAT' + 59 + '+' + numHijos + 'h';


    }
  }

  else if (age2 == 0) {
    if (age <= 29) {

      edadIdPremedic = tipoAsoc + 'IND' + 29 + '+0h';

    } else if (age <= 39 && age >= 30) {

      edadIdPremedic = tipoAsoc + 'IND' + 39 + '+0h';

    } else if (age <= 49 && age >= 40) {

      edadIdPremedic = tipoAsoc + 'IND' + 49 + '+0h';

    } else if (age <= 59 && age >= 50) {

      edadIdPremedic = tipoAsoc + 'IND' + 59 + '+0h';

    } else { edadIdPremedic = ''; }

  }
}

// <!----------------------Funcion PRODUCT ID PREMEDIC END---------------------------->           
// <!----------------------Funcion PRODUCT ID OMINT start---------------------------->        

function productIdOmint(anios, tipoAsoc, miembro) {
  let edadID = '';
  let tipo = tipoAsoc;
  let agnos = anios;
  hijoIdOMINT = tipo + 'H1';
  hijo2IdOMINT = tipo + 'H2';


  if (agnos >= 18 && agnos <= 25) {
    edadID = tipo + 25;
  } else if (agnos >= 26 && agnos <= 35) {
    edadID = tipo + 35;
  } else if (agnos >= 36 && agnos <= 54) {
    edadID = tipo + 54;
  } else if (agnos >= 55 && agnos <= 59) {
    edadID = tipo + 59;
  } else {
    edadID = tipo + 60;
  }
  if (miembro === 'titular') { edadID1OMINT = edadID } else { edadID2OMINT = edadID };


};

// <!----------------------Funcion PRODUCT ID OMINT end---------------------------->



// <!----------------------Funcion PARSE R start---------------------------->    

function parseR(precio, bonifAport, segvida1, segvida2, bonA, aficheq) {
  resultsReady = true;
  parseResult(precio, bonifAport, segvida1, segvida2, bonA, aficheq);
  $('#footer').removeAttr('style');
}
// <!----------------------Funcion PARSE R end---------------------------->     

// <!----------------------Funcion PARSE RESULT start----------------------------> 
pasados = new Array();
function parseResult(precio, bonifAport, segvida1, segvida2, bonA, aficheq) {
  let arrPlan = [];
  let segVidacheck = segvida1;
  let segVida2check = segvida2;
  let afiche = aficheq;
  let segVida = 0;
  let segVida1 = 0;
  let empresaPlan = '';
  let empresa = '';
  let plan_nombre = '';
  let bonInscr = 0;
  let bonAf = '';
  let logoprepaga = '';
  let precio_final_a_pagar = 0;
  let textoOtrosBen = '';
  let textoSegVida = '';
  let textoBonAfinidad = '';
  let segVidaTotal = '';
  let textoAportesOS = '';
  let valor_total_plan = 0;
  let nivelCobertura = 0;
  let stars_rating = 3;
  let descAportes = bonifAport;
  let bonAfinidadMonto = '';
  let precioPlan = 0;
  let precioMax = 0;
  let precioMin = 0;
  let todosPrecios = [];
  let ajustePrecios = '';
  let empresaFantasia = '';




  for (j in precio) {
    let otrosBenPrecios = [{ col_1: 1, SSPRO: 112, SSOD: 254, SSAC: 60, SUF: 29, CS: 600 }, { col_1: 2, SSPRO: 218, SSOD: 506, SSAC: 118, SUF: 56, CS: 1200 }, { col_1: 3, SSPRO: 333, SSOD: 506, SSAC: 179, SUF: 84, CS: 1800 }, { col_1: 4, SSPRO: 442, SSOD: 506, SSAC: 238, SUF: 112, CS: 2400 }, { col_1: 5, SSPRO: 553, SSOD: 506, SSAC: 297, SUF: 140, CS: 3000 }, { col_1: 6, SSPRO: 661, SSOD: 506, SSAC: 354, SUF: 168, CS: 3600 }];
    let cuotaSocial = grupoFam * 600;
    let segVidaPrecio = [{ col_1: '18 A 45', col_2: 396 }, { col_1: '46 A 54', col_2: 616 }, { col_1: '55 A 59', col_2: 616 }];
    let x = j.length;
    empresaPlan = [j][0];
    empresa = empresaPlan.substring(0, 6);
    plan_nombre = empresaPlan.substring(6);
    plan_gen = empresaPlan.substring(6, 9);
    bonInscr = parseInt(precio[j]) * 0.1;
    bonAf = bonA;

    let pos = '';

    console.log('empresaPlan' + empresaPlan);
    console.log('empresa' + empresa);
    console.log('plan_nombre' + plan_nombre);

    if (empresa == 'sancor') {
      logoprepaga = 'sancorsalud.png';
      otrosBen = 0;
      empresaFantasia = 'SanCor Salud';
      let bonAfinidad = 0;
      if (afiche == true) {
        textoBonAfinidad = 'Bonif. Afinidad';
        bonAfinidad = parseInt(precio[j] * 1.1134) * bonAf;
        bonAfinidadMonto = '-' + parseInt(bonAfinidad.toFixed());

      } else { bonAf = ''; }

      console.log('%cBonificacion Afinidad', 'color:orange');


      cuotaSocial = otrosBenPrecios[grupoFam - 1]['CS'];
      if (supras === true && gen === '') {
        otrosBen = 0;


        if (plan_nombre.includes('B')) {
          otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSPRO'];
          otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSOD'];


        } else {
          otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSPRO'];
          otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSOD'];
          otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SSAC'];
          otrosBen = otrosBen + otrosBenPrecios[grupoFam - 1]['SUF'];
        };

        textoOtrosBen = '<tr><td>Otros Beneficios</td><td>$ ' + otrosBen + '</td></tr>';
      }

      if (segVidacheck == true) {


        if (edad1 >= 18 && edad1 <= 45) {
          segVida = segVidaPrecio[0]['col_2']
        } else if (edad1 >= 46 && edad1 <= 54) {
          segVida = segVidaPrecio[1]['col_2']
        } else {
          segVida = segVidaPrecio[2]['col_2']
        };
        textoSegVida = '<tr><td> Seguro de Vida: </td><td>$ ' + segVida + '</td>';
      }
      if (segVida2check == true) {
        if (edad2 < 18) {
          segVida1 = 0;
        } else if (edad2 >= 18 && edad2 <= 45) {
          segVida1 = segVidaPrecio[0]['col_2']
        } else if (edad1 >= 46 && edad1 <= 54) {
          segVida1 = segVidaPrecio[1]['col_2']
        } else {
          segVida1 = segVidaPrecio[2]['col_2']
        };
        segVidaTotal = segVida + segVida1;
        textoSegVida = '<tr><td> Seguro de Vida: </td><td>$ ' + segVidaTotal + '</td>';
      }

      segVidaTotal = segVida + segVida1;
      console.log('Precio del PLan ' + empresa + ': ' + plan_nombre);
      console.log(precio[j] * 1.1134);
      console.log('Otros beneficios para Plan ' + empresa + ': ' + plan_nombre);

      console.log('Seguro de Vida Titular:');
      console.log(segVida);
      console.log('Seguro de Vida Conyuge:');
      console.log(segVida1);
      console.log('Seguro de Vida Ambos:');
      console.log(segVidaTotal);
      console.log('Valor Final ' + empresa + ': ' + plan_nombre);
      console.log
      valor_total_plan = parseInt(precio[j] * 1.1134) + parseInt(cuotaSocial) + parseInt(otrosBen) + parseInt(segVidaTotal) - parseInt(bonAfinidad.toFixed());
      precioPlan = parseInt(precio[j] * 1.1134) + parseInt(cuotaSocial);
      console.log(valor_total_plan);

      if (tipoIngreso === "M" || tipoIngreso === "D") {
        precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(descAportes);
        textoAportesOS = 'Aportes OS'
        bonifAport = '- ' + parseInt(bonifAportSancor);
      } else if (tipoIngreso === "I") {
        precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonInscr);
        bonifAport = bonInscr;
        textoAportesOS = 'Bonif. RI :'
      } else {
        precio_final_a_pagar = valor_total_plan;
      }



      console.log('precio_final_a_pagar:');
      console.log(precio_final_a_pagar);
      console.log('valor_total_plan:');
      console.log(valor_total_plan);
      console.log('descAportes:');
      console.log(descAportes);

      if (plan_nombre === "1000B") {
        colorPlan = '#df9000';
      } else if (plan_nombre === "1000Bcc") {
        colorPlan = '#df9000';
      } else if (plan_nombre === "1500B") {
        colorPlan = '#368969';
      } else if (plan_nombre === "1500Bcc") {
        colorPlan = '#368969';
      } else if (plan_nombre === "3000B") {
        colorPlan = '#0c37b3';
      } else if (plan_nombre === "3500") {
        colorPlan = '#2897d7';
      } else if (plan_nombre === "4000") {
        colorPlan = '#0846f7';
      } else if (plan_nombre === "4500") {
        colorPlan = '#12009f';
      } else if (plan_nombre === "5000") {
        colorPlan = '#202020';
      } else if (plan_nombre === "6000") {
        colorPlan = '#202020';
      } else if (plan_nombre === "700A") {
        colorPlan = '#bfd807';
      } else if (plan_nombre === "800V") {
        colorPlan = '#22b30c';

      } else {
        colorPlan = '';
      };
      if (gen === 'GEN' && plan_gen >= 100 && plan_gen <= 450) {
        plan_nombre = gen + plan_nombre

      } else {
        plan_nombre = plan_nombre;
      }
    } else if (empresa == 'galeno') {
      precioPlan = parseInt(precio[j]);
      logoprepaga = 'galeno.png';
      empresaFantasia = 'Galeno';
      textoSegVida = '';
      if (plan_nombre == 'Plan_220') {
        plan_nombre = '220 AZUL'
      } else if (plan_nombre == 'Plan_330') {
        plan_nombre = '330 PLATA'
      } else if (plan_nombre == 'Plan_440') {
        plan_nombre = '440 ORO'
      } else if (plan_nombre == 'Plan_550') {
        plan_nombre = '550 ORO'
      };
      valor_total_plan = parseInt(precio[j]);
      console.log(valor_total_plan);

      if (tipoIngreso === "M" || tipoIngreso === "D") {
        textoAportesOS = 'Aportes OS';
        bonifAport = '-' + parseInt(bonifAportGaleno);
        precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonifAportGaleno);

      } else {
        precio_final_a_pagar = valor_total_plan;
      }
    } else if (empresa == 'premed') {
      logoprepaga = 'premedic.png';
      precioPlan = parseInt(precio[j]);
      valor_total_plan = parseInt(precio[j]);
      empresaFantasia = 'Premedic';
      textoSegVida = '';
      console.log(valor_total_plan);
      if (plan_nombre === 'Plan_C100') {
        plan_nombre = 'C100'
      } else if (plan_nombre === 'Plan_200') {
        plan_nombre = '200'
      } else if (plan_nombre === 'Plan_300') {
        plan_nombre = '300'
      } else if (plan_nombre === 'Plan_400') {
        plan_nombre = '400'
      } else if (plan_nombre === 'Plan_500') {
        plan_nombre = '500'
      }
      let bonAfinidad = 0;

      if (afiche == true) {
        textoBonAfinidad = 'Bonif. Afinidad';
        bonAfinidad = parseInt(precio[j]) * bonAf;
        bonAfinidadMonto = '-' + parseInt(bonAfinidad.toFixed());
        valor_total_plan = parseInt(precio[j]) - parseInt(bonAfinidad.toFixed());
      }
      if (tipoIngreso === "M" || tipoIngreso === "D") {
        textoAportesOS = 'Aportes OS';
        bonifAport = '-' + parseInt(bonifAportPremedic);
        precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonifAportPremedic);
        console.log(tipoIngreso);
        console.log(bonifAportPremedic);
      } else {
        precio_final_a_pagar = valor_total_plan;
      }
    } else if (empresa.includes('omint')) {
      precioPlan = parseInt(precio[j]);
      logoprepaga = 'omint-1.png';
      empresaFantasia = 'Omint';
      valor_total_plan = parseInt(precio[j]);
      textoSegVida = '';
      console.log(valor_total_plan);
      if (plan_nombre === 'Plan_1500_22') {
        plan_nombre = '1500  22'
      } else if (plan_nombre === 'Plan_1500_22S') {
        plan_nombre = '1500  22S'
      } else if (plan_nombre === 'Plan_2500_24') {
        plan_nombre = '2500  24'
      } else if (plan_nombre === 'Plan_2500_24S') {
        plan_nombre = '2500  24S'
      } else if (plan_nombre === 'Plan_4021_22') {
        plan_nombre = '4021  22'
      } else if (plan_nombre === 'Plan_4021_22S') {
        plan_nombre = '4021  22S'
      } else if (plan_nombre === 'Plan_4500_23') {
        plan_nombre = '4500  23'
      } else if (plan_nombre === 'Plan_4500_23S') {
        plan_nombre = '4500  23S'
      } else if (plan_nombre === 'Plan_4500_24') {
        plan_nombre = '4500  24'
      } else if (plan_nombre === 'Plan_4500_24S') {
        plan_nombre = '4500  24S'
      } else if (plan_nombre === 'Plan_6500_21') {
        plan_nombre = '6500  21'
      } else if (plan_nombre === 'Plan_6500_21S') {
        plan_nombre = '6500  21S'
      } else if (plan_nombre === 'Plan_6500_22') {
        plan_nombre = '6500  22'
      } else if (plan_nombre === 'Plan_6500_22S') {
        plan_nombre = '6500  22S'
      } else if (plan_nombre === 'Plan_8500_21') {
        plan_nombre = '8500  21'
      } else if (plan_nombre === 'Plan_8500_21S') {
        plan_nombre = '8500  21S'
      } else if (plan_nombre === 'Plan_8500_22') {
        plan_nombre = '8500  22'
      } else if (plan_nombre === 'Plan_8500_22S') {
        plan_nombre = '8500  22S'
      } else if (plan_nombre === 'Plan_Midoc_10') {
        plan_nombre = 'Midoc  10'
      } else if (plan_nombre === 'Plan_Midoc_10S') {
        plan_nombre = 'Midoc  10S'
      }



      precio_final_a_pagar = valor_total_plan;
      if (tipoIngreso === "M" || tipoIngreso === "D") {
        textoAportesOS = 'Aportes OS';
        bonifAport = '-' + parseInt(bonifAportOmint);
        precio_final_a_pagar = parseInt(valor_total_plan) - parseInt(bonifAportOmint);
        console.log(tipoIngreso);
        console.log(bonifAportOmint);
      }
    }



    function adPlan(planName, precio) {

      arrPlan.push(planName);
      todosPrecios.push(precio);

    }



    let precioMax = Math.max(...todosPrecios)

    let precioMin = Math.min(...todosPrecios)

    let indiceMax = todosPrecios.indexOf(precioMax);

    let indiceMin = todosPrecios.indexOf(precioMin);






    if (precio_final_a_pagar < 0) {
      precio_final_a_pagar = 0;
    };

    adPlan(empresaFantasia + ' Plan ' + plan_nombre, precio_final_a_pagar);
    if (arrPlan.length < 10) {
      pos = '00' + arrPlan.length;
    } else if (arrPlan.length < 2) {
      pos = '0' + arrPlan.length;
    } else {
      pos = arrPlan.length;
    }







  }


}