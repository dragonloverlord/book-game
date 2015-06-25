library main.index_maker.money_div.gossip_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class GossipSn{
    static void main(){
        gossipSn();
    }
    
    static void gossipSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'gossip-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
