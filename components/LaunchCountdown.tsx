"use client";

import { useEffect, useState } from "react";

export default function LaunchCountdown() {
  const launchDate = new Date("August 9, 2026 13:00:00 UTC");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (distance / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (distance / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold text-green-400">
        🚀 NovaGaia Launch Countdown
      </h2>

      <p className="mt-3 text-gray-300">
        The future begins soon. Join the movement.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <div className="bg-black/40 border border-green-400/30 rounded-xl p-5">
          <h3 className="text-3xl font-bold">
            {timeLeft.days}
          </h3>
          <p>Days</p>
        </div>

        <div className="bg-black/40 border border-green-400/30 rounded-xl p-5">
          <h3 className="text-3xl font-bold">
            {timeLeft.hours}
          </h3>
          <p>Hours</p>
        </div>

        <div className="bg-black/40 border border-green-400/30 rounded-xl p-5">
          <h3 className="text-3xl font-bold">
            {timeLeft.minutes}
          </h3>
          <p>Minutes</p>
        </div>

        <div className="bg-black/40 border border-green-400/30 rounded-xl p-5">
          <h3 className="text-3xl font-bold">
            {timeLeft.seconds}
          </h3>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}