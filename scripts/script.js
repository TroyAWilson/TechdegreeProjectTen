  let employee = "";

  $.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    for(let i = 0; i < data.results.length; i++){
    employee += "<div class ='employee-div'>";
    employee += '<img class = "employee-image" src ='+data.results[i].picture.medium +' >';
    employee += '<div class ="information">'
    employee += '<p class ="employee-name">' + data.results[i].name.first + ' ' + data.results[i].name.last +'</p>';
    employee += '<p class ="employee-email">'+ data.results[i].email +'</p>';
    employee += '<p class ="employee-location">' + data.results[i].location.city + '</p>';
    employee += '</div>';
    employee += '</div>';

  };
  $('#main-container').html(employee);
  $('.employee-div').click(function(){
    vex.defaultOptions.className = 'vex-theme-flat-attack'
    vex.dialog.open({
      input: [
        '<img class = "modal-image" src ='+data.results[0].picture.large +' >'
      + '<p class ="modal-name">' + data.results[0].name.first + ' ' + data.results[0].name.last +'</p>'
      + '<p class ="modal-email" style= "color:#83898D">'+ data.results[0].email +'</p>'
      + '<p class ="modal-city" style= "color:#83898D">' + data.results[0].location.city + '</p>'
      + '<p class ="modal-phone" style= "color:#83898D">' + data.results[0].cell + '</p>'
      + '<p class ="modal-address" style= "color:#83898D">' + data.results[0].location.street +' '+ data.results[0].nat +' ' + data.results[0].location.postcode + '</p>'
      + '<p class ="modal-bday" style= "color:#83898D"> Birthdate: ' + data.results[0].dob + '</p>',
    ].join(''),
    })
  });
    console.log(data);
  }
});
