import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StartRating({
    isRated,
    children,
    maxRating = 10,
    yourRating,
    onRateMovie,
}) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

   

    return (
        <div className="rating">
            <div className="rating-card">
                <div className="rating-score">
                    {isRated ? (
                        <p>
                            You rated with movie {yourRating}
                            <span> ⭐️</span>
                        </p>
                    ) : (
                        [...Array(maxRating)].map((_, index) => {
                            const currentRate = index + 1;
                            return (
                                <>
                                    <label className="star">
                                        <FaStar
                                            key={currentRate}
                                            onClick={() => setRating(hover)}
                                            size={20}
                                            color={
                                                currentRate <= (hover || rating)
                                                    ? "#fcc419"
                                                    : ""
                                            }
                                            onMouseEnter={() =>
                                                setHover(currentRate)
                                            }
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                </>
                            );
                        })
                    )}
                </div>
                <p>{hover ? hover : rating}</p>
            </div>
            {rating && (
                <button className="btn-add" onClick={() => onRateMovie(rating)}>
                    + Add to list
                </button>
            )}
        </div>
    );
}
