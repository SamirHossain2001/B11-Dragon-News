import React from "react";

const Career = () => {
  return (
    <div className="w-11/12 mx-auto my-10 bg-base-200 p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4 text-secondary">
        Careers at Dragon News
      </h1>
      <p className="text-base-content leading-relaxed mb-4">
        At <strong>Dragon News</strong>, we believe that great journalism starts
        with passionate people. We’re always looking for talented individuals
        who are curious, committed, and collaborative.
      </p>

      <div className="bg-base-100 p-4 rounded-lg shadow mb-5">
        <h2 className="text-xl font-semibold mb-2 text-secondary">
          📰 Open Roles:
        </h2>
        <ul className="list-disc list-inside text-base-content space-y-1">
          <li>Frontend Developer (React + Tailwind)</li>
          <li>News Editor / Writer</li>
          <li>Digital Marketing Associate</li>
          <li>Content Manager</li>
        </ul>
      </div>

      <p className="text-base-content leading-relaxed mb-4">
        We offer a collaborative work environment, flexible hours, and
        opportunities to grow your career in the fast-paced world of digital
        media.
      </p>

      <p className="text-base-content">
        📧 Interested? Send your CV and portfolio to
        <a
          href="mailto:careers@dragonnews.com"
          className="text-secondary font-semibold ml-1">
          samir@gamil.com
        </a>
      </p>
    </div>
  );
};

export default Career;
