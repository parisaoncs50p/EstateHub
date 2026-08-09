
import { useAuth } from "../context/useAuth";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImage from "../assets/images/hero2.png";

function VerifyCode() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [time, setTime] = useState(120);
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const verifyCode = (code = otp.join("")) => {
    if (code.length !== 6) return;

  setLoading(true);

  setTimeout(() => {
    console.log(code);

    login();

    navigate("/");
  }, 1200);
};

  const handleInput = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    const copy = [...otp];
    copy[index] = value;
    setOtp(copy);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (copy.every((item) => item !== "")) {
      setTimeout(() => {
        verifyCode(copy.join(""));
      }, 200);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const copy = [...otp];
        copy[index] = "";
        setOtp(copy);
      }
    }

    if (e.key === "ArrowLeft" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (e.key === "ArrowRight" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const value = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!value) return;

    const copy = Array(6).fill("");

    value.split("").forEach((item, i) => {
      copy[i] = item;
    });

    setOtp(copy);

    if (value.length === 6) {
      verifyCode(copy.join(""));
    } else {
      inputRefs.current[value.length]?.focus();
    }
  };

  const resendCode = () => {
    setOtp(Array(6).fill(""));
    setTime(120);

    inputRefs.current[0]?.focus();

    alert("کد تایید دوباره ارسال شد.");
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Card */}

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[64px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">

        {/* Header */}

        <div className="flex flex-col items-center px-10 pt-12">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500 shadow-xl">

            <Building2
              size={42}
              className="text-white"
            />

          </div>

          <h1 className="mt-6 text-4xl font-black text-white">
            تایید شماره
          </h1>

          <p className="mt-2 text-center text-slate-200">
            کد ۶ رقمی ارسال شده را وارد کنید
          </p>

        </div>

        {/* OTP */}

        <div
          dir="ltr"
          className="mt-10 flex justify-center gap-3 px-10"
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              dir="ltr"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              autoComplete="one-time-code"
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="h-16 w-16 rounded-2xl border border-white/20 bg-white/10 text-center text-2xl font-black text-white outline-none transition focus:border-amber-400"
            />
          ))}
        </div>

        {/* Timer */}

        <div className="mt-8 text-center">

          {time > 0 ? (
            <p className="text-white/80">
              ارسال مجدد تا

              {" "}

              {Math.floor(time / 60)}:

              {(time % 60)
                .toString()
                .padStart(2, "0")}
            </p>
          ) : (
            <button
              onClick={resendCode}
              className="font-bold text-amber-400 hover:text-amber-300"
            >
              ارسال مجدد کد
            </button>
          )}

        </div>

        {/* Button */}

        <div className="px-10 pb-10">

          <button
            onClick={() => verifyCode()}
            disabled={loading}
            className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-amber-500 text-lg font-black text-white transition hover:bg-amber-600 disabled:opacity-70"
          >
            <ShieldCheck size={20} />

            {loading
              ? "در حال تایید..."
              : "تایید"}
          </button>

        </div>

      </div>

    </section>
  );
}


export default VerifyCode;