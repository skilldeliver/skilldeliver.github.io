am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.legend = new am4charts.Legend();
    
    chart.data = [
      {
        language: "Python",
        hours: 763
      },
      {
        language: "CSS",
        hours: 115
      },
      {
        language: "C++",
        hours: 91
      },
      {
        language: "C#",
        hours: 89
      },
      {
        language: "HTML",
        hours: 78
      },
      {
        language: "JavaScript",
        hours: 66
      },
      {
        language: "Java",
        hours: 32
      },
      {
        language: "TeX",
        hours: 30
      },
      {
        language: "C",
        hours: 17
      },
      {
        language: "Bash",
        hours: 2
      },
    ];
    
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "hours";
    series.dataFields.category = "language";
    
    }); // end am4core.ready()