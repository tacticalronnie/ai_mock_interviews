import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback on
            your answers.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={"/interview"}>Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="flex flex-col gap-4 interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              interviewId={interview.id}
              {...interview}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="flex flex-col gap-4 interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              interviewId={interview.id}
              {...interview}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
