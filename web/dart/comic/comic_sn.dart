library main.index_maker.money_div.comic.comic_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ComicSn{
    static void main(){
        comicSn();
    }
    
    static void comicSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'comic-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
