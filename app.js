var Bono = /** @class */ (function () {
    function Bono() {
        this.sueldo = parseFloat(document.getElementById("sueldo").value);
        this.edad = parseFloat(document.getElementById("edad").value);
        this.sexo = document.getElementById("sexo").value;
        this.nacionalidad = document.getElementById("nacionalidad").value;
        this.php = document.getElementById("php").checked;
        this.asp = document.getElementById("asp").checked;
        this.vb = document.getElementById("vb").checked;
        this.java = document.getElementById("java").checked;
        this.oracle = document.getElementById("oracle").checked;
        this.bd = document.getElementById("bd").checked;
        this.año1 = document.getElementById("opcion1").checked;
        this.año2 = document.getElementById("opcion2").checked;
        this.mayor10 = document.getElementById("opcion3").checked;
    }
    Bono.prototype.calcularSueldo = function () {
        return this.sueldo * 0.15;
    };
    Bono.prototype.calcularFemenino = function () {
        var aumentof = this.calcularSueldo();
        return aumentof * 1.03;
    };
    Bono.prototype.aumentarEdad = function () {
        var aumentoedad = this.calcularSueldo();
        return aumentoedad * 1.02;
    };
    Bono.prototype.incrementarNacional = function () {
        var quitarextran = this.calcularSueldo();
        return quitarextran * 0.95;
    };
    Bono.prototype.antiguedad1 = function () {
        var aumento_unocinco = this.calcularSueldo();
        return aumento_unocinco * 0.05;
    };
    Bono.prototype.antiguedad2 = function () {
        var aumento_seisdiez = this.calcularSueldo();
        return aumento_seisdiez * 0.10;
    };
    Bono.prototype.antiguedad3 = function () {
        var aumento_diez = this.calcularSueldo();
        return aumento_diez * 0.15;
    };
    Bono.prototype.valida_check = function () {
        if (this.php) {
            this.php = 20;
        }
        if (this.asp) {
            this.asp = 40;
        }
        if (this.java) {
            this.java = 35;
        }
        if (this.vb) {
            this.vb = 55;
        }
        if (this.oracle) {
            this.oracle = 60;
        }
        if (this.bd) {
            this.bd = 15;
        }
        return this.php + this.asp + this.java + this.vb + this.oracle + this.bd;
    };
    Bono.prototype.calcularBono = function () {
        var calcularcosto = this.valida_check() * 3;
        return calcularcosto;
    };
    Bono.prototype.valida_Radio = function () {
        if (this.año1) {
            this.año1 = 1;
        }
        if (this.año2) {
            this.año2 = 2;
        }
        if (this.mayor10) {
            this.mayor10 = 3;
        }
        return this.año1 + this.año2 + this.mayor10;
    };
    Bono.prototype.setRespuesta = function () {
        var genero = this.sexo;
        var edad = this.edad;
        var nacional = this.nacionalidad;
        var validacheck = this.valida_check();
        var validaRadio = this.valida_Radio();
        var r_sueldo = this.calcularSueldo();
        var femenino = this.calcularFemenino();
        var edadmayor = this.aumentarEdad();
        var quita = this.incrementarNacional();
        var aumento1a5 = this.antiguedad1();
        var aumento6a10 = this.antiguedad2();
        var mayora10 = this.antiguedad3();
        var calcularcosto = this.calcularBono();
        if (genero == "femenino") {
            var aumento_femenino = r_sueldo + femenino;
            if (edad > 45) {
                var aumentoedad = aumento_femenino + edadmayor;
                if (nacional == "extranjero") {
                    var quitar = aumentoedad - quita;
                    if (validaRadio == 1) {
                        var aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
                else if (nacional == "nacional") {
                    var aumentoedad_1 = aumento_femenino + edadmayor;
                    if (validaRadio == 1) {
                        var aumento1 = aumentoedad_1 + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = aumentoedad_1 + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = aumentoedad_1 + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
            }
            else if (edad > 45) {
                if (nacional == "extranjero") {
                    var quitar = aumento_femenino - quita;
                    if (validaRadio == 1) {
                        var aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
                else if (nacional == "nacional") {
                    var aumentoedad = aumento_femenino + edadmayor;
                    if (validaRadio == 1) {
                        var aumento1 = aumentoedad + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = aumentoedad + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = aumentoedad + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
            }
        }
        else if (genero == "masculino") {
            if (edad > 45) {
                var aumentoedad = r_sueldo + edadmayor;
                if (nacional == "extranjero") {
                    var quitar = aumentoedad - quita;
                    if (validaRadio == 1) {
                        var aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
                else if (nacional == "nacional") {
                    var aumentoedad_2 = r_sueldo + edadmayor;
                    if (validaRadio == 1) {
                        var aumento1 = aumentoedad_2 + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = aumentoedad_2 + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = aumentoedad_2 + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
            }
            else if (edad < 45) {
                if (nacional == "extranjero") {
                    var quitar = r_sueldo - quita;
                    if (validaRadio == 1) {
                        var aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
                else if (nacional == "nacional") {
                    var aumentoedad = r_sueldo + edadmayor;
                    if (validaRadio == 1) {
                        var aumento1 = aumentoedad + aumento1a5;
                        if (validacheck > 0) {
                            var aumentocurso = aumento1 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento1.toString();
                        }
                    }
                    else if (validaRadio == 2) {
                        var aumento2 = aumentoedad + aumento6a10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento2 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento2.toString();
                        }
                    }
                    else if (validaRadio == 3) {
                        var aumento3 = aumentoedad + mayora10;
                        if (validacheck > 0) {
                            var aumentocurso = aumento3 + calcularcosto;
                            document.getElementById("r_bono").value = aumentocurso.toString();
                        }
                        else if (validacheck == 0) {
                            document.getElementById("r_bono").value = aumento3.toString();
                        }
                    }
                }
            }
        }
    };
    return Bono;
}());
function calcular() {
    var bono = new Bono();
    var sueldo = document.getElementById("sueldo").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var nacionalidad = document.getElementById("nacionalidad").checked;
    var unoacinco = document.getElementById("opcion1").checked;
    var seisadiez = document.getElementById("opcion2").checked;
    var mas10 = document.getElementById("opcion3").checked;
    if (sueldo == "") {
        alert("Debes ingresar un sueldo");
        return false;
    }
    else if (edad == "") {
        alert("Debes ingresar una edad valida");
        return false;
    }
    else if (sexo == "0") {
        alert("Debes seleccionar una opcion");
        return false;
    }
    else if (!(unoacinco || seisadiez || mas10)) {
        alert("Debes seleccionar tu antiguedad");
        return false;
    }
    bono.setRespuesta();
}
function nueva() {
    document.getElementById("sueldo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("nacionalidad").value = "";
}
