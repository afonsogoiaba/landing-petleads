function fMascEx() {

  obj.value=masc(obj.value)
}

function fMasc(objeto,mascara) {

  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
};

function mCPF(cpf){

  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  
  return cpf
};

function mask(o) {
  setTimeout(function () {
      var v = mphone(o.value);
      if (v != o.value) {
          o.value = v;
      }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g,"");
  r = r.replace(/^0/,"");
  if (r.length > 10) {
      // 11+ digits. Format as 5+4.
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/,"($1) $2-$3");
  }
  else if (r.length > 5) {
      // 6..10 digits. Format as 4+4
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/,"($1) $2-$3");
  }
  else if (r.length > 2) {
      // 3..5 digits. Add (0XX..)
      r = r.replace(/^(\d\d)(\d{0,5})/,"($1) $2");
  }
  else {
      // 0..2 digits. Just add (0XX
      r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}
