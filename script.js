// --- MESSAGE CARD DATA ---
// So, this is the list of sender names.
const senderNames = [
    "Kristian",
    "Chaelaa",
    "Yoshh",
    "Reyaa",
    "Spexxy",
    "Turbo",
    "Noel",
    "Siomay",
    "Paul",
    "Kringgyy",
    "Cee Jayy",
    "Didayyy"
];

const audioUrls = [
    "https://dl.dropboxusercontent.com/scl/fi/3hxncj9ks9tjiz0givwc3/kristian.mp3?rlkey=i0x6l8nf2tqz61jido3vw1m1y&st=d4ofa2k0&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/66gx6op9ljcwckqewttvo/chaelaa.wav?rlkey=dr5qjrgkmvadd8uau2nxm6dhl&st=mktgbac6&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/8gm8gu91velf14zeb28ei/yoshh.mp3?rlkey=dy763d8xkyyvbcnwce0ahi3ie&st=wgmtp490&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/hekgv416xyxtyukb6mxdh/reyaa.mp3?rlkey=3o270m5aamhkxhtuondb2cv10&st=dji6ha6p&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/npquswy933yw3ko4yojp/spexx.mp3?rlkey=d4n810xq5zqo4tjvd8iusj6ur&st=0smqhdeq&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/whins3bf0om3u7ypicumq/turbo.m4a?rlkey=ylscdrxtoj5rnsjspz8fkhrx9&st=xk3bppnl&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/utnm61li3335lgvi96pgh/noel.mp3?rlkey=zw9y2y5mzjeh976tkd8cjuys4&st=7xsjt38v&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/g1cir1larr2bx4conmocb/siomay.m4a?rlkey=ajzt9soqyo76qhqepcy41bj6q&st=k82jss76&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/vwgzg6ylf9yr3niuezc4q/paul.wav?rlkey=3vddpswscsvmhfox9jqqnoe8b&st=qfy7v6lv&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/cts422j8wdtz47yy7u9mx/kringg.mp3?rlkey=e9i4jjm2vprpsisfgyvwm3xqe&st=5shobvc7&dl=1",
    "https://dl.dropboxusercontent.com/scl/fi/psrdvhlwmud4cwc8mito7/cjjj.mp3?rlkey=h8jkbgzctego4uc6ac50mf7pw&st=3o1dc0fc&dl=1", 
    "https://dl.dropboxusercontent.com/scl/fi/0nc8qgbg1jjz5e1uj8w16/didayy.m4a?rlkey=j7l3639vfjqsx0odyimdnr232&st=gzj2sxv8&dl=1"  
];

const senderImageUrls = [
    "https://www.dropbox.com/scl/fi/cubo7j6lrryfxkduvv33d/ivan.png?rlkey=xlrc60gpa2hg51n2yo2vjp4eq&st=5m0yp20r&dl=1",
    "https://www.dropbox.com/scl/fi/tpj4r944a0r94a2yb4jss/chelaa.png?rlkey=6n47vorivrnl0r6435um0hbyj&st=e3hx2xtb&dl=1",
    "https://www.dropbox.com/scl/fi/pihds8cdb6vm4t9lekscn/yosh.jpg?rlkey=41i3sk5eqnrync33pxvjvy93k&st=lctyke1g&dl=1", 
    "https://www.dropbox.com/scl/fi/it8y9821hh7eavsq7ax2g/reya.png?rlkey=26unlvg6ha03qkhzx5dct73g4&st=ek7o5lz4&dl=1",
    "https://www.dropbox.com/scl/fi/q0qahx59r4d66ay86s50n/spexxy.webp?rlkey=119a1g6drpj20mku2uci8inch&st=n1lopp5b&dl=1",
    "https://www.dropbox.com/scl/fi/1vy2nfnd6y02lx1dkfcxy/turbo.png?rlkey=3ggh9tm6siuzyg4hswf28a0de&st=at1vlut6&dl=1",
    "https://www.dropbox.com/scl/fi/2b9h95vh4kip2wruxzl6w/noel.jpg?rlkey=yd7gyuswz66smw4uj04ycl31m&st=dmdp5506&dl=1", 
    "https://www.dropbox.com/scl/fi/ticsuz8w9vozs0n93nrir/siomay.jpg?rlkey=pzsrzsoyloill2z2ibtmu5n48&st=z7k4zy07&dl=1", 
    "https://www.dropbox.com/scl/fi/x2763mx5z23rb2dl78k4e/paul.jpg?rlkey=2412gyv92bfjwntgwn321v3lr&st=pe5vqsii&dl=1", 
    "https://www.dropbox.com/scl/fi/7yd6rerwa78m4c0yurikv/kringg.jpg?rlkey=yhsw2vjcr4h2vkb1jkp20b94c&st=ma8rguxj&dl=1",
    "https://www.dropbox.com/scl/fi/jhzt2l5h5jjpe2vr217sl/cjj.jpg?rlkey=vl1ws96zq8ud2t0pviy273ow1&st=yw30zbun&dl=1",
    "https://www.dropbox.com/scl/fi/li1evqpv5m4h0ete7x0v0/didayy.jpg?rlkey=j3cjcky3rwwzmdybke3h5xm5j&st=1hvd7s1q&dl=1"
];

