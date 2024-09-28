function iniciarPrograma() {
    let inputFisica = document.getElementById('fisica');
    let inputMoral = document.getElementById('moral');
    inputFisica.addEventListener('click', escucharFisica);
    inputMoral.addEventListener('click', escucharMoral);

    let botonPersona = document.getElementById('seleccionar-persona');
    botonPersona.addEventListener('click', seleccionarPersona);

    document.getElementById('section-imprimir').style.display='none'

    let sectionBotones = document.getElementById('conocidos');
    sectionBotones.style.display = 'none';

    let sectionIngresarDatos = document.getElementById('ingresar-datos');
    sectionIngresarDatos.style.display = 'none';

    let sectionIngresarDatosMoral = document.getElementById('ingresar-datos-moral');
    sectionIngresarDatosMoral.style.display = 'none';

    let sectionPredet = document.getElementById('predet');
    sectionPredet.style.display = 'none';

    let sectionFisica = document.getElementById('predet-fisica');
    sectionFisica.style.display = 'none';

    let sectionMoral = document.getElementById('predet-moral');
    sectionMoral.style.display = 'none';

    let sectionPredet2 = document.getElementById('predet-2');
    sectionPredet2.style.display = 'none';

    let sectionIngresarDatosVehiculo = document.getElementById('ingresar-datos-vehiculo');
    sectionIngresarDatosVehiculo.style.display = 'none';

    let sectionBlanco = document.getElementById('blanco');
    sectionBlanco.style.display = 'none';

    // Asignar el event listener al botón "Atrás"
    let botonAtras = document.getElementById('atras');
    botonAtras.addEventListener('click', function() {
        // Ocultar la sección actual y mostrar la anterior
        document.getElementById('ingresar-datos').style.display = 'none';
        document.getElementById('fisica-moral').style.display = 'block';
    });

    let botonAtrasEmpresa = document.getElementById('atras-empresa')
    botonAtrasEmpresa.addEventListener('click',function()
    {
        document.getElementById('fisica-moral').style.display = 'block'
        document.getElementById('conocidos').style.display = 'none'
    }
    )
    let botonAtrasTerminar = document.getElementById('atras-terminar')
    botonAtrasTerminar.addEventListener('click',function()
    {
        let inputFisica = document.getElementById('fisica')
        let inputMoral = document.getElementById('moral')

        if(inputFisica.checked)
        {
            document.getElementById('ingresar-datos').style.display = 'block'
            document.getElementById('ingresar-datos-vehiculo').style.display = 'none'
        }
        else if(inputMoral.checked)
        {
            document.getElementById('conocidos').style.display = 'block'
            document.getElementById('ingresar-datos-vehiculo').style.display = 'none'
        }
    }
    )
    let botonModificar = document.getElementById('modificar')
    botonModificar.addEventListener('click',function()
    {
        document.getElementById('predet').style.display='none'
        document.getElementById('predet-fisica').style.display='none'
        document.getElementById('predet-moral').style.display='none'
        document.getElementById('predet-2').style.display='none'
        document.getElementById('section-imprimir').style.display='none'
        document.getElementById('ingresar-datos-vehiculo').style.display='block'
    })
}
function escucharFisica() {
    var audio = document.getElementById("audio");
    audio.play();
}
function escucharMoral() {
    var audio = document.getElementById("audio-2");
    audio.play();
}

function seleccionarPersona() {
    let inputFisica = document.getElementById('fisica');
    let inputMoral = document.getElementById('moral');

    if (inputFisica.checked) {
        let sectionIngresarDatos = document.getElementById('ingresar-datos');
        sectionIngresarDatos.style.display = 'block';

        let sectionPersona = document.getElementById('fisica-moral');
        sectionPersona.style.display = 'none';

        let botonSeleccionar = document.getElementById('siguiente');
        botonSeleccionar.removeEventListener('click', convenio); // Remover event listener previo
        botonSeleccionar.addEventListener('click', convenio); // Agregar nuevo event listener
    }
    if (inputMoral.checked) {
        let sectionConocidos = document.getElementById('conocidos');
        sectionConocidos.style.display = 'block';

        let sectionPersona = document.getElementById('fisica-moral');
        sectionPersona.style.display = 'none';

        let botonSeleccionarEmpresa = document.getElementById('seleccionar-empresa');
        botonSeleccionarEmpresa.addEventListener('click', seleccionarEmpresa);
    }
}

