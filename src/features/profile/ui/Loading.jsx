
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useTheme from "../../../context/useTheme";

export default function Loading({ index }) {

    const { darkMode } = useTheme();

    return (
        <Skeleton key={index} height={150} baseColor={darkMode ? "#1f2937" : "#ebebeb"}
            highlightColor={darkMode ? "#374151" : "#f5f5f5"} className="mb-4" />
    )
}