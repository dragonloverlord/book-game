library main.index_maker.money_div.childrens_sn;

import 'dart:html';

Element div_element = new Element.tag('div');


class ChildrensSn{
    static void main(){
        childrensSn();
    }
    
    static void childrensSn(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'stats-text');
        div_element.setAttribute('id', 'childrens-sn');
        div_element.text = 'Children\'s';
        querySelector('#money-div').append(div_element);
    }
}
