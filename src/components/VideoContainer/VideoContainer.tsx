// import bg from "@/../public/bg-1.mp4"

const VideoContainer = () => {
    return (
        <div className="relative h-full w-full row-start-1 col-start-1 overflow-hidden"
            style={{ marginBottom: '-3px' }}
        >
            <video
                src="/bg-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-dark bg-opacity-40 pointer-events-none" />
        </div>
    );
}

export default VideoContainer;