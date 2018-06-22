  let employee = "";//The employee variable is what is used to concatinate all of the information
  //from the AJAX request into a single chunck of HTML.
//Simple AJAX request from randomuser.me, requesting 12 objects of user information
  $.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    for(let i = 0; i < data.results.length; i++){
      //This function takes the information from the AJAX request places it into the
      // variable employees which is then applied to the page
    employee += "<div class ='employee-div employee"+ i +"'>";
    employee += '<img class = "employee-image" src ='+data.results[i].picture.medium +' >';
    employee += '<div class ="information">'
    employee += '<p class ="employee-name">' + data.results[i].name.first + ' ' + data.results[i].name.last +'</p>';
    employee += '<p class ="employee-email">'+ data.results[i].email +'</p>';
    employee += '<p class ="employee-location">' + data.results[i].location.city + '</p>';
    employee += '</div>';
    employee += '</div>';

  };
  $('#main-container').html(employee); //Adds the employees to the main continer div
  for(let i = 0; i < data.results.length; i++){
  $('.employee'+i).click(function(){
    // Inside this for loop is where the content of the modals are put together,
    // looping through the information, applying classes and then adding them to the modal
    vex.defaultOptions.className = 'vex-theme-flat-attack'
    vex.dialog.open({
      input: [ //Inline colors had to be applied because the modals styles were overriding them
        '<img class = "modal-image" src ='+data.results[i].picture.large +' >'
      + '<p class ="modal-name">' + data.results[i].name.first + ' ' + data.results[i].name.last +'</p>'
      + '<p class ="modal-email" style= "color:#83898D">'+ data.results[i].email +'</p>'
      + '<p class ="modal-city" style= "color:#83898D">' + data.results[i].location.city + '</p>'
      + '<p class ="modal-phone" style= "color:#83898D">' + data.results[i].cell + '</p>'
      + '<p class ="modal-address" style= "color:#83898D">' + data.results[i].location.street +' '+ data.results[0].nat +' ' + data.results[0].location.postcode + '</p>'
      + '<p class ="modal-bday" style= "color:#83898D"> Birthdate: ' + data.results[i].dob.date + '</p>',
].join(''),
    })
  });
}
    console.log(data); //Log for checking AJAX data
  }
});
