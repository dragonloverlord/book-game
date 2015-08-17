library main.index_maker.money_div.drama.drama_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class DramaStats{
    static void main(){
        dramaStats();
    }
    
    static void dramaStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'drama-stats');
        _div_element.setAttribute('ng-init', 'load.drama()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
