import { IconSearchOff } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="flex items-center flex-col justify-between p-5">
      <IconSearchOff size={120} stroke={1.2} className="flex-shrink-0 text-white" />
      <p>Not Found</p>
    </div>
  );
}
