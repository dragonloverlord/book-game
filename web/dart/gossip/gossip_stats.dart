library main.index_maker.money_div.gossip.gossip_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class GossipStats{
    static void main(){
        gossipStats();
    }
    
    static void gossipStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'gossip-stats');
        _div_element.setAttribute('ng-init', 'load.gossip()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