// --- SHUFFLE LOGIC ---
// Find Didayyy's index (she should always be the last one in the original arrays, so that's fine).
const didayyIndex = senderNames.length - 1;

// Get Didayyy's data.
const didayyData = {
    name: senderNames[didayyIndex],
    audio: audioUrls[didayyIndex],
    image: senderImageUrls[didayyIndex]
};

// Create temp arrays without Didayyy.
let tempSenderNames = [...senderNames.slice(0, didayyIndex)];
let tempAudioUrls = [...audioUrls.slice(0, didayyIndex)];
let tempSenderImageUrls = [...senderImageUrls.slice(0, didayyIndex)];

// Fisher-Yates (Knuth) Shuffle for the remaining items.
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there are still elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining random item.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Combine sender data into objects.
let combinedSenders = [];
for (let i = 0; i < tempSenderNames.length; i++) {
    combinedSenders.push({
        name: tempSenderNames[i],
        audio: tempAudioUrls[i],
        image: tempSenderImageUrls[i]
    });
}

// Shuffle the combined senders.
shuffleArray(combinedSenders);

// Reconstruct the sender arrays with shuffled data + Didayyy at the end.
const shuffledSenderNames = combinedSenders.map(s => s.name);
const shuffledAudioUrls = combinedSenders.map(s => s.audio);
const shuffledSenderImageUrls = combinedSenders.map(s => s.image);

// Put Didayyy back at the end.
shuffledSenderNames.push(didayyData.name);
shuffledAudioUrls.push(didayyData.audio);
shuffledSenderImageUrls.push(didayyData.image);

// Array to store page/card data (now populated from shuffled arrays).
const pages = [];
// Number of audio cards based on the length of shuffled senderNames.
const numberOfAudioCards = shuffledSenderNames.length; 

// Loop to create audio cards using the shuffled data.
for (let i = 0; i < numberOfAudioCards; i++) {
    pages.push({
        mediaType: "audio", // Media type: audio.
        mediaUrl: shuffledAudioUrls[i], // Audio file URL from shuffled array.
        autoplayMedia: false, // No autoplay at first.
        senderImageUrl: shuffledSenderImageUrls[i], // Sender image URL from shuffled array.
        senderName: shuffledSenderNames[i] // Sender name from shuffled array.
    });
}

// Love letter content (HTML string).
const loveLetterHtmlContent = `
    <div class="main-wrapper">
        <div class="letter-container">
            <div class="envelope-top"></div>
            <div class="love-letter-content">
                <p>Hi Kenken Happy Birthdayy,</p>
                <p>Syempre may pahabol pa'ko, i love youu, Sowwii eto lang kaya ni diday ngayonnn ahh wala me giftt, walaa ihhh alaa na talagaaa. Sana kahit papaano napasaya kita kahit sa ganitong bagay langg hihihih. Iloveyouu so muchhh. Mahal na mahall ka ni didayy kenkennn. Happpyy Birthhdayyy ulittt enjoyyy ur dayy okiii? andito lang me palagii forr youu mahall na mahalll kitaaa. Sanaa nextt birthdayy mo kasamaa nakita hihihih iloveyouuu so muchh kenkennnn hihihih galingann mo palagiiii iloveyouuuu mwaaaaaaa</p>
            </div>
        </div>

        <div class="photo-container-outer">
            <div class="photo-frame">
                <img src="https://www.dropbox.com/scl/fi/ntttukoyekx8pstwh4rhk/pictueee.jpg?rlkey=dqmn34jcxur6c3cchida4tv19&dl=1" alt="Couple embracing" id="coupleImage">
            </div>
        </div>
    </div>
`;
const loveLetterImageUrl = "https://www.dropbox.com/scl/fi/ntttukoyekx8pstwh4rhk/pictueee.jpg?rlkey=dqmn34jcxur6c3cchida4tv19&dl=1"; // Image URL for love letter.

// Current visible card index.
let currentPageIndex = 0;
// Flag: user interacted with cards (for audio autoplay).
let userInteractedWithCards = false;
// Card transition animation duration (milliseconds).
const animationDuration = 400;
// Small delay before playing audio (for reliable autoplay).
const audioPlayDelay = 100;

// Get the HTML elements.
const cardStackContainer = document.querySelector('.card-stack-container');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const messageCardsScreen = document.getElementById('message-cards-screen');
const navButtonsContainer = document.getElementById('nav-buttons-container');

