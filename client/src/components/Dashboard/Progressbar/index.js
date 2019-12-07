import React, { createRef, Component } from "react";
import * as d3 from "d3";
import '../../styles/dashboard/moduleprogress.scss';

class ProjPhase extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }
    componentDidMount() {
        var data = [this.props.count, this.props.complete];
        var percent = (data[1] / data[0]) * 100;

        var chart = d3.select(this.ref.current).append("svg")
            .attr("class", "chart")
            .attr("width", 30)
            .attr("height", 10 * data.length);

        var x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, 30]);

        var progress = chart.selectAll("rect")
            .data(data)
            .enter().append("rect")
            .attr("width", x)
            .attr("height", 10)
            .attr("rx", 5)
            .attr("ry", 5);


        progress.append('title')
            .text(percent.toFixed(1) + "%");
    }

    render() {
        return (
            <div>
                <div className="m-2" ref={this.ref} />
            </div>
        );
    }
}

export default ProjPhase;
