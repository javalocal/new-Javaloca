module.exports = function conf() {
    
    this.name;
    this.class;
    this.tanggal;
    this.tujuan;
    this.dari;
    this.bagasi;
    this.harga;
    this.kode;
    this.type;
    this.jenis='Kereta';
    this.waktu_from;
    this.waktu_to;
    this.gettanggal=function(tanggal){

        this.tanggal=tanggal;

    }
       
    this.gettransport=function(name,kelas,tujuan,dari,bagasi,harga,jenis,kode,type,waktu_from,waktu_to){

        this.name=name;
        this.class=kelas;
        this.tujuan=tujuan;
        this.dari=dari;
        this.bagasi=bagasi;
        this.harga=harga;
        this.jenis=jenis;
        this.kode=kode;
        this.type=type;
        this.waktu_from=waktu_from;
        this.waktu_to=waktu_to;

    }
    

    this.transportArray=function(){

        this.array={
            name:this.name,
            kelas:this.class,
            tujuan:this.tujuan,
            dari:this.dari,
            bagasi:this.bagasi,
            harga:this.harga,
            jenis:this.jenis,
            kode:this.kode,tanggal:this.tanggal,
            type:this.type,waktu_from:this.waktu_from,waktu_to:this.waktu_to
        };
        return this.array;
    }
    
    }
    
    