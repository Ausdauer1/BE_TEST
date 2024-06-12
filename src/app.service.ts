import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(): object {
    return {
      'NAME' : '김재환',
      'oWAR' : '1.58',
      'dWAR' : '-0.97',
      'G'	: '63',
      'PA' : 258,
      'ePA'	: 255,
      'AB' : 217,
      'R'	: 33,
      'H'	: 56,
      '2B' : 11,
      '3B' : 0,
      'HR' : 14,
      'TB' : 109,
      'RBI'	: 45,
      'SB' : 0,
      'CS' : 0, 
      'BB' : 31,
      'HP' : 4,
      'IB' : 3,	
      'SO' : 79,
      'GDP' : 6,	
      'SH' : 0,	
      'SF' : 6,
      'AV' : 0.258,
      'OBP' : 0.353,
      'SLG' : 0.502,
      'OPS' : 0.855,
      'R/ePA' : 0.022,
      'wRC+' : 114.5,
      'WAR' : 0.61
    }
  }
}

