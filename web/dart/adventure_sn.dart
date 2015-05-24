library main.index_maker.money_div.adventure_text;

import 'dart:html';

Element div_element = new Element.tag('div');


class AdventureSn{
    static void main(){
        adventureSn();
    }
    
    static void adventureSn(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'stats-text');
        div_element.setAttribute('id', 'adventure-sn');
        div_element.text = 'Adventure';
        querySelector('#money-div').append(div_element);
    }
}
