import { useState } from "react";

const useFlip = (initialFlipState=true) => {
    const [isFacingUp, setFlipped] = useState(initialFlipState);

    const flip = () => {
        setFlipped(isFacingUp => !isFacingUp);
    };
    return [isFacingUp, flip];
}

export default useFlip;