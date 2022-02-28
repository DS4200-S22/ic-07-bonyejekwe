/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file 

// add an svg to build within using deminsions set above
let svg6 = d3.select("body")
            .append("svg")
            .attr("class", "holder")
              .attr("width", width - margin.left - margin.right)
              .attr("height", height - margin.top - margin.bottom)
              .attr("viewBox", [0, 0, width, height]);

d3.csv("data/scatter.csv").then((data3) => { 

	console.log(data3)
	let maxX = d3.max(data3, (d) => { return d.day; }); 
	console.log("Max x: " + maxX); 

	let maxY = d3.max(data3, (d) => { return d.score; }); 
	console.log("Max y: " + maxY); 


	let xScale = d3.scaleLinear() // linear scale because we have 
	                              // linear data 
	                .domain([0, maxX])  // inputs for the function
	                .range([margin.left, width - margin.right]); 
	                // ^ outputs for the function 

	let yScale = d3.scaleLinear()
	            .domain([0, maxY])
	            .range([height - margin.bottom, margin.top]); 

	svg6.append("g") // g is a "placeholder" svg
	      .attr("transform", `translate(0,${height - margin.bottom})`) 
	      .call(d3.axisBottom(xScale)) // built in function for bottom
	                                  // axis given a scale function 
	        .attr("font-size", '20px'); // set font size

	svg6.append("g") // g is a "placeholder" svg
	     .attr("transform", `translate(${margin.left}, 0)`) 
	     .call(d3.axisLeft(yScale)) // built in function for left
	                                // axis given a scale function 
	      .attr("font-size", '20px'); // set font size

	svg6.selectAll("circle") 
	      .data(data3)
	      .enter()  
	      .append("circle")
	        .attr("cx", (d) => xScale(d.day)) // use xScale to return 
	                                        // pixel value for given
	                                        // datum 
	        .attr("cy", (d) => yScale(d.score)) // use yScale to return 
	                                        // pixel value for given
	                                        // datum 
	        .attr("r", 10) 
	        .attr("class", "myFirstPlot");
        // we could also set color based on data useing a 
        // colormap, which like scale functions, maps data to 
        // colors 
});



