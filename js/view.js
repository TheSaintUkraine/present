var num_ind = localStorage.getItem('data_slide');

setInterval(getInd,1000);
function getInd() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET',url+'getIndex/'+num_ind)
  xhr.onload = () => {
    $('img').attr('src',url+'getImage/'+num_ind+'/'+xhr.response)
  }
  xhr.send()
}
