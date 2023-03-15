
var chart0 = bb.generate({
    data: {
      columns: [
    ["승인", 48],
    ["반려", 2],
    ["대기", 10]

      ],
      colors: {
        승인: "#008CFF",
        반려: "#FF7D00",
        대기: "#CACACA"
      },
      type: "pie", // for ESM specify as: pie()
      onclick: function(d, i) {
    console.log("onclick", d, i);
     },
      onover: function(d, i) {
    console.log("onover", d, i);
     },
      onout: function(d, i) {
    console.log("onout", d, i);
     }
    },
    legend: {
      hide : true,
      item: {
        tile: {
          type: "circle",
          r: 5
        }
      }
    },
    pie: {
      label: {
      //   format: function(value, ratio, id) {		return value +"\nHours";       }
        format: function(value, ratio, id) {		return value +"";       }

      }
    },
    bindto: "#chart-0"
  });


  var chart1 = bb.generate({
    data: {
      columns: [
    ["이월", 6700],
    ["데이터셋1", 9800],
    ["데이터셋2", 5500],
    ["데이터셋3", 600]

      ],
      colors: {
        이월: "#FFC121",
        데이터셋1: "#005ACD",
        데이터셋2: "#4CAEFF",
        데이터셋3: "#99D1FF"

      },
      type: "pie",
      
       // for ESM specify as: pie()
      onclick: function(d, i) {
    console.log("onclick", d, i);
     },
      onover: function(d, i) {
    console.log("onover", d, i);
     },
      onout: function(d, i) {
    console.log("onout", d, i);
     }
    },
    legend: {
      // hide : true,
      position: "bottom",
      // inset : {

      //   anchor: 'bottom-left',x: 10,y: -20,
      //   step: 1,
      // },
      // padding : 0,
      item: {
        tile: {
          type: "circle",
          r: 5
        }
      }
    },
    bindto: "#chart-1",
    pie: {
      label: {
      //   format: function(value, ratio, id) {		return value +"\nHours";       }
        format: function(value, ratio, id) {		return value +"";       }

      }
    },
  });