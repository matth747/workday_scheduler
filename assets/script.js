$('.btn').click(function () {


    //console.log($(this))


    console.log($(this).siblings('.col-10').attr('id'))

    var timeBlockVal = $(this).siblings('.col-10').val()
    console.log(timeBlockVal)

})
function saveInfo() {
    // Save related form data as an object
    var infoSaved = {
      note: timeBlockVal
      
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("infoSaved", JSON.stringify(infoSaved));
  }
  function renderinfo() {
    // Use JSON.parse() to convert text to JavaScript object
    var todo = JSON.parse(localStorage.getItem("infoSaved"));
    // Check if data is returned, if not exit out of the function
    
    document.getElementById('#morning-b8').innerHTML = infoSaved.note;
    
    }
    $('.btn').click(saveInfo)
    $('.btn').click(renderinfo)

    var buttonClickHandler = function (event) {
        // What is `event.target` referencing?
        // TODO: Write your answer here
        var language = event.target.getAttribute('data-language');
      
        // Why is this `if` block in place?
        // TODO: Write your answer here
        if (language) {
          getFeaturedRepos(language);
      
          repoContainerEl.textContent = '';
        }
      };
      