"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import useWindowSize from "react-use/lib/useWindowSize";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const firstEventDate = new Date("2025-10-01T20:00:00");

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
  const timeLeft = useCountdown(firstEventDate);
  const [showConfetti] = React.useState(true);
  const { width, height } = useWindowSize();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-3 sm:p-4"
      style={{ backgroundImage: "url('./image.png')" }}
    >
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl text-center"
      >
        <Card className="bg-white/80 shadow-xl backdrop-blur-md rounded-2xl p-4 sm:p-6">
          <CardContent>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-pink-600"
            >
              You're Invited!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-base sm:text-lg text-gray-700 mb-2"
            >
              Celebrate with{" "}
              <span className="font-semibold">Archana & Saurabh</span> across
              three beautiful days:
            </motion.p>

            {/* 1st Oct */}
            <div className="mb-4 text-left text-gray-800 text-sm sm:text-base space-y-2">
              <h3 className="text-lg font-bold text-pink-700 mb-2">
                📅 1st October 2025
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium">
                  💃 DJ Night & Mehndi – 8:00 PM
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-1 sm:mt-0 text-pink-600 border-pink-400 hover:bg-pink-50"
                >
                  <a
                    href="https://maps.app.goo.gl/apFpbEDY2K7n4t4C6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MapPin className="w-5 h-5" /> View Location
                  </a>
                </Button>
              </div>
            </div>

            {/* 2nd Oct */}
            <div className="mb-4 text-left text-gray-800 text-sm sm:text-base space-y-2">
              <h3 className="text-lg font-bold text-pink-700 mb-2">
                📅 2nd October 2025
              </h3>
              <p className="font-medium">🌼 Haldi – 11:00 AM</p>
              <p className="font-medium">🍽️ Lunch – 12:30 PM</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium">
                  🎉 Departure of Barat – 4:00 PM
                </p>
              </div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
  <span className="font-medium whitespace-nowrap">
    💍 Wedding Ceremony – 8:00 PM
  </span>
  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
    <div className="font-medium" style={{fontSize:"13px"}}>
      at (Vill. Garla Sarkar, Teh. Palampur Distt Kangra, H.P)
    </div>
    <Button
      asChild
      variant="outline"
      className="mt-1 sm:mt-0 text-pink-600 border-pink-400 hover:bg-pink-50"
    >
      <a
        href="https://maps.app.goo.gl/sofHmiwXwtX8r7aP9"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MapPin className="w-5 h-5" /> View Location
      </a>
    </Button>
  </div>
</div>

            </div>

            {/* 3rd Oct */}
            <div className="mb-2 text-left text-gray-800 text-sm sm:text-base space-y-2">
              <h3 className="text-lg font-bold text-pink-700 mb-2">
                📅 3rd October 2025
              </h3>
              <p className="font-medium">🏠 Vadhu Pravesh – 10:00 AM</p>
              <p className="font-medium">🍛 Dham – 1:00 PM</p>
            </div>

            {/* Countdown */}
            <div className="text-lg sm:text-2xl font-semibold text-pink-700 ">
              {`${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${
                timeLeft.minutes || 0
              }m ${timeLeft.seconds || 0}s`}
            </div>

            {/* Message */}
            <div className="text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-1 text-pink-700">
                A Beautiful Beginning
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-sm sm:text-base text-gray-600"
              >
                Brought together by destiny and blessed by our families, we are
                stepping into this new journey of togetherness. We look forward
                to celebrating this special day with you!
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
