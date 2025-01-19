"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
const basePath = "/oztrump"; 
export default function Home() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(`${basePath}/music/yasasin.mp3`) // Varsayılan şarkı
  const [isPlaying, setIsPlaying] = useState(false); // Şarkı durumu (çalar/durur)

  useEffect(() => {
    // Sayfa yüklendiğinde şarkıyı çalmaya çalışır
    const playAudio = async () => {
      try {
        if (isPlaying) await audioRef.current.play();
      } catch (err) {
        console.log("AutoPlay engellendi: Kullanıcı etkileşimi bekleniyor.");
      }
    };

    playAudio();
  }, [currentSong, isPlaying]); // Şarkı değiştiğinde veya oynatma durumu değiştiğinde

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSongChange = (song) => {
    setCurrentSong(song); // Şarkıyı değiştir
    setIsPlaying(true); // Yeni şarkıyı çalmaya başla
    if (audioRef.current) {
      audioRef.current.load(); // Yeni şarkıyı yükle
    }
  };

  return (
    <div style={styles.container}>
      {/* Üstteki uyarı şeridi */}
      <div style={styles.alertBar}>
        UYARI: Bu coin eğlence amaçlı çıkarılmıştır. Yatırım yaparken dikkatli olun!
      </div>

      {/* Sol üstte logo */}
      <header style={styles.header}>
        <Image src={`${basePath}/1_processed.png`} alt="Logo" width={200} height={200} />
        <span style={styles.logoText}>ÖZ TRUMP</span>
      </header>

      {/* Sağ üstte sabit müzik kontrol alanı */}
      <div style={styles.musicControls}>
        <label style={styles.label}>Marşını Seç Reis:</label>
        <select
          style={styles.select}
          value={currentSong}
          onChange={(e) => handleSongChange(e.target.value)}
        >
          <option value={`${basePath}/music/yasasin.mp3`}>Yaşasın Irkımız</option>
          <option value={`${basePath}/music/dombra.mp3`}>Dombra</option>
        </select>
        <button style={styles.playPauseButton} onClick={handlePlayPause}>
          {isPlaying ? (
            <Image src={`${basePath}/pause.png`} alt="Pause" width={24} height={24} />
          ) : (
            <Image src={`${basePath}/play-button.png`} alt="Play" width={24} height={24} />
          )}
        </button>
      </div>

      {/* Ana içerik bölgesi */}
      <main style={styles.main}>
        <div style={styles.content}>
          <h1 style={styles.title}>ÖZ TRUMP</h1>
          <p style={styles.subtitle}>OCAKTASIN!!!</p>
          <p style={styles.description}>TRUMP GELECEK, DERTLER BİTECEK! ✊</p>
          <p style={styles.description}>EYYY KAMALA SEN KİMSİN YA! ✊</p>
          <p style={styles.description}>BİR GECE ANSIZIN PUMP YAPABİLİRİZ!</p>
          <a href="https://jup.ag/swap/SOL-Dbvp1hZVt79DDcqv1vCDrBYd9qxTS9Mo3aFFeVULpump" style={{ textDecoration: 'none' }}>
            <button style={styles.buyButton}>BUY NOW</button>
          </a>
          {/* Logolar */}
          <div style={styles.logos}>
            <a href="https://gmgn.ai/sol/token/Dbvp1hZVt79DDcqv1vCDrBYd9qxTS9Mo3aFFeVULpump?tab=activity" target="_blank" rel="noopener noreferrer">
              <Image src={`${basePath}/gmgn.png`} alt="Owl Logo" width={50} height={50} />
            </a>
            <a href="https://x.com/OZTRUMPCOIN" target="_blank" rel="noopener noreferrer">
              <Image src={`${basePath}/twitter.png`} alt="X Logo" width={50} height={50} />
            </a>
            <a
              href="https://t.me/+vmMwUDK5wM83YzFk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={`${basePath}/telegram.png`} alt="Telegram Logo" width={50} height={50} />
            </a>
          </div>
        </div>

        <div style={styles.imageSection}>
          <Image src={`${basePath}/3.png`} alt="Trump" width={400} height={400} />
          <Image src={`${basePath}/6.png`} alt="Trump" width={400} height={400} />
        </div>
      </main>

      <div style={styles.justBar}>
        <p> İşlemler yalnızca ocağın adresi üzerinden gerçekleştirilir: Ca: Dbvp1hZVt79DDcqv1vCDrBYd9qxTS9Mo3aFFeVULpump </p>
      </div>

      {/* Orta kısımda ek görseller */}
      <section style={styles.gallery}>
        <Image src={`${basePath}/5.png`} alt="Gallery 3" width={200} height={150} />
        <p style={styles.description}>EN BÜYÜK O MU BİLMİYORUM AMA ÇOK BÜYÜK! ✊</p>
        <video width={550} height={150} controls autoPlay loop muted>
          <source src={`${basePath}/gif.mp4`} type="video/mp4" />
          Tarayıcınız bu videoyu desteklemiyor.
        </video>
        <p style={styles.description}>TRUMP REIS VAR GAM YOK!</p>
        <p>(Yazılım bilgim bitti beyler kusura bakmayın.)</p>
      </section>

      {/* Orta kısımda ek görseller */}
      <section style={styles.gallery}>
        <p style={styles.description}>İMPARATOOOOOOORRR</p>
      </section>
      {/* Orta kısımda ek görseller */}
      <section style={styles.gallery}>
        <Image src={`${basePath}/ganyot.jpg`} alt="Gallery 1" width={450} height={150} />
        <Image src={`${basePath}/8.png`} alt="Gallery 2" width={250} height={150} />

      </section>
      {/* Alt kısımda link ikonları */}
      <footer style={styles.footer}>
        <a href="https://gmgn.ai/sol/token/Dbvp1hZVt79DDcqv1vCDrBYd9qxTS9Mo3aFFeVULpump?tab=activity" target="_blank" rel="noopener noreferrer">
          <Image src={`${basePath}/gmgn.png`} alt="Owl Logo" width={50} height={50} />
        </a>
        <a href="https://x.com/OZTRUMPCOIN" target="_blank" rel="noopener noreferrer">
          <Image src={`${basePath}/twitter.png`} alt="Owl Logo" width={50} height={50} />
        </a>
        <a href="https://t.me/+vmMwUDK5wM83YzFk" target="_blank" rel="noopener noreferrer">
          <Image src={`${basePath}/telegram.png`} alt="Owl Logo" width={50} height={50} />
        </a>
      </footer>

      {/* Ses Çalar */}
      <audio ref={audioRef} loop style={styles.audio}>
        <source src={currentSong} type="audio/mpeg" />
        Tarayıcınız audio etiketini desteklemiyor.
      </audio>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
  },
  alertBar: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#ffcc00",
    color: "#000",
    textAlign: "center",
    padding: "10px 0",
    fontSize: "1rem",
    fontWeight: "bold",
    zIndex: 1001,
  },
  justBar: {
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#ffcc00",
    color: "#000",
    textAlign: "center",
    padding: "10px 0",
    fontSize: "1rem",
    fontWeight: "bold",
    zIndex: 1001,
  },
  musicControls: {
    position: "fixed",
    top: "50px",
    right: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#222",
    padding: "10px",
    borderRadius: "10px",
    zIndex: 1000,
  },
  label: {
    color: "#fff",
    fontSize: "1rem",
  },
  select: {
    padding: "5px 10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  playPauseButton: {
    padding: "5px 10px",
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "fixed", // Sabit konum
    top: "10px",
    left: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "8px", // Daha düzgün bir görünüm için
    zIndex: 1002, // Üstte kalmasını sağlar
  },
  logoText: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
  },
  main: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
  content: {
    flex: 1,
    textAlign: "left",
  },
  imageSection: {
    flex: 1,
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#ccc",
  },
  description: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  buyButton: {
    padding: "10px 20px",
    backgroundColor: "#ffeb3b",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    padding: "20px",
  },
  footer: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  audio: {
    display: "none", // Ses çalar gizli
  },
  logos: {
    display: "flex",
    justifyContent: "left",
    gap: "20px",
    marginTop: "20px",
  },

};
