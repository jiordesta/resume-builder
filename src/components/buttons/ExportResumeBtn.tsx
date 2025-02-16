import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportResumeBtn() {
  const generatePdf = () => {
    window.open("/download", "_blank");
  };

  return (
    <button
      className=" border border-dashed border-teal rounded-md bg-teal bg-opacity-10 hover:bg-opacity-50 transition-all ease-in-out duration-300 uppercase glowText drop-shadow-lg px-2"
      onClick={() => generatePdf()}
    >
      Export Resume as PDF
    </button>
  );
}
