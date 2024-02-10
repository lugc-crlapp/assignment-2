document.addEventListener("DOMContentLoaded", function () {
  const audio = new Audio("Bandit.mp3");
  const lyricsElement = document.getElementById("lyrics");
  const playButton = document.getElementById("togglePlay");

  // Lyrics with timestamps and emotion
  const lyrics = [
    { time: 540, text: "I did it for love", emotion: "abduleez" },
    { time: 4290, text: "Ride the highway, rock the bus (Rock it, rock it)", emotion: "aidenlortie" },
    { time: 7270, text: "Why my house look like Army Plus? (Ready up, ready up)", emotion: "angry" },
    { time: 11010, text: "Walk in the strip, she gon' make it bust (Bust it, woo, bust it)", emotion: "loud" },
    { time: 16600, text: "I do damage (Bust it)", emotion: "nk" },
    { time: 18670, text: "You n***** can't stand it (Bust it)", emotion: "nk" },
    { time: 20620, text: "Psycho bandit (Bust it)", emotion: "rushikeshveda" },
    { time: 22000, text: "Like it's Marilyn Manson (Bust it)", emotion: "russian" },
    { time: 23540, text: "Got the cash, advance it (Bust it)", emotion: "angry" },
    { time: 25280, text: "Get the Sprite and enhance it (Bust it)", emotion: "aidenlortie" },
    { time: 27280, text: "Pull the Wock' out the pantry (Bust it)", emotion: "russian" },
    { time: 29140, text: "Take a sip and I'm dancin' (Bust it)", emotion: "tobi" },
    { time: 31060, text: "She pop Perc' like a Plan B (Bust it)", emotion: "soft" },
    { time: 32870, text: "Oh, she lit like a candle", emotion: "benbrown" },
    { time: 34730, text: "Boot it up in the car seat", emotion: "relaxed" },
    { time: 36470, text: "Hold a n**** for ransom", emotion: "rushikeshveda" },
    { time: 38280, text: "Want her back? Better call me (Bust it)", emotion: "angry" },
    { time: 40360, text: "It's whatever, I'm geeked", emotion: "benbrown" },
    { time: 42070, text: "'Bout to punch at the party (Woo)", emotion: "loud" },
    { time: 44040, text: "You n***** ain't fly, this shit lookin' dummy (Yeah)", emotion: "russian" },
    { time: 45960, text: "I'm 'bout to get fried, I look like a mummy (Bust it)", emotion: "aidenlortie" },
    { time: 47670, text: "I'm gettin' this cash, it's Monday to Sunday", emotion: "aidenlortie" },
    { time: 49600, text: "I guess you won't talk if it ain't 'bout the money (Bust it)", emotion: "russian" },
    { time: 51390, text: "My boys in the trap and it jump like a bunny", emotion: "excited" },
    { time: 53310, text: "Got pounds and pills, it ain't nothin' funny", emotion: "angry" },
    { time: 54970, text: "I fuck from the side and I keep that bitch cummin'", emotion: "nk" },
    { time: 56930, text: "If I gotta reach up, I'ma keep that bitch dumpin'", emotion: "abduleez" },
    { time: 58800, text: "Way I slide in that coupe, boy, I keep that bitch hummin' (Yeah)", emotion: "benbrown" },
    { time: 60640, text: "We done went, rocked that bitch all the way to the summer (Woo)", emotion: "excited" },
    { time: 62500, text: "Get deep in the pot, get deep like a plumber (Deep)", emotion: "relaxed" },
    { time: 64240, text: "Why would I keep her? I never will love her (No)", emotion: "rushikeshveda" },
    { time: 66640, text: "I just went fucked her and gave to my brother (Yeah)", emotion: "confident" },
    { time: 68220, text: "Eat her for dinner or eat her for supper (Yeah)", emotion: "tobi" },
    { time: 70130, text: "Why would you keep her, lil' n****? You sucker", emotion: "angry" },
    { time: 72010, text: "Why would you keep her, lil' n****? You suck", emotion: "angry" },
    { time: 73670, text: "I did it for love", emotion: "abduleez" },
    { time: 78240, text: "Ride the highway, rock the bus (Rock it, rock it)", emotion: "excited" },
    { time: 81760, text: "Why my house look like Army Plus? (Ready up, ready up)", emotion: "rushikeshveda" },
    { time: 84990, text: "Walk in the strip, she gon' make it bust (Bust it, bust it)", emotion: "loud" },
    { time: 90480, text: "I do damage (Bust it)", emotion: "russian" },
    { time: 92800, text: "You n***** can't stand it (Bust it)", emotion: "angry" },
    { time: 94720, text: "Psycho bandit (Bust it)", emotion: "rushikeshveda" },
    { time: 96330, text: "Like it's Marilyn Manson (Bust it)", emotion: "russian" },
    { time: 97890, text: "Got the cash, advance it (Bust it)", emotion: "nk" },
    { time: 99550, text: "Get the Sprite and enhance it (Bust it)", emotion: "tobi" },
    { time: 101182, text: "Pull the Wock' out the pantry", emotion: "relaxed" },
    { time: 103560, text: "You n***** ain't fly, this shit lookin' dummy", emotion: "dismissive" },
    { time: 105310, text: "I'm 'bout to get fried, I look like a mummy", emotion: "nostalgic" },
    { time: 107156, text: "I'm gettin' this cash, it's Monday to Sunday", emotion: "russian" },
    { time: 108859, text: "I guess you won't talk if it ain't 'bout the money", emotion: "rushikeshveda" },
    { time: 110445, text: "My boys in the trap and it jump like a bunny", emotion: "excited" },
    { time: 112241, text: "Got pounds and pills, it ain't nothin' funny", emotion: "nk" },
    { time: 113931, text: "I fuck from the side and I keep that bitch cummin'", emotion: "nk" },
    { time: 115615, text: "If I gotta reach up, I'ma keep that bitch dumpin'", emotion: "russian" },
    { time: 117820, text: "Ridin', this bitch got a TV, huh?", emotion: "proud" },
    { time: 119996, text: "Belt on that boy like a BeBe, huh", emotion: "confident" },
    { time: 121610, text: "Hide in the bush, you won't see me, huh", emotion: "rushikeshveda" },
    { time: 123382, text: "Put you underwater like seaweed, huh", emotion: "russian" },
    { time: 125051, text: "Why lil' n**** wan' be me, huh?", emotion: "aidenlortie" },
    { time: 126733, text: ".45 up when I'm creepin', huh", emotion: "russian" },
    { time: 128504, text: "Drive-by shootin' in the demon, huh", emotion: "angry" },
    { time: 130154, text: "Fuck is you sayin'? I'm geekin', huh (Woo)", emotion: "aidenlortie" }
];


  function clearStyles(element) {
    element.id = "";
  }

  function animateWalkingText(element) {
    // Create legs
    const legs = document.createElement("div");
    legs.classList.add("legs");
    for (let i = 0; i < 2; i++) {
      const leg = document.createElement("div");
      leg.classList.add("leg");
      legs.appendChild(leg);
    }
  
    // Append legs and body to the element
    element.appendChild(legs);
    element.classList.add("walking-text");
  
    // Start walking animation
    element.classList.add("walking");
  }
  

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Pause";

      // Schedule the lyrics
      lyrics.forEach((lyric) => {
        setTimeout(() => {
          lyricsElement.textContent = lyric.text;
          lyricsElement.id = lyric.emotion;
          if (lyric.emotion === "aidenlortie")
          {
            animateWalkingText(lyricsElement);
          }
        }, lyric.time - audio.currentTime * 1000); // Adjust timing based on current playback
      });

    } else {
      audio.pause();
      playButton.textContent = "Play";
      let highestTimeoutId = setTimeout(";");
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
      clearStyles(lyricsElement);
    }
  });
});
