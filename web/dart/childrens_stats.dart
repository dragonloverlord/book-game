library main.index_maker.money_div.childrens_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ChildrensStats{
    static void main(){
        childrensStats();
    }
    
    static void childrensStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'childrens-stats');
        _div_element.setAttribute('ng-init', 'load.childrens()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
