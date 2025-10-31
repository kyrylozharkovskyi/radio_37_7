const statusUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent("http://localhost:8000/status-json.xsl");

const trackElement = document.getElementById("current-track");

// async function fetchTrackInfo() {
//   try {
//     const response = await fetch(statusUrl);
//     const data = await response.json();

//     const source = Array.isArray(data.icestats.source)
//       ? data.icestats.source[0]
//       : data.icestats.source;

//     if (source && source.title) {
//       trackElement.textContent = "🎵 Teraz gra: " + source.title;
//     } else {
//       trackElement.textContent = "🔇 Brak informacji o utworze.";
//     }
//   } catch (error) {
//     console.error("Błąd pobierania statusu Icecast:", error);
//     trackElement.textContent = "⚠️ Nie można pobrać informacji o utworze.";
//   }
// }

// fetchTrackInfo();
// setInterval(fetchTrackInfo, 5000);