function convenio() {
    let inputNombre = document.getElementById('ingresar-nombre').value.toUpperCase();
    let nombre = document.getElementById('nombre-fisica');
    let nombreMoral = document.getElementById('nombre');

    nombre.innerHTML = inputNombre;
    nombreMoral.innerHTML = inputNombre;

    let nombre2 = document.getElementById('nombre-2');
    nombre2.innerHTML = inputNombre;

    let inputClave = document.getElementById('ingresar-clave').value.toUpperCase();
    let clave = document.getElementById('clave-fisica');
    let claveMoral = document.getElementById('clave');

    clave.innerHTML = inputClave;
    claveMoral.innerHTML = inputClave;
    /*
    let inputCalle = document.getElementById('ingresar-calle').value.toUpperCase();
    let calle = document.getElementById('calle-fisica');
    let calleMoral = document.getElementById('calle');

    calle.innerHTML = inputCalle;
    calleMoral.innerHTML = inputCalle;

    let inputColonia = document.getElementById('ingresar-colonia').value.toUpperCase();
    let colonia = document.getElementById('colonia-fisica');
    let coloniaMoral = document.getElementById('colonia');

    colonia.innerHTML = inputColonia;
    coloniaMoral.innerHTML = inputColonia;

    let inputMunicipio = document.getElementById('ingresar-municipio').value.toUpperCase();
    let municipio = document.getElementById('municipio-fisica');
    let municipioMoral = document.getElementById('municipio');

    municipio.innerHTML = inputMunicipio;
    municipioMoral.innerHTML = inputMunicipio;

    let inputCp = document.getElementById('ingresar-cp').value.toUpperCase();
    let cp = document.getElementById('cp-fisica');
    let cpMoral = document.getElementById('cp');

    cp.innerHTML = inputCp;
    cpMoral.innerHTML = inputCp;
    */
    let inputEmpresa = document.getElementById('ingresar-empresa').value.toUpperCase();
    let empresa = document.getElementById('empresa');
    empresa.innerHTML = inputEmpresa;

    let inputPoder = document.getElementById('ingresar-poder').value.toUpperCase();
    let poder = document.getElementById('poder');
    poder.innerHTML = inputPoder;

    let inputFechaPoder = document.getElementById('ingresar-fecha-poder').value.toUpperCase();
    let fechaPoder = document.getElementById('fecha-poder');
    fechaPoder.innerHTML = inputFechaPoder;

    let sectionIngresarDatos = document.getElementById('ingresar-datos');
    let sectionIngresarDatosMoral = document.getElementById('ingresar-datos-moral');
    let sectionIngresarDatosVehiculo = document.getElementById('ingresar-datos-vehiculo');

    sectionIngresarDatos.style.display = 'none';
    sectionIngresarDatosMoral.style.display = 'none';
    sectionIngresarDatosVehiculo.style.display = 'block';

    let botonSiguiente = document.getElementById('terminar');
    botonSiguiente.addEventListener('click',terminarConvenio);
}

