import React, { createRef, Component } from "react";
import * as d3 from "d3";
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import API from '../../../utils/API';

class ProjPhase extends Component {
    constructor(props) {
        super(props);
        this.projPhase = 2;
        this.ref = createRef();
    }
    componentDidMount() {

        API.getProject(this.props.projId)
            .then(res => {
                console.log(res);
                let noDev = 0;
                if (res.data.modules) {
                    res.data.modules.forEach(i => {
                        if (!i.complete) {
                            if (i.developer === "") {
                                noDev++;
                            }
                            this.projPhase = 1;
                        }
                    });
                    if (noDev === res.data.modules.length) {
                        console.log("nodev: " + noDev + "\nmodules: " + res.data.modules.length);
                        this.projPhase = 0;
                    }
                }

                var colors = { green: '#4DC87F', lightGreen: '#D9F0E3' };
                // var colors = { blue: '#3994b6', lightBlue: '#D9F0E3' };
                var width = 560, height = 150, offset = 48;

                var dimensions = '' + 0 + ' ' + 0 + ' ' + width + ' ' + height;

                const svg = d3.select(this.ref.current).append('svg')
                    .attr('id', 'scene', true)
                    .attr('preserveAspectRatio', 'xMinYMin meet')
                    .attr('viewBox', dimensions)
                    .classed('svg-content', true);

                var steps = ['0', '1', '2'],
                    stepWidth = (width - offset * 2) / (steps.length - 1),
                    currentStep = '0';

                var progressBar = svg.append('g')
                    .attr('transform', 'translate(' + offset + ',' + offset + ')')
                    .style('pointer-events', 'none');

                progressBar.append('rect') //progressBackground
                    .attr('fill', colors.lightGreen)
                    .attr('height', 8)
                    .attr('width', width - offset * 2)
                    .attr('rx', 4)
                    .attr('ry', 4);

                var progress = progressBar.append('rect')
                    .attr('fill', colors.green)
                    .attr('height', 8)
                    .attr('width', 0)
                    .attr('rx', 4)
                    .attr('ry', 4);

                progress.transition()
                    .duration(1000)
                    .attr('width', function () {
                        var index = steps.indexOf(currentStep);
                        return (index + 1) * stepWidth;
                    });

                progressBar.selectAll('circle')
                    .data(steps)
                    .enter()
                    .append('circle')
                    .attr('id', function (d, i) { return 'step_' + i; })
                    .attr('cx', function (d, i) { return i * stepWidth; })
                    .attr('cy', 4)
                    .attr('r', 45)
                    .attr('fill', '#FFFFFF')
                    .attr('stroke', colors.lightGreen)
                    .attr('stroke-width', 6)

                progressBar.selectAll('text')
                    .data(steps)
                    .enter()
                    .append('text')
                    .attr('id', function (d, i) { return 'label_' + i; })
                    .attr('dx', function (d, i) { return i * stepWidth; })
                    .attr('dy', 10)
                    .attr('text-anchor', 'middle')
                    .text(function (d, i) {
                        if (i === 0) {
                            return 'Design';
                        } else if (i === 1) {
                            return 'Dev';
                        } else if (i === 2) {
                            return 'Test';
                        }
                        // return i + 1;
                    })

                updateProgressBar(this.projPhase.toString());

                function updateProgressBar(step_) {

                    progress.transition()
                        .duration(1000)
                        .attr('fill', colors.green)
                        .attr('width', function () {
                            var index = steps.indexOf(step_);
                            return (index) * stepWidth;
                        });

                    for (var i = 0; i < steps.length; i++) {

                        if (i <= steps.indexOf(step_)) {

                            d3.select('#step_' + i).attr('fill', colors.green).attr('stroke', colors.green);
                            d3.select('#label_' + i).attr('fill', '#FFFFFF');


                        } else {

                            d3.select('#step_' + i).attr('fill', '#FFFFFF').attr('stroke', colors.lightGreen);
                            d3.select('#label_' + i).attr('fill', '#000000');

                        }

                    }

                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Card className="m-1 card-props">
                <CardBody>
                    <CardTitle><h5>Current Phase</h5><hr /></CardTitle>
                    <div ref={this.ref} />
                </CardBody>
            </Card>
            // <div>
            //     <h5 className="text-center">Current Phase</h5>
            //     <div ref={this.ref} />
            // </div>
        );
    }
}

export default ProjPhase;
