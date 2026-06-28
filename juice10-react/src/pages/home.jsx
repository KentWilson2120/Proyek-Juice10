export default function Home() {
  return (
    <main>

      <section id="home-top">

        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <h1 id="main-brand">---- Daun Jati ----</h1>

        <h2 id="slogan">
          In Every Cup<br />
          There's<br />
          A Moment Of Peace
        </h2>

        <img id="logo-cafe" src="/logo.png" />

      </section>

      <section id="home-mid">
        <div className="fitur">
          <img src="/barista.png" />
          <p>Powered by passion...</p>
        </div>

        <div className="fitur">
          <img src="/coffee.png" />
          <p>Rich flavours and care</p>
        </div>

        <div className="fitur">
          <img src="/cafe.png" />
          <p>Cozy place and conversations</p>
        </div>
      </section>

      <section id="home-bottom">
        <p>A quiet coffee shop hums like a gentle secret</p>
        <p>Every cup holds a story</p>
      </section>

    </main>
  );
}