function seleccionarEmpresa(){
    //Buscar dentro del documento las posibles personas a las que se hará un convenio
    let inputMartin  =document.getElementById('martin')
    let inputSergio = document.getElementById('sergio')
    let inputAdolfo = document.getElementById('adolfo')
    let inputMiguel = document.getElementById('miguel')
    let inputRafa = document.getElementById('rafa')
    let inputAdministradora = document.getElementById('administradora')
    let inputBasurto = document.getElementById('basurto')
    let inputOtros = document.getElementById('otros')
    let inputRay = document.getElementById('ray')
    let inputElba = document.getElementById('elba')
    let inputIzcalli = document.getElementById('izcalli')
    let inputRinconVerde  = document.getElementById('rincon-verde')
    let inputAcatlan = document.getElementById('acatlan')
    let inputCureno = document.getElementById('cureno')
    let inputMT = document.getElementById('mt')
    let inputMario = document.getElementById('mario')
    let inputSantos = document.getElementById('santos')
    let inputLety = document.getElementById('lety')
    //Buscar aquellos datos a modificar en cada caso
    let inputNombre = document.getElementById('nombre')
    let inputNombre2 = document.getElementById('nombre-2')
    let inputEmpresa = document.getElementById('empresa')
    let inputClave = document.getElementById('clave')
    let inputPoder = document.getElementById('poder')
    let inputFechaPoder = document.getElementById('fecha-poder')
    let inputVM = document.getElementById('vm')
    var array = [];
    if(inputSergio.checked){
       array[0] = "LUIS SERGIO BALCAZAR GARCIA"; array[1] = array[0]; array[2] = 'AUTOTRANSPORTES ESTRELLA DEL VALLE DE MEXICO, S.A. DE C.V.';array[3] = 'BLGRLS67100709H200'; array[4] = '20,876'; array[5] = '24 DE AGOSTO DEL 2022'
    }
    if(inputIzcalli.checked){
        array[0] = "JULIO CESAR MOYA LUNA"; array[1] = array[0]; array[2] = 'SITIO DE TAXIS Y RADIO TAXIS DE IZCALLI DEL RIO, S.A. DE C.V.'; array[3] = 'MYLNJL71041213H100'; array[4] = '23,683'; array[5] = '01 DE MARZO DEL 2024'                
    }
    if(inputVM){
        array[0] = "ISRAEL GONZALEZ ROSAS"; array[1] = array[0]; array[2] = 'AUTOBUSES DEL VALLE DE MEXICO, S.A. DE C.V.';array[3] = 'GNRSIS73112809H701'; array[4] = '24,490'; array[5] = '04 DE ABRIL DE 2024'
    }
    if(inputLety.checked){
        array[0] = "LETICIA ZARATE RIVERA"; array[1] = array[0]; array[2] = 'BLOQUE DE AGRUPACIONES DE RENOVACION, S.A. DE C.V.';array[3] = 'ZRRVLT79010321M700'; array[4] = '19,572'; array[5] = '02 DE JUNIO DEL 2021'
    }
    if(inputSantos.checked){
        array[0] = "JOSE SANTOS REYES GASPAR"; array[1] = array[0]; array[2] = 'AUTOTRANSPORTISTAS Y CONCESIONARIOS DEL ESTADO DE MEXICO RUTA 82 ANDEN "U" CUATRO CAMINOS Y RAMALES, S.A. DE C.V.';array[3] = 'RYGSSN68110109H800'; array[4] = '59,352'; array[5] = '18 DE SEPTIEMBRE DEL 2018'
    }
    //fecha
    if(inputMario.checked){
        array[0] = "MARIO RIZO LOPEZ"; array[1] = array[0]; array[2] = 'TRANSPORTES TERRESTRES CON ENLACE AL DISTRITO FEDERAL, S.A. DE C.V.';array[3] = 'RZLPMR68081709H600'; array[4] = '21,341'; array[5] = ''
    }
    if(inputMT.checked){
        array[0] = "JORGE ENRIQUEZ GONZALEZ"; array[1] = array[0]; array[2] = 'LINEA MEXICO TACUBA HUIXQUILUCAN Y ANEXAS, S.A. DE C.V.'; array[3] = 'ENGNJR50041809H700'; array[4] = '2,029'; array[5] = '03 DE JUNIO DE 2015'
    }
    //fecha
    if(inputCureno.checked){
        array[0] = "JAIME ALFREDO CUREÑO MUÑOZ"; array[1] = array[0]; array[2] = 'RADIO TAXI SAN ISIDRO, S.A. DE C.V.'; array[3] = 'CRMZ3M51092709H000'; array[4] = '30,887'; array[5] = ''        
    }
    //fecha
    if(inputAdolfo.checked){
        array[0] = "JOSE ALFREDO RAMIREZ ZUÑIGA"; array[1] = array[0]; array[2] = 'TRANSPORTISTAS COLECTIVOS ADOLFO LOPEZ MATEOS, HUIXQUILUCAN TOREO, S.A. DE C.V.'; array[3] = 'RMZGAL68060709H300'; array[4] = '32,333'; array[5] = ''                
    }
    if(inputMartin.checked){
        array[0] = "MARTIN GUTIERREZ MILLA"; array[1] = array[0]; array[2] = 'AUTOTRANSPORTES MIR DE SAN ANTONIO TULTITLAN, S.A. DE C.V.'; array[3] = 'GTMLMR82092609H900'; array[4] = '20,206'; array[5] = '18 DE JULIO DE 2015'                
    }
    if(inputAcatlan.checked){
        array[0] = "LUIS ROBERTO GONZALEZ HUERTA"; array[1] = array[0]; array[2] = 'ASOCIACION DE PROPIETARIOS, OPERADORES Y AUTOTRANSPORTISTAS DE ACATLAN, S.A. DE C.V.'; array[3] = 'GNHRLS63061515H500'; array[4] = '28,092'; array[5] = '18 DE JULIO DE 2015'                
    }
    //fecha
    if(inputIzcalli.checked){
        array[0] = "JULIO CESAR MOYA LUNA"; array[1] = array[0]; array[2] = 'SITIO DE TAXIS Y RADIO TAXIS DE IZCALLI DEL RIO, S.A. DE C.V.'; array[3] = 'MYLNJL71041213H100'; array[4] = '23,683'; array[5] = '01 DE MARZO DEL 2024'                
    }
    if(inputRinconVerde.checked){
        array[0] = "MIGUEL CARLOS ROMERO LUCAS"; array[1] = array[0]; array[2] = 'AUTOTRANSPORTES DEL CENTRO DE NAUCALPAN, S.A. DE C.V.'; array[3] = 'RMLCMG42092915H400'; array[4] = '58,502'; array[5] = '22 DE JUNIO DEL 2017'                
    }
    if(inputRafa.checked){
        array[0] = "RAUL RAFAEL MUCIÑO ROJAS"; array[1] = array[0]; array[2] = 'RUTA 09 ASOCIACION DE PROPIETARIOS Y AUTOTRANSPORTES DE AGUA BENDITA HUIXQUILUCAN GRUPO VALLE DE MEXICO, S.A. DE C.V.'; array[3] = 'MCRJRL68061115H400'; array[4] = '62,483'; array[5] = '11 DE NOVIEMBRE DEL 2020'                
    }
    if(inputMiguel.checked){
        array[0] = "MIGUEL ANGEL RODRIGUEZ CORTES"; array[1] = array[0]; array[2] = 'TRANSPORTES URBANOS Y SUBURBANOS DE SAN ANTONIO TULTITLAN, S.A. DE C.V.'; array[3] = 'RDCRMG69021809H800'; array[4] = '4,502'; array[5] = '11 DE SEPTIEMBRE DEL 2020'                   
    }
    if(inputAdministradora.checked){
        array[0] = "JORGE MOLINA MATRINTEZ"; array[1] = array[0]; array[2] = 'ADMINISTRADORA DE TRANSPORTE INDEPENDIENTE, S.A. DE C.V.'; array[3] = 'MLMRJR74042315H401'; array[4] = '21,889'; array[5] = '02 DE AGOSTO DEL 2018'                   
    }
    if(inputBasurto.checked){
        array[0] = "JAVIER GUADALUPE BASURTO MONTOYA"; array[1] = array[0]; array[2] = 'A.C.P.T.A. RUTA 27 II MIGUEL HIDALGO, S.A. DE C.V.'; array[3] = 'BSMNJV581212H700'; array[4] = '68,598'; array[5] = '24 DE NOVIEMBRE DEL 2017'                            
    }
    if(inputRay.checked){
        array[0] = "RAYMUNDO DAVID BENITEZ CRUZ"; array[1] = array[0]; array[2] = 'TRANSPORTES EN NEZAHUALCOYOTL PERLA-REFORMA, S.A. DE C.V.'; array[3] = 'BNCRRY59122909H580'; array[4] = '123,129'; array[5] = '29 DE MARZO DEL 2022'                            
    }
    if(inputElba.checked){
        array[0] = "MANUEL RICARDO RODRIGUEZ MORALES"; array[1] = array[0]; array[2] = 'TRANSPORTES DE ALQUILER DE MEXICO Y ANEXOS DE CUAUTITLAN, S.A. DE C.V.'; array[3] = 'RDMRMN72060109H900'; array[4] = '17,456'; array[5] = '16 DE MAYO DEL 2023'                            
    }
    //Asignar dependiendo la persona cada dato del array al convenio
    inputNombre.innerHTML = array[0]; inputNombre2.innerHTML = array[1]; inputEmpresa.innerHTML = array[2]; inputClave.innerHTML = array[3]; inputPoder.innerHTML = array[4]; inputFechaPoder.innerHTML = array[5];

    let sectionConocidos = document.getElementById('conocidos')
    sectionConocidos.style.display = 'none'

    let sectionIngresarDatosVehiculo = document.getElementById('ingresar-datos-vehiculo')
    sectionIngresarDatosVehiculo.style.display = 'block'

    let botonTerminar = document.getElementById('terminar')
    botonTerminar.addEventListener('click', terminarConvenio) 

    if(inputOtros.checked) {
        let sectionIngresarDatosVehiculo = document.getElementById('ingresar-datos-vehiculo')
        sectionIngresarDatosVehiculo.style.display = 'none'

        let sectionConocidos = document.getElementById('conocidos')
        sectionConocidos.style.display = 'none'

        let sectionIngresarDatos = document.getElementById('ingresar-datos')
        sectionIngresarDatos.style.display = 'block'

        let sectionIngresarDatosMoral = document.getElementById('ingresar-datos-moral')
        sectionIngresarDatosMoral.style.display = 'block'

        let botonSeleccionar = document.getElementById('siguiente')
        botonSeleccionar.addEventListener('click', convenio)
    }
}

