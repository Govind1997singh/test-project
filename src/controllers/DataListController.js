import React, { useEffect, useState } from 'react';
import { fetchDataList } from '../model';
import DataListView from '../View/DataListView';
const DataListController = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataList(setData);
    }, []);

    return <DataListView data={data} />;
};

export default DataListController;
