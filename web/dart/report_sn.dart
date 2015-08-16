library main.index_maker.money_div.report_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ReportSn{
    static void main(){
        reportSn();
    }
    
    static void reportSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'report-sn');
        _div_element.text = 'Report';
        querySelector('#money-div').append(_div_element);
    }
}
