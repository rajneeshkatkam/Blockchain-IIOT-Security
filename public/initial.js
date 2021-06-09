$(document).ready(function(){
    /* ChartJs Library */
// PMU1
var jsonobject2, freq2, volt2, curr2, pow2;
    var csv2 = "csv//with_fault_islanding1.csv";
var freqcha1 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Frequency in Hz",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
};
var voltagecha1 = {
type: 'line',
data: {
    labels: [0],
    datasets: [{ 
        data: [0],
        label: "Actual Voltage in Volts",
        borderColor: "#3e95cd",
        fill: false
    }
    ]
},
options: {
    title: {
    display: true,
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes : [{

            ticks: {
                autoskip: true,
                maxTicksLimit: 10
            }
        }]
    }
    
}
};
var currentcha1 = {
type: 'line',
data: {
    labels: [0],
    datasets: [{ 
        data: [0],
        label: "Actual Current in Amperes",
        borderColor: "#3e95cd",
        fill: false
    }
    ]
},
options: {
    title: {
    display: true,
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes : [{

            ticks: {
                autoskip: true,
                maxTicksLimit: 10
            }
        }]
    }
    
}
};
var powercha1 = {
type: 'line',
data: {
    labels: [0],
    datasets: [{ 
        data: [0],
        label: "Actual Power in KW",
        borderColor: "#3e95cd",
        fill: false
    }
    ]
},
options: {
    title: {
    display: true,
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes : [{

            ticks: {
                autoskip: true,
                maxTicksLimit: 10
            }
        }]
    }
    
}
};
//////////////////////////////////////////////////


// PMU2
    var freqcha2 = {
        type: 'line',
        data: {
            labels: [0],
            datasets: [{ 
                data: [0],
                label: "Actual Frequency in Hz",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
            display: true,

            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes : [{

                    ticks: {
                        autoskip: true,
                        maxTicksLimit: 10
                    }
                }]
            }
            
        }
    };
    var voltagecha2 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Voltage in Volts",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var currentcha2 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Current in Amperes",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var powercha2 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Power in KW",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    // PMU2
    var freqcha2 = {
        type: 'line',
        data: {
            labels: [0],
            datasets: [{ 
                data: [0],
                label: "Actual Frequency in Hz",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
            display: true,

            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes : [{

                    ticks: {
                        autoskip: true,
                        maxTicksLimit: 10
                    }
                }]
            }
            
        }
    };
    var voltagecha2 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Voltage in Volts",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var currentcha2 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Current in Amperes",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var powercha2 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Power in KW",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };


    



    /////////////////////////////////////////////////////////////////////////////////////////////

    // PMU3
    var freqcha3 = {
        type: 'line',
        data: {
            labels: [0],
            datasets: [{ 
                data: [0],
                label: "Actual Frequency in Hz",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
            display: true,

            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes : [{

                    ticks: {
                        autoskip: true,
                        maxTicksLimit: 10
                    }
                }]
            }
            
        }
    };
    var voltagecha3 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Voltage in Volts",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var currentcha3 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Current in Amperes",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var powercha3 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Power in KW",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    ////////////////////////////////////////////////////////////////////


    // PMU4
    var freqcha4 = {
        type: 'line',
        data: {
            labels: [0],
            datasets: [{ 
                data: [0],
                label: "Actual Frequency in Hz",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
            display: true,

            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes : [{

                    ticks: {
                        autoskip: true,
                        maxTicksLimit: 10
                    }
                }]
            }
            
        }
    };
    var voltagecha4 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Voltage in Volts",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var currentcha4 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Current in Amperes",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    var powercha4 = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{ 
            data: [0],
            label: "Actual Power in KW",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes : [{

                ticks: {
                    autoskip: true,
                    maxTicksLimit: 10
                }
            }]
        }
        
    }
    };
    //////////////////////////////////////////////////

    /* ChartJs Ends */


    /* Visjs Timeline */
    var container1 = document.getElementById('visualization');

    // Create a DataSet (allows two way data-binding)
    var items = new vis.DataSet([
        {id: 1, content: 'Block 1', start: '0', end: '1'},
        {id: 2, content: 'Block 2', start: '1', end: '3'},
        {id: 3, content: 'Block 3', start: '2'},
        {id: 4, content: 'Block 4', start: '3'},
        {id: 5, content: 'Block 5', start: '4'},
        {id: 6, content: 'Block 6', start: '5'}
    ]);

    // Configuration for the Timeline
    var options = {
/*         width: '100%',
        height: '30px',
        margin: {
          item: 100,
        } */
      };

    // Create a Timeline
    var timeline = new vis.Timeline(container1, items, options);
    function move (percentage) {
        var range = timeline.getWindow();
        var interval = 1;

        timeline.setWindow({
            start: range.start.valueOf() - interval * percentage,
            end:   range.end.valueOf()   - interval * percentage
        });
    }    

    // attach events to the navigation buttons
    document.getElementById('zoomIn').onclick    = function () { zoom(-0.2); };
    document.getElementById('zoomOut').onclick   = function () { zoom( 0.2); };
    document.getElementById('moveLeft').onclick  = function () { move( 0.2); };
    document.getElementById('moveRight').onclick = function () { move(-0.2); };
    document.getElementById('fit').onclick       = function () { timeline.fit(); };
    /* VisJs Timeline Ends */

    /* Network Visualization Library */

    var nodes = new vis.DataSet([
        {id: 1, shape: 'image', 
        image: 'images/kafka.png', label: 'Kakfa 1'},
        {id: 2, shape: 'image', 
        image: 'images/kafka.png', label: 'Kafka 2'},
        {id: 3, shape: 'image', 
        image: 'images/kafka.png', label: 'Kafka 3'},
        {id: 4, shape: 'image', 
        image: 'images/kafka.png', label: 'Kafka 4'},
        {id: 5, shape: 'image', 
        image: 'images/pmu.png', label: 'PMU 1'},
        {id: 6, shape: 'image', 
        image: 'images/pmu.png', label: 'PMU 2'},
        {id: 7, shape: 'image', 
        image: 'images/pmu.png', label: 'PMU 3'},
        {id: 8, shape: 'image', 
        image: 'images/pmu.png', label: 'PMU 4'}
    ]);
    
    // create an array with edges
    var edges = new vis.DataSet([
        {from: 5, to: 1},
        {from: 6, to: 2},
        {from: 7, to: 3},
        {from: 8, to: 4},
        {from: 1, to: 2},
        {from: 2, to: 3},
        {from: 3, to: 4},
        {from: 4, to: 1},
        {from: 1, to: 3},
        {from: 2, to: 4},
    ]);
    
    // create a network
    var container = document.getElementById('mynetwork');
    
    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
          borderWidth:0,
          size:42,
          color: {
            border: '#222',
            background: 'transparent'
          },
          font: {
            color: '#111',
            face: 'Walter Turncoat',
            size: 16,
            strokeWidth: 1,
            strokeColor: '#222'
          }
        },
        edges: {
          color: {
            color: '#CCC',
            highlight: '#A22'
          },
          width: 3,
          length: 275,
          hoverWidth: .05
        }
      }
    // initialize your network!
    
    var network = new vis.Network(container, data, options);
    network.on( 'click', function(properties) {
        var ids = properties.nodes;
        var clickedNodes = nodes.get(ids);
        if(ids == 5){
            $("#5").modal("show");
            var fc1 = document.getElementById("freqchart1");
            var vc1 = document.getElementById("voltagechart1");
            var cc1 = document.getElementById("currentchart1");
            var pc1 = document.getElementById("powerchart1");
            var freq1 = new Chart(fc1, freqcha1);  
            var curr1 = new Chart(cc1, currentcha1);    
            var volt1 = new Chart(vc1, voltagecha1);
            var pow1 = new Chart(pc1, powercha1);
            
        }
        if(ids == 6){
            $('#6').modal('show');    
            var fc2 = document.getElementById("freqchart2");
            var vc2 = document.getElementById("voltagechart2");
            var cc2 = document.getElementById("currentchart2");
            var pc2 = document.getElementById("powerchart2");
            freq2 = new Chart(fc2, freqcha2);  
            curr2 = new Chart(cc2, currentcha2);    
            volt2 = new Chart(vc2, voltagecha2);
            pow2 = new Chart(pc2, powercha2);
        }
        if(ids == 7){
            $("#7").modal("show");
            var fc3 = document.getElementById("freqchart3");
            var vc3 = document.getElementById("voltagechart3");
            var cc3 = document.getElementById("currentchart3");
            var pc3 = document.getElementById("powerchart3");
            var freq3 = new Chart(fc3, freqcha3);  
            var curr3 = new Chart(cc3, currentcha3);    
            var volt3 = new Chart(vc3, voltagecha3);
            var pow3 = new Chart(pc3, powercha3);
        }
        if(ids == 8){
            $("#8").modal("show");
            var fc4 = document.getElementById("freqchart4");
            var vc4 = document.getElementById("voltagechart4");
            var cc4 = document.getElementById("currentchart4");
            var pc4 = document.getElementById("powerchart4");
            var freq4 = new Chart(fc4, freqcha4);  
            var curr4 = new Chart(cc4, currentcha4);    
            var volt4 = new Chart(vc4, voltagecha4);
            var pow4 = new Chart(pc4, powercha4);
        }
    });

    /* Network Visualization Library Ends */
    $.ajax(csv2, {
        success: function(data) {
            jsonobject2 = csvjson.csv2json(data);
            for(i=0; i< 855; i++){
                
                freqcha2.data.labels.push(jsonobject2.rows[i]["C0"]);
                freqcha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["F"]));
                // freq2.update();
                voltagecha2.data.labels.push(jsonobject2.rows[i]["C0"]);
                voltagecha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["V1"]));
                // volt2.update();
                currentcha2.data.labels.push(jsonobject2.rows[i]["C0"]);
                currentcha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["I1"]));
                // curr2.update();
                powercha2.data.labels.push(jsonobject2.rows[0]["C0"]);
                powercha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["F"]));
                // pow2.update();
                i++;

                if(i>10){
                    freqcha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["F"]));
                    // freq2.update();
                    voltagecha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["V1"]));
                    // volt2.update();
                    currentcha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["I1"]));
                    // curr2.update();
                    powercha2.data.datasets[0].data.push(parseFloat(jsonobject2.rows[i]["F"]));

                }
                // if(i==855){
                //     i=1;
                // }
                }
            console.log(jsonobject2.rows[0]["C0"]);
            
            // Now use jsonobject to do some charting...
        },
        error: function() {
            // Show some error message, couldn't get the CSV file
        }
    });
});