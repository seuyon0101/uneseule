function Service(props){
    return(
        <section style={{
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
        }}>
            <h1>{props.text}</h1>
            <img style = {{
                alignSelf:'flex-end'
            }}
             id="light-img" src="img/illustration/lights_img.png"  alt="lights"/>
        </section>
    );
}

export default Service;