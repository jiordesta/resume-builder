import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const CreateResumeBtn = () => {
    const navigate = useNavigate();

    const handleClick = (e: any) => {
      e.preventDefault();
      navigate("/create");
    };

    return (
      <button
        className="p-2 bg-lightGray bg-opacity-10 rounded-md drop-shadow-lg hover:bg-opacity-5 transition-all ease-in-out duration-300"
        onClick={handleClick}
      >
        Create Resume
      </button>
    );
  };

  return (
    <PageLayout id="homepage">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <h1>This is a free resume builder</h1>
        <CreateResumeBtn />
      </div>
    </PageLayout>
  );
}
