import 'bootstrap/dist/css/bootstrap.min.css';

const RobotList = (props) => {

    const { robots, setSelectedRobot } = props;

    if (robots.length === 0) {
        return <p>Loading robots...</p>;
    }

    return (
        <div className="list-container">
            <h5 className="mb-3">Robot List</h5>
            <div className="list-group scrollable-list">
                {robots.map((robot) => (

                    <div key={robot.id} className="car shadow-sm justify-content-between align-items-center" onClick={() => setSelectedRobot(robot)}>
                        {robot.visual_type === "img" ? (
                            <img
                                src={robot.visual_src}
                                alt={robot.name}
                                className="card-img-top"
                                style={{ objectFit: "cover", maxHeight: "200px", width: "auto" }}
                            />
                        ) : (

                            <object
                                type="video/mp4"
                                data={robot.visual_src}
                                width="auto"
                                maxHeight="200"></object>

                        )}
                        <div className="card-body text-center">
                            <h5 className="card-title">{robot.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default RobotList;