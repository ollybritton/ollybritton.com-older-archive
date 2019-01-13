/*

This is based of the pre-existing Corporate B.S. Generator, http://www.atrixnet.com/bs-generator.html, by Tommy Butler. I used the words and one of the structures from his webpage.

*/

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

const color_schemes = [
  ["#df1b33", "#fff"],
  ["#4abdac", "#fff"],
  ["#fc4a1a", "#fff"],
  ["#f7b733", "#fff"],
  ["#0375b4", "#fff"],
  ["#a239ca", "#fff"],
  ["#4717f6", "#fff"]
]

const word_bank = {
  verb:["actualize","administrate","aggregate","architect","benchmark","brand","build","cloudify","communicate","conceptualize","coordinate","create","cultivate","customize","deliver","deploy","develop","dinintermediate disseminate","drive","embrace","e-enable","empower","enable","engage","engineer","enhance","envisioneer","evisculate","evolve","expedite","exploit","extend","fabricate","facilitate","fashion","formulate","foster","generate","grow","harness","impact","implement","incentivize","incubate","initiate","innovate","integrate","iterate","leverage existing","leverage other's","maintain","matrix","maximize","mesh","monetize","morph","myocardinate","negotiate","network","optimize","orchestrate","parallel task","plagiarize","pontificate","predominate","procrastinate","productivate","productize","promote","provide access to","pursue","recaptiualize","reconceptualize","redefine","re-engineer","reintermediate","reinvent","repurpose","restore","revolutionize","right-shore","scale","seize","simplify","strategize","streamline","supply","syndicate","synergize","synthesize","target","transform","transition","underwhelm","unleash","utilize","visualize","whiteboard"],
  noun: ["action items","alignments","applications","architectures","bandwidth","benefits","best practices","catalysts for change","channels","clouds","collaboration and idea-sharing","communities","content","convergence","core competencies","customer service","data","deliverables","e-business","e-commerce","e-markets","e-tailers","e-services","experiences","expertise","functionalities","fungibility","growth strategies","human capital","ideas","imperatives","infomediaries","information","infrastructures","initiatives","innovation","intellectual capital","interfaces","internal or 'organic' sources","leadership","leadership skills","manufactured products","markets","materials","meta-services","methodologies","methods of empowerment","metrics","mindshare","models","networks","niches","niche markets","nosql","opportunities","'outside the box'"," thinking","outsourcing","paradigms","partnerships","platforms","portals","potentialities","rocess improvements","processes","products","quality vectors","relationships","resources","results","ROI","scenarios","schemas","scrums","services","solutions","sources","sprints","strategic theme areas","storage","supply chains","synergy","systems","technologies","technology","testing procedures","total linkage","users","value","vortals","web-readiness","web services","wins","virtualization"],
  adjective: ["24/7","24/365","accurate","adaptive","agile","alternative","an expanded array of","B2B","B2C","backend","backward-compatible","best-of-breed","bleeding-edge","bricks-and-clicks","business","clicks-and-mortar","client-based","client-centered","client-centric","client-focused","cloud-based","cloud-centric","cloudified","collaborative","compelling","competitive","cooperative","corporate","cost effective","covalent","cross functional","cross-media","cross-platform","cross-unit","customer directed","customized","cutting-edge","distinctive","distributed","diverse","dynamic","e-business","economically sound","effective","efficient","elastic","emerging","empowered","enabled","end-to-end","enterprise","enterprise-wide","equity invested","error-free","ethical","excellent","exceptional","extensible","extensive","flexible","focused","frictionless","front-end","fully researched","fully tested","functional","functionalized","fungible","future-proof","global","go forward","goal-oriented","granular","high standards in","high-payoff","hyperscale","high-quality","highly efficient","holistic","impactful","inexpensive","innovative","installed base","integrated","interactive","interdependent","intermandated","interoperable","intuitive","just in time","leading-edge","leveraged","long-term high-impact","low-risk high-yield","magnetic","maintainable","market positioning","market-driven","mission-critical","multidisciplinary","multifunctional","multimedia based","next-generation","on-demand","one-to-one","open-source","optimal","orthogonal","out-of-the-box","pandemic","parallel","performance based","plug-and-play","premier","premium","principle-centered","proactive","process-centric","professional","progressive","prospective","quality","real-time","reliable","resource-sucking","resource-maximizing","resource-leveling","revolutionary","robust","scalable","seamless","stand-alone","standardized","standards compliant","state of the art","sticky","strategic","superior","sustainable","synergistic","tactical","team building","team driven","technically sound","timely","top-line","transparent","turnkey","ubiquitous","unique","user-centric","user friendly","value-added","vertical","viral","virtual","visionary","web-enabled","wireless","world-class","worldwide"],
  adverb: ["appropriately","assertively","authoritatively","collaboratively","compellingly","competently","completely","continually","conveniently","credibly","distinctively","dramatically","dynamically","efficiently","energistically","enthusiastically","fungibly","globally","holisticly","interactively","intrinsically","monotonectally","objectively","phosfluorescently","proactively","professionally","progressively","quickly","rapidiously","seamlessly","synergistically","uniquely"],
  pronoun: [],
  connective: [],
  determiner: []
}

function random(a, b) {
  return Math.floor((Math.random() * b) + a);
}

function random_from_list(ls) {
  return ls[random(0, ls.length)]
}

function adverb() {
  return random_from_list(word_bank["adverb"])
}

function verb() {
  return random_from_list(word_bank["verb"])
}

function adjective() {
  return random_from_list(word_bank["adjective"])
}

function noun() {
  return random_from_list(word_bank["noun"])
}

function generate_phrase(){
  
  let structures = [
    `${adverb()} ${verb()} ${adjective()} ${noun()}`,
    `using ${noun()} to ${verb()} ${noun()}`,
    `${adverb()} using ${noun()} to ${verb()} ${noun()}`
  ]
  
  return random_from_list(structures)
}

let count = 0

function updatePage(){
  count++
  
  if(count == 1) {
    document.getElementById("small").remove()
  }
  
  let text = document.getElementById("text")
  text.innerHTML = `"${generate_phrase()}"`
  
  let background = document.getElementById("page")
  
  let colors = random_from_list(color_schemes)

  background.style.backgroundColor = colors[0]
  text.style.color = colors[1]
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
  
    updatePage()
};