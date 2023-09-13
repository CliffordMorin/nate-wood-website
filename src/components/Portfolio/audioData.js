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
      title: "Sarah Elizabeth Charles - Learn To Love - Mix",
      src: SarahElizabethCharles_LearnToLove,
    },
    // Add more audio files in the "mixing" category
  ],
  originals: [
    {
      title: "Danae Loop - Nicky Wood",
      src: DanaeLoop,
    },
    {
      title: "Nick Bond - Nicky Wood",
      src: NickBond,
    },
    {
      title: "Pages Film Score - Nicky Wood",
      src: PagesFilmScore,
    },
    {
      title: "There's A Bluebird - Nicky Wood",
      src: TheresABluebird,
    },
    // Add more audio files in the "recording" category
  ],
  recording: [
    {
      title: "As You Like It - Recording Session",
      src: AsYouLikeIt,
    },
    {
      title: "Aunaundrea - Recording Session",
      src: aunaundrea,
    },
    {
      title: "Hurricane - Loud Mix 8123 NW 1",
      src: Hurricane_LoudMix_8123_NW_1,
    },
    {
      title: "JChamp - One Dream - Recording Session",
      src: JChamp_OneDreamNWMix,
    },
    // Add more audio files in the "recording" category
  ],
};

export default audioData;
