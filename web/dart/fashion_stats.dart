library main.index_maker.money_div.fashion_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class FashionStats{
    static void main(){
        fashionStats();
    }
    
    static void fashionStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'fashion-stats');
        _div_element.setAttribute('ng-init', 'load.fashion()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
