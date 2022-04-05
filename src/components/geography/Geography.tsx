import * as React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataAsia from './mapDataAsia.js';
import mapDataEU from './mapDataEU.js';
import mapDataUS from './mapDataUS.js';
import mapDataOC from './mapDataOC.js';

require('highcharts/modules/map')(Highcharts);

  

export interface IGeogRaphyProps {
    geo:string;
}

export default function GeogRaphy (props: IGeogRaphyProps) {
    var asia = [
        ['in', 4],
        ['sg', 1],
        ['bd', 1],
        ['my', 1],
        ['lk', 1],
        ['cn', 3],
      ];
      var eu = [
        ['dk', 1],
        ['ie', .5],
        ['gb', 5]
      ];
      var us = [
        ['us-ca', 3],
        ['us-ks', 1],
        ['us-fl', 2]
      ];
      var oc = [
        ['au', 2]
      ];
    
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
