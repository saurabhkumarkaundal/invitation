"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Music, Pause } from "lucide-react";
import dynamic from "next/dynamic";
import useWindowSize from "react-use/lib/useWindowSize";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const djNightDate = new Date("2025-10-01T19:00:00");

function useCountdown(date) {
  const [timeLeft, setTimeLeft] = React.useState({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = date - now;
      const t = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      setTimeLeft(t);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return timeLeft;
}

export default function WeddingInvite() {
  const timeLeft = useCountdown(djNightDate);
  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  const [showConfetti, setShowConfetti] = React.useState(true);
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playing]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}
      <audio ref={audioRef} loop src="/romantic-song.mp3" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full text-center"
      >
        <Card className="bg-white/80 shadow-xl backdrop-blur-md rounded-2xl p-6">
          <CardContent>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-4xl font-bold mb-4 text-pink-600"
            >
              You're Invited!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg text-gray-700 mb-6"
            >
              Celebrate with Archana & Saurabh across three beautiful days:
              </motion.p>

            <div className="mb-4 text-left text-gray-800">
              <p><strong>🎶 DJ Night:</strong> October 1, 2025 – Let’s dance the night away!</p>
              <p><strong>💍 Wedding Day:</strong> October 2, 2025 – Join us for the wedding ceremony.</p>
              <p><strong>🏠 Vadhu Pravesh:</strong> October 3, 2025 – A beautiful new beginning.</p>
            </div>

            <div className="text-2xl font-semibold text-pink-700">
              {`${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${timeLeft.minutes || 0}m ${timeLeft.seconds || 0}s`}
            </div>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Button asChild variant="outline" className="text-pink-600 border-pink-400 hover:bg-pink-50">
                <a
                  href="https://www.google.com/search?q=R93F%2B5W4%2C+Kharian%2C+Himachal+Pradesh+176032&oq=R93F%2B5W4%2C+Kharian%2C+Himachal+Pradesh+176032&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBdIBBzc5MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" /> View Location
                </a>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setPlaying(!playing)}
                className="text-pink-600 border-pink-400 hover:bg-pink-50"
              >
                {playing ? <Pause className="w-5 h-5" /> : <Music className="w-5 h-5" />} {playing ? "Pause" : "Play Music"}
              </Button>
            </div>

            <div className="mt-8 text-left">
              <h2 className="text-xl font-semibold mb-2 text-pink-700">A Beautiful Beginning</h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-sm text-gray-600"
              >
                Brought together by destiny and blessed by our families, we are stepping into this new journey of togetherness. We look forward to celebrating this special day with you!
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
