// TODO: replace with your real profile photo.
// Export it from the Figma frame (node 18:41 "Profile Image") and
// drop it into src/assets/, then swap this import for:
//   import profileImage from "./assets/profile.jpg";
const profileImage = "/src/assets/hari-cap.jpg";

// Centralize your links here so they're easy to update later.
const LINKS = {
  portfolio: "#", // e.g. https://byhari.com
  behance: "https://www.behance.net/bachtiarazizy",
  linkedin: "https://www.linkedin.com/in/hari-bachtiar-azizy",
};

export default function LinkTree() {
  return (
    <div className="linktree">
      <p className="linktree__logo">byhari</p>

      <nav className="linktree__nav">
        <a href={LINKS.portfolio} className="linktree__pill linktree__pill--filled">
          Portfolio
        </a>
        <a href={LINKS.behance} target="_blank" rel="noreferrer" className="linktree__pill linktree__pill--outline">
          Behance
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="linktree__pill linktree__pill--outline">
          Linkedin
        </a>
      </nav>

      <h1 className="linktree__heading">
        DESIGN
        <br />
        THAT WORKS. ENGINEERED
        <br />
        TO FEEL RIGHT.
      </h1>

      <p className="linktree__subheading">UI/UX Designer &amp; Frontend Developer based in Turkey</p>

      <div className="linktree__info">
        <div className="linktree__photo">
          <img src={profileImage} alt="Portrait of Hari" />
        </div>

        <div className="linktree__description">
          <p className="linktree__bio">I&apos;m Hari a self-taught Design Engineer based in Turkey. My background is political science and public administration, but the real education happened in Figma and React.</p>
          <p className="linktree__bio">I design and build products end-to-end from wireframes to shipped, working interfaces. Visual craft and functional code, working together.</p>
          <p className="linktree__status">Open for new projects.</p>
        </div>
      </div>

      <a href={LINKS.portfolio} className="linktree__cta">
        View full portfolio
      </a>
    </div>
  );
}
