function removeVowel(){
    var str = document.getElementById("txt").value;
    var result = document.getElementById("result");
    var txtWithNoVwls = str.replace(/[aeiouáéíóúÁÉÍÓÚÂÊÎÔÛÄËÏÖÜÀÈÌÒÙ]/gi, '');
    // document.getElementById("result").innerHTML = result;
    // document.getElementById("str").value = "";
    // alert(result);
    result.value = txtWithNoVwls;
}