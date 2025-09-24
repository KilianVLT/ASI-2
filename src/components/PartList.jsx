import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const PartList = (props) => {
    const { selectedRobot } = props;
    const [parts, setParts] = useState([]);

    useEffect(() => {
        if (selectedRobot) {
            fetch('https://robot-cpe-2024.cleverapps.io/parts')
                .then(response => response.json())
                .then(data => {
                    const robotParts = data.filter(part => selectedRobot.parts.includes(part.id));
                    setParts(robotParts)
                });
        }
    }, [selectedRobot]);


    if (selectedRobot === null || parts.length === 0) {
        return <p>Aucun élément</p>;
    }

    return (
        <div className="list-container">
            <h5 className="mb-3">Part List</h5>
            <div className="list-group scrollable-list">
                {parts.map((part) => (
                    <div
                        key={part.id}
                        className={`list-group-item d-flex flex-row align-items-center part-item part-${part.id}`}
                    >
                        {part.visual_type === "img" ? (
                            <img
                                src={part.visual_src}
                                alt={part.name}
                                className="card-img-top"
                                style={{ objectFit: "cover", maxHeight: "100px", width: "auto" }}
                            />
                        ) : (
                            <object
                                type="video/mp4"
                                data={part.visual_src}
                                width="auto"
                                maxHeight="200"></object>
                        )}
                        <div>
                            <p>{part.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PartList;