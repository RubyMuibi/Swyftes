import ReactApexChart from 'react-apexcharts';
import React from 'react';

class AssetsGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          height: 100,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
             
            }
          },
        },
        labels: ['Assets'],
      },
    };
  }

  render() {
    return (
      <div className="me-3"> {/* Align to the right */}
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={150} />
      </div>
    );
  }
}

export default AssetsGraph;
