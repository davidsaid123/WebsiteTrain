import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TrainingVideo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [videoCompleted, setVideoCompleted] = useState(false);

    useEffect(() => {
        let player;

        const loadPlayer = () => {
            if (!window.YT) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                window.onYouTubeIframeAPIReady = createPlayer;
            } else {
                createPlayer();
            }
        };

        const createPlayer = () => {
            player = new window.YT.Player('youtube-player', {
                height: '315',
                width: '560',
                videoId: '2Xdd-guS0Sg',
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        };

        const onPlayerStateChange = (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
                setVideoCompleted(true);
            }
        };

        loadPlayer();

        return () => {
            if (player) {
                player.destroy();
            }
        };
    }, []); // Include loadPlayer in the dependency array

    const handleProceed = () => {
        if (!videoCompleted) {
            alert("Please finish watching the video to proceed to the quiz.");
        } else {
            navigate(`/quiz/${id}`);
        }
    };

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
            <div className="video-container">
                <div id="youtube-player"></div>
            </div>
            <button onClick={handleProceed} className="btn" style={{ marginTop: '20px' }}>Proceed to Quiz</button>
        </div>
    );
};

export default TrainingVideo;
