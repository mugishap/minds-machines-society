import React, { useEffect, useRef } from 'react'
import { BsEnvelopeAtFill, BsHouseFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';

const Contact: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            new Map({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                view: new View({
                    center: fromLonLat([63.5676, 44.6661]),
                    zoom: 5,
                }),
            });
        }
    }, []);
    return (
        <Layout>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 font-bold text-lg'>
                <Link className='flex items-center my-2' to={`mailto:${"soroush.vosoughi@dartmouth.edu"}`}>
                    <BsEnvelopeAtFill size={20} />
                    <span className='ml-3'>soroush.vosoughi@dartmouth.edu</span>
                </Link>
                <Link className='flex items-center my-2' to={`#`}>
                    <BsHouseFill size={20} />
                    <span className='ml-3'>ECSC building, 15 Thayer Drive Hanover, NH 03755</span>
                </Link>
            </div>
            <div style={{ height: '70vh' }} className='my-6 rounded-3xl w-full'>
                <div ref={mapRef} style={{ width: '100%', height: '600px' }} />;
            </div>
        </Layout>
    )
}

export default Contact