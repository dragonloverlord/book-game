library main.index_maker.money_div.comic_sn;

import 'dart:html';

Element div_element = new Element.tag('div');


class ComicSn{
    static void main(){
        comicSn();
    }
    
    static void comicSn(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'stats-text');
        div_element.setAttribute('id', 'comic-sn');
        div_element.text = '???';
        querySelector('#money-div').append(div_element);
    }
}
