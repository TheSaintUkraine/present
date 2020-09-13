var data = "";
$('.view-button').on('click',() => {
  data = $('.input-view').val();
  if(data != "") {
    localStorage.setItem('data_slide',data)
    window.open('view.html')
  }
});
$('.controll-button').on('click',() => {
  data = $('.input-controll').val();
  if(data != "") {
    localStorage.setItem('data_slide',data)
    window.open('control.html')
  }
});
