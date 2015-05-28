library main.index_maker.money_div;

import 'dart:html';

Element div_element = new Element.tag('div');


class ComicStats{
    static void main(){
        comicStats();
    }
    
    static void comicStats(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'save-div');
        div_element.setAttribute('id', 'comic-stats');
        div_element.setAttribute('ng-init', 'load.comic()');
        div_element.text = '0';
        querySelector('#money-div').append(div_element);
    }
}
