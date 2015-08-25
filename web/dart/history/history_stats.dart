library main.index_maker.money_div.history.history_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class HistoryStats{
    static void main(){
        historyStats();
    }
    
    static void historyStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'history-stats');
        _div_element.setAttribute('ng-init', 'load.historybook()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
