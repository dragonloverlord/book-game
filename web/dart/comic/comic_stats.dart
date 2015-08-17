library main.index_maker.money_div.comic.comic_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ComicStats{
    static void main(){
        comicStats();
    }
    
    static void comicStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'comic-stats');
        _div_element.setAttribute('ng-init', 'load.comic()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
