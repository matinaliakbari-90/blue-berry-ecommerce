"use client";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function DisableDraftMode(){
    const environment = useDraftModeEnvironment();
    const router = useRouter();

    //   Only show the disable draft mode button when outside of Presentation Tool
    if (environment !== "live" && environment !== "unknown") {
        return null;
    }

    const handleClick = async () => {
        await fetch("/draftmode/disable");
        router.refresh();
    };

    return (
        <Button
            onClick={handleClick}
            className="fixed bottom-4 right-4 border-2 bg-gray-50 px-4 py-2 z-50 text-black hover:text-white hoverEffect"
        >
            Disable Draft Mode
        </Button>
    );
};