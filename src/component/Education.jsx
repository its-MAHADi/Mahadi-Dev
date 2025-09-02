import nub from "../assets/NUB.jpeg";
// import SectionHeader from "../../../Components/SectionHeader";
const EducationalQualifications = () => {
  const qualifications = [
    {
      title: "B.Sc. in Computer Science & Engineering",
      institution: "Northern University Bangladesh | NUB ",
      department: "Computer Science & Engineering",
      year: "Expected Graduation: 2029",
      status: "Secound Semester",
      duration: "4 Years",
      relevantCoursework: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Management Systems",
        "Networking",
        "Software Engineering",
      ],
      image: nub,
    },
  ];

  return (
    <>
       <div className="text-center mb-8">
        <h1 id="educational" className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-1">
       Educational
        </h1>
      </div>
      <div className="max-w-6xl mx-auto md:p-6 rounded-3xl shadow-lg md:px-5 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between  p-5 border  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-full md:w-1/2">
            <img
              src={qualifications[0].image}
              alt={`${qualifications[0].title} Image`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-4 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              {qualifications[0].title}
            </h3>
            <p className="">
              <strong>Institution:</strong> {qualifications[0].institution}
            </p>
            <p className="">
              <strong>Department:</strong> {qualifications[0].department}
            </p>
            <p className=" ">
              <strong>Year:</strong> {qualifications[0].year} <br />
              <strong> Status:</strong>{" "}
              <span className="font-bold text-green-600">
                {qualifications[0].status}
              </span>
            </p>
            <p className="">
              <strong>Duration:</strong> {qualifications[0].duration}
            </p>
            <div className="mt-4">
              <strong>Relevant Coursework:</strong>
              <ul className="list-disc list-inside ">
                {qualifications[0].relevantCoursework.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationalQualifications;