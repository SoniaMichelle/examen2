class Bono{
    public sueldo:number = parseFloat((<HTMLInputElement>document.getElementById("sueldo")).value);
    public edad:number = parseFloat ((<HTMLInputElement>document.getElementById("edad")).value);
    public sexo:string = (<HTMLInputElement>document.getElementById("sexo")).value;
    public nacionalidad:string = (<HTMLInputElement>document.getElementById("nacionalidad")).value;
    public php: any = (<HTMLInputElement>document.getElementById("php")).checked;
    public asp: any = (<HTMLInputElement>document.getElementById("asp")).checked;
    public vb: any = (<HTMLInputElement>document.getElementById("vb")).checked;
    public java: any = (<HTMLInputElement>document.getElementById("java")).checked;
    public oracle: any=(<HTMLInputElement>document.getElementById("oracle")).checked;
    public bd: any = (<HTMLInputElement>document.getElementById("bd")).checked;
    public año1:any = (<HTMLInputElement>document.getElementById("opcion1")).checked;
    public año2:any = (<HTMLInputElement>document.getElementById("opcion2")).checked;
    public mayor10:any = (<HTMLInputElement>document.getElementById("opcion3")).checked;
    

    public calcularSueldo ():number{
        return this.sueldo * 0.15;
    }

    public calcularFemenino():number{
        let aumentof = this.calcularSueldo();
        return aumentof * 1.03;
    }

    public aumentarEdad (): number{
        let aumentoedad = this.calcularSueldo();
        return aumentoedad * 1.02;
    }

    public incrementarNacional (): number{
        let quitarextran = this.calcularSueldo();
        return quitarextran * 0.95;
    }

    public antiguedad1(): number{
        let aumento_unocinco =this.calcularSueldo();
        return aumento_unocinco * 0.05;
    }

    public antiguedad2(): number{
        let aumento_seisdiez = this.calcularSueldo();
        return aumento_seisdiez * 0.10;
    }

    public antiguedad3(): number{
        let aumento_diez = this.calcularSueldo();
        return aumento_diez * 0.15;
    }

    public valida_check(): number{
        if (this.php) {
            this.php = 20;
            
        }if (this.asp) {
            this.asp = 40;
            
        }if (this.java) {
            this.java = 35;

        }if (this.vb) {
            this.vb = 55;

        }if (this.oracle) {
            this.oracle = 60;

        }if (this.bd) {
            this.bd = 15;
        }
        return this.php + this.asp + this.java + this.vb + this.oracle + this.bd;

    }

    public calcularBono(): number{
        let calcularcosto = this.valida_check() * 3;
        return calcularcosto;
    }

    public valida_Radio(): number{
        if (this.año1) {
            this.año1= 1;

        }if (this.año2) {
            this.año2= 2;   
        }if (this.mayor10) {
            this.mayor10 = 3;   
        }
        return this.año1 + this.año2 + this.mayor10;
    }

    public setRespuesta(){
        let genero = this.sexo;
        let edad = this.edad;
        let nacional = this.nacionalidad;
        let validacheck = this.valida_check();
        let validaRadio = this.valida_Radio();
        let r_sueldo = this.calcularSueldo();
        let femenino = this.calcularFemenino();
        let edadmayor= this.aumentarEdad();
        let quita= this.incrementarNacional();
        let aumento1a5 = this.antiguedad1();
        let aumento6a10 = this.antiguedad2();
        let mayora10 = this.antiguedad3();
        let calcularcosto= this.calcularBono();
        
        if (genero=="femenino"){
            let aumento_femenino = r_sueldo + femenino;
            if (edad> 45) {
                let aumentoedad = aumento_femenino + edadmayor;
                if (nacional == "extranjero") {
                    let quitar = aumentoedad - quita;
                    if (validaRadio== 1) {
                        let aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                        
                    } 
                    
                }else if (nacional =="nacional"){
                    let aumentoedad = aumento_femenino + edadmayor;
                    if (validaRadio== 1) {
                        let aumento1 = aumentoedad + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = aumentoedad + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = aumentoedad + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                    
                    }        
                }               
            }else if (edad > 45){
                if (nacional == "extranjero") {
                    let quitar = aumento_femenino - quita;
                    if (validaRadio== 1) {
                        let aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                        
                    } 
                    
                }else if (nacional =="nacional"){
                    let aumentoedad = aumento_femenino + edadmayor;
                    if (validaRadio== 1) {
                        let aumento1 = aumentoedad + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = aumentoedad + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = aumentoedad + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                    
                    }        
                }                      

            }
        }else if (genero=="masculino"){
            if (edad> 45) {
                let aumentoedad = r_sueldo + edadmayor;
                if (nacional == "extranjero") {
                    let quitar = aumentoedad - quita;
                    if (validaRadio== 1) {
                        let aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                        
                    } 
                    
                }else if (nacional =="nacional"){
                    let aumentoedad = r_sueldo + edadmayor;
                    if (validaRadio== 1) {
                        let aumento1 = aumentoedad + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = aumentoedad + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = aumentoedad + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                    
                    }        
                }               
            }else if (edad<45){
                if (nacional == "extranjero") {
                    let quitar = r_sueldo - quita;
                    if (validaRadio== 1) {
                        let aumento1 = quitar + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = quitar + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = quitar + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                        
                    } 
                    
                }else if (nacional == "nacional"){
                    let aumentoedad = r_sueldo + edadmayor;
                    if (validaRadio== 1) {
                        let aumento1 = aumentoedad + aumento1a5;
                        if (validacheck > 0) {
                            let aumentocurso = aumento1 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento1.toString();
                        }
                        
                    }else if(validaRadio== 2) {
                        let aumento2 = aumentoedad + aumento6a10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento2 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento2.toString();
                        }
                        
                    }else if(validaRadio== 3) {
                        let aumento3 = aumentoedad + mayora10;
                        if (validacheck > 0) {
                            let aumentocurso = aumento3 + calcularcosto;
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumentocurso.toString();
                            
                        }else if (validacheck== 0){
                            (<HTMLInputElement>document.getElementById("r_bono")).value = aumento3.toString();
                        }
                    
                    }        
                }                      

            }

        }
    
    }
}
function calcular(){
    let bono = new Bono ();
    let sueldo =(<HTMLInputElement>document.getElementById("sueldo")).value;
    let edad = (<HTMLInputElement>document.getElementById("edad")).value;
    let sexo =(<HTMLInputElement>document.getElementById("sexo")).value;
    let nacionalidad = (<HTMLInputElement>document.getElementById("nacionalidad")).checked;
    let unoacinco = (<HTMLInputElement>document.getElementById("opcion1")).checked;
    let seisadiez = (<HTMLInputElement>document.getElementById("opcion2")).checked;
    let mas10 = (<HTMLInputElement>document.getElementById("opcion3")).checked;

    if (sueldo=="") {
        alert ("Debes ingresar un sueldo");
        return false;    
    }else if  (edad=="") {
        alert ("Debes ingresar una edad valida");
        return false;  
    }else if (sexo == "0") {
        alert ("Debes seleccionar una opcion");
        return false;   
    }else if (!(unoacinco || seisadiez || mas10)){
        alert ("Debes seleccionar tu antiguedad")
        return false;
    }
    bono.setRespuesta();
}

function nueva(){
    (<HTMLInputElement>document.getElementById("sueldo")).value = "";
    (<HTMLInputElement>document.getElementById("edad")).value = "";
    (<HTMLInputElement>document.getElementById("sexo")).value = "";
    (<HTMLInputElement>document.getElementById("nacionalidad")).value = "";
}