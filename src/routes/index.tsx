import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Hello World" }],
  }),
  component: HelloWorld,
});

function HelloWorld() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <p className="text-2xl font-medium">Hello World</p>
    </div>
  );
}
