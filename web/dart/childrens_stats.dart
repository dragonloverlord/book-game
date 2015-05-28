library main.index_maker.money_div.childrens_stats;

import 'dart:html';

Element div_element = new Element.tag('div');


class ChildrensStats{
    static void main(){
        childrensStats();
    }
    
    static void childrensStats(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'save-div');
        div_element.setAttribute('id', 'childrens-stats');
        div_element.setAttribute('ng-init', 'load.childrens()');
        div_element.text = '0';
        querySelector('#money-div').append(div_element);
    }
}
