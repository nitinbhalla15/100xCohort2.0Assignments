function CardComponent(props) {
    return <div>
        {props.state.map((prop) => {
            return <div>
                <h3>{prop.name}</h3>
                <h5>{prop.about}</h5>
                <h3>Interests</h3>
                {prop.interest.map((intrst) => {
                    return <div>
                        {intrst}
                    </div>
                })}
                <button>Linked in</button>
                <button>Tritter</button>
            </div>
        })}

    </div>
}

export default CardComponent;