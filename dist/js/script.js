function WebmailViewModel() {
    // Data
    var self = this;
    self.menuItems = [
        {
            "id": "1",
            "name": "Cheap App",
            "isActive": true
        },
        {
            "id": "2",
            "name": "Ship App",
            "isActive": false
        },
        {
            "id": "3",
            "name": "Beer App",
            "isActive": true
        },
        {
            "id": "4",
            "name": "Bear App",
            "isActive": false
        },
        {
            "id": "5",
            "name": "Wear App",
            "isActive": true
        },
        {
            "id": "6",
            "name": "Were App",
            "isActive": false
        }
    ];
    
};


ko.applyBindings(new WebmailViewModel());

// Graph
var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var lineChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                label: "My Second dataset",
                fillColor : "rgba(151,187,205,0.2)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]

    }

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}
