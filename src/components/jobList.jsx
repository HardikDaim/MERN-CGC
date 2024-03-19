import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function JobList() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [jobList, setJobList] = useState([]);
  const [jobsPosted, setJobsPosted] = useState(0);

  useEffect(() => {
    if (formData) {
      setJobList([...jobList, formData]); 
    }
  }, [formData]);

  useEffect(() => {
    setJobsPosted(jobList.length);
  }, [jobList]);
  

  return (
    <>
      <div className="bg-[#393285] p-2">
        <div className="flex items-center justify-between">
          <div>
            <img
              height="25px"
              width="25px"
              src="https://s3-alpha-sig.figma.com/img/02aa/cbce/8d3d4b9f72f47e199d6e8d096a898f7e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JGc715W2krulVkRtzy15fQITPzyR~LiI9Nh~knx3Rqun2D0JsawP3WqZFkF8JrnVmRJBi4Kb6VgIta-x05Dhpu9FKwCOKDk5WAw-W~8WVCAjSKVIH6K8UObPJNdIqlVEn6lWGnUcJqaM5DIahUcybtTUuQx4cg~vZ2BmQlxLYBDvsF84Q2VatffIxTlkGcopbkjwrdtX-5~x61RT--Gv97g9Mt-AsvcMHanK5qq3CJOz9DPtIiVkQjcTiegMW3KPqSNSrZdsLivkNUUIeK2NIlPoEVImQb3CxGxUKmBUm63pZ~9nFodYJaXL0hCRIJ0SFbWCJCHajpdnExAKvW4MJA__"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-x-6">
            <button className="text-white">Dashboard</button>
            <button className="text-white">Post Job</button>
            <button className="text-[#393285] bg-white rounded-lg  px-2 py-1">
              Your Profile {">"}
            </button>
            <div>
              <img
                height="30px"
                width="30px"
                className="rounded-2xl cursor-pointer"
                src="https://s3-alpha-sig.figma.com/img/7b36/94d1/8e40d769c6323dd74deb6ea7ed04a7f5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HgfOu9332n8eeIk6bJZtmD3GMypB6cQ2ad-u3mMVNNkV0sMKVfxTia6Ew9rx5bxYiBUpY9DPHT39JwM6pDdq8C-y~7NMkK-TIITOM3~LLJyWflvm272B8REX~2vppkKi0Hv6k~QJZQwtIYO-XYyFfXj967AJvUYUyOs-F7Yu9N4H55buGwK3qXFekE3I0jSuagjoAovjeSmw6FYZf8zLwP~hDjg~EMvfQdeyPWCVf-VCU2j2LcApHPBFxtQfQkR9rq-GagZry-8P7px75nJpoMD2NRa~z4urktq20x-Cir4gLHc-6KfvRSAVsyGwLic6JE2ofeotdJTLM6kvheZlUw__"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="flex flex-col gap-2 items-center ">
          <div className="rounded-2xl bg-[#DFDCF7] px-4 py-2 font-semibold lg:text-2xl">
         {jobsPosted}
          </div>
          <div className="lg:text-2xl font-semibold">Jobs Posted</div>
        </div>
        <div>
          {" "}
          <div className="flex flex-col gap-2 items-center ">
            <div className="rounded-2xl bg-[#DFDCF7] px-4 py-2 font-semibold lg:text-2xl">
         {jobsPosted}
            </div>
            <div className="lg:text-2xl font-semibold">Jobs Active</div>
          </div>
        </div>
        <div className="col-span-2 rounded-2xl bg-[#dfdcf7] px-4 py-2 mx-2 md:mx-0">
          <div className="grid grid-cols-2 gap-x-2 items-center">
            <div>
              <div className="font-semibold lg:text-2xl">
                Manage Job Posting
              </div>
              <div className="flex flex-row gap-4 items-center my-2">
                <div className="lg:text-md font-normal">{formData.name}</div>
                <div className="lg:text-md font-normal">
                  {formData.designation}
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <Link
                to="/"
                type="button"
                className="rounded-2xl bg-white px-4 py-2 font-semibold lg:text-2xl"
              >
                Post new Job
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="m-4">
          Sort by:{" "}
          <span className="bg-[#DFDCF7] rounded-2xl px-2 text-sm ">
            Posted Date {">"}
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-4 mx-4">
          {jobList.length > 0 ? (
            jobList.map((job, index) => (
              <div key={index} className="bg-[#DFDCF7] p-2 w-full rounded-lg">
                <div className="grid grid-cols-4 gap-x-2 items-center">
                  <div className="col-span-2">
                    <div className="text-xl text-[#393285]">{job.jobTitle}</div>
                    <div className="flex flex-row gap-y-4 gap-x-4 lg:gap-x-16 items-center my-2">
                      <div className="text-xs md:text-md lg:text-lg font-normal">
                        Posted on: {job.postedOn.toLocaleDateString()}
                      </div>
                      <div className="text-xs md:text-md lg:text-lg font-normal">
                        Expire on: {job.expiresOn.toLocaleDateString()}
                      </div>
                      <div className="text-xs md:text-md lg:text-lg font-normal">
                        Job Status: Active
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-xs md:text-lg">
                    <div>Status</div>
                    <div className="rounded-2xl px-1 md:px-2 md:py-1 bg-white md:text-lg">
                      Active{" "}
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <button className="rounded-2xl bg-white p-0 md:px-4 md:py-2 text-xs md:text-2xl">
                      Check Response
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-[#DFDCF7] p-2 w-full rounded-lg flex justify-center">
              <div className="text-[#393285]">No Job Posts yet!</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
