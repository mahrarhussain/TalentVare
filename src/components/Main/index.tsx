import { PROFILE_BACKGROUND, PROFILE_ICON } from "../../assets/images";
import JobCard from "../JobCard";

const Main = () => {
  return (
    <main className="container mx-auto px-4 py-8 main-container">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="lg:w-1/4  p-4 rounded">
          <div className="profile-header bg-white">
            <img
              src={PROFILE_BACKGROUND}
              alt="Background"
              className="profile-background"
            />
            <img
              src={PROFILE_ICON}
              alt="User Profile"
              className="h-20 w-20 profile-picture"
            />
          </div>
          <div className="profile-info bg-white shadow p-3">
            <h2 className="text-xl font-bold pt-5">Albert Flores</h2>
            <p className="text-gray-600">
              Senior Product Designer | UI/UX Designer | Graphic Designer | Web
              Designer
            </p>
            <p className="text-gray-600">Glenon, Maryland</p>
          </div>
          <div className="mt-6 profile-stats shadow bg-white rounded-lg rounded">
            <div className="flex justify-between text-gray-600 pb-3 border-b border-[#e9ecef]">
              <span>Profile Visitors</span>
              <span className="text-blue-600">140</span>
            </div>
            <div className="flex justify-between text-gray-600 mt-2 pb-3 border-b border-[#e9ecef]">
              <span>Resume Viewers</span>
              <span className="text-blue-600">20</span>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <span>My Jobs</span>
              <span className="text-blue-600">88</span>
            </div>
          </div>
          <div className="mt-6 profile-calendar shadow bg-white rounded-lg rounded">
            <h3 className="text-gray-600">My calendar</h3>
            <p className="text-gray-600 mt-2">Upcoming Interviews</p>
          </div>
        </div>
        <div className="lg:w-3/4">
          <h1 className="text-2xl font-bold">
            Find your Dream Job, <span className="text-[#0154aa]">Albert!</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
          <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-white p-4 border-rounded">
            <input
              type="text"
              placeholder="Job Title, Company, or Keywords"
              className=" rounded px-4 py-2 w-full"
            />
            <select className="border-l-2 border-[#e9ecef] px-4 py-2 w-full md:w-auto">
              <option>Select Location</option>
            </select>
            <select className="border-l-2 border-[#e9ecef] px-4 py-2 w-full md:w-auto">
              <option>Job Type</option>
            </select>
            <button className="primary-btn text-white px-4 py-2 rounded w-full md:w-auto flex items-center gap-2">
              <i className="fas fa-search"></i>
              <span>Search</span>
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            <button className="rounded px-4 py-2 text-gray-600">
              Similar :
            </button>
            <button className="border rounded px-4 py-2 text-gray-600">
              Frontend
            </button>
            <button className="border rounded px-4 py-2 text-gray-600">
              Backend
            </button>
            <button className="border rounded px-4 py-2 text-gray-600">
              Graphic Designer
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold">
              Featured Jobs{" "}
              <a href="#" className="text-[#0154aa]">
                See Featured Jobs
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 max-h-[500px] overflow-y-auto">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map(() => {
                return <JobCard />;
              })}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">
              Recommended Jobs{" "}
              <a href="#" className="text-[#0154aa]">
                See Recommended Jobs
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 max-h-[500px] overflow-y-auto">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map(() => {
                return <JobCard />;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
