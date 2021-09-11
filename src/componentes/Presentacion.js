import React, { Fragment } from 'react';

const Presentacion = () => {
    return (
        <Fragment>
            <section class='text-center' >
            <img src={process.env.PUBLIC_URL + 'mia.jpeg'} className='w-75 h-25' alt=""/>
            </section>
        </Fragment>
    );
};

export default Presentacion;