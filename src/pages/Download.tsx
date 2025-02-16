import { useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Download() {
  const resumeRef = useRef(null);

  const generatePdf = () => {
    const content = resumeRef.current;

    if (!content) return;

    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("resume.pdf");
    });

    // setTimeout(() => {
    //   window.close();
    // }, 1000);
  };

  useEffect(() => {
    generatePdf();
  }, []);

  return (
    <div className="p-8">
      <div
        ref={resumeRef}
        className="max-w-3xl mx-auto bg-white text-black p-8 shadow-lg"
      >
        <h1 className="text-3xl font-bold">JOHN IRSON ORDESTA</h1>
        <p className="text-xl">Full-Stack Software Engineer</p>
        <p className="text-sm">
          +639484672382 | jlordesta@gmail.com | Agusan Del Norte, Philippines
        </p>

        <hr className="my-4" />

        <h2 className="text-xl font-bold">PROFESSIONAL SUMMARY</h2>
        <p>
          Versatile Full-Stack Software Engineer with a comprehensive
          understanding of front-end and back-end development. Proficient in
          Java, React, NestJs, NextJs, TypeScript, TailwindCSS, MongoDB, and
          Firebase, with a strong focus on clean, maintainable code and seamless
          user experiences. Adept at managing end-to-end project development,
          from initial concept to deployment.
        </p>

        <hr className="my-4" />

        <h2 className="text-xl font-bold">WORK EXPERIENCES</h2>
        <h3 className="font-bold">
          Software Engineer - Premise{" "}
          <span className="float-right">MAY 2024 - JAN 2025 | Remote</span>
        </h3>
        <ul className="list-disc ml-5">
          <li>
            Ensured software quality by implementing automated testing
            frameworks like Jest
          </li>
          <li>
            Designed and implemented new features on both the frontend and
            backend, leveraging React and NestJs
          </li>
          <li>
            Enhanced database models and queries to support new features,
            ensuring efficient and secure data handling.
          </li>
        </ul>

        <h3 className="font-bold mt-4">
          Software Engineer - Fiverr & Upwork{" "}
          <span className="float-right">JAN 2022 - APR 2023 | Remote</span>
        </h3>
        <ul className="list-disc ml-5">
          <li>
            Developed custom Frontend & backend for diverse client projects
          </li>
          <li>Implemented enhancements to optimize existing website</li>
          <li>
            Integrated additional functionalities to meet evolving client needs
          </li>
          <li>
            Developed back-end APIs and services for client projects using Java
            and TypeScript.
          </li>
        </ul>

        <h3 className="font-bold mt-4">
          Frontend Engineer Intern - Wela School System{" "}
          <span className="float-right">
            AUG 2021 - OCT 2021 | Cagayan De Oro - Remote
          </span>
        </h3>
        <ul className="list-disc ml-5">
          <li>Contributed to Skillings web app development and enhancement</li>
          <li>
            Collaborated with QA lead, designers, and developers for seamless
            task completion.
          </li>
          <li>
            Utilized Git, GitLab, and Trello for version control and project
            management
          </li>
          <li>Implemented React.js interfaces with Ant Design</li>
          <li>
            Optimized state management using Redux Toolkit, following clean
            architecture principles
          </li>
        </ul>

        <hr className="my-4" />

        <h2 className="text-xl font-bold">TECHNICAL SKILLS</h2>
        <p>
          Programming Languages: Java, Javascript, Python, TypeScript, C,
          Kotlin, PHP <br />
          Frameworks: NextJs, NestJs, Express, TailwindCSS <br />
          Libraries: ReactJs, Ant Design, Mantine <br />
          Developer Tools: Git, VSCode, SQL Server Management Studio, Draw.io,
          Figma, Jira, Postman <br />
          Storage: PostgreSQL, MongoDB, Firebase
        </p>

        <hr className="my-4" />

        <h2 className="text-xl font-bold">EDUCATION</h2>
        <p>
          Caraga State University <br />
          Bachelor of Science in Computer Science <br />
          AUG 2018 - JULY 2023 | Agusan Del Norte, Philippines
        </p>
      </div>
    </div>
  );
}
