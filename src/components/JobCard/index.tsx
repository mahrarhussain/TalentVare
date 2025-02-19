import { TEAMS } from "../../assets/images";

const JobCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="text-sm text-gray-500 mb-2">Promoted</div>
      <div className="flex items-center mb-4">
        <img
          alt="Company logo"
          className="w-10 h-10 rounded-full mr-2"
          height="40"
          src={TEAMS}
          width="40"
        />
        <div>
          <div className="font-semibold">UI/UX Designer</div>
          <div className="text-sm text-gray-500">Teams</div>
        </div>
      </div>
      <div className="text-sm text-gray-500 mb-2">
        <i className="fas fa-map-marker-alt mr-1"></i>
        Seattle, USA (Remote)
      </div>
      <div className="text-sm text-gray-500 mb-4">
        <i className="fas fa-clock mr-1"></i>1 day ago | 22 applicants
      </div>
      <div className="flex items-center justify-between">
        <button className="primary-btn text-white py-2 px-2 rounded-lg w-65">
          Apply Now
        </button>
        <i className="far fa-bookmark text-gray-600 ml-2"></i>
      </div>
    </div>
  );
};

export default JobCard;
