import * as React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataAsia from './mapDataAsia.js';
import mapDataEU from './mapDataEU.js';
import mapDataUS from './mapDataUS.js';
import mapDataOC from './mapDataOC.js';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Alert, Spinner } from 'react-bootstrap';

require('highcharts/modules/map')(Highcharts);

  

export interface IGeogRaphyProps {
    geo:string;
}

export default function GeogRaphy (props: IGeogRaphyProps) {
  
  
  var asia: any[]=[];
  var eu: any[]=[];
  var us: any[]=[];
  var oc: any[]=[];

  const addToContinent = (continent: string, data: any) => {
    switch (continent) {
      case 'asia':
        asia.push(data);
        break;
      case 'eu':
        eu.push(data);
        break;
      case 'us':
        us.push(data);
        break;
      case 'oc':
        oc.push(data);
        break;
      default:
        break;
    }
  };

  //=======================Fetch data=============================================================
  const { isLoading, error, isError, data, isSuccess } = useQuery<any, Error>(
    "SKG_GEO_SUMMARY",
    () =>
      axios(`https://saibalghosh1980.github.io/data/data-geographic-span.json`),
    {}
  );
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (isError) {
    return <Alert variant="danger">{error?.message}</Alert>;
  }

  if (isSuccess) {
    //console.log(data.data);
    data.data.geoData.map((item:any)=>(
      //console.log(item);
      item.countries.map((item2:any)=>(
         addToContinent(item.continent, [item2.countryName, parseFloat(item2.yoe)])
      ))
    ))
  }
  //==============================================================================================
    
    
      const mapOptions = {
        title: {
          text: props.geo === 'asia' ? 'Asia' : props.geo === 'eu' ? 'Europe' : props.geo === 'us' ? 'USA' : props.geo === 'oc' ? 'Oceania' : ''
        },
        colorAxis: {
          min: 0,
          stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '	#40ff00']]
        },
      
        series: [
          {
            mapData: props.geo === 'asia' ? mapDataAsia : props.geo === 'eu' ? mapDataEU :  props.geo === 'us' ? mapDataUS : props.geo === 'oc' ? mapDataOC : mapDataAsia,
            name: 'Years of experience',
            data: props.geo === 'asia' ? asia : props.geo === 'eu' ? eu : props.geo === 'us' ? us : props.geo === 'oc' ? oc : []

          }
        ]
      };
  return (
    <div>
        <HighchartsReact
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />      
    </div>
  );
}
