/*
    I know you guys prefer pure js, but I'm running out of time. I choose use jQuery to do my work faster.
*/
// KO. Functions
var Menu = {
    menu : ko.observableArray()
};
var AppStats =  {
    stats : ko.observableArray()
};
var AppLucy =  {
    stats : ko.observableArray()
};
$( document ).ready(function(){
    $.getJSON("http://demo2177885.mockable.io/apps",function(data){
        $.each(ko.toJS(data),function(i,obj){
            Menu.menu.push(obj);
        });
    });
    $.getJSON("http://demo2177885.mockable.io/web1app",function(data){
        $.each(ko.toJS(data),function(i,obj){
            AppStats.stats.push(obj);
        });
    });
      $.getJSON("http://demo2177885.mockable.io/db1lucy",function(data){
        $.each(ko.toJS(data),function(i,obj){
            AppLucy.stats.push(obj);
        });
    });
    
});
ko.applyBindings(Menu,document.getElementById("menu"));
ko.applyBindings(AppStats,document.getElementById("statsApp"));
ko.applyBindings(AppLucy,document.getElementById("statsLucy"));
  

// ***************************************************************************
// Graph

var graphData = [
    {
        "response_time": "320",
        "date": "2014-07-13T04:28:35+03:00"
    },
    {
        "response_time": "190",
        "date": "2014-07-05T04:28:35+03:00"
    },
    {
        "response_time": "968",
        "date": "2014-06-17T19:47:24+03:00"
    },
    {
        "response_time": "577",
        "date": "2014-01-03T01:32:49+03:00"
    },
    {
        "response_time": "980",
        "date": "2014-03-28T00:26:56+03:00"
    },
    {
        "response_time": "505",
        "date": "2014-03-29T08:24:00+03:00"
    },
    {
        "response_time": "190",
        "date": "2014-03-26T04:24:59+03:00"
    },
    {
        "response_time": "859",
        "date": "2014-02-02T07:34:59+03:00"
    },
    {
        "response_time": "104",
        "date": "2014-01-08T15:27:55+03:00"
    },
    {
        "response_time": "500",
        "date": "2014-03-26T04:38:58+03:00"
    },
    {
        "response_time": "798",
        "date": "2014-05-27T05:59:36+03:00"
    },
    {
        "response_time": "908",
        "date": "2014-01-12T10:55:21+03:00"
    },
    {
        "response_time": "819",
        "date": "2014-04-13T05:34:01+03:00"
    },
    {
        "response_time": "499",
        "date": "2014-03-05T15:02:17+03:00"
    },
    {
        "response_time": "892",
        "date": "2014-02-12T11:07:59+03:00"
    },
    {
        "response_time": "348",
        "date": "2014-05-10T01:16:08+03:00"
    },
    {
        "response_time": "335",
        "date": "2014-01-22T08:34:49+03:00"
    },
    {
        "response_time": "117",
        "date": "2014-06-25T23:43:43+03:00"
    },
    {
        "response_time": "952",
        "date": "2014-01-21T20:56:55+03:00"
    },
    {
        "response_time": "388",
        "date": "2014-02-12T07:24:25+03:00"
    },
    {
        "response_time": "658",
        "date": "2014-04-12T18:20:01+03:00"
    },
    {
        "response_time": "907",
        "date": "2014-05-06T23:28:22+03:00"
    },
    {
        "response_time": "676",
        "date": "2014-05-13T19:34:05+03:00"
    },
    {
        "response_time": "358",
        "date": "2014-06-29T12:12:33+03:00"
    },
    {
        "response_time": "424",
        "date": "2014-05-27T19:24:35+03:00"
    },
    {
        "response_time": "929",
        "date": "2014-05-31T04:56:27+03:00"
    },
    {
        "response_time": "736",
        "date": "2014-01-09T18:11:35+03:00"
    },
    {
        "response_time": "175",
        "date": "2014-03-07T04:43:40+03:00"
    },
    {
        "response_time": "896",
        "date": "2014-01-14T13:05:46+03:00"
    },
    {
        "response_time": "222",
        "date": "2014-03-02T23:15:03+03:00"
    },
    {
        "response_time": "781",
        "date": "2014-02-28T06:46:14+03:00"
    },
    {
        "response_time": "445",
        "date": "2014-04-15T13:08:48+03:00"
    },
    {
        "response_time": "621",
        "date": "2014-02-19T19:17:57+03:00"
    },
    {
        "response_time": "188",
        "date": "2014-07-05T21:02:29+03:00"
    },
    {
        "response_time": "325",
        "date": "2014-05-28T21:35:00+03:00"
    },
    {
        "response_time": "194",
        "date": "2014-03-07T22:18:47+03:00"
    },
    {
        "response_time": "931",
        "date": "2014-06-15T03:00:06+03:00"
    },
    {
        "response_time": "619",
        "date": "2014-04-19T18:42:35+03:00"
    },
    {
        "response_time": "148",
        "date": "2014-06-06T13:46:50+03:00"
    },
    {
        "response_time": "467",
        "date": "2014-03-17T14:58:27+03:00"
    },
    {
        "response_time": "250",
        "date": "2014-04-16T11:23:28+03:00"
    },
    {
        "response_time": "707",
        "date": "2014-03-21T03:21:57+03:00"
    },
    {
        "response_time": "120",
        "date": "2014-06-14T19:58:02+03:00"
    },
    {
        "response_time": "101",
        "date": "2014-01-04T21:14:42+03:00"
    },
    {
        "response_time": "169",
        "date": "2014-07-01T01:37:29+03:00"
    },
    {
        "response_time": "361",
        "date": "2014-02-14T12:56:13+03:00"
    },
    {
        "response_time": "800",
        "date": "2014-06-14T19:01:14+03:00"
    },
    {
        "response_time": "629",
        "date": "2014-03-13T17:21:00+03:00"
    },
    {
        "response_time": "771",
        "date": "2014-01-12T18:46:49+03:00"
    },
    {
        "response_time": "234",
        "date": "2014-03-12T00:16:10+03:00"
    },
    {
        "response_time": "473",
        "date": "2014-06-12T23:48:43+03:00"
    },
    {
        "response_time": "272",
        "date": "2014-03-09T17:23:09+03:00"
    },
    {
        "response_time": "966",
        "date": "2014-06-17T09:50:25+03:00"
    },
    {
        "response_time": "147",
        "date": "2014-01-23T03:52:52+03:00"
    },
    {
        "response_time": "968",
        "date": "2014-01-30T09:23:29+03:00"
    },
    {
        "response_time": "266",
        "date": "2014-07-09T07:45:52+03:00"
    },
    {
        "response_time": "679",
        "date": "2014-03-21T11:46:28+03:00"
    },
    {
        "response_time": "672",
        "date": "2014-03-10T00:47:39+03:00"
    },
    {
        "response_time": "574",
        "date": "2014-06-04T19:31:23+03:00"
    }
];

var label = [];
var value = [];
for (i= 0; i < graphData.length; i++){
    value.push(graphData[i].response_time);
    label.push(i);
}

var lineChartData = {
    labels : label,
    datasets : [
        {
            label: "Graph",
            fillColor : "rgba(151,187,205,0.2)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : value
            
        }
    ]

}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true,
        showScale: false,
        scaleShowLabels:false,
    });
}
