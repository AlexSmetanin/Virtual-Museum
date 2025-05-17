  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const soundFile = card.getAttribute('data-sound');
      if (soundFile) {
        const audio = new Audio('CSS/audio/' + soundFile);
        audio.play();
      }
    });
  });
