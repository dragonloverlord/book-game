library main.index_maker.money_div.childrens.childrens_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ChildrensSn{
    static void main(){
        childrensSn();
    }
    
    static void childrensSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'childrens-sn');
        _div_element.text = 'Children\'s';
        querySelector('#money-div').append(_div_element);
    }
}
