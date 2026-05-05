import { LoaderCircle } from "lucide-react";

export default function Spinner() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <LoaderCircle className="w-8 h-8 animate-spin" />
        </div>
    )
}
