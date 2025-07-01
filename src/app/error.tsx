"use client";

import { useEffect } from "react";
import Container from "~/components/common/Container";
import Alert from "~/components/layout/error/Alert";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Alert
        size="lg"
        className="w-full max-w-full"
        details={error.message}
        variant="error"
      />
    </Container>
  );
}
