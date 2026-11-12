const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
function simulate(source) {
  const attrs = source.match(/<iframe\b([^>]+)>/)[1];
  const encoded = attrs.match(/data-srcdoc="([\s\S]*?)"/)[1];
  const decoded = encoded.replace(/&(quot|lt|gt|amp|#x27|#39);/g, (_, x) => ({quot:'"',lt:'<',gt:'>',amp:'&','#x27':"'",'#39':"'"}[x]));
  class Frame {
    constructor() {
      this.dataset = {srcdoc: decoded};
      this.scrolling = attrs.match(/scrolling="([^"]+)"/)[1];
      this.style = {height:'',removeProperty(name){delete this[name];}};
      this.contentWindow = {postMessage(){}};
    }
    addEventListener(type, cb) {this[type]=cb;}
  }
  const frame = new Frame();
  let receiver;
  class Channel {
    constructor() {
      this.port1 = {addEventListener(type, cb){receiver=cb;},start(){},postMessage(){}};
      this.port2 = {};
    }
  }
  const context = {
    document:{getElementById(){return frame;},documentElement:{classList:{contains(){return false;}}}},
    HTMLIFrameElement:Frame, MessageChannel:Channel,TextEncoder,
    innerHeight:800,location:{pathname:'/',search:''},
    navigator:{userActivation:{isActive:false}},addEventListener(){},
    clearTimeout(){},setTimeout(){},
  };
  const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)];
  vm.runInNewContext(scripts.at(-1)[1],context);
  return {frame,inner:decoded,height(n){receiver({data:{type:'height',height:n}});}};
}
const source = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8');
const host = simulate(source);
assert.equal(host.frame.scrolling,'auto','Native scrolling must work before any load/bridge event.');
for (const height of [4500, 20000, 80000, 0]) {
  host.height(height);
  assert.equal(host.frame.scrolling,'auto','Long chapters and disclosures must remain scrollable.');
  assert.equal(host.frame.style.height,'','Standalone layout must not depend on content-height measurements.');
}
assert(!/<script\b[^>]*\bsrc=/.test(host.inner),'No third-party script may block iframe load.');
assert(host.inner.includes('target.scrollIntoView({ block: "start", behavior: "auto" })'));
assert(source.includes('sandbox="allow-scripts"'));
assert.equal((host.inner.match(/class="ar-lesson"/g)||[]).length,8);
if (process.argv[2]) {
  const old=simulate(fs.readFileSync(process.argv[2],'utf8'));
  old.height(4500);old.height(20000);
  assert.equal(old.frame.scrolling,'no');
  assert.equal(old.frame.style.height,'4500px');
  console.log('Reproduced original: 20,000px chapter clipped to 4,500px with scrolling disabled.');
}
console.log('PASS: native scrolling before load, tall chapters, no CDN script dependencies, local anchor scrolling, sandbox and eight chapters.');
