module.exports = function conf() {
    
    this.name;
    this.class;
    this.tanggal;
    this.tujuan;
    this.dari;
    this.bagasi;
    this.harga;
    this.jenis;
    this.gettanggal=function(tanggal){

        this.tanggal=tanggal;

    }
       
    this.getakomodasi=function(name,kelas,tujuan,dari,bagasi,harga,jenis){

        this.name=name;
        this.class=kelas;
        this.tujuan=tujuan;
        this.dari=dari;
        this.bagasi=bagasi;
        this.harga=harga;
        this.jenis=jenis;



    }

    this.transportArray=function(){

        this.array={
            name:this.name,
            kelas:this.class,
            tujuan:this.tujuan,
            dari:this.dari,
            bagasi:this.bagasi,
            harga:this.harga
        
        };
    }
    
    }
    
    