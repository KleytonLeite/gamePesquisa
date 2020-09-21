import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

import Filters from '../../components/Filters';
import { barOptions, pieOptions } from './chart-options';
import { buildBarSeries, getGenderChartData, getPlatformChartData } from './helpers';

import './styles.css';

const BASE_URL = 'https://sds1-kleyton.herokuapp.com';

type BarChartData = {
  x: string;
  y: number;
}

type PieChartData = {
  labels: string[];
  series: number[]
}
 const initalPieData = {
   labels: [],
   series: []
 }


const Charts = () => {
    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
    const [plataformData, setPlatformData] = useState<PieChartData>(initalPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initalPieData);

useEffect(() => {
  async function getData() {
    const gamesResponse = await axios.get(`${BASE_URL}/games`);
    const recordsResponse = await axios.get(`${BASE_URL}/records`);

    const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
    setBarChartData(barData);

    const platformChartData = getPlatformChartData(recordsResponse.data.content);
    setPlatformData(platformChartData);

    const genderChartData = getGenderChartData(recordsResponse.data.content);
    setGenderData(genderChartData);
  }
  getData();
},[]);

  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELAS" />
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">
            jogos mais votados
          </h1>
            <div className="games-container">
              <Chart 
               options={barOptions}
               type="bar"
               width="900"
               height="650"
               series={[{ data: barChartData }]} 
              />
            </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            <Chart 
              options={{...pieOptions, labels: [plataformData?.labels]}}
              type="donut"
              width="350"
              series={plataformData?.series}
            />
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
            <Chart 
              options={{...pieOptions, labels: [genderData?.labels]}}
              type="donut"
              width="350"
              series={genderData?.series}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;