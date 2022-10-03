$('.btn').click(function () {


    //console.log($(this))


    console.log($(this).parent().siblings('.col-10').attr('id'))

    var timeBlockVal = $(this).parent().siblings('.col-10').val()
    console.log(timeBlockVal)

})