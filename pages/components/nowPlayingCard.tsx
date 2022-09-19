import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLastFM } from "use-last-fm";
import FadeIn from "react-fade-in";
import Image from "next/image";

export const NowPlayingCard = () => {
    const lastFM = useLastFM(
        "vastid",
        "c5d606c551e059dedc6934f6991a33f3"!,
        50,
        "large"
    );

    if (["connecting", "error"].includes(lastFM.status)) return null;

    return (
        <FadeIn>
            <a
                href={
                    lastFM.status === "playing"
                        ? lastFM.song.url
                        : "https://spotify.com/"
                }
                rel="noopener noreferrer"
                target="_blank"
                className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row max-w-sm"
            >
                {/* can't dynamically change Image src (swapping between `string` and `StaticImageData`) */}
                {lastFM.status === "idle" && (
                    <Image
                        height={45}
                        width={45}
                        alt="Song cover art"
                        className="w-full h-full rounded shadow"
                        src={"/img/song.webp"}
                    />
                )}
                {lastFM.status === "playing" && (
                    <Image
                        height={45}
                        width={45}
                        alt="Song cover art"
                        className="w-full h-full rounded shadow"
                        src={lastFM.song.art}
                    />
                )}
                <div className="my-auto ml-4">
                    <div className="font-semibold text-sm sm:text-regular">
                        {lastFM.status === "playing"
                            ? `Listening to ${truncate(lastFM.song.name, 14)}`
                            : "Not listening to anything"}
                    </div>
                    <p className="text-xxs">
                        <FontAwesomeIcon
                            className="fill-current text-green-500"
                            icon={["fab", "spotify"]}
                        />{" "}
                        Spotify
                    </p>
                </div>
            </a>
        </FadeIn>
    );
};

function truncate(str: string, n: number) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
}
