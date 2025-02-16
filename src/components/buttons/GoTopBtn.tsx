export default function GoTopBtn() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className=" border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg px-2"
      onClick={() => handleButtonClick()}
    >
      Go To Top
    </button>
  );
}