function terminarConvenio(){
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    //Pasamos a la función el valor numérico del mes y nos retorna la cadena del mes
    month = obtenerNombreMes(month);

    let currentDate = `${day} de ${month} del ${year}`;
    console.log(currentDate);

    let inputDate = document.getElementById('date')

    inputDate.innerHTML = currentDate

    let inputConcesion = document.getElementById("ingresar-concesion").value.toUpperCase()
    let concesion = document.getElementById("concesion")

    concesion.innerHTML = inputConcesion

    let inputModalidad = document.getElementById('ingresar-modalidad').value.toUpperCase()
    let modalidad = document.getElementById('modalidad')

    modalidad.innerHTML = inputModalidad

    let inputMunicipio = document.getElementById('ingresar-municipio-operacion').value.toUpperCase()
    let municipio = document.getElementById('municipio-2')

    municipio.innerHTML = inputMunicipio

    let inputSerie = document.getElementById("ingresar-serie").value.toUpperCase()
    let serie = document.getElementById("serie")

    serie.innerHTML = inputSerie

    let inputMarca= document.getElementById("ingresar-marca").value.toUpperCase()
    let marca = document.getElementById("marca")

    marca.innerHTML = inputMarca

    let inputSubmarca= document.getElementById("ingresar-submarca").value.toUpperCase()
    let submarca = document.getElementById("submarca")

    submarca.innerHTML = inputSubmarca

    let mod = inputSerie.charAt(9)
    let modelo = document.getElementById('modelo')

    mod = obtenerModelo(mod);
    
    modelo.innerHTML = mod

    let sectionIngresarDatosVehiculo = document.getElementById('ingresar-datos-vehiculo')
    sectionIngresarDatosVehiculo.style.display = 'none'

    let sectionPredet = document.getElementById('predet')
    sectionPredet.style.display = 'block'

    let sectionPredet2 = document.getElementById('predet-2')
    sectionPredet2.style.display = 'block'

    let sectionBlanco = document.getElementById('blanco')
    sectionBlanco.style.display = 'block'

    let inputFisica = document.getElementById('fisica')
    let inputMoral = document.getElementById('moral')
    if(inputMoral.checked){
        let sectionPredetMoral = document.getElementById("predet-moral")
        sectionPredetMoral.style.display = 'block'
    }
    if(inputFisica.checked){
        let cambioFisica = document.getElementById('cambio-fisica')
        cambioFisica.innerHTML = 'me dirijo a usted para solicitar'

        let sectionPredetMoral = document.getElementById("predet-fisica")
        sectionPredetMoral.style.display = 'block'

        let sectionBlanco = document.getElementById('blanco')
        sectionBlanco.style.display = 'block'
    }
    document.getElementById('section-imprimir').style.display = 'block'

    let botonImprimir = document.getElementById('imprimir');
    botonImprimir.addEventListener('click',function()
    {
        document.getElementById('section-imprimir').style.display = 'none'
        window.print();
    })
    let botonModificar = document.getElementById('modificar ')
    botonModificar.addEventListener('click',function(){
        botonImprimir.removeEventListener('click',function()
        {
            document.getElementById('section-imprimir').style.display = 'none'
            window.print();
        })
    })

    window.addEventListener('afterprint', function(){
        document.getElementById('section-imprimir').style.display = 'block'
    })
    window.removeEventListener('afterprint', function(){
        document.getElementById('section-imprimir').style.display = 'block'
    })
}

