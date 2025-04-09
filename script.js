const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');

function playNote(note) {
  const audio = new Audio(`sounds/${note}.mp3`);
  audio.play();
}

function activateKey(key) {
  key.classList.add('active');
  setTimeout(() => key.classList.remove('active'), 150);
}

// Mouse click
whiteKeys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    playNote(note);
    activateKey(key);
  });
});

blackKeys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    playNote(note);
    activateKey(key);
  });
});

// Keyboard bindings
const keyBindings = {
  q: 'c', w: 'd', e: 'e', r: 'f', t: 'g', y: 'a', u: 'b', i: 'c2',
  o: 'd2', p: 'e2', a: 'f2', s: 'g2', d: 'a2', f: 'b2', g: 'c3', h: 'd3',
  1: 'c-sharp', 2: 'd-sharp', 3: 'f-sharp', 4: 'g-sharp', 5: 'a-sharp',
  6: 'c-sharp2', 7: 'd-sharp2', 8: 'f-sharp2', 9: 'g-sharp2', 0: 'a-sharp2'
};

document.addEventListener('keydown', (e) => {
  const note = keyBindings[e.key.toLowerCase()];
  if (note) {
    const key = document.querySelector(`[data-note="${note}"]`);
    if (key) {
      playNote(note);
      activateKey(key);
    }
  }
});