// --- CAKE INTERACTION LOGIC ---
const initialCakeScreen = document.getElementById('initial-cake-screen');
const goToCardsButton = document.getElementById('go-to-cards-button');
const allowMicButton = document.getElementById('allow-mic-button');
const guideText = document.getElementById('guide-text');
const loadingScreen = document.getElementById('loading-screen'); // The loading screen element.
const backgroundMusic = document.getElementById('background-music'); // The background music element.
// Background music URL.
const backgroundMusicUrl = "https://dl.dropboxusercontent.com/scl/fi/r5xze4cqj3yrb4u5jsr45/Happy-Birthday-Piano-Version.mp3?rlkey=nmld0163aa0bqd6zne1z7wg97&st=ae3r48tp&dl=1";
const loveLetterScreen = document.getElementById('love-letter-screen'); // The love letter screen element.

// Candle elements.
const candle2 = document.getElementById("candle2");
const candle4 = document.getElementById("candle4");
// Microphone input variables.
let audioContext, analyser, microphone;
let blowInterval; // Interval to check if someone is blowing.

// Function to check for blowing (microphone input).
function isBlowing() {
    if (!analyser) return false;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
    }
    // Adjusted threshold for blowing sensitivity.
    let average = sum / bufferLength;
    let threshold = 10; // This is the threshold value (adjusted to be less sensitive).
    return average > threshold;
}

// Function to blow out candles.
function blowOutCandles() {
    let allCandlesOut = true; // Assume all candles are out.

    // Check candle '2'.
    if (!candle2.classList.contains("out")) {
        if (isBlowing()) {
            candle2.classList.add("out"); // If blowing, extinguish the candle.
        } else {
            allCandlesOut = false; // Not all candles are out yet.
        }
    }

    // Check candle '4'.
    if (!candle4.classList.contains("out")) {
        if (isBlowing()) {
            candle4.classList.add("out"); // If blowing, extinguish the candle.
        } else {
            allCandlesOut = false; // Not all candles are out yet.
        }
    }

    // If all candles are out.
    if (allCandlesOut && candle2.classList.contains("out") && candle4.classList.contains("out")) {
        triggerConfetti(); // Trigger the confetti.
        clearInterval(blowInterval); // Stop checking for blowing.
        
        // Stop microphone track and close audio context.
        if (microphone && microphone.mediaStream) {
            microphone.mediaStream.getTracks().forEach(track => track.stop());
        }
        if (audioContext) {
            audioContext.close();
        }

        // Auto-proceed to cards after a short delay.
        setTimeout(() => {
            showCardsScreen(); // Show the cards screen.
        }, 1500); // 1.5 second delay after candles are out.
    }
}

// Function to trigger confetti effect.
function triggerConfetti() {
    confetti({
        particleCount: 200, // Amount of confetti.
        spread: 80, // Spread of confetti.
        origin: { y: 0.6 } // Origin of confetti (a bit below center).
    });
}

// Function to preload all audio and image assets.
async function preloadAssets() {
    const assetPromises = []; // Array to store all the loading promises.
    let loadedCount = 0; // Count of loaded assets.
    // Calculate total assets (audio + images + background music).
    const totalAssets = (pages.filter(p => p.mediaUrl || p.senderImageUrl).length * 2) + 1; 

    // Preload background music (just load, not play yet).
    assetPromises.push(new Promise((resolve) => {
        const audio = new Audio();
        audio.src = backgroundMusicUrl;
        const onAudioLoad = () => {
            loadedCount++;
            console.log(`Background music loaded: (${loadedCount}/${totalAssets})`);
            resolve();
            audio.removeEventListener('canplaythrough', onAudioLoad);
            audio.removeEventListener('error', onAudioError);
        };
        const onAudioError = (e) => {
            loadedCount++;
            console.error('Failed to load background music:', e, `(${loadedCount}/${totalAssets})`);
            resolve();
            audio.removeEventListener('canplaythrough', onAudioLoad);
            audio.removeEventListener('error', onAudioError);
        };
        audio.addEventListener('canplaythrough', onAudioLoad);
        audio.addEventListener('error', onAudioError);
        audio.load(); // Start loading.
    }));

    // Preload each audio and image for each card.
    pages.forEach((page, index) => {
        // Preload audio.
        if (page.mediaType === "audio" && page.mediaUrl) {
            assetPromises.push(new Promise((resolve) => {
                const audio = new Audio();
                audio.src = page.mediaUrl;
                const onAudioLoad = () => {
                    loadedCount++;
                    console.log(`Audio loaded: ${page.mediaUrl} (${loadedCount}/${totalAssets})`);
                    resolve();
                    audio.removeEventListener('canplaythrough', onAudioLoad);
                    audio.removeEventListener('error', onAudioError);
                };
                const onAudioError = (e) => {
                    loadedCount++;
                    console.error('Failed to load audio:', page.mediaUrl, e, `(${loadedCount}/${totalAssets})`);
                    resolve();
                    audio.removeEventListener('canplaythrough', onAudioLoad);
                    audio.removeEventListener('error', onAudioError);
                };
                audio.addEventListener('canplaythrough', onAudioLoad);
                audio.addEventListener('error', onAudioError);
                audio.load(); // Start loading.
            }));
        }

        // Preload image (for audio cards).
        if (page.senderImageUrl) {
            assetPromises.push(new Promise((resolve) => {
                const img = new Image();
                img.src = page.senderImageUrl;
                const onImageLoad = () => {
                    loadedCount++;
                    console.log(`Image loaded: ${page.senderImageUrl} (${loadedCount}/${totalAssets})`);
                    resolve();
                    img.removeEventListener('load', onImageLoad);
                    img.removeEventListener('error', onImageError);
                };
                const onImageError = (e) => {
                    loadedCount++;
                    console.error('Failed to load image:', page.senderImageUrl, e, `(${loadedCount}/${totalAssets})`);
                    resolve();
                    img.removeEventListener('load', onImageLoad);
                    img.removeEventListener('error', onImageError);
                };
                img.addEventListener('load', onImageLoad);
                img.addEventListener('error', onImageError);
            }));
        }
    });

    // Set a timeout for the whole preloading process (10 seconds).
    const timeoutPromise = new Promise(resolve => {
        setTimeout(() => {
            console.warn("Asset preloading timed out after 10 seconds.");
            resolve(); // Resolve timeout promise so the loading screen will disappear.
        }, 10000); // 10 second timeout.
    });

    // Wait for all promises to complete or timeout.
    return Promise.race([Promise.all(assetPromises), timeoutPromise]);
}