function obtenerNombreMes(month)
{
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    switch (month) {
        case 1:
            return meses[0];
        case 2:
            return meses[1];
        case 3:
            return meses[2];
        case 4:
            return meses[3];
        case 5:
            return meses[4];
        case 6:
            return meses[5];
        case 7:
            return meses[6];
        case 8:
            return meses[7];
        case 9:
            return meses[8];
        case 10:
            return meses[9];
        case 11:
            return meses[10];
        case 12:
            return meses[11];
        default:
            return 'Mes inválido'; // Or handle the error as needed
    }
}

function obtenerModelo(mod) {
    var modelos = ['2000', '2001', '2002', '2003', '2004', '2005', '2007', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

    var index;

    switch (mod) {
        case 'Y':
            index = 0; // 2000
            break;
        case 'A':
            index = 10; // 2010
            break;
        case 'B':
            index = 11; // 2011
            break;
        case 'C':
            index = 12; // 2012
            break;
        case 'D':
            index = 13; // 2013
            break;
        case 'E':
            index = 14; // 2014
            break;
        case 'F':
            index = 15; // 2015
            break;
        case 'G':
            index = 16; // 2016
            break;
        case 'H':
            index = 17; // 2017
            break;
        case 'J':
            index = 18; // 2018
            break;
        case 'K':
            index = 19; // 2019
            break;
        case 'L':
            index = 20; // 2020
            break;
        case 'M':
            index = 21; // 2021
            break;
        case 'N':
            index = 22; // 2022
            break;
        case 'P':
            index = 23; // 2023
            break;
        case 'R':
            index = 24; // 2024
            break;
        case 'S':
            index = 25; // 2025
            break;
        default:
            if (mod >= 1 && mod <= 9) {
                index = mod; // 2001 a 2009
            } else {
                return 'Modificación inválida'; // Manejar valores inválidos
            }
            break;
    }
    
    return modelos[index];
}

window.addEventListener('load', iniciarPrograma)