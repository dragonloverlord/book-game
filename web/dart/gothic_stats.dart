library main.index_maker.money_div.gothic_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class GothicStats{
    static void main(){
        gothicStats();
    }
    
    static void gothicStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'gothic-stats');
        _div_element.setAttribute('ng-init', 'load.gothic()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
