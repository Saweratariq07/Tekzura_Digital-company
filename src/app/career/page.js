"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roles = [
  "Web Designer",
  "Web Developer",
  "Mobile App Designer",
  "Mobile App Developer",
  "Digital Marketer",
];

const hiringSteps = [
  {
    title: "Apply",
    desc: "Share your resume, role, and experience so we can review your fit.",
  },
  {
    title: "Screen",
    desc: "We schedule a short call to understand your goals and availability.",
  },
  {
    title: "Interview",
    desc: "Meet the team and discuss how you can contribute to ongoing projects.",
  },
];

export default function Career() {
  const form = useRef();
  const [resumeUrl, setResumeUrl] = useState("");
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const isSuccess = popup.type === "success";

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
    <>
    <section className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden px-6 pt-28 pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#C63C8E]/14 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-[#A32EE7]/16 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#C854D6]/10 blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-size:44px_44px] [background-image:linear-gradient(to_right,#C63C8E_1px,transparent_1px),linear-gradient(to_bottom,#C63C8E_1px,transparent_1px)]" />

        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="inline-flex rounded-full border border-[#C63C8E]/30 bg-gradient-to-r from-[#C63C8E]/10 to-[#A32EE7]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D5D9DD]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35 }}
          >
            Careers
          </motion.h2>

          <motion.h1
            className="mt-6 text-4xl font-bold leading-tight text-[#D5D9DD] md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
          >
            Build Your Career
            <span className="block bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] bg-clip-text text-transparent">
              with Tekzura Digital
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A0A5A9] md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Join a team that ships modern products, supports growth, and builds
            long-term partnerships with global clients.
          </motion.p>
        </div>
      </div>

      {/* Application Section */}
      <div className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-[#C63C8E]/20 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#D5D9DD]">Open Roles</h3>
            <p className="mt-2 text-sm text-[#A0A5A9]">
              Choose the track that fits your skills. We review applications
              weekly.
            </p>

            <div className="mt-5 grid gap-3">
              {roles.map((role) => (
                <div
                  key={role}
                  className="flex items-center justify-between rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/60 px-4 py-3 text-sm text-[#D5D9DD]"
                >
                  <span>{role}</span>
                  <span className="text-xs uppercase tracking-widest text-[#A0A5A9]">
                    Hiring
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#C63C8E]/15 pt-6">
              <h4 className="text-lg font-semibold text-[#D5D9DD]">
                Hiring Process
              </h4>
              <div className="mt-4 grid gap-4">
                {hiringSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-xl border border-[#C63C8E]/15 bg-white/[0.02] p-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-[#A0A5A9]">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h5 className="mt-2 text-base font-semibold text-[#D5D9DD]">
                      {step.title}
                    </h5>
                    <p className="mt-1 text-sm text-[#A0A5A9]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#C63C8E]/20 bg-gradient-to-r from-[#C63C8E]/10 to-[#A32EE7]/10 p-5">
              <p className="text-sm text-[#D5D9DD]">
                Not seeing your role? Send your resume and we will keep it on
                file for upcoming openings.
              </p>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-[#C63C8E]/25 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#D5D9DD]">Apply Now</h3>
            <p className="mt-2 text-sm text-[#A0A5A9]">
              Complete the form below and upload your resume (PDF only).
            </p>

            <div className="mt-6 space-y-5">
              <label className="block text-sm font-medium text-[#D5D9DD]">
                Full Name
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                />
              </label>

              <label className="block text-sm font-medium text-[#D5D9DD]">
                Contact Number
                <input
                  type="text"
                  name="user_contact"
                  placeholder="Contact Number"
                  required
                  className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                />
              </label>

              <label className="block text-sm font-medium text-[#D5D9DD]">
                Email Address
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                />
              </label>

              <div>
                <p className="text-sm font-medium text-[#D5D9DD]">
                  Apply For Which Post?
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {roles.map((role) => (
                    <label
                      key={role}
                      className="flex items-center gap-3 rounded-lg border border-[#C63C8E]/20 bg-[#0f0f15]/60 px-3 py-2 text-sm text-[#D5D9DD]"
                    >
                      <input
                        type="radio"
                        name="user_post"
                        value={role}
                        required
                        className="accent-[#C63C8E]"
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </div>

              <label className="block text-sm font-medium text-[#D5D9DD]">
                Years Of Experience
                <input
                  type="text"
                  name="user_experience"
                  placeholder="Years Of Experience"
                  className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                />
              </label>

              <label className="block text-sm font-medium text-[#D5D9DD]">
                Other Details
                <textarea
                  name="user_details"
                  placeholder="Other Details"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-3 text-sm text-[#D5D9DD] outline-none transition focus:border-[#C63C8E]/60 focus:ring-2 focus:ring-[#C63C8E]/20"
                ></textarea>
              </label>

              <label className="block text-sm font-medium text-[#D5D9DD]">
                Upload Your Resume (PDF only)
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="mt-2 w-full rounded-xl border border-[#C63C8E]/20 bg-[#0f0f15]/80 px-4 py-2 text-sm text-[#D5D9DD] file:mr-4 file:rounded-lg file:border-0 file:bg-[#C63C8E]/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#D5D9DD]"
                />
                {loading && (
                  <p className="mt-2 text-xs text-[#f59e0b]">
                    Uploading resume...
                  </p>
                )}
                {resumeUrl && (
                  <p className="mt-2 text-xs text-[#10b981]">
                    Resume uploaded successfully.
                  </p>
                )}
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#C63C8E] via-[#A32EE7] to-[#C854D6] px-6 py-3 text-sm font-semibold text-white transition hover:shadow-[0_14px_28px_rgba(198,60,142,0.35)]"
            >
              Submit Application
            </button>
          </motion.form>
        </div>
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div
            className={`w-full max-w-sm rounded-2xl border px-6 py-6 text-center shadow-2xl ${
              isSuccess
                ? "border-[#10b981]/40 bg-[#0f1512] text-[#10b981]"
                : "border-[#ef4444]/40 bg-[#1a0f12] text-[#ef4444]"
            }`}
          >
            <p className="text-base font-semibold">{popup.message}</p>
            <button
              onClick={() => setPopup({ show: false, type: "", message: "" })}
              className="mt-4 rounded-lg border border-[#C63C8E]/40 bg-[#0f0f15] px-4 py-2 text-sm text-[#D5D9DD]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
    <Footer />
    </>
  );
}
