"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Career() {
  const form = useRef();
  const [resumeUrl, setResumeUrl] = useState("");
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Upload file to Cloudinary
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "tekzura"); // ✅ Tumhara preset
    data.append("cloud_name", "dk5yx0nwj"); // ✅ Tumhara cloud name

    try {
      setLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dk5yx0nwj/raw/upload", // ✅ Changed auto -> raw
        {
          method: "POST",
          body: data,
        }
      );
      const uploaded = await res.json();

      if (uploaded.secure_url) {
        setResumeUrl(uploaded.secure_url);
        setPopup({
          show: true,
          type: "success",
          message: "✅ Resume uploaded successfully!",
        });
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      console.error("Cloudinary Upload Error:", err);
      setPopup({
        show: true,
        type: "error",
        message: "❌ Resume upload failed, try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  // Send Email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    if (!resumeUrl) {
      setPopup({
        show: true,
        type: "error",
        message: "⚠️ Please upload your resume before submitting.",
      });
      return;
    }

    // Clean old hidden input
    const oldInput = form.current.querySelector("input[name='user_resume_url']");
    if (oldInput) oldInput.remove();

    // Hidden input for resume
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "user_resume_url";
    hiddenInput.value = resumeUrl;
    form.current.appendChild(hiddenInput);

    // Hidden recipient (optional)
    const hiddenRecipientInput = document.createElement("input");
    hiddenRecipientInput.type = "hidden";
    hiddenRecipientInput.name = "to_email";
    hiddenRecipientInput.value = "yasirmalik2182@gmail.com"; // ✅ Tumhari email
    form.current.appendChild(hiddenRecipientInput);

    emailjs
      .sendForm(
        "service_x4nvcrj", // ✅ Tumhara service ID
        "template_5549p97", // ✅ Tumhara template ID
        form.current,
        "rh-z3wyi0InbrrTs0" // ✅ Tumhara public key
      )
      .then(
        () => {
          setPopup({
            show: true,
            type: "success",
            message: "🎉 Application submitted successfully!",
          });
          form.current.reset();
          setResumeUrl("");
        },
        (error) => {
          console.error("EmailJS Error:", error?.text || error);
          setPopup({
            show: true,
            type: "error",
            message: "❌ Something went wrong, please try again!",
          });
        }
      );
  };

  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/career.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#262a32]/70"></div>
        <h1 className="relative text-white text-3xl md:text-4xl font-bold">
          Home / Careers
        </h1>
      </div>

      {/* Form Section */}
      <div className="py-16 px-6 md:px-20 bg-[#d1d5dc]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#262a32]">Career</h2>
          <p className="text-[#262a32]/80 mt-2">
            Job Opening In IT Company. Apply Now!
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-3xl mx-auto bg-[#262a32] p-10 rounded-2xl shadow-xl space-y-6 text-white"
        >
          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-3 bg-transparent text-white placeholder-gray-300"
          />

          {/* Contact */}
          <input
            type="text"
            name="user_contact"
            placeholder="Contact Number"
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-3 bg-transparent text-white placeholder-gray-300"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-3 bg-transparent text-white placeholder-gray-300"
          />

          {/* Apply For */}
          <div>
            <p className="font-medium mb-2">Apply For Which Post?</p>
            <div className="flex flex-wrap gap-6">
              {[
                "Web Designer",
                "Web Developer",
                "Mobile App Designer",
                "Mobile App Developer",
                "Digital Marketer",
              ].map((role, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="user_post"
                    value={role}
                    required
                    className="text-[#d1d5dc] focus:ring-[#d1d5dc]"
                  />
                  {role}
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <input
            type="text"
            name="user_experience"
            placeholder="Years Of Experience"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 bg-transparent text-white placeholder-gray-300"
          />

          {/* Other Details */}
          <textarea
            name="user_details"
            placeholder="Other Details"
            rows={4}
            className="w-full border border-gray-400 rounded-lg px-4 py-3 bg-transparent text-white placeholder-gray-300"
          ></textarea>

          {/* Resume Upload */}
          <div>
            <p className="font-medium mb-2">Upload Your Resume (PDF Only)</p>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-transparent text-white file:bg-[#d1d5dc] file:text-[#262a32] file:font-semibold cursor-pointer"
            />
            {loading && (
              <p className="text-yellow-400 text-sm mt-2">⏳ Uploading...</p>
            )}
            {resumeUrl && (
              <div className="text-green-400 text-sm mt-2">
                ✅ Resume uploaded successfully!
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300 ml-2"
                >
                  Download
                </a>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#d1d5dc] text-[#262a32] px-6 py-3 rounded-lg font-semibold transition duration-200 hover:bg-gray-300"
          >
            Submit Application
          </button>
        </form>
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div
            className={`p-6 rounded-xl shadow-xl text-center w-80 ${
              popup.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <p className="text-lg font-semibold">{popup.message}</p>
            <button
              onClick={() => setPopup({ show: false, type: "", message: "" })}
              className="mt-4 bg-[#262a32] text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
