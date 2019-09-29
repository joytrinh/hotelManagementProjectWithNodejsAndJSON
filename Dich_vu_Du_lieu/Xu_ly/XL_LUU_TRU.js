const FS = require("fs")
const Xu_ly_HTTP = require("axios")
var Dia_chi_Dich_vu="http://localhost:3000"

const Duong_dan_Thu_muc_Du_lieu='./Du_lieu'
const Duong_dan_Thu_muc_Khach_san=Duong_dan_Thu_muc_Du_lieu+'/Khach_san'
const Duong_dan_Thu_muc_Phong=Duong_dan_Thu_muc_Du_lieu+'/Phong'

class XL_LUU_TRU{
  Doc_Khach_san(){
      var Doi_tuong={}
      var Duong_dan=Duong_dan_Thu_muc_Khach_san+'/KS_1.json'
      var Chuoi_JSON=FS.readFileSync(Duong_dan,'utf-8')
      var Doi_tuong=JSON.parse(Chuoi_JSON)
      return Doi_tuong
    }
  Doc_Danh_sach_Phong(){
    var Danh_sach = []
    var Danh_sach_Ten = FS.readdirSync(
              Duong_dan_Thu_muc_Phong, "UTF-8")
    Danh_sach_Ten.forEach(Ten => {
      var La_Ten_Tap_tin_Json =Ten.toUpperCase().endsWith(".JSON")
      if (La_Ten_Tap_tin_Json){
        var Duong_dan=Duong_dan_Thu_muc_Phong +"/" + Ten
        var Chuoi_JSON = FS.readFileSync(Duong_dan, "UTF-8")
        var Phong = JSON.parse(Chuoi_JSON) 
        Danh_sach.push(Phong)  
       }  
    })
    return Danh_sach
  }
  //=====Xử lý Ghi=======
  
  Ghi_Phong(Phong){
    var Kq="OK"
    var Duong_dan=Duong_dan_Thu_muc_Phong+'/'+Phong.Ma_so+'.json'
    var Chuoi_JSON=JSON.stringify(Phong)
    FS.writeFileSync(Duong_dan,Chuoi_JSON,"utf8")
    return Kq
  } 
  Thong_ke_tung_thang(Nam){
    var Danh_sach_Phong = this.Doc_Danh_sach_Phong()
    var Doanh_thu_Thang_1 = 0
    var Doanh_thu_Thang_2 = 0
    var Doanh_thu_Thang_3 = 0
    var Doanh_thu_Thang_4 = 0
    var Doanh_thu_Thang_5 = 0
    var Doanh_thu_Thang_6 = 0
    var Doanh_thu_Thang_7 = 0
    var Doanh_thu_Thang_8 = 0
    var Doanh_thu_Thang_9 = 0
    var Doanh_thu_Thang_10 = 0
    var Doanh_thu_Thang_11 = 0
    var Doanh_thu_Thang_12 = 0
    Danh_sach_Phong.forEach(Phong => {
      Phong.DanhSachThuePhong.forEach(PhieuTP =>{
        var NgayTraPhong = new Date(PhieuTP.NgayTraPhong)
        var Thang = NgayTraPhong.getMonth()
        var Nam_PTP = NgayTraPhong.getFullYear()
        if (Nam_PTP == Nam) {
          if(Thang == 1)
          Doanh_thu_Thang_1 += PhieuTP.TienThue
          else if(Thang == 2)
            Doanh_thu_Thang_2 += PhieuTP.TienThue
          else if(Thang == 3)
            Doanh_thu_Thang_3 += PhieuTP.TienThue
          else if(Thang == 4)
            Doanh_thu_Thang_4 += PhieuTP.TienThue
          else if(Thang == 5)
            Doanh_thu_Thang_5 += PhieuTP.TienThue
          else if(Thang == 6)
            Doanh_thu_Thang_6 += PhieuTP.TienThue
          else if(Thang == 7)
            Doanh_thu_Thang_7 += PhieuTP.TienThue
          else if(Thang == 8)
            Doanh_thu_Thang_8 += PhieuTP.TienThue
          else if(Thang == 9)
            Doanh_thu_Thang_9 += PhieuTP.TienThue
          else if(Thang == 10)
            Doanh_thu_Thang_10 += PhieuTP.TienThue
          else if(Thang == 11)
            Doanh_thu_Thang_11 += PhieuTP.TienThue
          else if(Thang == 12)
            Doanh_thu_Thang_12 += PhieuTP.TienThue
        }                
      })      
    })
    var Doi_tuong_B = []
      Doi_tuong_B.push(Doanh_thu_Thang_1)
      Doi_tuong_B.push(Doanh_thu_Thang_2)
      Doi_tuong_B.push(Doanh_thu_Thang_3)
      Doi_tuong_B.push(Doanh_thu_Thang_4)
      Doi_tuong_B.push(Doanh_thu_Thang_5)
      Doi_tuong_B.push(Doanh_thu_Thang_6)
      Doi_tuong_B.push(Doanh_thu_Thang_7)
      Doi_tuong_B.push(Doanh_thu_Thang_8)
      Doi_tuong_B.push(Doanh_thu_Thang_9)
      Doi_tuong_B.push(Doanh_thu_Thang_10)
      Doi_tuong_B.push(Doanh_thu_Thang_11)
      Doi_tuong_B.push(Doanh_thu_Thang_12)
    return Doi_tuong_B
  }
}

var Xu_ly=new XL_LUU_TRU
module.exports = Xu_ly