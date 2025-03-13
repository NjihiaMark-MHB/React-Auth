import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";
import { GoogleButton } from "@/components/google-button";

export const Route = createFileRoute("/style-guide")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex gap-3 flex-col content-center  flex-wrap justify-center min-h-screen">
      <h1>Welcome to React + TanStack</h1>
      <h2>This is a simple example of a React + TanStack app.</h2>
      <h3>You can find the source code for this example on</h3>
      <h4>Ok OK Ok</h4>
      <p>Afro house Mixes</p>
      <p className="body-small">Some minified text</p>
      <p className="text-amber-200">
        Edit src/routes/index.tsx and save to reload.
      </p>
      <div className="flex gap-4 mt-4 mb-4">
        <div className="w-[100px] h-[100px] bg-red-500"></div>
        <div className="w-[100px] h-[100px] bg-zinc-900"></div>
        <div className="w-[100px] h-[100px] bg-slate-500"></div>
        <div className="w-[100px] h-[100px] bg-slate-900"></div>
      </div>
      <div className="flex gap-4 mt-4 mb-4">
        <Button>Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
      <div className="flex flex-col gap-4 mt-4 mb-4">
        <GoogleButton onClick={() => {}} />
        <CustomInput
          label="Input"
          value="Some text"
          onChange={() => {}}
          placeholder="placeholder"
        />
      </div>
    </div>
  );
}
