document.addEventListener("DOMContentLoaded", function () {
  const audio = new Audio("Bandit.mp3");
  const lyricsElement = document.getElementById("lyrics");
  const playButton = document.getElementById("togglePlay");

  // Lyrics with timestamps and emotion
  const lyrics = [
    { time: 3870, text: "I did it for love", emotion: "romantic" },
    { time: 7340, text: "Ride the highway, rock the bus (Rock it, rock it)", emotion: "excited" },
    { time: 11100, text: "Why my house look like Army Plus? (Ready up, ready up)", emotion: "confident" },
    { time: 16460, text: "Walk in the strip, she gon' make it bust (Bust it, woo, bust it)", emotion: "loud" },
    { time: 18530, text: "I do damage (Bust it)", emotion: "intense" },
    { time: 19790, text: "You niggas can't stand it (Bust it)", emotion: "angry" },
    { time: 22140, text: "Psycho bandit (Bust it)", emotion: "mysterious" },
    { time: 23810, text: "Like it's Marilyn Manson (Bust it)", emotion: "intense" },
    { time: 25430, text: "Got the cash, advance it (Bust it)", emotion: "confident" },
    { time: 27220, text: "Get the Sprite and enhance it (Bust it)", emotion: "joyful" },
    { time: 28880, text: "Pull the Wock' out the pantry (Bust it)", emotion: "confident" },
    { time: 31350, text: "Take a sip and I'm dancin' (Bust it)", emotion: "happy" },
    { time: 33290, text: "She pop Perc' like a Plan B (Bust it)", emotion: "soft" },
    { time: 34870, text: "Oh, she lit like a candle", emotion: "joyful" },
    { time: 36530, text: "Boot it up in the car seat", emotion: "relaxed" },
    { time: 38550, text: "Hold a nigga for ransom", emotion: "angry" },
    { time: 40250, text: "Want her back? Better call me (Bust it)", emotion: "angry" },
    { time: 42010, text: "It's whatever, I'm geeked", emotion: "excited" },
    { time: 44010, text: "'Bout to punch at the party (Woo)", emotion: "loud" },
    { time: 45640, text: "You niggas ain't fly, this shit lookin' dummy (Yeah)", emotion: "confident" },
    { time: 47650, text: "I'm 'bout to get fried, I look like a mummy (Bust it)", emotion: "nostalgic" },
    { time: 49560, text: "I'm gettin' this cash, it's Monday to Sunday", emotion: "confident" },
    { time: 51340, text: "I guess you won't talk if it ain't 'bout the money (Bust it)", emotion: "intense" },
    { time: 53150, text: "My boys in the trap and it jump like a bunny", emotion: "excited" },
    { time: 54850, text: "Got pounds and pills, it ain't nothin' funny", emotion: "serious" },
    { time: 55900, text: "I fuck from the side and I keep that bitch cummin'", emotion: "romantic" },
    { time: 58950, text: "If I gotta reach up, I'ma keep that bitch dumpin'", emotion: "angry" },
    { time: 60850, text: "Way I slide in that coupe, boy, I keep that bitch hummin' (Yeah)", emotion: "joyful" },
    { time: 63320, text: "We done went, rocked that bitch all the way to the summer (Woo)", emotion: "excited" },
    { time: 63860, text: "Get deep in the pot, get deep like a plumber (Deep)", emotion: "relaxed" },
    { time: 64670, text: "Why would I keep her? I never will love her (No)", emotion: "regretful" },
    { time: 66640, text: "I just went fucked her and gave to my brother (Yeah)", emotion: "confident" },
    { time: 68220, text: "Eat her for dinner or eat her for supper (Yeah)", emotion: "happy" },
    { time: 70130, text: "Why would you keep her, lil' nigga? You sucker", emotion: "angry" },
    { time: 72010, text: "Why would you keep her, lil' nigga? You suck", emotion: "angry" },
    { time: 73670, text: "I did it for love", emotion: "romantic" },
    { time: 78240, text: "Ride the highway, rock the bus (Rock it, rock it)", emotion: "excited" },
    { time: 81760, text: "Why my house look like Army Plus? (Ready up, ready up)", emotion: "curious" },
    { time: 84990, text: "Walk in the strip, she gon' make it bust (Bust it, bust it)", emotion: "loud" },
    { time: 90480, text: "I do damage (Bust it)", emotion: "intense" },
    { time: 92800, text: "You niggas can't stand it (Bust it)", emotion: "angry" },
    { time: 94720, text: "Psycho bandit (Bust it)", emotion: "mysterious" },
    { time: 96330, text: "Like it's Marilyn Manson (Bust it)", emotion: "intense" },
    { time: 97890, text: "Got the cash, advance it (Bust it)", emotion: "confident" },
    { time: 99550, text: "Get the Sprite and enhance it (Bust it)", emotion: "happy" },
    { time: 101182, text: "Pull the Wock' out the pantry", emotion: "relaxed" },
    { time: 103560, text: "You niggas ain't fly, this shit lookin' dummy", emotion: "dismissive" },
    { time: 105310, text: "I'm 'bout to get fried, I look like a mummy", emotion: "nostalgic" },
    { time: 107156, text: "I'm gettin' this cash, it's Monday to Sunday", emotion: "confident" },
    { time: 108859, text: "I guess you won't talk if it ain't 'bout the money", emotion: "intense" },
    { time: 110445, text: "My boys in the trap and it jump like a bunny", emotion: "excited" },
    { time: 112241, text: "Got pounds and pills, it ain't nothin' funny", emotion: "serious" },
    { time: 113931, text: "I fuck from the side and I keep that bitch cummin'", emotion: "romantic" },
    { time: 115615, text: "If I gotta reach up, I'ma keep that bitch dumpin'", emotion: "intense" },
    { time: 117820, text: "Ridin', this bitch got a TV, huh?", emotion: "proud" },
    { time: 119996, text: "Belt on that boy like a BeBe, huh", emotion: "confident" },
    { time: 121610, text: "Hide in the bush, you won't see me, huh", emotion: "mysterious" },
    { time: 123382, text: "Put you underwater like seaweed, huh", emotion: "mysterious" },
    { time: 125051, text: "Why lil' nigga wan' be me, huh?", emotion: "dismissive" },
    { time: 126733, text: ".45 up when I'm creepin', huh", emotion: "intense" },
    { time: 128504, text: "Drive-by shootin' in the demon, huh", emotion: "angry" },
    { time: 130154, text: "Fuck is you sayin'? I'm geekin', huh (Woo)", emotion: "excited" },
];



  // Function to clear previous styles
  function clearStyles(element) {
    element.className = ''; // Reset all classes
    element.classList.add('lyrics', 'background'); // Add back the base styling class
  }

  // Function to apply style based on emotion
  function applyStyle(lyric, element) {
    clearStyles(element);
    element.classList.add(lyric.emotion);
  }

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Pause";

      // Schedule the lyrics
      lyrics.forEach((lyric) => {
        setTimeout(() => {
          lyricsElement.textContent = lyric.text
          lyricsElement.textContent = lyric.text;
          applyStyle(lyric, lyricsElement);
        }, lyric.time);
      });

    } else {
      audio.pause();
      playButton.textContent = "Play";
      // Clear any scheduled lyrics when the music is paused
      let highestTimeoutId = setTimeout(";");
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
      clearStyles(lyricsElement); // Clear styles immediately when paused
    }
  });
});