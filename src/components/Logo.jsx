const Logo = () => {
  return (
    <div className="logo">
      <a
        className="logo__link"
        href="https://unsplash.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="logo__icon"
          src="Unsplash-logo.svg"
          alt="unsplash logo"
        />
        <span className="logo__text">Unsplash</span>
      </a>
    </div>
  );
};

export default Logo;
