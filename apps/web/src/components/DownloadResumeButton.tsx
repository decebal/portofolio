"use client";

import { Button } from "@/once-ui/components/Button";

export default function DownloadResumeButton() {
  return (
    <Button
      key="download-resume"
      onClick={() =>
        window.open("/resume/decebal-dobrica-resume.pdf", "_blank")
      }
      prefixIcon="download"
      label="Download Resume"
      size="s"
      variant="tertiary"
    />
  );
}
