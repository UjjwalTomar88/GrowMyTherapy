type DividerProps = {
    borderColor: string;
    bg?: string;
    thickness?: number;
};

const Divider = ({ borderColor, bg = "#f3f0e8", thickness = 1 }: DividerProps) => {
    return (
        <div
            className="w-full px-[6vw] md:px-[5vw] lg:px-[4vw] py-8 sm:py-9 md:py-[5vw]"
            style={{ background: bg }}
        >
            <hr
                className="w-full md:shadow-md border-0"
                style={{ borderTop: `${thickness}px solid ${borderColor}` }}
            />
        </div>
    );
};

export default Divider;