// Function to show the cake screen.
function showCakeScreen() {
    initialCakeScreen.classList.remove('hidden'); // Make the cake screen visible.
    console.log("Showing cake screen.");

    // Start music at a very low volume when the cake screen appears.
    backgroundMusic.volume = 0.05;
    backgroundMusic.play().catch(e => console.error("Background music autoplay prevented:", e));

    // Gradually increase the volume.
    let currentVolume = backgroundMusic.volume;
    const targetVolume = 1.0;
    const volumeIncrement = 0.01; // Increase by 0.01 per step.
    const intervalTime = 100; // Every 100ms.

    const volumeInterval = setInterval(() => {
        if (currentVolume < targetVolume) {
            currentVolume = Math.min(targetVolume, currentVolume + volumeIncrement);
            backgroundMusic.volume = currentVolume;
        } else {
            clearInterval(volumeInterval); // Stop the interval when target volume is reached.
        }
    }, intervalTime);
}

// Function to show the cards screen.
function showCardsScreen() {
    console.log("showCardsScreen called. Hiding cake, showing cards...");
    initialCakeScreen.classList.add('hidden'); // Hide the cake screen (it will fade out).
    backgroundMusic.pause(); // Pause background music.

    // Delay to allow the cake screen to fade out before cards fade in.
    setTimeout(() => {
        console.log("Timeout triggered. Showing message cards screen and nav buttons.");
        messageCardsScreen.classList.remove('hidden'); // Show the message cards screen.
        navButtonsContainer.classList.remove('hidden'); // Show the navigation buttons.

        // Now that the container is visible, initialize the cards.
        userInteractedWithCards = true; // Mark user interacted for the first card autoplay.
        console.log("Calling initializeCards...");
        initializeCards();
        // Also trigger fade-in for the card stack container.
        cardStackContainer.classList.add('active-cards');
    }, 500); // 500ms delay for cross-fade effect.
}

// Function to show the love letter as a new "page".
function showLoveLetterScreen() {
    console.log("Showing love letter screen.");
    // Hide all existing app screens and navigation.
    initialCakeScreen.classList.add('hidden');
    loginScreen.classList.add('hidden');
    messageCardsScreen.classList.add('hidden');
    navButtonsContainer.classList.add('hidden');
    backgroundMusic.pause(); // Stop background music.

    // Show the love letter screen.
    loveLetterScreen.classList.remove('hidden');
    loveLetterScreen.classList.add('visible');
}


// --- MESSAGE CARD LOGIC ---
const allCards = []; // Array to store all card elements.

