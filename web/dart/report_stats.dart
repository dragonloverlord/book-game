library main.index_maker.money_div.report_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ReportStats{
    static void main(){
        reportStats();
    }
    
    static void reportStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'report-stats');
        _div_element.setAttribute('ng-init', 'load.report()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
