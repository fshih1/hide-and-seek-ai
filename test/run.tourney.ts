import HideAndSeekDesign from '../src';
import * as Dimension from 'dimensions-ai';
import Logger = Dimension.Logger;
import { MongoDB, GCloudStorage } from 'dimensions-ai';
let hideandseekdesign = new HideAndSeekDesign('HideAndSeek!', {
  engineOptions: {
    noStdErr: true,
    timeout: {
      max: 2000
    }
  }
});

let hideandseek = Dimension.create(hideandseekdesign, {
  loggingLevel: Logger.LEVEL.WARN,
  activateStation: true,
  observe: true,
  secureMode: true,
  id: "oLBptg"
});

let randomBot = {file: './kits/js/bot.js', name: 'random'};
let stillbot = {file: './test/bots/js/stillbot/bot.js', name:'still'};
let chaseBot = {file: './test/bots/js/chasebot/bot.js', name: 'chaser'};
let botlist = [chaseBot, randomBot];
// for (let i = 0; i < 2; i++) {

//   botlist.push({file: './kits/js/bot.js', name: 'random_' + i});
// }

let mongo = new MongoDB('mongodb://localhost:27017/hide_and_seek');
let gcloudstorage = new GCloudStorage({
  projectId: "proto-code",
  keyFilename: "./test/keys/proto-code-d5588dd59697.json"
});
hideandseek.use(mongo);
hideandseek.use(gcloudstorage);
let bot = {file: './kits/js/bot.js', name: 'bot'};
let tourney = hideandseek.createTournament([], {
  type: Dimension.Tournament.TOURNAMENT_TYPE.LADDER,
  rankSystem: Dimension.Tournament.RANK_SYSTEM.TRUESKILL,
  loggingLevel: Dimension.Logger.LEVEL.INFO,
  name: 'Hide and Seek',
  consoleDisplay: false,
  defaultMatchConfigs: {
    randomizeSeeker: true,
    liveView: false,
    loggingLevel: Dimension.Logger.LEVEL.INFO,
    storeReplayDirectory: 'replays'
    
  },
  agentsPerMatch: [2],
  tournamentConfigs: {
  },
  resultHandler: HideAndSeekDesign.trueskillResultHandler,
  id: 'a0Zlpa'
});


