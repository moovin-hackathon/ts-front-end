import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import { Line } from 'react-chartjs-2';
import './Dashboard.scss'

class Dashboard extends Component {

  render() {
    const makeSocialBoxData = (dataSetNo) => {
      const socialBoxData = [
        { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
        { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
        { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
        { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
      ];

      const dataset = socialBoxData[dataSetNo];
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: dataset.data,
            label: dataset.label,
          },
        ],
      };
      return () => data;
    };

    const socialChartOpts = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            display: false,
          }],
        yAxes: [
          {
            display: false,
          }],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={12} sm={6} md={5}>
            <Widget03 dataBox={() => ({ variant: 'Sapatênis', friends: '89k', feeds: '79k' })} >
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
              </div>
            </Widget03>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
