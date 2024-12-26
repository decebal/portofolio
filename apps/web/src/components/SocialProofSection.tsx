"use client";

import "./carousel/embla.css";
import type { EmblaOptionsType } from "embla-carousel";
import { EmblaCarousel } from "@/components/carousel/EmblaCarousel";
import { Highlight, Flex, Heading, Text, User } from "@/once-ui/components";
import React from "react";

const testimonials = [
  {
    name: "Daniel Vliegenthart",
    role: "Senior Data Engineer at Tellimer",
    avatar: "/images/proofs/daniel.svg",
    relationship: "April 3, 2023, Daniel worked with Decebal on the same team",
    description: (
      <p>
        Decebal excels at architecting software solutions with{" "}
        <Highlight>state-of-the-art technology and frameworks</Highlight>. I
        have benefitted greatly from working with him on projects, and have
        learnt a lot from his extensive technical knowledge.
      </p>
    ),
  },
  {
    name: "Selçuk Cihan",
    role: "Software Development Engineer at Tellimer",
    avatar: "/images/proofs/selcuk.svg",
    relationship: "December 13, 2022, Selcuk reported directly to Decebal",
    description: (
      <p>
        As a full-stack software engineer, Decebal brings a wealth of knowledge
        and experience in modern web development. He is a versatile and
        adaptable developer who is able to{" "}
        <Highlight>quickly learn and apply new technologies</Highlight> to solve
        complex problems. In addition, he is always{" "}
        <Highlight>
          eager to share his knowledge and help his colleagues grow
        </Highlight>{" "}
        in their roles. As a manager, Decebal is dedicated to fostering{" "}
        <Highlight>a positive and collaborative work environment</Highlight>
      </p>
    ),
  },
  {
    name: "Florin Georgescu",
    role: "QA Test Engineer at eMag",
    avatar: "/images/proofs/florin.svg",
    relationship:
      "February 22, 2019, Florin worked with Decebal on the same team",
    description: (
      <p>
        I have known Decebal Dobrica for almost 2 years in my capacity as a QA
        Tester at eMAG. He worked with me on various projects as a Full Stack
        Programmer and based on his work, I would{" "}
        <Highlight>
          rank him as one of the best developers we have ever had
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Ian Watt",
    role: "Co-founder and Head of Product at Tellimer",
    avatar: "/images/proofs/ian.svg",
    relationship: "December 16, 2022, Ian managed Decebal directly",
    description: (
      <p>
        Dez excels at mapping out a birds-eye view of a technical solution and
        then{" "}
        <Highlight>
          working with individual team members to flesh out that solution
        </Highlight>
        . With his simultaneous interests in best practices and cutting-edge
        technology, Dez always encouraged us to look for the best tool for each
        job. Accordingly, I'm confident Decebal will excel at any firm looking
        to bring{" "}
        <Highlight>experience, technical confidence, and stability</Highlight>{" "}
        to its engineering team.
      </p>
    ),
  },
  {
    name: "Brad Stephens",
    role: "Co-founder and Head of Product at Breakout Clips",
    avatar: "/images/proofs/brad.svg",
    relationship: "September 08, 2024, Brad managed Decebal directly",
    description: (
      <p>
        Working with Decebal has been a truly rewarding experience. He is one of
        the most <Highlight>dependable and reliable</Highlight> people I’ve had
        the pleasure of collaborating with, always delivering exceptional work,
        no matter how complex the challenge. His technical expertise is
        impressive, and his ability to navigate and solve problems quickly is a
        testament to his skill. What really sets Decebal apart, though, is how
        he{" "}
        <Highlight>consistently goes above and beyond for the team</Highlight>.
        He’s not just focused on getting the job done - he deeply cares about
        the success of the company and the people he works with, always offering
        support and guidance to ensure we’re{" "}
        <Highlight>all growing together.</Highlight> I feel fortunate to have
        worked with such a
        <Highlight>dedicated and thoughtful leader.</Highlight>
      </p>
    ),
  },
];

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

export const SocialProofSection = () => {
  const SLIDES = testimonials.map((testimonial, index) => (
    <Flex
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      key={index}
      direction="column"
      fillWidth
      maxWidth="s"
      gap="m"
    >
      <User
        name={testimonial.name}
        subline={testimonial.role}
        tagProps={{
          label: testimonial.relationship,
          variant: "brand",
        }}
        avatarProps={{
          empty: false,
          src: testimonial.avatar,
        }}
      />
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {testimonial.description}
      </Text>
    </Flex>
  ));

  return (
    <Flex fillWidth direction="column" paddingY="l" gap="m">
      <Flex direction="column" fillWidth maxWidth="s" gap="m">
        <Heading wrap="balance" variant="display-strong-s">
          What Others Say About Me
        </Heading>
      </Flex>
      <Flex direction="column" fillWidth maxWidth="s" gap="m">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Flex>
    </Flex>
  );
};
