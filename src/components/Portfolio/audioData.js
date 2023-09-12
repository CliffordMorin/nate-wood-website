//mixes
import AraujoMix from "../../Audio/mixes/AraujoMix.mp3";
import EddieGarridoMix from "../../Audio/mixes/EddieGarridoMix.mp3";
import SarahElizabethCharles_LearnToLove from "../../Audio/mixes/SarahElizabethCharles_LearnToLove.mp3";
//originals
import DanaeLoop from "../../Audio/originals/DanaeLoop.mp3";
import NickBond from "../../Audio/originals/NickBond.mp3";
import PagesFilmScore from "../../Audio/originals/PagesFilmScore.mp3";
import TheresABluebird from "../../Audio/originals/TheresABluebird.mp3";
//recordings
import AsYouLikeIt from "../../Audio/recordings/AsYouLikeIt.mp3";
import aunaundrea from "../../Audio/recordings/aunaundrea.mp3";
import Hurricane_LoudMix_8123_NW_1 from "../../Audio/recordings/Hurricane_LoudMix_8123_NW_1.mp3";
import JChamp_OneDreamNWMix from "../../Audio/recordings/JChamp_OneDreamNWMix.mp3";

const audioData = {
  mixing: [
    {
      title: "Araujo Mix",
      src: AraujoMix,
    },
    {
      title: "Eddie Garrido Mix",
      src: EddieGarridoMix,
    },
    {
      title: "Sarah Elizabeth Charles - Learn To Love",
      src: SarahElizabethCharles_LearnToLove,
    },
    // Add more audio files in the "mixing" category
  ],
  original_music: [
    {
      title: "Danae Loop",
      src: DanaeLoop,
    },
    {
      title: "Nick Bond",
      src: NickBond,
    },
    {
      title: "Pages Film Score",
      src: PagesFilmScore,
    },
    {
      title: "There's A Bluebird",
      src: TheresABluebird,
    },
    // Add more audio files in the "recording" category
  ],
  recording: [
    {
      title: "As You Like It",
      src: AsYouLikeIt,
    },
    {
      title: "Aunaundrea",
      src: aunaundrea,
    },
    {
      title: "Hurricane",
      src: Hurricane_LoudMix_8123_NW_1,
    },
    {
      title: "JChamp - One Dream",
      src: JChamp_OneDreamNWMix,
    },
    // Add more audio files in the "recording" category
  ],
};

export default audioData;
