import HideAndSeekDesign from '../src';
import { create, Logger } from 'dimensions-ai';
import { Dimension } from 'dimensions-ai/lib/Dimension';

let hideandseekdesign = new HideAndSeekDesign('HideAndSeek!', {
  engineOptions: {
    noStdErr: false,
    timeout: {
      max: 2000
    }
  }
});
let hideandseek = create(hideandseekdesign, {
  loggingLevel: Logger.LEVEL.WARN,
  activateStation: false,
  observe: false,
});

let jskit = {file: './kits/js/bot.js', name: 'js-kit'};

hideandseek.runMatch([jskit, jskit], {
  delay: 0.2,
  liveView: false,
  seed: 32
}).then((res) => {
  console.log(res);
});