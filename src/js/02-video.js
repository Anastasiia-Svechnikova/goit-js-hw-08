import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
const playTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(playTime);

player.on('play', () => {
  document.body.classList.toggle('on-play');
});

player.on('pause', () => {
  document.body.classList.toggle('on-play');
});
