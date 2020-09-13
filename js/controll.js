var num_ind = localStorage.getItem('data_slide');
$('.touch').on('click',()=> {
  var xhr = new XMLHttpRequest();
  xhr.open('POST',url+'addIndex/'+num_ind);
  xhr.send()
})
$('.setOne').on('click',()=> {
  var xhr = new XMLHttpRequest();
  xhr.open('POST',url+'setZeroIndex/'+num_ind);
  xhr.send()
})
