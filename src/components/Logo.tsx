const redLogo = "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
// const blueLogo = "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

function Logo() {
  return (
    <div className="flex justify-center">
      <img className="w-[70%]" src={redLogo} alt="Logo" />
    </div>
  );
}

export default Logo;
