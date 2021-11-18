module.exports = function conf() {
this.lama;
this.checkin=null;
this.checkout=null;
this.kamar;
this.harga;
this.hotel;
this.lokasi;
this.jenis;
    this.bookinginfo=function(lama,cekin,cekout) {
      this.lama=parseInt(lama);
      this.checkin=cekin;
      this.checkout=cekout;
    }
    this.bookkamar=function(kamar,harga){
      this.kamar=kamar;
      this.harga=harga;
    }

    this.villa=function(hotel,lokasi,jenis,harga){
      this.hotel=hotel;
      this.lokasi=lokasi;
      this.jenis=jenis;
      this.harga=harga;
    }

    this.booking=function(hotel,lokasi,jenis){
      this.hotel=hotel;
      this.lokasi=lokasi;
      this.jenis=jenis;
    }
    this.createArray = function(){
      if (this.jenis=="Hotel"){
        var arr = {cekin:this.checkin,cekout:this.checkout,
          kamar:this.kamar,harga:this.harga,
          hotel:this.hotel,lokasi:this.lokasi,jenis:this.jenis,lama:this.lama};
      }else{
        var arr = {cekin:this.checkin,cekout:this.checkout,harga:this.harga,
          hotel:this.hotel,lokasi:this.lokasi,jenis:this.jenis,lama:this.lama};
      }
      
      return arr;
    }
    
}

