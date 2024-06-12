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

  getObject2(): object {
    return {
      'NAME' : '곽빈',
      'G'	: 14,
      'GS' :	14,
      'GR':0,
      'GF' :0,	
      'CG':0,
      'SHO':0,
      'W':5,
      'L':5,
      'S':	0,
      'HD':0,
      'IP':81.2,
      'ER':33,
      'R'	:34,
        'rRA'	:31.60,
        'TBF':344,
        'H':71,
        '2B':15,
        '3B':0,
        'HR':2,
        'BB':30,
        'HP':2,
        'IB':0,
        'SO':78,
        'ROE':5,	
        'BK': 1,
        'WP': 8,
        'ERA': 3.64,
        'RA9': 3.75,
        'rRA9': 3.48,
        'rRA9pf': 3.50,
        'FIP': 3.29,
        'WHIP': 1.24,
        'WAR': 2.89
    
    }
  }
}