// Function to create a card element.
function createCardElement(pageData, index) {
    const card = document.createElement('div');
    card.classList.add('message-card');
    card.setAttribute('data-page-index', index);

    const mediaContentDiv = document.createElement('div');
    mediaContentDiv.classList.add('media-content');

    let mediaHtml = '';

    // If it's an audio card.
    if (pageData.mediaType === "audio" && pageData.mediaUrl) {
        card.classList.add('audio-card'); 
        const senderImage = pageData.senderImageUrl;
        const senderName = pageData.senderName || 'Unknown Sender';

        mediaHtml = `
            <div class="sender-image-wrapper">
                <img src="${senderImage}" alt="${senderName}'s Photo" class="sender-image" 
                     onerror="this.onerror=null; this.src='https://placehold.co/400x400/e0e0e0/333333?text=Image+Error';">
            </div>
            <p class="sender-name cursive-font">${senderName}</p>
            <div class="w-full">
                <audio controls class="w-full">
                    <source src="${pageData.mediaUrl}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `;
    } else {
        // Fallback for other media types or if no data.
        mediaHtml = `
            <div class="relative w-full h-full flex items-center justify-center">
                <img src="${pageData.mediaUrl || `https://placehold.co/600x400/e0e0e0/333333?text=No+Media`}" 
                     alt="${pageData.placeholderText || 'Media Placeholder'}" 
                     class="object-cover w-full h-full rounded-xl" 
                     onerror="this.onerror=null; this.src='https://placehold.co/600x400/e0e0e0/333333?text=Image+Error';">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span class="text-white text-xl font-bold">${pageData.placeholderText || 'No Media'}</span>
                </div>
            </div>
        `;
    }
    
    mediaContentDiv.innerHTML = mediaHtml;
    card.appendChild(mediaContentDiv);

    // Add event listener for audio end.
    if (pageData.mediaType === "audio" && pageData.mediaUrl) {
        const audio = mediaContentDiv.querySelector('audio');
        if (audio) {
            audio.addEventListener('ended', () => {
                // If this is the last audio card (Didayy's), enable the next button and update nav buttons.
                if (index === pages.length - 1) { 
                    updateNavigationButtons(); // This will enable nextPageBtn and make it visible.
                } else {
                    // For other audio cards, auto-move to the next card.
                    navigateCards('left'); 
                }
            });
        }
    }

    return card;
}

// Function to initialize all cards and append to container.
function initializeCards() {
    console.log("initializeCards called. allCards.length:", allCards.length);
    if (allCards.length === 0) { // Create cards if none exist.
        pages.forEach((pageData, index) => {
            const card = createCardElement(pageData, index);
            allCards.push(card);
            cardStackContainer.appendChild(card);
            console.log("Card created and appended:", card);
        });
    }
    console.log("Calling updateCardPositions...");
    updateCardPositions(); // Set initial card positions.
}

// Function to update card positions and visibility.
function updateCardPositions() {
    console.log("updateCardPositions called. Current page index:", currentPageIndex);
    allCards.forEach((card, index) => {
        // Clear all dynamic and animation classes/styles.
        card.classList.remove('active', 'previous', 'next', 'slide-out-left', 'slide-out-right');
        card.style.transform = ''; // Clear inline styles.
        card.style.opacity = ''; // Clear inline styles.
        card.style.zIndex = ''; // Clear inline zIndex.

        // Stop any media (video or audio) in inactive cards.
        const mediaElement = card.querySelector('video') || card.querySelector('audio');
        if (mediaElement) {
            mediaElement.pause();
            mediaElement.currentTime = 0;
        }

        // Set card class based on current page index.
        if (index === currentPageIndex) {
            card.classList.add('active'); // Active card.
            const cardImage = card.querySelector('.sender-image'); 
            const cardAudio = card.querySelector('audio');

            // Function to play audio if ready.
            const playAudioIfReady = () => {
                if (cardAudio && userInteractedWithCards) {
                    console.log(`Attempting to play audio for card ${index}. Image ready: ${card.dataset.imageReady}`);
                    // Small delay before playing audio.
                    setTimeout(() => {
                        cardAudio.play().catch(error => {
                            console.error('Autoplay prevented for active card:', error);
                        });
                    }, audioPlayDelay);
                }
            };

            // Check if image is already loaded (from preload or previous view).
            if (card.dataset && card.dataset.imageReady === 'true') {
                playAudioIfReady();
            } else if (cardImage) {
                // If not ready, wait for image to load.
                const imageLoadListener = () => {
                    console.log(`Image for card ${index} loaded in DOM.`);
                    if (card.dataset) card.dataset.imageReady = 'true'; // Mark as ready.
                    playAudioIfReady();
                    cardImage.removeEventListener('load', imageLoadListener); // Remove listener after first load.
                };
                cardImage.addEventListener('load', imageLoadListener);
                // Fallback if image is in cache and load event doesn't fire.
                if (cardImage.complete && cardImage.naturalHeight !== 0) {
                    imageLoadListener();
                }
            } else {
                // If no image (e.g., text-only card), play audio directly.
                playAudioIfReady();
            }

        } else if (index === currentPageIndex - 1) {
            card.classList.add('previous'); // Previous card (to the left).
        } else if (index === currentPageIndex + 1) {
            card.classList.add('next'); // Next card (to the right).
        } else {
            // Distant cards are totally hidden and at the back.
            card.style.opacity = '0';
            card.style.transform = 'translate(-50%, -50%) scale(0.8)';
            card.style.zIndex = '0';
        }
    });
    updateNavigationButtons(); // Update navigation button states.
}

// Function for card navigation.
function navigateCards(direction) {
    userInteractedWithCards = true; // Mark user interacted by navigating.

    const oldPageIndex = currentPageIndex; // Store the old index.

    // Update page index first.
    if (direction === 'left') {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
        } else {
            // If trying to go past the last card, do nothing or handle love letter transition.
            // For the last card, the nextPageBtn click handler already handles the love letter transition.
            return; // Exit if no actual navigation.
        }
    } else { // direction === 'right'
        if (currentPageIndex > 0) {
            currentPageIndex--;
        } else {
            // If trying to go before the first card, do nothing.
            return; // Exit if no actual navigation.
        }
    }

    const oldActiveCard = allCards[oldPageIndex];
    
    // Pause media on the old active card.
    if (oldActiveCard) {
        const mediaElement = oldActiveCard.querySelector('video') || oldActiveCard.querySelector('audio');
        if (mediaElement) {
            mediaElement.pause();
            mediaElement.currentTime = 0; // Reset the audio.
        }
    }

    // Apply the slide-out class to the *old* active card.
    if (oldActiveCard) {
        oldActiveCard.classList.remove('active');
        oldActiveCard.classList.add(direction === 'left' ? 'slide-out-left' : 'slide-out-right');
    }

    // Immediately update positions for all cards based on the NEW currentPageIndex.
    // This will make the newActiveCard 'active' and the others 'previous'/'next' immediately.
    updateCardPositions();

    // After the animation duration, clean up the old card's slide-out class.
    setTimeout(() => {
        if (oldActiveCard) {
            oldActiveCard.classList.remove('slide-out-left', 'slide-out-right');
            // Make sure its opacity and transform are reset to hidden state.
            oldActiveCard.style.opacity = '0';
            oldActiveCard.style.transform = 'translate(-50%, -50%) scale(0.8)';
            oldActiveCard.style.zIndex = '0';
        }
    }, animationDuration);
}

// Function to update navigation button states (disabled/enabled/visible).
function updateNavigationButtons() {
    prevPageBtn.disabled = currentPageIndex === 0; // Disable the previous button if on the first card.

    if (currentPageIndex === pages.length - 1) { // If it's the last card (Didayy's).
        const didayyAudio = allCards[currentPageIndex].querySelector('audio');
        if (didayyAudio && !didayyAudio.ended) {
            nextPageBtn.classList.add('hidden-nav-button'); // Hide the next button.
            nextPageBtn.disabled = true; // Also disable it.
        } else {
            nextPageBtn.classList.remove('hidden-nav-button'); // Show the next button.
            nextPageBtn.disabled = false; // Enable it.
        }
    } else {
        // For all other cards, the next button is always visible and enabled.
        nextPageBtn.classList.remove('hidden-nav-button'); // Make sure it's visible.
        nextPageBtn.disabled = false; // Make sure it's enabled.
    }
}

// --- Touch Event Handlers for Card Navigation ---
let touchStartX = 0; // Touch start X-coordinate.
let touchEndX = 0; // Touch end X-coordinate.
const minSwipeDistance = 150; // Increased sensitivity threshold.
let isDraggingCards = false; // Flag: currently dragging cards.
let activeCardInitialX = 0; // Initial X position of the active card when touch starts.

// 'touchstart' event listener.
cardStackContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX; // Get the initial touch X position.
    isDraggingCards = true; // Set to true for dragging.
    userInteractedWithCards = true; // Mark user interacted.

    // Temporarily disable CSS transitions for smooth dragging.
    allCards.forEach(card => card.style.transition = 'none');

    const activeCard = allCards[currentPageIndex];
    if (activeCard) {
        // Get the current translateX value of the active card.
        const style = window.getComputedStyle(activeCard);
        const transformMatrix = new WebkitCSSMatrix(style.transform);
        activeCardInitialX = transformMatrix.m41;
    }
});

// 'touchmove' event listener.
cardStackContainer.addEventListener('touchmove', (e) => {
    if (!isDraggingCards) return; // If not dragging, skip logic.
    e.preventDefault(); // Prevent vertical scrolling during horizontal swipe.

    touchEndX = e.touches[0].clientX; // Get the current touch X position.
    const diff = touchEndX - touchStartX; // Calculate the X-position difference.

    // Dynamically adjust transform and opacity for relevant cards based on drag distance.
    allCards.forEach((card, index) => {
        let currentTransformX = 0;
        let currentScale = 1;
        let currentOpacity = 0;
        let currentZIndex = 0;
        const cardWidth = cardStackContainer.offsetWidth; // Use container width for relative calculations.

        if (index === currentPageIndex) { // Active card.
            currentTransformX = activeCardInitialX + diff;
            currentScale = 1 - (Math.abs(diff) / cardWidth * 0.2); // Shrink as it moves out.
            currentOpacity = 1 - (Math.abs(diff) / cardWidth * 1.5); // Fade out faster.
            currentZIndex = 20;

        } else if (index === currentPageIndex - 1) { // Previous card (entering from the left).
            const initialPrevTranslate = -cardWidth * 0.22; // Matches CSS .previous translateX.
            currentTransformX = initialPrevTranslate + diff;
            currentScale = 0.9 + (Math.max(0, diff) / cardWidth * 0.1); // Grow as it approaches front.
            currentOpacity = 0.7 + (Math.max(0, diff) / cardWidth * 0.3); // Fade in.
            currentZIndex = 10;

        } else if (index === currentPageIndex + 1) { // Next card (entering from the right).
            const initialNextTranslate = cardWidth * 0.22; // Matches CSS .next translateX.
            currentTransformX = initialNextTranslate + diff;
            currentScale = 0.9 + (Math.max(0, -diff) / cardWidth * 0.1); // Grow as it approaches front.
            currentOpacity = 0.7 + (Math.max(0, -diff) / cardWidth * 0.3); // Fade in.
            currentZIndex = 10;
        } else {
            // Distant cards are totally hidden and at the back.
            card.style.opacity = '0';
            card.style.transform = 'translate(-50%, -50%) scale(0.8)';
            card.style.zIndex = '0';
        }

        // Apply dynamic styles, ensuring values are within reasonable limits.
        card.style.transform = `translate(-50%, -50%) translateX(${currentTransformX}px) scale(${Math.min(1, Math.max(0.8, currentScale))})`;
        card.style.opacity = `${Math.min(1, Math.max(0, currentOpacity))}`;
        card.style.zIndex = currentZIndex;
    });
});

// 'touchend' event listener.
cardStackContainer.addEventListener('touchend', () => {
    if (!isDraggingCards) return; // If not dragging, skip logic.
    isDraggingCards = false; // Dragging finished.

    const swipeDistance = touchEndX - touchStartX; // Calculate the total swipe distance.

    // Re-enable CSS transitions for the final snap/animation.
    allCards.forEach(card => card.style.transition = '');

    // Check if the swipe is valid based on minSwipeDistance.
    if (swipeDistance > minSwipeDistance) { // Swiped right (to the previous card).
        if (currentPageIndex > 0) { // Only if not on the first card.
            navigateCards('right');
        } else {
            // If at the first card and swiped right, revert to the current position.
            updateCardPositions(); 
        }
    } else if (swipeDistance < -minSwipeDistance) { // Swiped left (to the next card).
        if (currentPageIndex < pages.length - 1) { // If not on the last audio card.
            navigateCards('left');
        } else if (currentPageIndex === pages.length - 1) { // If it's the last audio card.
            const didayyAudio = allCards[currentPageIndex].querySelector('audio');
            if (didayyAudio && didayyAudio.ended) { // Only show the love letter if the audio has ended.
                showLoveLetterScreen();
            } else {
                // If audio not ended, revert to the current position.
                updateCardPositions();
            }
        }
    } else {
        // Swipe not strong enough, revert to the original position.
        updateCardPositions(); 
    }

    // Clear touch positions for the next swipe.
    touchStartX = 0;
    touchEndX = 0;
});


// --- LOGIN SCREEN LOGIC ---
const loginScreen = document.getElementById('login-screen');
const pinDisplay = document.getElementById('pin-display');
const errorMessage = document.getElementById('error-message');
const loginBox = document.getElementById('login-box');
const loginButtons = document.querySelectorAll('#login-screen .buttons button'); // Get the login screen buttons.

const correctPin = '112524'; // The correct PIN.
let enteredPin = ''; // User's entered PIN.

// Function to reset the login display.
function resetLoginDisplay() {
    enteredPin = ''; // Clear the entered PIN.
    pinDisplay.textContent = ''; // Clear the display.
    pinDisplay.setAttribute('data-placeholder', 'Enter Passcode'); // Show the placeholder again.
}

// Function for successful login.
function handleSuccessfulLogin() {
    loginScreen.classList.add('hidden'); // Hide the login screen (fade out).
    loadingScreen.classList.remove('hidden'); // Show the loading screen after login (fade in).
    console.log("Login successful. Hiding login, showing loading screen for assets.");

    // Music won't start here. It will start when showCakeScreen is called.
    backgroundMusic.volume = 0; // Make sure volume is 0 while loading.

    // Start asset loading. Music volume handled in showCakeScreen.
    preloadAssets().then(() => {
        console.log("All assets loaded. Hiding loading screen and showing cake.");
        loadingScreen.classList.add('hidden'); // Hide the loading screen (fade out).
        showCakeScreen(); // Show the cake screen and start music (fade in).
    }).catch(error => {
        console.error("Error during asset preloading:", error);
        loadingScreen.classList.add('hidden'); // Hide the loading screen even on error.
        showCakeScreen(); // Still show cake, but no guarantee assets are loaded.
    });
}

// Function to check the entered PIN.
function checkPin() {
    if (enteredPin === correctPin) {
        handleSuccessfulLogin(); // If PIN is correct, proceed.
    } else {
        errorMessage.style.display = 'block'; // Show the error message.
        loginBox.classList.add('shake'); // Shake the login box.
        
        setTimeout(() => {
            loginBox.classList.remove('shake'); // Remove the shake animation.
            setTimeout(() => {
                errorMessage.style.display = 'none'; // Hide the error message after 1 second.
                resetLoginDisplay(); // Show "Enter Passcode" after the error disappears.
            }, 1000); // Keep error visible for 1 second.
        }, 300); // Shake animation duration.
    }
}

// Event listeners for login buttons.
loginButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('enter')) {
            checkPin(); // If "Enter" button, check the PIN.
        } else if (button.classList.contains('backspace')) {
            enteredPin = enteredPin.slice(0, -1); // Delete the last digit.
            pinDisplay.textContent = '*'.repeat(enteredPin.length); // Show asterisks.
            if (enteredPin.length === 0) { // If PIN is empty, show the placeholder.
                pinDisplay.setAttribute('data-placeholder', 'Enter Passcode');
            }
        } else {
            if (enteredPin.length < 6) { // Assuming a 6-digit PIN.
                enteredPin += button.dataset.value; // Add the digit.
                pinDisplay.textContent = '*'.repeat(enteredPin.length); // Show asterisks.
                pinDisplay.setAttribute('data-placeholder', ''); // Hide the placeholder when typing.
            }
        }
    });
});

// Event listener for keyboard input (for the login screen).
document.addEventListener('keydown', (event) => {
    // Handle keydown for login only if the login screen is visible.
    if (!loginScreen.classList.contains('hidden')) {
        if (event.key >= '0' && event.key <= '9') { // If it's a number key.
            if (enteredPin.length < 6) {
                enteredPin += event.key;
                pinDisplay.textContent = '*'.repeat(enteredPin.length);
                pinDisplay.setAttribute('data-placeholder', '');
            }
        } else if (event.key === 'Backspace') { // If it's the Backspace key.
            enteredPin = enteredPin.slice(0, -1);
            pinDisplay.textContent = '*'.repeat(enteredPin.length);
            if (enteredPin.length === 0) {
                pinDisplay.setAttribute('data-placeholder', 'Enter Passcode');
            }
        } else if (event.key === 'Enter') { // If it's the Enter key.
            checkPin();
        }
    }
});

// --- Initialization on Document Load ---
document.addEventListener("DOMContentLoaded", function () {
    // Initially show the loading screen.
    loadingScreen.classList.remove('hidden');
    console.log("Showing initial loading screen.");

    // Hide other screens initially.
    loginScreen.classList.add('hidden'); 
    initialCakeScreen.classList.add('hidden'); 
    messageCardsScreen.classList.add('hidden'); 
    navButtonsContainer.classList.add('hidden'); 
    loveLetterScreen.classList.add('hidden'); 
    
    // Hide the go-to-cards button (it's auto-triggered).
    goToCardsButton.classList.add('hidden'); 
    goToCardsButton.classList.remove('visible'); 
    goToCardsButton.style.display = 'none'; 

    guideText.textContent = "Allow Mic, and blow the cake!"; 
    guideText.classList.remove('hidden'); 
    guideText.classList.add('visible');

    // Set initial background music volume to 0 (play only after successful login).
    backgroundMusic.volume = 0;

    // After a short delay, hide the initial loading screen and show the login screen.
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        loginScreen.classList.remove('hidden');
        resetLoginDisplay(); // Reset the login display.
    }, 1000); // 1 second delay for the initial loading screen.

    // Event listener for "Allow Microphone" button.
    allowMicButton.addEventListener('click', function() {
        allowMicButton.classList.add('hidden'); // Hide the button.
        guideText.classList.add('hidden'); // Hide the guide text.
        
        // Check if getUserMedia is supported.
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ audio: true }) // Request microphone access.
                .then((stream) => {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)(); // Create an AudioContext.
                    analyser = audioContext.createAnalyser(); // Create an AnalyserNode.
                    microphone = audioContext.createMediaStreamSource(stream); // Get microphone input.
                    microphone.connect(analyser); // Connect the microphone to the analyser.
                    analyser.fftSize = 256; // Set FFT size for frequency analysis.
                    blowInterval = setInterval(blowOutCandles, 200); // Start checking for blowing every 200ms.
                })
                .catch((err) => {
                    console.error("Unable to access microphone: " + err); // Log the error if mic access fails.
                    guideText.textContent = "Microphone access denied or not supported. Auto-proceeding to messages in 2 seconds.";
                    guideText.classList.remove('hidden'); 
                    allowMicButton.classList.add('hidden'); 
                    
                    // If mic fails, still auto-proceed to cards after a delay.
                    setTimeout(() => {
                        showCardsScreen(); // Auto-proceed to cards.
                    }, 2000); // 2 second delay.
                });
        } else {
            console.warn("getUserMedia not supported on this browser."); // Warning if not supported.
            guideText.textContent = "Microphone access not supported on this browser. Auto-proceeding to messages in 2 seconds.";
            guideText.classList.remove('hidden'); 
            allowMicButton.classList.add('hidden'); 
            
            // If mic not supported, still auto-proceed to cards after a delay.
            setTimeout(() => {
                showCardsScreen(); // Auto-proceed to cards.
            }, 2000); // 2 second delay.
        }
    });

    // Add event listeners for navigation buttons.
    prevPageBtn.addEventListener('click', () => navigateCards('right')); // 'right' means go to previous card visually.
    nextPageBtn.addEventListener('click', () => {
        // Only allow navigation to the love letter if on the last card and audio has ended.
        if (currentPageIndex === pages.length - 1) {
            const didayyAudio = allCards[currentPageIndex].querySelector('audio');
            if (didayyAudio && didayyAudio.ended) {
                showLoveLetterScreen();
            }
        } else {
            navigateCards('left'); // For other cards, proceed normally.
        }
    });
});

