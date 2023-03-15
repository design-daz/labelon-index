var chart = bb.generate({
    data: {
      columns: [
    ["나", 20409, 20409, 20409, 20409, 20409, 20409, 20409, 20409],
    ["평균", 40409, 40409, 40409, 40409, 40409, 40409, 40409, 40409]
      ],
      colors: {
        나: "#14C9C9",
        평균: "#165DFF",

      },
      type: "bar", // for ESM specify as: bar()
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    legend: {
      // hide : true,
    //   position: "right",

      item: {
        tile: {
          type: "circle",
          r: 5
        }
      }
    },
    bar: {
      padding: 10,
      width: {
        ratio: 0.9,
        max: 20
      }
    },
    grid: {
      y: {
        show: true
      }
    },
    bindto: "#barChart-1"
  });