import alex from '../images/alex.png';
import christine from '../images/christine.png';
import colin from '../images/colin.png';
import esther from '../images/esther.png';
import evelyn from '../images/evelyn.png';
import harry from '../images/harry.png';
import irving from '../images/irving.png';
import kelvin from '../images/kelvin.png';
import lucy from '../images/lucy.png';
import mel from '../images/mel.png';
import melody from '../images/melody.png';
import tiffany from '../images/tiffany.png';
import tony from '../images/tony.png';
import wendy from '../images/wendy.png';
import wesley from '../images/wesley.png';

export default {
  nodes: [{
    id: "Irving Chung",
    face: irving
  }, {
    id: "Harry Look",
    face: harry,
  }, {
    id: "Wesley Lau",
    face: wesley,
  }, {
    id: "Esther Chong",
    face: esther,
  }, {
    id: "Mel Esparza Chen",
    face: mel
  }, {
    id: "Melody Chen",
    face: melody
  }, {
    id: "Evelyn Chu",
    face: evelyn
  }, {
    id: "Tiffany Truong",
    face: tiffany
  }, {
    id: "Colin McCracken",
    face: colin
  }, {
    id: "Tony Lo",
    face: tony
  }, {
    id: "Christine Hung",
    face: christine
  }, {
    id: "Alex Zhu",
    face: alex
  }, {
    id: "Kelvin Wong",
    face: kelvin
  }, {
    id: "Lucy Yin",
    face: lucy
  }, {
    id: "Wendy Chung",
    face: wendy
  }],
  links: [{
    source: "Irving Chung",
    target: "Alex Zhu"
  }, {
    source: "Harry Look",
    target: "Kelvin Wong"
  },{
    source: "Wesley Lau",
    target: "Alex Zhu"
  },{
    source: "Wesley Lau",
    target: "Colin McCracken"
  },{
    source: "Esther Chong",
    target: "Wendy Chung"
  },{
    source: "Mel Esparza Chen",
    target: "Evelyn Chu"
  },{
    source: "Melody Chen",
    target: "Lucy Yin"
  },{
    source: "Christine Hung",
    target: "Tiffany Truong"
  },{
    source: "Tony Lo",
    target: "Kelvin Wong"
  }]
}
