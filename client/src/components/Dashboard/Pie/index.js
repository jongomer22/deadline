import React, { createRef, Component } from "react";
import * as d3 from "d3";
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import API from '../../../utils/API';
import '../../styles/dashboard/pie.scss';

class PieClass extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
        console.log(this.ref);
        this.createPie = d3
            .pie()
            .value(d => d.value)
            .sort(null);
        this.createArc = d3
            .arc()
            .innerRadius(props.innerRadius)
            .outerRadius(props.outerRadius);
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
        this.format = d3.format(".2f");
        this.percent = (data) => {
            let res = (data / 5) * 100;
            return res + "%";
        }
        this.pieTween = (b) => {
            b.innerRadius = 0;
            var i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
            return (t) => (this.createArc(i(t)));
        };
    }
    componentDidMount() {
        let data = [], rawData = [];
        API.getProject(this.props.projId)
            .then(res => {
                if (res.data.modules) {
                    res.data.modules.forEach(i => {
                        if (i.level1module) {
                            let tmp = {
                                name: i.mod_name,
                                count: 0,
                                countComplete: 0,
                                percentage: 0
                            };
                            res.data.modules.forEach(j => {
                                if (i.mod_name === j.parent) {
                                    tmp.count++;
                                    if (j.complete) {
                                        tmp.countComplete++;
                                    }
                                }
                            });
                            if (tmp.count === 0) {
                                if (i.complete) {
                                    tmp.percentage = 100;
                                } else {
                                    tmp.percentage = 0;
                                }
                            } else {
                                tmp.percentage = (tmp.countComplete / tmp.count) * 100;
                            }
                            rawData.push(tmp)
                        }
                    });
                }
                let moduleCount = rawData.length,
                    pending = 0, progress = 0, complete = 0;
                rawData.forEach(mod => {
                    if (mod.percentage === 100) {
                        complete++;
                    } else if (mod.percentage === 0) {
                        pending++;
                    } else {
                        progress++;
                    }
                });
                data = [{
                    data: "In Progress",
                    value: progress,
                    percent: ((progress / moduleCount) * 100).toFixed(1)
                },
                {
                    data: "Pending",
                    value: pending,
                    percent: ((pending / moduleCount) * 100).toFixed(1)
                },
                {
                    data: "Complete",
                    value: complete,
                    percent: ((complete / moduleCount) * 100).toFixed(1)
                }];

                const svg = d3.select(this.ref.current).append('svg')
                    .attr('width', this.props.width)
                    .attr('height', this.props.height)
                    .append('g')
                    .attr('transform', 'translate(' + this.props.width / 2 + ',' + this.props.height / 2 + ')');

                const g = svg.selectAll('.arc')
                    .data(this.createPie(data))
                    .enter().append('g')
                    .attr('class', 'arc');

                var path = g.append('path')
                    .attr('d', this.createArc)
                    .style('fill', (d, i) => this.colors(d.index));

                path.append('title')
                    .text(function (d) { return (d.data.data + " - " + d.data.percent + "%"); });

                path.transition()
                    .ease(d3.easeLinear)
                    .duration(1500)
                    .attrTween('d', this.pieTween);

                g.append('text')
                    .transition()
                    .ease(d3.easeLinear)
                    .duration(1500)
                    .attr("transform", d => `translate(${this.createArc.centroid(d)})`)
                    .attr('dy', '.35em')
                    .text(d => d.value);
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <Card className="m-1 card-props">
                <CardBody>
                    <CardTitle><h5>Overall Status</h5><hr /></CardTitle>
                    <div ref={this.ref} />
                </CardBody>
            </Card>
        );
    }
}

export default PieClass;
