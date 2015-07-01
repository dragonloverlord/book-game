library main.index_maker.money_div.history_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class HistorySn{
    static void main(){
        historySn();
    }
    
    static void historySn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'history-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
