//var n;
var thought
var weekdays= ['sun','mon','tue','wed','thur','fri','sat']
//var today = new Date();
//var lastDay;
//var lastdate;
//var monthNum = today.getMonth() + 1;
//var yearNum = today.getFullYear();
//var firstDay = new Date(String(monthNum) + "/1/" + String(yearNum)).getDay();
//console.log(firstDay)
//var lastDate1 = new Date(today.getFullYear(), today.getMonth() + 1, 0);
//numbDays = lastDate1.getDate();
//for(var j=0; j<weekdays.length;j++){
//    $('tr.calender_tr').append('<td class="calender_td1">'+ weekdays[j] +'</td>;')
//}
var event_object ={}
function createTable (date){

    var firstday1 =  new Date(date.getFullYear(), date.getMonth(), 1);
    var firstday_month = firstday1.getDay();
    //console.log(firstday_month)
    lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    lastdate = lastDay.getDate()
    //console.log(lastdate)
    var month = date.getMonth();
    $('.calender_tr td').remove();
    $('.calender_tr1 td').remove();
    $('.calender_tr2 td').remove();
    $('.calender_tr3 td').remove();
    $('.calender_tr4 td').remove();
    $('.calender_tr5 td').remove();
    $('.calender_tr6 td').remove();
    for(var k=0; k<weekdays.length;k++){
        $('tr.calender_tr').append('<td class="calender_td1">'+ weekdays[k] +'</td>;')
    }
    for (var i = 1; i <= lastdate + firstday_month; i++) {
//

        var y =  i-firstday_month;
        var z= ("0"+(date.getMonth()+1)).slice(-2)+ "/" +("0"+y).slice(-2) +'/'+ date.getFullYear()
        var eventdescription;
        //console.log(event_object[z],z)
        if(event_object[z] ){
            console.log(event_object[z]);
            eventdescription=event_object[z];
        }


        if(i<=firstday_month) {
            $('tr.calender_tr1').append('<td class="calender_td"><div></div></td>')
        }
        else if(i> firstday_month && i<=7) {
            $('tr.calender_tr1').append('<td class="calender_td">' + y + '<div>'+(event_object[z] ||  "") +'</div></td>')
        }
        else if(i<=14) {
            $('tr.calender_tr2').append('<td class="calender_td">' + y +'<div>'+(event_object[z] ||  "") +'</div></td>')
        }
        else if(i<=21) {
            $('tr.calender_tr3').append('<td class="calender_td">' + y +'<div>'+(event_object[z] ||  "") +'</div></td>')
        }
        else if(i<=28) {
            $('tr.calender_tr4').append('<td class="calender_td">' + y +'<div>'+(event_object[z] ||  "") +'</div></td>')
        }
        else if(i<=35) {
            $('tr.calender_tr5').append('<td class="calender_td">' + y +'<div>'+(event_object[z] ||  "") +'</div></td>')
        }
        else if(i<=37) {
            $('tr.calender_tr6').append('<td class="calender_td">' + y + '<div>'+(event_object[z] ||  "") +'</div></td>')
        }

    }
}
var date = new Date();
createTable(date)
//for (var i = 1; i <= numbDays + firstDay; i++) {var x =  i-firstDay
//    if(i<=firstDay) {
//        $('tr.calender_tr1').append('<td class="calender_td"><div></div></td>')
//    }else if(i> firstDay && i<=7) {
//        $('tr.calender_tr1').append('<td class="calender_td">' + x + '<div></div></td>')
//    }
//else if(i<=14) {
//    $('tr.calender_tr2').append('<td class="calender_td">' + x + '<div></div></td>')
//    }
//    else if(i<=21) {
//        $('tr.calender_tr3').append('<td class="calender_td">' + x + '<div></div></td>')
//    }
//    else if(i<=28) {
//        $('tr.calender_tr4').append('<td class="calender_td">' + x + '<div></div></td>')
//    }
//    else if(i<=38) {
//        $('tr.calender_tr5').append('<td class="calender_td">' + x + '<div></div></td>')
//    }
//    //else if(i<=38) {
//    //    $('tr.calender_tr5').append('<td class="calender_td"><div></div></td>')
//    //}
//}
$('#datepicker').on("changeMonth", function (event) {
var date = event.date
    createTable(date)
});

$('#datepicker').datepicker();
$("#datepicker").on("changeDate", function (event) {
    $('#exampleModal').modal('show');
    var value = $("#datepicker").datepicker("getDate");
    n = value.getDate();
    //console.log(n);
    if (n / 10 < 1)
        n = '0' + n;
    $("#my_hidden_input").val(
        $("#datepicker").datepicker('getFormattedDate')
    )
     $('#message-date').val($('#my_hidden_input').val());
    //$("td.table_position:contains("+n+")").css('');

});
$("#datasubmit").click(function () {

    var date =$('#my_hidden_input').val()
    thought = $("#message-text").val();
    $("td.calender_td:contains(" + n + ")").find('div').html(thought)

    $('#myModal').modal('hide');
    event_object[date]= thought;
    //console.log(event_object)
    //console.log(Object.getOwnPropertyNames(event_object))
    thought = '';
    $('#message-text').val('');
})


