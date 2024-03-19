import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostJob() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    emailPhone: "",
    designation: "",
    jobLocation: "",
    jobTitle: "",
    workTimings: "",
    salary: "",
    numberOfCandidates: "",
    education: "",
    nextProcess: "",
    interviewLocation: "",
    companyLogo: "",
    jobDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      const postedOn = new Date();
      const expiresOn = new Date(postedOn);
      expiresOn.setMonth(postedOn.getMonth() + 2);
      const newJobData = { ...formData, postedOn, expiresOn };
      navigate("/jobList", { state: { formData: newJobData } });
    } else {
      console.log("Form contains errors:", formErrors);
      alert("Fill all inputs");
    }
  };

  const validateForm = (data) => {
    let errors = {};
    for (let key in data) {
      if (!data[key]) {
        errors[key] = "This field is required";
      }
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-xl text-[#323985] ">Fill Job Details</div>
              <button className="text-xl text-[#323985] ">
                Need Help? Contact Us
              </button>
            </div>
            <div className="bg-white rounded-2xl  shadow-2xl p-4 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-x-5 md:gap-x-20 gap-y-5">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name/Add."
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285] "
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285] "
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="emailPhone"
                    placeholder="Email & Phone Number"
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285] "
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="jobLocation"
                    placeholder="Job location"
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285] "
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title "
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="workTimings"
                    placeholder="Work timings "
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="salary"
                    placeholder="Salary "
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="numberOfCandidates"
                    placeholder="No. of Candidates "
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="education"
                    placeholder="Education "
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="nextProcess"
                    placeholder="Next process after applying for candidates(eg: direct joining, Interview process) "
                    className="rounded-2xl col-span-2 border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="interviewLocation"
                    placeholder="Interview Location with timings "
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285] "
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="companyLogo"
                    placeholder="Upload company logo "
                    className="rounded-2xl border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                  <textarea
                    type="text"
                    name="jobDescription"
                    rows={4}
                    placeholder="Job Description "
                    className="rounded-2xl col-span-2 resize-none border p-2 w-ful bg-[#DFDCF7] placeholder-[#393285]  focus:border-[#393285] focus:outline-none caret-[#393285]"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-end items-center">
                  <button
                    type="submit"
                    className="bg-[#393285] rounded-full m-4 text-white font-semibold px-6 py-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="logo"
              className="flex items-center justify-center"
              src="https://s3-alpha-sig.figma.com/img/610c/f1b3/e25afbca2f4f7752e2cede4453634938?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ln9UDNHVnzdoEYGMDmN-Rj4O5-rGMPg~KQ~b9aVYKbLT9borkPdfj9elzwYhbl4KJt2QwLA8mM6YlnfJXJatXuYV~R6hlG4mnJ7nmfUkYGrONaoPleoc5qrJffvFpqfph2aHdeTCNIgZ8WSIxShIYJHhHEQg1Ly9z1v~2kJwXxY6XCKK3~XUhfqE-unqL9sa2DzlD4p45arIXLeSrVVbGuos-CrkK2AipxQrpvnUDtCFOB9r3RLi4qSUg739lexo6dYKn7oN428pO3EwumgQl-0D6114SAe~nYJ~ZNdpFmgtOZ3shhLzCNIS~pTRv1-NyFaAMNmI1S0dtHiWtZsUmA__"
            />
          </div>
        </div>
      </div>
    </>
  );
}
