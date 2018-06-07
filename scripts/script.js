  let employee = "";

  $.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    for(let i = 0; i < data.results.length; i++){
    employee += "<div class ='employee-div'><a href ='#''>";
    employee += '<img class = "employee-image" src ='+data.results[i].picture.medium +' >';
    employee += '<div class ="information">'
    employee += '<p class ="employee-name">' + data.results[i].name.first + ' ' + data.results[i].name.last +'</p>';
    employee += '<p class ="employee-email">'+ data.results[i].email +'</p>';
    employee += '<p class ="employee-location">' + data.results[i].location.city + '</p>';
    employee += '</a></div>';
    employee += '</div>';

  };
  $('#main-container').html(employee);
  $('.employee-div').click(function(){
    vex.defaultOptions.className = 'vex-theme-flat-attack'
    vex.dialog.open({
      input: ['<img class = "modal-image" src ='+data.results[0].picture.large +' >'
      + '<p class ="modal-email">'+ data.results[0].email +'</p>'
      + '<p class ="modal-city">' + data.results[0].location.city + '</p>'
      + '<p class ="modal-phone">' + data.results[0].cell + '</p>'
      + '<p class ="modal-address">' + data.results[0].location.street +' '+ data.results[0].nat +' ' + data.results[0].location.postcode + '</p>'
      + '<p class ="modal-bday"> Birthdate: ' + data.results[0].dob + '</p>',
    ].join(''),
    })
  });
    console.log(data);
  }
});
