    function startTime() {
    
    
    //setting up my variables
    var today = new Date(); // assign new date
    var hr = today.getHours(); // hours count
    var min = today.getMinutes(); // minutes count
    var sec = today.getSeconds(); // seconds count
    var ap = (hr < 12) ? 'AM':'PM'; // AM or PM count;
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;

    //Add a zero in front of numbers<10
        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);

    //writing it down in the document

        document.getElementById('hours').innerHTML = hr;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
        document.getElementById('time').innerHTML = ap;

    var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var weekdays = ['sun','mon','tue','wed','thu','fri','sat'];
    var curWeekDay = weekdays[today.getDay()]; // current day count
    var curDay = today.getDate(); // current date count
    var curMonth = months[today.getMonth()];// current month count
    var curYear = today.getFullYear(); // current year count
        document.getElementById('day').innerHTML = curDay;
        document.getElementById('month').innerHTML = curMonth; 
        document.getElementById('year').innerHTML = curYear;
        document.getElementById(''+[curWeekDay]+'').style.color = '#fff';
    
        var time = setTimeout(function(){ startTime() }, 500);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }